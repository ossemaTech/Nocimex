<?php
/**
Plugin Name: Simple Filterable Portfolio
Plugin URI: https://bitbucket.org/devshuvo/simple-filterable-portfolio
Description: Simple Plugin for creating a filterable portfolio gallery with MixitUp and Magnify Popup
Author: Akhtarujjaman Shuvo
Author URI: https://profile.wordpress.org/mdshuvo
Tags: simple-portfolio, mixitup, maginify-popup, filterable-portfolio, filterable-gallery
Version: 2.0.0
Bitbucket Plugin URI: https://bitbucket.org/devshuvo/simple-filterable-portfolio
*/

// don't load directly
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

define( 'ASRSFP_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'ASRSFP_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'ASRSFP_PLUGIN_FILE', __FILE__ );

// Post Type Register
require_once( ASRSFP_PLUGIN_DIR.'inc/asrsfp-register-post-types.php' );

// Setting Page
require_once( ASRSFP_PLUGIN_DIR.'inc/asrsfp-settings-panel.php' );

// Add Thumbnail size
add_image_size( 'portfolio-thumb', '360', '270', true );


/**********************
 * Enqueue Scripts
 ********************/
function asrsfp_enqueue_scripts(){
	global $post;
	if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'asr-portfolio') ) {
		wp_enqueue_style( 'magnific-popup', ASRSFP_PLUGIN_DIR_URL.'assets/css/magnific-popup.min.css', '1.0' );
		wp_enqueue_style( 'asrsfp-stylesheet', ASRSFP_PLUGIN_DIR_URL.'assets/css/asrsfp-stylesheet.min.css', '1.0' );
		wp_enqueue_script( 'magnific-popup', ASRSFP_PLUGIN_DIR_URL.'assets/js/jquery.magnific-popup.min.js', array('jquery'),'1.0' );
		wp_enqueue_script( 'mixitup', ASRSFP_PLUGIN_DIR_URL.'assets/js/jquery.mixitup.js', array('jquery'),'1.0' );
		wp_enqueue_script( 'asrsfp-scripts', ASRSFP_PLUGIN_DIR_URL.'assets/js/scripts.js', array('jquery'),'1.0' );
	}
	wp_dequeue_script( 'bootstrap' );
}
add_filter( 'wp_enqueue_scripts', 'asrsfp_enqueue_scripts' );

//Creating Portfolio shortcode
if( !function_exists('asrsfp_shortcode_function') ){
	function asrsfp_shortcode_function( $atts ){ 
		ob_start();
		if( get_option('asrsfp_filter_val') == '1' ):
		?>
		<div class="row">
			<!-- Filters -->
			<?php if(!is_tax()) {
				$terms = get_terms("filters");
				$count = count($terms);
			if ( $count > 0 ): ?>
			<ul class="work-filter">
				<li class="filter" data-filter="all"><?php  _e('All', 'asrsfp'); ?></li>
				<?php foreach ( $terms as $term ) {
					echo '<li class="filter" data-filter=".'.$term->slug.'">'. $term->name .'</li>';
				} ?>
			</ul>
			<?php endif; } ?> <!--./Filters -->
		</div>
		<?php endif; ?>
		<div class="work-inner">
			<div class="row work-post">
				<?php
					$args = array(
						'post_type' => 'portfolio',
						'post_status' => 'publish',
						'posts_per_page' => -1
					);
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post();
					$title = get_post(get_post_thumbnail_id())->post_title; //The Title
					$caption = get_post(get_post_thumbnail_id())->post_excerpt; //The Caption
					$description = get_post(get_post_thumbnail_id())->post_content; // The Description
				?>
				<div <?php post_class('mix col-sm-4'); ?>>
					<div class="single-work">
						<?php the_post_thumbnail('portfolio-thumb', array( 'class' => 'img-responsive' )); ?>
						<?php if( get_option('asrsfp_click_val') == '0' ): ?>
						<a href="<?php echo get_the_post_thumbnail_url(); ?>" class="work-popup">
						<?php elseif( get_option('asrsfp_click_val') == '1' ): ?>
						<a href="<?php the_permalink(); ?>" class="work-link">
						<?php endif ?>
							<div class="work-details text-center">
								<div class="overlay">
									<div class="work-info-text">
										<h5><?php the_title(); ?></h5>
										<p><?php echo $caption; ?></p>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<?php endwhile; ?><!-- ./single portfolio -->
				<?php wp_reset_query(); ?>
			</div>
		</div>
		<?php
		return ob_get_clean();

	}
}
add_shortcode( 'asr-portfolio', 'asrsfp_shortcode_function' );
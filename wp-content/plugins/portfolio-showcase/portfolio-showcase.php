<?php
/*
Plugin Name: Portfolio Showcase
Plugin URI: http://wpeden.com/product/responsive-portfolio-manager/
Description: Generate Project/Portfolio Showcase just in a minute. <strong><a target=_blank href="http://wpeden.com/product/responsive-portfolio-manager/">Upgrade to pro for 15+ styles</a></strong>
Author: Shaon
Version: 1.1.0
Author URI: http://wpeden.com/
*/

define('PS_PLUGIN_URL',plugins_url('portfolio-showcase'));

require_once(dirname(__FILE__)."/modules/custombox/custombox.php");

function ps_plugin_init() {
    load_plugin_textdomain( 'portfolio-showcase', false, dirname( plugin_basename( __FILE__ ) )."/languages" );
}   

/* Create Post thumbnail */
function ps_post_thumb($size='', $echo = true, $extra = null){
    global $post;
    $size = $size ? $size : 'thumbnail';
    $class = isset($extra['class']) ? $extra['class'] : '';
   
    if(is_array($size))
    {
        $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');
        $large_image_url = $large_image_url[0];
        if($large_image_url!=''){
            $path = str_replace(site_url('/'), ABSPATH, $large_image_url);
            $crop = true; //!isset($extra['crop'])||$extra['crop']==true?true:false;
            $thumb = ps_dynamic_thumb($path, $size);
            $thumb = str_replace(ABSPATH, site_url('/'), $thumb, $crop);
            $alt = get_post_meta(get_post_thumbnail_id($post->ID), '_wp_attachment_image_alt', true);
            $img = "<img src='".$thumb."' alt='{$alt}' class='{$class}' />";
            if($echo) { echo $img; return; }
            else
            return $img;
        }
    }
    if($echo&&has_post_thumbnail($post->ID ))
    echo get_the_post_thumbnail($post->ID, $size, $extra );    
    else if(!$echo&&has_post_thumbnail($post->ID ))
    return get_the_post_thumbnail($post->ID, $size, $extra );  
    else if($echo)
    echo "";
    else
    return "";
}

//genrate thumbnail url
function ps_thumb_url($image, $size='', $echo = true, $extra = null){
    global $post;
    $size = $size?$size:'thumbnail';
    if(is_array($size))
    {        
        $large_image_url = $image;
        if($large_image_url!=''){
            $path = str_replace(site_url('/'), ABSPATH, $large_image_url);
            $thumb = ps_dynamic_thumb($path, $size);
            $thumb = str_replace(ABSPATH, site_url('/'), $thumb);
            return esc_url($thumb);
        }
    }
    
    return esc_url($image);
}

//generate cutom excerpt
function ps_post_excerpt($length){
    global $post;
    $uexcerpt = $post->post_excerpt?$post->post_excerpt:preg_replace("/\[([^\]]*)\]/","",$post->post_content);
    $uexcerpt = strip_tags($uexcerpt);
    $uexcerpt = esc_html($uexcerpt);
    $excerpt = substr($uexcerpt,0,$length);
    $eexcerpt = substr($uexcerpt,$length);
    $excerpt .= array_shift(explode(" ",$eexcerpt));
    echo $excerpt?$excerpt.'...':$excerpt;
}

function ps_dynamic_thumb($path, $size, $crop = true){
    $name_p = explode(".",$path);
    $ext = ".".end($name_p);
    $thumbpath = str_replace($ext, "-".implode("x", $size).$ext, $path);
    if(file_exists($thumbpath)) return $thumbpath;
    $image = wp_get_image_editor( $path );
    if ( ! is_wp_error( $image ) ) {
        $image->resize( $size[0], $size[1], $crop );
        $image->save( $thumbpath );
    }
    return $thumbpath;
}

function ps_register_portfolio() {

    $labels = array(
        'name' => _x('Portfolio', 'portfolio-showcase'),
        'singular_name' => _x('Portfolio', 'portfolio-showcase'),
        'add_new' => _x('Add New', 'portfolio-showcase'),
        'add_new_item' => __('Add New Portfolio', 'portfolio-showcase'),
        'edit_item' => __('Edit Portfolio', 'portfolio-showcase'),
        'new_item' => __('New Portfolio', 'portfolio-showcase'),
        'view_item' => __('View Portfolio', 'portfolio-showcase'),
        'search_items' => __('Search Portfolio', 'portfolio-showcase'),
        'not_found' =>  __('Nothing found', 'portfolio-showcase'),
        'not_found_in_trash' => __('Nothing found in Trash', 'portfolio-showcase'),
        'parent_item_colon' => ''
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'query_var' => true,
        'rewrite' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => null,
        'menu_icon' => 'dashicons-grid-view',
        'supports' => array( 'title', 'editor', 'thumbnail', 'comments','excerpt' ),
      );

    register_post_type( 'portfolio' , $args );

    $labels = array(
        'name' => __('Categories', 'portfolio-showcase'),
        'singular_name' => __('Category', 'portfolio-showcase'),
        'search_items' => __('Search Categories', 'portfolio-showcase'),
        'all_items' => __('All Categories', 'portfolio-showcase'),
        'parent_item' => __('Parent Category', 'portfolio-showcase'),
        'parent_item_colon' => __('Parent Category:', 'portfolio-showcase'),
        'edit_item' => __('Edit Category', 'portfolio-showcase'),
        'update_item' => __('Update Category', 'portfolio-showcase'),
        'add_new_item' => __('Add New Category', 'portfolio-showcase'),
        'new_item_name' => __('New Category Name', 'portfolio-showcase'),
        'menu_name' => __('Categories', 'portfolio-showcase'),
    );

    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'portfolio-category'),
    );

    register_taxonomy('portfoliocategory', array('portfolio'), $args);
    flush_rewrite_rules();
}

 
//Theme setup function 
function ps_setup(){
    ps_register_portfolio(); 
    add_post_type_support( 'potfolio', 'post-thumbnails' );     
    add_theme_support( 'excerpt', array('potfolio'));
 }

function ps_the_terms(){
    $terms = get_the_terms(get_the_ID(), "portfoliocategory");
    $html = "mix ";
    foreach($terms as $term){
        $html .= $term->slug." ";
    }
    echo $html;
}

function ps_show_items($params = array()){

    @extract($params);
    $items = isset($items) ? $items : 12;
    $width = isset($width) ? $width : 500;
    $height = isset($height) ? $height : 500;
    $ipr = isset($ipr) ? $ipr : 3;
    
    $terms = get_terms("portfoliocategory");
    $base = plugins_url("portfolio-showcase/js");
    $html =<<<TERMS
<script src="{$base}/jquery.mixitup.min.js"></script>
<style>
#pterms{
text-align:center;
margin-bottom:20px;
}
#pterms li{
margin-right:10px;
padding:7px 15px;
border:2px solid #eeeeee;
display:inline;
font-size:8pt;
text-transform:uppercase;
cursor:pointer;
font-family: 'Open Sans';
}
#pterms li.active{
font-weight:700;
border:2px solid #bbbbbb;
}
#grid .mix{
	display: none;
	opacity: 0;
}
#grid *{
font-family: 'Open Sans';
font-size:9pt;
}
#grid h2,
#grid h3{
font-family: 'Open Sans';
font-size: 11pt;
}
</style>
<ul id="pterms" class="controls"><li class="filter" data-filter="all" >All</li>

TERMS;

    foreach($terms as $term){
        $html .= "<li class=\"filter\" data-filter=\"{$term->slug}\">{$term->name}</li>";
    }

    $html .= "</ul>";
    echo $html;
        ?>
        <link rel="stylesheet" type="text/css" href="<?php echo PS_PLUGIN_URL;  ?>/css/style_common.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo PS_PLUGIN_URL;  ?>/css/style.css" />
        <style>.view { width: <?php echo (100-4)/$ipr; ?>%;} </style>    
        <div class="portfolio-container style<?php echo $style; ?>">
            <div id="grid" class="grid">
                <?php $folio_items = new WP_Query(array("post_type"=>'portfolio','posts_per_page'=>$items));
                while($folio_items->have_posts()): $folio_items->the_post(); ?>

                    <div class="view view-first  <?php ps_the_terms(); ?>">
                        <?php ps_post_thumb(array($width, $height)); ?>
                        <div class="mask">
                            <h2><?php the_title(); ?></h2>
                            <p><?php echo ps_post_excerpt(80); ?></p>
                            <a rel="colorbox" href="<?php the_permalink(); ?>" class="normal pm-popup iframe btn btn-bordered info">View Details &nbsp;&nbsp;+</a>
                        </div>
                    </div>
                
                <?php
                endwhile; 
                wp_reset_query(); 
                ?>
            </div>
        </div>
    <?php

echo <<<MIX
<script>
jQuery(function($){
$('#grid').mixitup();
});
</script>
MIX;
}

function ps_show_item(){
    if(is_single() && get_post_type()=='portfolio'){
        ?>
        <div id="portfolio-modal" style="padding: 10px">
        <?php ps_post_thumb(array(700,500), true, array('class'=>'img-rounded ml15'));?>
            <div class="media-body">
                <h3 style="padding: 10px 0px; text-align: center;text-transform: uppercase;"><?php the_title(); ?></h3>
                <?php the_content(); ?>
            </div>
        </div>
        <?php
     die();
    }
}
 
add_shortcode("wpeden_portfolio","ps_show_items");
add_action( 'init', 'ps_setup' );
add_action("wp", "ps_show_item");
add_action('plugins_loaded', 'ps_plugin_init');
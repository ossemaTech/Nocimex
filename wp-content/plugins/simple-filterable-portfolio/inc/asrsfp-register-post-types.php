<?php 
/* ----------------------------------------------------- */
/* Register Custom Post */
/* ----------------------------------------------------- */

add_action( 'init', 'register_asrsfp_portfolio' );

function register_asrsfp_portfolio() {
	$labels = array(
		'name' => __( 'Portfolio','asrsfp'),
		'singular_name' => __( 'Portfolio','asrsfp'),
		'add_new' => __( 'Add New','asrsfp' ),
		'add_new_item' => __( 'Add New Work','asrsfp' ),
		'edit_item' => __( 'Edit Work','asrsfp'),
		'new_item' => __( 'New Work','asrsfp'),
		'view_item' => __( 'View Work','asrsfp'),
		'search_items' => __( 'Search Portfolio','asrsfp'),
		'not_found' => __( 'No portfolio found','asrsfp'),
		'not_found_in_trash' => __( 'No works found in Trash','asrsfp'),
		'parent_item_colon' => __( 'Parent work:','asrsfp'),
		'menu_name' => __( 'Portfolio','asrsfp'),
	);
	$args = array(
		'labels' => $labels,
		'hierarchical' => false,
		'description' => 'Display your works by filters',
		'supports' => array( 'title', 'thumbnail', 'editor' ),
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'show_in_nav_menus' => false,
		'publicly_queryable' => true,
		'exclude_from_search' => false,
		'has_archive' => true,
		'query_var' => true,
		'can_export' => true,
		'rewrite' => true,
		'capability_type' => 'post'
	);
	register_post_type( 'portfolio', $args );
}

/* ----------------------------------------------------- */
/* Filter Taxonomy */
/* ----------------------------------------------------- */

add_action( 'init', 'asrsfp_register_taxonomy_filters' );

function asrsfp_register_taxonomy_filters() {
	$labels = array(
		'name' => __( 'Filters', 'asrsfp' ),
		'singular_name' => __( 'Filter', 'asrsfp' ),
		'search_items' => __( 'Search Filters', 'asrsfp' ),
		'popular_items' => __( 'Popular Filters', 'asrsfp' ),
		'all_items' => __( 'All Filters', 'asrsfp' ),
		'parent_item' => __( 'Parent Filter', 'asrsfp' ),
		'parent_item_colon' => __( 'Parent Filter:', 'asrsfp' ),
		'edit_item' => __( 'Edit Filter', 'asrsfp' ),
		'update_item' => __( 'Update Filter', 'asrsfp' ),
		'add_new_item' => __( 'Add New Filter', 'asrsfp' ),
		'new_item_name' => __( 'New Filter', 'asrsfp' ),
		'separate_items_with_commas' => __( 'Separate Filters with commas', 'asrsfp' ),
		'add_or_remove_items' => __( 'Add or remove Filters', 'asrsfp' ),
		'choose_from_most_used' => __( 'Choose from the most used Filters', 'asrsfp' ),
		'menu_name' => __( 'Filters', 'asrsfp' ),
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'show_in_nav_menus' => false,
		'show_ui' => true,
		'show_tagcloud' => false,
		'hierarchical' => true,
		'rewrite' => true,
		'query_var' => true
	);
	register_taxonomy( 'filters', array('portfolio'), $args );

}

/*
* Adds terms from a custom taxonomy to post_class
*/
add_filter( 'post_class', 'asrsfp_taxonomy_post_class', 10, 3 );

function asrsfp_taxonomy_post_class( $classes, $class, $ID ) {
	$taxonomy = 'filters';
	$terms = get_the_terms( (int) $ID, $taxonomy );
	if( !empty( $terms ) ) {
		foreach( (array) $terms as $order => $term ) {
			if( !in_array( $term->slug, $classes ) ) {
				$classes[] = $term->slug;
			}
		}
	}
	return $classes;
}

/*
 * Change the featured image metabox title text
 */
function asrsfp_rename_thumbnail_metabox() {
    remove_meta_box( 'postimagediv', 'portfolio', 'side' );
    add_meta_box('postimagediv', __('Add Portfolio Image', 'asrsfp'), 'post_thumbnail_meta_box', 'portfolio', 'side', 'low');
}
add_action( 'admin_head', 'asrsfp_rename_thumbnail_metabox' );

/*
 * Change the featured image metabox link text
 *
 * @param  string $content Featured image link text
 * @return string $content Featured image link text, filtered
 */
function asrsfp_change_featured_image_text( $content ) {
    if ( 'portfolio' === get_post_type() ) {
        $content = str_replace( 'Set featured image', __( 'Set portfolio image', 'asrsfp' ), $content );
        $content = str_replace( 'Remove featured image', __( 'Remove portfolio image', 'asrsfp' ), $content );
    }
    return $content;
}
add_filter( 'admin_post_thumbnail_html', 'asrsfp_change_featured_image_text' );
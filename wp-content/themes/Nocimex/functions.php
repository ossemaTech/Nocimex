<?php
/**
 * Twenty Seventeen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Nocimex
 * @since 1.0
 */


	include('wp-bootstrap-navwalker.php');

	//َAdd Featured Image Support
	add_theme_support('post-thumbnails');

    //this is function add link css
    function learn_add_styles() {
		wp_enqueue_style('bootstrap-css', get_template_directory_uri() .'/css/bootstrap.min.css');
		wp_enqueue_style('font', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
		wp_enqueue_style('bootstrap-ie8', 'https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie8.min.css');
		wp_style_add_data('bootstrap-ie8', 'conditional', 'lte IE 8');
		wp_enqueue_style('bootstrap-ie9', 'https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/css/bootstrap-ie9.min.css');
		wp_style_add_data('bootstrap-ie9', 'conditional', 'IE 9');
		wp_enqueue_style('customs-css', get_template_directory_uri() .'/css/customs.css');

	}

	function learn_add_scripts() {
		
		//Add Bootstrap and Jquiry Script File
		wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.slim.min.js', array(), false, true);
		wp_enqueue_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', array(), false, true);
		wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', array(), false, true);
		//Add Html5shiv For Old Browser
		wp_enqueue_script('html5shiv', 'https://cdn.jsdelivr.net/g/html5shiv@3.7.3');
		//Add Conditional Comment for Html5shiv
		wp_script_add_data('html5shiv', 'conditional', 'lte IE 8');
		//Add bootstrap-ie8 For Old Browser
		wp_enqueue_script('bootstrap-ie8', 'https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/js/bootstrap-ie8.min.js');
		//Add Conditional Comment for bootstrap-ie8
		wp_script_add_data('bootstrap-ie8', 'conditional', 'lte IE 8');
		//Add bootstrap-ie9 For Old Browser
		wp_enqueue_script('bootstrap-ie9', 'https://cdn.jsdelivr.net/gh/coliff/bootstrap-ie8/js/bootstrap-ie9.min.js');
		//Add Conditional Comment for bootstrap-ie9
		wp_script_add_data('bootstrap-ie9', 'conditional', 'IE 9');
		wp_enqueue_script('customs-js', get_template_directory_uri() . '/js/customs.js', array(), false, true);
	}

	/**
	 * Add Custom Menu Support
	 * Added By @Osema
	 */

	 function flower_register_custom_menu() {

		register_nav_menu('bootstrap-menu', ('Navigation Bar'));
	 }

	 /**
	  * Add Function Menu Header
	  * Added @osema
	  */

	  function flower_bootstrap_menu() {
	  	wp_nav_menu(array(
			  'theme_location' 	=> 'bootstrap-menu',
			  'menu_class' 		=> 'navbar-nav navbar-right',
			  'container' 		=> false,
			  'depth'			=> 2,
			  'walker'			=> new WP_Bootstrap_Navwalker()
		  ));
	  }


	/*
	* Add Actions
	* Added By @osema
	* add_action()
	*/

	add_action("wp_enqueue_scripts","learn_add_styles");
	add_action("wp_enqueue_scripts","learn_add_scripts");
	add_action('init', 'flower_register_custom_menu');
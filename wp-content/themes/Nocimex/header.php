<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 *
 * @package WordPress
 * @subpackage Nocimex
 * @since 1.0
 * @version 1.0
 */
?>

<!DOCTYPE html>
<head>
    <meta charset="<?php bloginfo('charset') ?>"/>
    <title><?php bloginfo('name'); ?></title>
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>
    <?php wp_head(); ?>
</head>
<body>
    <!--Start Section Header-->
    <header>
        <!--Start Section TopBar-->
        <div class="top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 contact-top phone">
                        <i class="fa fa-phone"></i>
                        <span> +216 52446832</span>
                    </div>
                    <div class="col-md-4 contact-top logo">
                        <img src="http://localhost/nocimex/wp-content/uploads/2019/11/Nocimex.png"/>
                    </div>
                    <div class="col-md-4 contact-top mail">
                        <i class="fa fa-envelope"></i>
                        <span> Flowers@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
        <!--End Section TopBar-->
        <!--Start Section NavBar-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <?php flower_bootstrap_menu(); ?>
            </div>
        </nav>
        <!--End Section NavBar-->
    </header>
    <!--End Section Header-->
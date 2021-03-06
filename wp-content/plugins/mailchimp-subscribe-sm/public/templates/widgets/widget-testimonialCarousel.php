<?php if ( ! defined( 'ABSPATH' ) ) exit; 
  $this_widget_testimonial = $thisWidget['widgetTCarousel'];
  $tCarOps = $this_widget_testimonial['tCarOps'];
  $tCarSlides = $this_widget_testimonial['tCarSlides'];
  $tDesignOps = $this_widget_testimonial['tDesignOps'];

  $iconHTML ='';
  if ($tDesignOps['tcis'] !='' && $tDesignOps['tcis'] != '0') {
    $iconHTML = '<i class="fa fa-quote-left" style="border:2px solid '.$tDesignOps['tcic'].'; padding:15px; font-size:'.$tDesignOps['tcis'].'px; color:'.$tDesignOps['tcic'].'; text-align:center; margin:5px 0 5px 0; border-radius:'.$tDesignOps['tcir'].'; "></i>';
  }

  if ($widgetPostsSliderExternalScripts == true) {
    $widget_postsSliderLibrary == ' ';
    $scriptLib = '';
  }else{
    $scriptLib =  "<script type='text/javascript' src='".SMFB_PLUGIN_URL."/public/scripts/owl-carousel/owl.carousel.js'></script> ";
  }
  $pbCarouselAllSlides = '';
  foreach ($tCarSlides as $index => $val) {

    $pbSliderPrevSlides = $pbCarouselAllSlides;

    if ($val['tci'] != '') {
      $imgHTMLCenter = '<img src='.$val['tci'].' style="width:'.$tDesignOps['tcisi'].'%;  border-radius:'.$tDesignOps['tcir'].';"    />';
      $imgArea = 'visible';
    } else{
      $imgHTMLCenter = '';
      $imgArea = 'none';
    }

    $authorName = '<p class="tesAName"> '.$val['tcn'].' </p>';
    $authorinfo =  '<p class="tesAJob" >'.$val['tcj'].'</p>';
    $testimonialText = '<p class="tesAComment">'.$val['tct'].'</p>';

    if ($val['tcl'] != '') {
      $authorinfo = '<a href='.$val['tcl'].' target="_blank">'.$authorinfo.'</a>';
    }

    if ($tDesignOps['tcca'] == 'center') {

      $testimonialCardHTML = '<div style="text-align:center; padding:3% 1% 3% 1%;"> '.$iconHTML.' <br> <br>   '.$imgHTMLCenter.' '.$testimonialText.' <b>'.$authorName.'</b> '.$authorinfo.'</div>';

    } else if ($tDesignOps['tcca'] == 'left'){

      $testimonialCardHTML = '<div style="padding:3% 1% 3% 1%; text-align:center;"> <div style="width:30%; display:inline-block; text-align:center; display:'.$imgArea.'; ">'.$imgHTMLCenter.' </div>   <div style="width:69%; display:inline-block; text-align:left;">'.$testimonialText.' <b>'.$authorName.'</b> '.$authorinfo.'</div> </div>';

    } else if ($tDesignOps['tcca'] == 'right'){

      $testimonialCardHTML = '<div style="padding:3% 1% 3% 1%; text-align:center;"> <div style="width:69%; display:inline-block; text-align:left; margin-left:2%; ">'.$testimonialText.' <b>'.$authorName.'</b> '.$authorinfo.' </div> <div style="width:28%; display:inline-block; text-align:center; display:'.$imgArea.'; ">'.$imgHTMLCenter.' </div>   </div>';

    } else{
      $testimonialCardHTML = '<div style="text-align:center; padding:3% 1% 3% 1%;"> '.$iconHTML.' <br> <br>   '.$imgHTMLCenter.' '.$testimonialText.' <b>'.$authorName.'</b> '.$authorinfo.'</div>';
    }

    $pbSliderThisSlide = "<div class='carouselSingleSlide'> ".$testimonialCardHTML." </div>";
    $pbCarouselAllSlides = $pbSliderPrevSlides . "\n".  $pbSliderThisSlide;

  }

  $pbTCarouselUniqueCode =  rand(10,99)*120+200;
  $pbTCarouselUniqueId = 'pb_testimonialCarousel_' .$pbTCarouselUniqueCode;
  $pbCarouselScript = "<script> (function($) {   $(document).ready(function(){ jQuery('#".$pbTCarouselUniqueId."').owlCarousel({items:".$tCarOps['tNSlides'].",   singleItem: false,  autoPlay : ".$tCarOps['tCarAutoplay'].",   stopOnHover : true,   navigation: ".$tCarOps['tCarNav']." ,    paginationSpeed : ".$tCarOps['tCarDelay']."00,   goToFirstSpeed : ".$tCarOps['tCarDelay']."00,    autoHeight : true,    slideSpeed : ".$tCarOps['tCarDelay']."000,   transitionStyle: '".$tCarOps['tCarSlideTransition']."',    pagination : ".$tCarOps['tCarPagination'].",   paginationNumbers: false,   navigationText : ['<span class=\"dashicons dashicons-arrow-left-alt2\" > </span>', '<span class=\"dashicons dashicons-arrow-right-alt2\" > </span>'], theme: 'pbOwl-theme', baseClass: 'pbOwl-carousel' ,  });  });  })(jQuery); </script>";

  $pbCarStyles = '<style>  '.
    '#'.$pbTCarouselUniqueId.' .tesAName { color:'.$tDesignOps['tcntc'].'; font-size:'.$tDesignOps['tcnts'].'px; font-family:'.str_replace('+', ' ', $tDesignOps['tcntf']).'; }'.
    '#'.$pbTCarouselUniqueId.' .tesAJob { color:'.$tDesignOps['tcntc'].'; font-size: calc(3 - '.$tDesignOps['tcnts'].'px); font-family:'.str_replace('+', ' ', $tDesignOps['tcntf']).'; }'.
    '#'.$pbTCarouselUniqueId.' .tesAComment { color:'.$tDesignOps['tcttc'].'; font-size:'.$tDesignOps['tctts'].'px ; font-family:'.str_replace('+', ' ', $tDesignOps['tcttf']).'; }'.
  '</style>';

  array_push($thisColFontsToLoad, $tDesignOps['tcntf']);
  array_push($thisColFontsToLoad, $tDesignOps['tcttf']);

  $thisWidgetResponsiveWidgetStylesTablet = ' '.
    '#'.$pbTCarouselUniqueId.' .tesAName { font-size:'.$tDesignOps['tcntst'].'px;  }'.
    '#'.$pbTCarouselUniqueId.' .tesAJob { font-size: calc(3 - '.$tDesignOps['tcntst'].'px);  }'.
    '#'.$pbTCarouselUniqueId.' .tesAComment {  font-size:'.$tDesignOps['tcttst'].'px ; }'.
    '#'.$pbTCarouselUniqueId.' .fa { font-size:'.$tDesignOps['tcist'].'px ; }';

  $thisWidgetResponsiveWidgetStylesMobile = ' '.
    '#'.$pbTCarouselUniqueId.' .tesAName { font-size:'.$tDesignOps['tcntsm'].'px;  }'.
    '#'.$pbTCarouselUniqueId.' .tesAJob { font-size: calc(3 - '.$tDesignOps['tcntsm'].'px);  }'.
    '#'.$pbTCarouselUniqueId.' .tesAComment {  font-size:'.$tDesignOps['tcttsm'].'px ; }'.
    '#'.$pbTCarouselUniqueId.' .fa { font-size:'.$tDesignOps['tcism'].'px ; }';


  array_push($POPBNallRowStylesResponsiveTablet, $thisWidgetResponsiveWidgetStylesTablet);
    
  array_push($POPBNallRowStylesResponsiveMobile, $thisWidgetResponsiveWidgetStylesMobile);

  $pbCarouselSlidesWrapper = $scriptLib.'<div  id='.$pbTCarouselUniqueId.' class="pbOwl-carousel">' .$pbCarouselAllSlides.'</div>'. "\n" . $pbCarStyles."\n". $pbCarouselScript ."\n";

  $widgetOwlLoadScripts = true;

  $widgetContent = $pbCarouselSlidesWrapper;
?>
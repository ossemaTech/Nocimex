<?php  if ( ! defined( 'ABSPATH' ) ) exit;

  $galleryWidget = $thisWidget['widgetIGallery'];
  $allGalleryitems = $galleryWidget['gallItems'];
  $allGalleryStyles = $galleryWidget['gallStyles'];

  $uniqueGallId = rand(10,99)*120+200;
  $gridScriptResponsive = '';

  $allGalleryitemsHTML = '';

  foreach ($allGalleryitems as $key => $value) {
  	$thisImage = ' 
	<div class="po-grid-item po-grid-item_'.$uniqueGallId.'">'.

      '<img src="'.$value['gur'].'" alt="'.$value['gti'].'" style="" >'.

    ' </div>';

    $allGalleryitemsHTML = $allGalleryitemsHTML . $thisImage;

  }

  $fullRenderedImageGallery = '<div id="pluginops_galery_'.$uniqueGallId.'" class="po-grid pluginops_galery_'.$uniqueGallId.' " >'.$allGalleryitemsHTML.'</div>';

  switch($allGalleryStyles['wgISD']) {
    case 'large':
      $defaultImgSize = 'width:100%;';
    break;
    case 'medium':
      $defaultImgSize = 'width:70%;';
    break;
    case 'small':
      $defaultImgSize = 'width:40%;';
    break;
    case 'custom':
      $defaultImgSize = 'custom';
    break;
  }
  if ($defaultImgSize == 'custom') {
    $defaultImgSize = 'width: '.$allGalleryStyles['wgICW'].'px ; height:'.$allGalleryStyles['wgICH'].'px; ';
  }

  if ($allGalleryStyles['wgGCG'] == '') {
    $allGalleryStyles['wgGCG'] = '0';
  }

  $pixels = $allGalleryStyles['wgGCG'];
  
  $wgGCG_percentage = '';
  if ($allGalleryStyles['wgType'] == 'grid') {
    
    $gridCSS = '<style>  .po-grid-item_'.$uniqueGallId.' img { '.$defaultImgSize.' } .po-grid-item_'.$uniqueGallId.' { display:inline-block; width: '.($allGalleryStyles['wgGC'] - $wgGCG_percentage ).'%; text-align:center; margin-top :'.($allGalleryStyles['wgGCG'] / 2).'px; margin-bottom:'.($allGalleryStyles['wgGCG'] / 2).'px; margin-left:'.($allGalleryStyles['wgGCG'] / 2).'px; margin-right:'.($allGalleryStyles['wgGCG'] / 2).'px;  }   </style>';
    $gridScript = "<script>
    	var screenWidth = window.screen.width;
  	   var wgGCG_percentage = ( screenWidth - ".$allGalleryStyles['wgGCG']." ) / screenWidth * 100 ;
  	   wgGCG_percentage =  100 - wgGCG_percentage; 

  	   jQuery('.po-grid-item_$uniqueGallId').css('width',".$allGalleryStyles['wgGC']." - wgGCG_percentage + '%');

  	   jQuery('.po-grid-item_$uniqueGallId').css({ 'margin-left' : (wgGCG_percentage / 2 ) +'%' , 'margin-right' : (wgGCG_percentage / 2 ) +'%' });

    </script>";
  }else{

  	if ($widgetMasonryLoadScripts != true) {
	  echo "<script src='".SMFB_PLUGIN_URL."/js/masonry.pkgd.min.js'></script>";
	}

  	$widgetMasonryLoadScripts = true;

    $gridCSS = '<style>  .po-grid-item_'.$uniqueGallId.' img { '.$defaultImgSize.' }  .po-grid-item_'.$uniqueGallId.' { width:'. ( floatval( $allGalleryStyles['wgGC']) - $wgGCG_percentage - 0.2) .'%; margin-top :'.($allGalleryStyles['wgGCG'] / 2).'px; margin-bottom:'.($allGalleryStyles['wgGCG'] / 2).'px; }  </style>';

    $gridScript = " <script> ".


      "var screenWidth = window.screen.width;
  	   var wgGCG_percentage = ( screenWidth - ".$allGalleryStyles['wgGCG']." ) / screenWidth * 100 ;
  	   wgGCG_percentage =  100 - wgGCG_percentage; 

  	   jQuery('.po-grid-item_$uniqueGallId').css({'margin-right': wgGCG_percentage - 0.2, 'margin-left': wgGCG_percentage - 0.2,  });



	   jQuery(' .pluginops_galery_".$uniqueGallId." ' ).imagesLoaded( function() {
	      jQuery(' .pluginops_galery_".$uniqueGallId." ').masonry({".
	        "itemSelector: '.po-grid-item_".$uniqueGallId."',".
	        "gutter: ".$allGalleryStyles['wgGCG'].",".
	      "});
	   });


      </script>";

  }


  $thisWidgetResponsiveWidgetScriptTablet = "
  	<script>

  		var screenWidth = window.screen.width;
  	    var wgGCG_percentage = ( screenWidth - ".$allGalleryStyles['wgGCG']." ) / screenWidth * 100 ;
  	    wgGCG_percentage =  100 - wgGCG_percentage; 
  		
  		wgGCGT_percentage = 0; wgGCGTGap = 0;
  	    if(wgGCG_percentage > 0 ){
  	    	wgGCGT_percentage =  5;
  	    	wgGCGTGap = 2;
  	    }
  	    
		if (jQuery(window).width() < 1024 && jQuery(window).width() > 765 ) {
		    $('.po-grid-item_$uniqueGallId').css('width', ".$allGalleryStyles['wgGCT']." - wgGCGT_percentage +'%' );

		    jQuery('.po-grid-item_$uniqueGallId').css({'margin-right': wgGCGTGap+'%', 'margin-left': wgGCGTGap+'%',  });
		}
  	</script>
  ";
  $thisWidgetResponsiveWidgetScriptMobile = "
  	<script>
  		var screenWidth = window.screen.width;
  	    var wgGCG_percentage = ( screenWidth - ".$allGalleryStyles['wgGCG']." ) / screenWidth * 100 ;
  	    wgGCG_percentage =  100 - wgGCG_percentage; 

  	    wgGCGM_percentage = 0; wgGCGMGap = 0;
  	    if(wgGCG_percentage > 0 ){
  	    	wgGCGM_percentage =  5;
  	    	wgGCGMGap = 2;
  	    }

		if (jQuery(window).width() < 480 && jQuery(window).width() > 320 ) {
		    $('.po-grid-item_$uniqueGallId').css('width', ".$allGalleryStyles['wgGCM']." - wgGCGM_percentage +'%' );

		    jQuery('.po-grid-item_$uniqueGallId').css({'margin-right': wgGCGMGap+'%', 'margin-left': wgGCGMGap+'%',  });
		}
  	</script>
  ";

    

  $widgetContent = $fullRenderedImageGallery . $gridCSS  . $gridScript . $thisWidgetResponsiveWidgetScriptTablet . $thisWidgetResponsiveWidgetScriptMobile;
  

?>
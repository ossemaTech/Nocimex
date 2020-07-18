<?php if ( ! defined( 'ABSPATH' ) ) exit;

$this_popup_unique_Id = '';
if (isset($isPopUpFullPageTemplate) || $selecteOptinType == 'Full Page') {
  if ($widgetSubscribeFormWidget != true) {
    echo "<script src='".SMFB_PLUGIN_URL."/js/cookie.js'></script>";
    $widgetSubscribeFormWidget = true;
  }

  $pageMaxWidth = '100';
  $pageMaxWidthU = 'vw';
  if ( isset( $data['pageOptions']['pageMaxWidth'] )) {
    if ($data['pageOptions']['pageMaxWidth'] != '' && $data['pageOptions']['pageMaxWidth'] != '0') {
      $pageMaxWidth = $data['pageOptions']['pageMaxWidth'];
      $pageMaxWidthU = $data['pageOptions']['pageMaxWidthU'];
    }
  }
  $pageMaxWidthT = '100';
  $pageMaxWidthUT = 'vw';
  if ( isset( $data['pageOptions']['pageMaxWidthT'] )) {
    if ($data['pageOptions']['pageMaxWidthT'] != '' && $data['pageOptions']['pageMaxWidthT'] != '0') {
      $pageMaxWidthT = $data['pageOptions']['pageMaxWidthT'];
      $pageMaxWidthUT = $data['pageOptions']['pageMaxWidthUT'];
    }
    
  }
  $pageMaxWidthM = '100';
  $pageMaxWidthUM = 'vw';
  if ( isset( $data['pageOptions']['pageMaxWidthM'] )) {
    if ($data['pageOptions']['pageMaxWidthM'] != '' && $data['pageOptions']['pageMaxWidthM'] != '0') {
      $pageMaxWidthM = $data['pageOptions']['pageMaxWidthM'];
      $pageMaxWidthUM = $data['pageOptions']['pageMaxWidthUM'];
    }
      
  }


  if(!empty($popupDisplayDelay)){
    echo "<script> var popUpDisplayActionType = 'delay'; </script>";
    $popupDisplayOnScroll = ''; $popupDisplayOnExit = ''; $popupDisplayOnClick = '';
  }else if(!empty($popupDisplayOnScroll)){
    echo "<script> var popUpDisplayActionType = 'onscroll'; </script>";
    $popupDisplayDelay = ''; $popupDisplayOnExit = ''; $popupDisplayOnClick = '';
  }
  else if(!empty($popupDisplayOnExit)){
    echo "<script> var popUpDisplayActionType = 'onexit'; </script>";
    $popupDisplayDelay = ''; $popupDisplayOnScroll = ''; $popupDisplayOnClick = '';
  }
  else if(!empty($popupDisplayOnClick)){
    echo "<script> var popUpDisplayActionType = 'onclick'; </script>";
    $popupDisplayDelay = ''; $popupDisplayOnScroll = ''; $popupDisplayOnExit = '';
  }else{
    echo "<script> var popUpDisplayActionType = 'delay'; </script>";
    $popupDisplayDelay = ''; $popupDisplayOnScroll = ''; $popupDisplayOnExit = ''; $popupDisplayOnClick = '';
  }

  if (!isset($isPopUpFullPageTemplate)) {
    $isPopUpFullPageTemplate = '';
  }

  if ($isPopUpFullPageTemplate == true || $selecteOptinType == 'Full Page') {
    $this_popup_unique_Id = 'popup_'.$current_pageID;

    if(isset($popupDisplayDelay)){
    }else{
      $popupDisplayDelay = '0';
    }

    ?>
    <style type="text/css">
      #popb_popup_close_<?php echo($this_popup_unique_Id); ?>:before {
        transform: rotate(45deg);
      }
      #popb_popup_close_<?php echo($this_popup_unique_Id); ?>:after {
        transform: rotate(-45deg);
      }
      #popb_popup_close_<?php echo($this_popup_unique_Id); ?>:after, #popb_popup_close_<?php echo($this_popup_unique_Id); ?>:before {
        background-color: #414141;
        content: '';
        position: absolute;
        left: 28px;
        height: 45px;
        top: 7px;
        width: 4px;
        border-radius: 10px;
      }

      #popb_popup_close_<?php echo($this_popup_unique_Id); ?> {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        cursor: pointer;
        position: absolute;
        top:5%;
        right:5%;
        z-index: 2;
        float: right;
        background-color: #fff;
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
      }

      .popb_popup_close:hover{
        background-color: #7a7a7a !important;
        transition: all .5s;
      }
      .popb_popup_close:hover::after, .popb_popup_close:hover::before {
        background-color: #fff !important;
        transition: all .5s;
      }

      #pluginops-modal-content_<?php echo($this_popup_unique_Id); ?>{
        width: 100%;  
      }

      
      @media screen and (max-width: 2920px) and (min-width: 1280px) {
        #POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?> {
          max-width: <?php echo $pageMaxWidth.$pageMaxWidthU; ?> !important;
        }
      }
      @media screen and (max-width: 1275px) and (min-width: 1024px)  {
        #POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?> {
          width: <?php echo $pageMaxWidthT.$pageMaxWidthUT; ?> !important;
          max-width: <?php echo $pageMaxWidthT.$pageMaxWidthUT; ?> !important;
        }
      }
      @media screen and (max-width: 1023px) and (min-width: 668px)  {
        #POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?> {
          width: <?php echo $pageMaxWidthT.$pageMaxWidthUT; ?> !important;
          max-width: <?php echo $pageMaxWidthT.$pageMaxWidthUT; ?> !important;
        }
      }
      @media screen and (max-width: 667px) and (min-width: 280px)  {
        #POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?> {
          max-width: <?php echo $pageMaxWidthM.$pageMaxWidthUM; ?> !important;
          width: <?php echo $pageMaxWidthM.$pageMaxWidthUM; ?> !important;
        }
      }

      @media screen and (max-width: 975px) and (min-width: 280px)  {
        
        #POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>{
          overflow: auto;
        }
      }


      <?php if (!empty($data['pageOptions']['pageBgImage'])) {
        ?>
        #POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>{
        background:url("<?php echo $data['pageOptions']['pageBgImage']; ?>")no-repeat center center; background-size:cover;
        }
        <?php
      } ?>

        <?php if (!empty($data['pageOptions']['pageBgColor'])){ ?>
          #POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>{
            background-color: <?php echo $data['pageOptions']['pageBgColor']; ?> ;
          }
        <?php } ?>


      #pluginops-modal-content_<?php echo($this_popup_unique_Id); ?> {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

    </style>

      <div class="pluginops-modal" id="POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>" style=" position: fixed; z-index: 9999; left: 0; right:0; top: 0; width: 100vw; max-width: 100vw;  height: 100%; overflow: none; display: none; overflow: auto; margin:0 auto;">
        <?php echo "<div id='fullPageBgOverlay_$current_pageID' style='height: 100%; top: 0; left: 0; width: 100%; position: absolute;'></div>";  ?>
        <div class="pluginops-modal-content" id="pluginops-modal-content_<?php echo($this_popup_unique_Id); ?>">
          <div class="popb_popup_close" id="popb_popup_close_<?php echo($this_popup_unique_Id); ?>" style="display:<?php echo $data['pageOptions']['hideCloseBtn']; ?>;" ></div>
          <script type="text/javascript">
              ( function( $ ) {

                if ($.cookie) {
                  var testUserSubscribed = $.cookie("pluginops_user_subscribed_form<?php echo $current_pageID; ?>");
                  var testPopUpClosed = $.cookie("pluginops_user_closed_form<?php echo $current_pageID; ?>");
                }else{
                  var testUserSubscribed = '';
                  var testPopUpClosed = '';
                }
                if (typeof(testUserSubscribed) == 'undefined') {
                  testUserSubscribed = '';
                }
                if (typeof(testPopUpClosed) == 'undefined') {
                  testPopUpClosed = '';
                }
                
                var <?php echo "popupClosed_$current_pageID"; ?> = 'false';
                <?php if (current_user_can('publish_pages')) {
                  echo "var testUserSubscribed = 'false'; ";
                  echo "var testPopUpClosed = 'false';";
                } 
                if ($hideAfterCampaignClosed !== 'true') {
                  echo "var testPopUpClosed = 'false'; ";
                }

                ?>
              
                
                if (testUserSubscribed == 'yes' || testPopUpClosed == 'yes') {
                  $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','none');
                  $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').hide('slow');
                }else{

                  if (popUpDisplayActionType == 'delay') {
                    setTimeout(function(){
                      $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').fadeIn('slow');
                      $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').addClass(' animated  <?php echo($popUpEntranceAnimation); ?>');
                      $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','block');
                    }, <?php echo $popupDisplayDelay.'000'; ?>);
                  }

                  if (popUpDisplayActionType == 'onscroll') {
                    $(window).on('scroll', function(){
                      var s = $(window).scrollTop(),
                          d = $(document).height(),
                          c = $(window).height();
                      var PoPb_scrollTopPercentage = (s / (d - c)) * 100;
                      var popUpOnScroll = parseInt(<?php echo $popupDisplayOnScroll; ?>);

                      if ( PoPb_scrollTopPercentage > popUpOnScroll && <?php echo "popupClosed_$current_pageID"; ?> != 'closed') {
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').fadeIn('slow');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','block');
                      }
                    });
                  }

                  if (popUpDisplayActionType == 'onexit') {
                    
                      addEvent(document, "mouseout", function(ev) {
                          ev = ev ? ev : window.event;
                          var from = ev.relatedTarget || ev.toElement;
                          if (!from || from.nodeName == "HTML") {
                            if ( <?php echo "popupClosed_$current_pageID"; ?> != 'closed') {
                              $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').addClass(' animated  <?php echo($popUpEntranceAnimation); ?>');
                              $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','block');
                            }
                          }
                      });
                  }

                  if (popUpDisplayActionType == 'onclick') {
                    var onclickElId = '<?php echo "$popupDisplayOnClick"; ?>';

                    if (onclickElId != '') {
                      $('#'+onclickElId).on('click', function(){
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').fadeIn('slow');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').addClass(' animated  <?php echo($popUpEntranceAnimation); ?>');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','block');
                      });
                      $('.'+onclickElId).on('click', function(){
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').fadeIn('slow');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').addClass(' animated  <?php echo($popUpEntranceAnimation); ?>');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','block');
                      });
                    }
                    
                  }
                }

              $(document).ready(function(){
                if (popUpDisplayActionType == 'onclick') {
                    var onclickElId = '<?php echo "$popupDisplayOnClick"; ?>';

                    if (onclickElId != '') {
                      $('#'+onclickElId).on('click', function(){
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').fadeIn('slow');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').addClass(' animated  <?php echo($popUpEntranceAnimation); ?>');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','block');
                      });
                      $('.'+onclickElId).on('click', function(){
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').fadeIn('slow');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').addClass(' animated  <?php echo($popUpEntranceAnimation); ?>');
                        $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','block');
                      });
                    }

                }
                $('#popb_popup_close_<?php echo($this_popup_unique_Id); ?>').on('click',function(){
                  $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').removeClass(' animated  <?php echo($popUpEntranceAnimation); ?>');
                  $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').addClass(' animated  <?php echo($popUpExitAnimation); ?>').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function(){
                      $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').removeClass(' animated  <?php echo($popUpExitAnimation); ?>');
                      $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').css('display','none');
                      $('#POPB-modal-overlay_<?php echo($this_popup_unique_Id); ?>').unbind('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd');
                    });
                  <?php echo "popupClosed_$current_pageID"; ?> = 'closed';

                  var cookieCloseTime = <?php echo "$cookieCloseTime"; ?>;
                  if (cookieCloseTime > 0) {
                    if ($.cookie) {
                      $.cookie("pluginops_user_closed_form<?php echo $current_pageID; ?>", 'yes', {path: '/', expires : cookieCloseTime/24 });
                    }
                  }
                    
                });
            });
            })(jQuery);
          </script>
    <?php
  }
}

?>
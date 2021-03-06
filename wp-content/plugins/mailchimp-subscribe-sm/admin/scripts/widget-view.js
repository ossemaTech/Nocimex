( function( $ ) {

const setUpdateObject = (obj, path, val) => { 
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) => 
        obj[key] = obj[key] || {}, 
        obj); 
    lastObj[lastKey] = val;
};

function mergeNonsetWidgetObjectKeys(source, target) {
    Object.keys(target).forEach(function (k) {
      if (typeof source[k] === 'undefined') {
        source[k] = target[k];
      }
    });
}



function renderFormBuilderFieldsList(formFieldsArray){
            if (typeof(formFieldsArray) == 'undefined' ) {
                return false;
            }

            $('.formFieldItemsContainer').html('');
            $.each(formFieldsArray,function(index, val){

                    fieldLabel = val["thisFieldOptions"]["fbFieldLabel"];
                    if (fieldLabel == '') {
                        fieldLabel = 'Field ';
                    }

                    fieldLabel  = fieldLabel.slice(0,30);

                    if (typeof( val["thisFieldOptions"]["fbFieldPreset"] ) == 'undefined' ) { val["thisFieldOptions"]["fbFieldPreset"] =  ''; }
                    if (typeof( val["thisFieldOptions"]["fbFieldName"] ) == 'undefined' ) { val["thisFieldOptions"]["fbFieldName"] =  ''; }

                    if (typeof( val["thisFieldOptions"]["fbTextContent"] ) == 'undefined' ) { val["thisFieldOptions"]["fbTextContent"] =  ''; }


                    jQuery('.formFieldItemsContainer').append('<li class="fieldNo-'+index+'">'+
                        '<h3 class="handleHeader">'+fieldLabel+'<span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> <span class="dashicons dashicons-admin-page slideDuplicateButton" style="float: right;" title="Duplicate"></span>  </h3>'+
                        '<div  class="accordContentHolder" style="background: #fff;"> '+
                            '<label>Type : </label>'+
                            '<select class="fbFieldType" data-optname="widgetPbFbFormFeilds.'+index+'.fbFieldType"> '+
                                '<option value="text">Text</option> '+
                                '<option value="tel">Tel</option> '+
                                '<option value="email">Email</option> '+
                                '<option value="number">Number</option> '+
                                '<option value="url">URL</option> '+
                                '<option value="date">Date</option> '+
                                '<option value="time">Time</option> '+
                                '<option value="textarea">Textarea</option> '+
                                '<option value="select">Select</option> '+
                                '<option value="radio">Radio</option> '+
                                '<option value="checkbox">Checkbox</option> '+
                                '<option value="hidden">Hidden</option> '+
                                '<option value="html">Text/HTML</option> '+
                            '</select> <br> <br> <hr> <br> '+
                            '<div class="thisFieldOptions"> '+
                                '<label> Label :</label> <input type="text" class="fbFieldLabel" value="'+val["thisFieldOptions"]["fbFieldLabel"]+'" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbFieldLabel" > <br> <br> <hr> <br> '+
                                '<label> Field Name :</label> <input type="text" class="fbFieldName" value="'+val["thisFieldOptions"]["fbFieldName"]+'" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbFieldName" > <br> <br> <hr> <br> '+
                                ' <label> Placeholder :</label> <input type="text" class="fbFieldPlaceHolder" value="'+val["thisFieldOptions"]["fbFieldPlaceHolder"]+'" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbFieldPlaceHolder" > <br> <br> <hr> <br> '+
                                ' <label> Required :</label> <select class="fbFieldRequired" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbFieldRequired" > <option value="false">No</option> <option value="true">Yes</option> </select> <br> <br> <hr> <br> '+
                                ' <label> Field Width :</label>'+
                                '<select class="fbFieldWidth" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbFieldWidth" >'+
                                    '<option value="100">Default</option> '+
                                    '<option value="20">20%</option> '+
                                    '<option value="25">25%</option> '+
                                    '<option value="33">33%</option> '+
                                    '<option value="40">40%</option> '+
                                    '<option value="50">50%</option> '+
                                    '<option value="60">60%</option> '+
                                    '<option value="66">66%</option> '+
                                    '<option value="75">75%</option> '+
                                    '<option value="80">80%</option> '+
                                    '<option value="100">100%</option> '+
                                '</select> <br> <br> <hr> <br> '+
                                ' <label> Preset Value :</label>  <input type="text" class="fbFieldPreset" value="'+val["thisFieldOptions"]["fbFieldPreset"]+'" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbFieldPreset" >   <br> <br> <hr> <br>  '+
                            '</div> <br> <br> '+
                            '<div class="textareaOptions pb_hidden"> '+
                                '<label>Textarea Rows: </label> <input type="number" class="fbtextareaRows" value="'+val["thisFieldOptions"]["fbtextareaRows"]+'" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbtextareaRows" > <br> <hr> <br> <br> '+
                            '</div>'+
                            '<div class="textHtmlFeildOptions pb_hidden"> '+
                                '<label>Enter Text or HTML :</label> '+
                                '<textarea class="fbTextContent" rows="6" value="'+val["thisFieldOptions"]["fbTextContent"]+'" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.fbTextContent" style="width:310px;" >'+val["thisFieldOptions"]["fbTextContent"]+'</textarea>'+
                                '<br><hr><br><br>'+
                            '</div>'+
                            '<div class="multiOptionField pb_hidden"> '+
                                '<label>Options: </label>'+
                                '<textarea class="multiOptionFieldValues" rows="5" value="'+val["thisFieldOptions"]["multiOptionFieldValues"]+'" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.multiOptionFieldValues" style="width:330px;" >'+val["thisFieldOptions"]["multiOptionFieldValues"]+'</textarea> <br> <span> Enter each option in separate line.</span> <br> <hr> <br> <br> '+
                                '<label>Display Inline :</label>'+
                                '<select class="displayFieldsInline" data-optname="widgetPbFbFormFeilds.'+index+'.thisFieldOptions.displayFieldsInline">'+
                                    '<option value="inline-block">Yes</option>'+
                                    '<option value="block">No</option> '+
                                '</select> <br> <hr> <br> <br> '+
                            '</div>'+
                        '</div> '+
                    '</li>');

                    $( '.formFieldItemsContainer' ).accordion( "refresh" );

                    $('.fieldNo-'+index).children('.accordContentHolder').children('.fbFieldType').val(val["fbFieldType"]);
                    $('.fieldNo-'+index).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldRequired').val(val["thisFieldOptions"]["fbFieldRequired"]);
                    $('.fieldNo-'+index).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldWidth').val(val["thisFieldOptions"]["fbFieldWidth"]);

                    $('.fieldNo-'+index).children('.accordContentHolder').children('.multiOptionField').children('.displayFieldsInline').val(val["thisFieldOptions"]["displayFieldsInline"]);

                    if (val["fbFieldType"] == 'textarea') {
                        $('.fieldNo-'+index).children('.accordContentHolder').children('.textareaOptions').removeClass('pb_hidden');
                    } else if(val["fbFieldType"] == 'select' || val["fbFieldType"] == 'checkbox' || val["fbFieldType"] == 'radio'){
                        $('.fieldNo-'+index).children('.accordContentHolder').children('.multiOptionField').removeClass('pb_hidden');
                    }

                    if (val["fbFieldType"] == 'html') {
                        $('.fieldNo-'+index).children('.accordContentHolder').children('.textHtmlFeildOptions').removeClass('pb_hidden');
                    }

            }); //loops end
}


pageBuilderApp.WidgetView = Backbone.View.extend({
  tagName: 'div',
  className: 'wdt-droppable',
  template: _.template($('#widget-template').html()),
  attributes: function() {
        if(this.model) {
            return {
                'data-widgetID': this.model.cid
            }
        }
        return {}
  },
  events: {
    'click #widgetDelete': 'deleteWidget',
    'click #widgetEdit': 'EditWidget',
    'click #widgetSave': 'updateWidget',
    'click #widgetDuplicate': 'duplicateWidget',
    'click #updateWidgetTemplate': 'updateWidgetTemplate',
    'click #pasteCopiedOptions': 'pasteCopiedOptions',
    'click #updateInlineTextChanges': 'updateInlineTextChanges',
  },
  initialize: function () {
    _.bindAll(this,'render','deleteWidget','EditWidget','updateWidget','duplicateWidget','updateWidgetTemplate','pasteCopiedOptions','updateInlineTextChanges' );
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON() )  );

    var widgetType = this.model.get('widgetType');
    var textb = "<br> To edit this widget click the edit button. <br><br> To change widget just drop any other widget here.";
    switch(widgetType){
        case 'wigt-WYSIWYG': textc = 'Text Widget';      var texta = 'fa-file-text-o'; break;
        case 'wigt-img': textc = 'Image Widget';      var texta = 'fa-picture-o'; break;
        case 'wigt-menu': textc = 'Menu Widget';     var texta = 'fa-picture-o'; break;
        case 'wigt-slider': textc = 'Slider Widget';   var texta = "Slider Extension"; break;
        case 'wigt-smuzform': textc = 'Form Builder Widget';     var texta = "Form Extension"; break;
        case 'wigt-btn-gen': textc = 'Button Widget';      var texta = 'fa-mouse-pointer'; break;
        case 'wigt-Sform': textc = 'Subscribe Form Widget';    var texta = "Subscribe Form Extension"; break;
        case 'wigt-PostSlider': textc = 'Posts Slider Widget';   var texta = "Posts Slider Extension"; break;
        case 'wigt-TestimonialSlider': textc = 'Testimonial Slider Widget';    var texta = "Testimonial Slider Extension"; break;
        case 'wigt-SocialFeed': textc = 'Social Stream Widget';   var texta = "Social Feed Extension"; break;
        case 'wigt-pb-form': textc = 'Subscribe Form Widget';      var texta = 'fa-envelope-o'; break;
        case 'wigt-video': textc = 'Video Widget';    var texta = 'fa-video-camera'; break;
        case 'wigt-pb-postSlider': textc = 'Posts Slider Widget';    var texta = 'fa-file-image-o'; break;
        case 'wigt-pb-icons': textc = 'Icon Widget';     var texta = 'fa-fonticons'; break;
        case 'wigt-pb-counter': textc = 'Number Counter Widget';   var texta = 'fa-sort-numeric-desc'; break;
        case 'wigt-pb-audio': textc = 'Audio Widget';     var texta = 'fa-file-audio-o'; break;
        case 'wigt-pb-cards': textc = 'Card Widget';     var texta = 'fa-fonticons'; break;
        case 'wigt-pb-testimonial': textc = 'Testimonial Widget';   var texta = 'fa-quote-left'; break;
        case 'wigt-pb-shortcode': textc = 'Shortcode Widget';     var texta = 'fa-code'; break;
        case 'wigt-pb-countdown': textc = 'Countdown Timer Widget';     var texta = 'fa-sort-numeric-desc'; break;
        case 'wigt-pb-imageSlider': textc = 'Image Slider Widget';     var texta = 'fa-file-image-o'; break;
        case 'wigt-pb-progressBar': textc = 'Progress Bar Widget';     var texta = 'fa-align-left'; break;
        case 'wigt-pb-pricing': textc = 'Pricing Widget';     var texta = 'fa-tags'; break;
        case 'wigt-pb-iconList': textc = 'Icon List';     var texta = 'fa-list'; break;
        case 'wigt-pb-break': textc = 'Break';     var texta = 'fa-ellipsis-h'; break;
        case 'wigt-pb-spacer': textc = 'Spacer';     var texta = 'fa-arrows-v'; break;
        case 'wigt-pb-formBuilder': textc = 'Form Builder';     var texta = 'fa-wpforms'; break;

        case 'wigt-pb-imgCarousel': textc = 'Image Carousel';     var texta = ' "> <i class="fa fa-image"></i><i class="fa fa-image"></i " '; break;

        case 'wigt-pb-wooCommerceProducts': textc = 'WooCommerce Products';     var texta = 'fa-shopping-cart'; break;
        case 'wigt-pb-text': textc = 'Text Widget';     var texta = 'fa-text-width'; break;
        case 'wigt-pb-liveText': textc = 'Text Widget';     var texta = 'fa-text-width'; break
        case 'wigt-pb-embededVideo': textc = 'Embed Video';     var texta = 'fa-youtube-play'; break;
        case 'wigt-pb-popupClose': textc = 'Button Close';     var texta = 'fa-remove'; break;
        case 'wigt-pb-testimonialCarousel': textc = 'Testimonial Carousel';     var texta = 'fa-quote-left'; break;
        case 'wigt-pb-poOptins': textc = 'PluginOps Optins';     var texta = 'fa-puzzle-piece'; break;
        case 'wigt-pb-navmenu': textc = 'Custom Navigation';     var texta = 'fa-puzzle-piece'; break;

        case 'wigt-pb-gallery': textc = 'Image Gallery';     var texta = 'fa-image'; break;


        default : textc = 'No Widget Selected';     var texta = 'Drag a widget or extension and drop it here to use it.'; var textb = " ";  break;
      }

    $(this.el).append('<p class="widget-area-'+this.model.cid+'" style="margin-top:-45px; font-size:14px;"> <i style="font-size:28px; color:#40AFF9;" class="fa '+texta+'"></i> <br>'+textc+' <br> '+textb+'</p> <div style=" display:none;margin-top:-3px; margin-right:5px; "  class="wdt-edit-controls"><div class="btn btn-red remove-widgets" id="widgetDelete" " ><span class="dashicons dashicons-trash"></span></div><div id="widgetEdit" class="btn editWidget-'+this.model.cid+'" "> <span class="dashicons dashicons-edit"></span></div><div id="widgetDuplicate" class="btn" "> <span class="dashicons dashicons-admin-page"></span></div>  <div id="updateWidgetTemplate" class="pb_hidden" data-thisWidgetCid="'+this.model.cid+'"  data-selected_widget_template=""></div>    <div id="pasteCopiedOptions" class="pb_hidden" data-thisWidgetCid="'+this.model.cid+'"  data-selected_widget_template=""></div> <div id="updateInlineTextChanges" class="pb_hidden" data-thisWidgetCid="'+this.model.cid+'"  data-selected_widget_template=""></div>  </div>  <input type="text" name="widget-type" class="bp_hidden" style="display:none"  data-widgetType-id="'+this.model.cid+'" value="'+widgetType+'">');

    $('.wdt-droppable').mouseover(function(ev){
        $(ev.target).children(' .wdt-edit-controls').css('display','block');
    });
    $('.wdt-droppable').mouseleave(function(ev){
        $('.wdt-edit-controls').css('display','none');
    });

    $(this.el).append('<div id="widgetSave" class="pb_hidden" data-saveCurrWidget="'+this.model.cid+'"></div>');
  },
  deleteWidget: function () {
        //console.log('deleteWidget triggered');
        this.model.destroy();
        $(this.el).remove();
        ColcurrentEditableRowID = jQuery('.ColcurrentEditableRowID').val();
        currentEditableColId = jQuery('.currentEditableColId').val();
        jQuery('section[rowid="'+ColcurrentEditableRowID+'"]').children('.ulpb_column_controls'+currentEditableColId).children('#editColumnSave').click();
        jQuery('#'+pageBuilderApp.currentlyEditedColId).children('.wdgt-colChange').click();
        $('.ulpb_column_controls').hide();
        $('.columnWidgetPopup').hide(300);
        $('.pageops_modal').hide(300);
        $('.edit_column').hide(300);
        $('.insertRowBlock').hide(300);
        //alert('deleted');
  },
  EditWidget: function () {
    $('.lpp_modal_2').show(300);
    var this_widget_type = $('input[data-widgetType-id="'+this.model.cid+'"]').val();

    thisWidgetIndex = pageBuilderApp.widgetList.indexOf(this.model);
    if (pageBuilderApp.currentlyEditedWidgId != thisWidgetIndex) {
      pageBuilderApp.currentlyEditedWidgId = thisWidgetIndex
    }
    
    $('.premWidgetNotice').css('display','none');
    //console.log( JSON.stringify(this.model.attributes ) );

    var widgetStyling = this.model.get('widgetStyling');
    var widgetMtop = this.model.get('widgetMtop');
    var widgetMbottom = this.model.get('widgetMbottom');
    var widgetMleft = this.model.get('widgetMleft');
    var widgetMright = this.model.get('widgetMright');
    var widgetPtop = this.model.get('widgetPtop');
    var widgetPbottom = this.model.get('widgetPbottom');
    var widgetPleft = this.model.get('widgetPleft');
    var widgetPright = this.model.get('widgetPright');
    var widgetBgColor = this.model.get('widgetBgColor');
    var widgetAnimation = this.model.get('widgetAnimation');
    var widgBgImg = this.model.get('widgBgImg');

    //setting values to empty fields
    $('.widgetStyling').val(widgetStyling);
    $('.widgetMtop').val(widgetMtop);
    $('.widgetMbottom').val(widgetMbottom);
    $('.widgetMleft').val(widgetMleft);
    $('.widgetMright').val(widgetMright);
    $('.widgetPtop').val(widgetPtop);
    $('.widgetPbottom').val(widgetPbottom);
    $('.widgetPleft').val(widgetPleft);
    $('.widgetPright').val(widgetPright);
    $('.widgetBgColor').val(this.model.get('widgetBgColor')); 
    $('.widgetAnimation').val(widgetAnimation); 
    $('.widgBgImg').val(widgBgImg);
    
    $('.widgetBorderWidth').val(this.model.get('widgetBorderWidth'));
    $('.widgetBorderStyle').val(this.model.get('widgetBorderStyle'));
    $('.widgetBorderColor').val(this.model.get('widgetBorderColor'));
    $('.widgetBorderRadius').val(this.model.get('widgetBorderRadius'));
    $('.widgetBoxShadowH').val(this.model.get('widgetBoxShadowH'));
    $('.widgetBoxShadowV').val(this.model.get('widgetBoxShadowV'));
    $('.widgetBoxShadowBlur').val(this.model.get('widgetBoxShadowBlur'));
    $('.widgetBoxShadowColor').val(this.model.get('widgetBoxShadowColor'));

    widgetborderRadius = this.model.get('borderRadius');
    widgetborderWidth = this.model.get('borderWidth');

    if (typeof(widgetborderRadius) != 'undefined' && widgetborderRadius != null) {
      $('.wbrt').val(widgetborderRadius['wbrt'] );
      $('.wbrb').val(widgetborderRadius['wbrb'] );
      $('.wbrl').val(widgetborderRadius['wbrl'] );
      $('.wbrr').val(widgetborderRadius['wbrr'] );
    }else{
      $('.wbrt').val( this.model.get('widgetBorderRadius') );
      $('.wbrb').val( this.model.get('widgetBorderRadius') );
      $('.wbrl').val( this.model.get('widgetBorderRadius') );
      $('.wbrr').val( this.model.get('widgetBorderRadius') );
    }
    if (typeof(widgetborderWidth) != 'undefined' && widgetborderWidth != null) {
      $('.wbwt').val(widgetborderWidth['wbwt'] );
      $('.wbwb').val(widgetborderWidth['wbwb'] );
      $('.wbwl').val(widgetborderWidth['wbwl'] );
      $('.wbwr').val(widgetborderWidth['wbwr'] );
    }else{
      $('.wbwt').val( this.model.get('widgetBorderWidth') );
      $('.wbwb').val( this.model.get('widgetBorderWidth') );
      $('.wbwl').val( this.model.get('widgetBorderWidth') );
      $('.wbwr').val( this.model.get('widgetBorderWidth') );
    }
    

    $('.widgetBgColor').spectrum( 'set', $('.widgetBgColor').val() );
    $('.widgetBorderColor').spectrum( 'set', $('.widgetBorderColor').val() );
    
    $('.widgetIsInline').val('');
    if (typeof(this.model.get('widgetIsInline')) !== 'undefined' ) {
        widgetIsInline = this.model.get('widgetIsInline');
        $('.widgetIsInline').val(widgetIsInline);
    }

    $('.widgetCustomClass').val('');
    if (typeof(this.model.get('widgetCustomClass')) !== 'undefined' ) {
        widgetCustomClass = this.model.get('widgetCustomClass');
        $('.widgetCustomClass').val(widgetCustomClass);
    }

    if (typeof(this.model.get('widgetIsInlineTablet')) !== 'undefined' ) {
        widgetIsInlineTablet = this.model.get('widgetIsInlineTablet');
        $('.widgetIsInlineTablet').val(widgetIsInlineTablet);

        widgetIsInlineMobile = this.model.get('widgetIsInlineMobile');
        $('.widgetIsInlineMobile').val(widgetIsInlineMobile);
    }

    if (typeof(this.model.get('widgHideOnDesktop')) !== 'undefined' ) {
        widgHideOnDesktop = this.model.get('widgHideOnDesktop');
        $('.widgHideOnDesktop').val(widgHideOnDesktop);

        widgHideOnTablet = this.model.get('widgHideOnTablet');
        $('.widgHideOnTablet').val(widgHideOnTablet);

        widgHideOnMobile = this.model.get('widgHideOnMobile');
        $('.widgHideOnMobile').val(widgHideOnMobile);
    }



    if (typeof(this.model.get('widgetPaddingTablet')) !== 'undefined' ) {
        widgetPaddingTablet = this.model.get('widgetPaddingTablet');
        widgetPaddingMobile = this.model.get('widgetPaddingMobile');
        widgetMarginTablet = this.model.get('widgetMarginTablet');
        widgetMarginMobile = this.model.get('widgetMarginMobile');

        $('.widgetMTopTablet').val(widgetMarginTablet['rMTT']);
        $('.widgetMBottomTablet').val(widgetMarginTablet['rMBT']);
        $('.widgetMLeftTablet').val(widgetMarginTablet['rMLT']);
        $('.widgetMRightTablet').val(widgetMarginTablet['rMRT']);

        $('.widgetPTopTablet').val(widgetPaddingTablet['rPTT']);
        $('.widgetPBottomTablet').val(widgetPaddingTablet['rPBT']);
        $('.widgetPLeftTablet').val(widgetPaddingTablet['rPLT']);
        $('.widgetPRightTablet').val(widgetPaddingTablet['rPRT']);


        $('.widgetMTopMobile').val(widgetMarginMobile['rMTM']);
        $('.widgetMBottomMobile').val(widgetMarginMobile['rMBM']);
        $('.widgetMLeftMobile').val(widgetMarginMobile['rMLM']);
        $('.widgetMRightMobile').val(widgetMarginMobile['rMRM']);

        $('.widgetPTopMobile').val(widgetPaddingMobile['rPTM']);
        $('.widgetPBottomMobile').val(widgetPaddingMobile['rPBM']);
        $('.widgetPLeftMobile').val(widgetPaddingMobile['rPLM']);
        $('.widgetPRightMobile').val(widgetPaddingMobile['rPRM']);

    } else{
        $('.widgetMTopTablet').val('');
        $('.widgetMBottomTablet').val('');
        $('.widgetMLeftTablet').val('');
        $('.widgetMRightTablet').val('');

        $('.widgetPTopTablet').val('');
        $('.widgetPBottomTablet').val('');
        $('.widgetPLeftTablet').val('');
        $('.widgetPRightTablet').val('');


        $('.widgetMTopMobile').val('');
        $('.widgetMBottomMobile').val('');
        $('.widgetMLeftMobile').val('');
        $('.widgetMRightMobile').val('');

        $('.widgetPTopMobile').val('');
        $('.widgetPBottomMobile').val('');
        $('.widgetPLeftMobile').val('');
        $('.widgetPRightMobile').val('');
    }



    if (typeof( this.model.get('widgGradient') ) !== "undefined"){
        var widgGradient = this.model.get('widgGradient');

        $.each(widgGradient, function(index,val){

          if (index == 'widgGradientColorFirst') {
            $('.widgGradientColorFirst').spectrum( 'set', val );
          }
          if (index == 'widgGradientColorSecond') {
            $('.widgGradientColorSecond').spectrum( 'set', val );
          }

          $('.'+index).val(val);

        });

        if (widgGradient['widgGradientType'] == 'linear') {
          $('.radialInput').css('display','none');
          $('.linearInput').css('display','block');
        } else if (widgGradient['widgGradientType'] == 'radial') {
          $('.radialInput').css('display','block');
          $('.linearInput').css('display','none');
        }

    }else{
        $('.widgGradientColorFirst').val('');
        $('.widgGradientLocationFirst').val('');
        $('.widgGradientColorSecond').val('');
        $('.widgGradientLocationSecond').val('');
        $('.widgGradientType').val('');
        $('.widgGradientPosition').val('');
        $('.widgGradientAngle').val('');
    }


    if (typeof(this.model.get('widgBackgroundType')) !== "undefined"){
        if (this.model.get('widgBackgroundType') == 'solid') {
          $(".popbInputNormalwidg .widgBackgroundTypeSolid").prop("checked", true);
          $('.popbInputNormalwidg .popbNavItem label').css({'background':'#f1f1f1', 'color':'#333'});
          $('.popbInputNormalwidg .widgBackgroundTypeSolid').prev('label').css({'background':'#a5a5a5', 'color':'#fff'});
          $('.popbInputNormalwidg .popb_tab_content').css('display','none');
          $('.widgNSrCon').css('display','block');
        }
        if (this.model.get('widgBackgroundType') == 'gradient') {
          $(".widgBackgroundTypeGradient").prop("checked", true);
          $('.popbInputNormalwidg .popbNavItem label').css({'background':'#f1f1f1', 'color':'#333'});
          $('.widgBackgroundTypeGradient').prev('label').css({'background':'#a5a5a5', 'color':'#fff'});
          $('.popbInputNormalwidg .popb_tab_content').css('display','none');
          $('.widgNGrCon').css('display','block');
        }
      }else{
          $(".popbInputNormalwidg .widgBackgroundTypeSolid").prop("checked", true);
          $(".widgBackgroundTypeGradient").prop("checked", false);
          $('.popbNavItem label').css({'background':'#f1f1f1', 'color':'#333'});
          $('.popbInputNormalwidg .widgBackgroundTypeSolid').prev('label').css({'background':'#a5a5a5', 'color':'#fff'});
          $('.popb_tab_content').css('display','none');
          $('.widgNSrCon').css('display','block');
      }

    if (typeof(this.model.get('widgHoverOptions')) !== "undefined") {
        var widgHoverOptions = this.model.get('widgHoverOptions');

        $('.widgBgColorHover').val(widgHoverOptions['widgBgColorHover']);
        $('.widgHoverTransitionDuration').val(widgHoverOptions['widgHoverTransitionDuration']);

        $('.widgBgColorHover').spectrum( 'set', $('.widgBgColorHover').val() );

        if (widgHoverOptions['widgBackgroundTypeHover'] == 'solid') {
          $(".widgBackgroundTypeSolidHover").prop("checked", true);
          $('.popbInputHoverwidg .popbNavItem label').css({'background':'#f1f1f1', 'color':'#333'});
          $('.widgBackgroundTypeSolidHover').prev('label').css({'background':'#a5a5a5', 'color':'#fff'});
          $('.popbInputHoverwidg .popb_tab_content').css('display','none');
          $('.popbInputHoverwidg .widgHSrCon').css('display','block');
        }
        if (widgHoverOptions['widgBackgroundTypeHover'] == 'gradient') {
          $(".widgBackgroundTypeGradientHover").prop("checked", true);
          $('.popbInputHoverwidg .popbNavItem label').css({'background':'#f1f1f1', 'color':'#333'});
          $('.widgBackgroundTypeGradientHover').prev('label').css({'background':'#a5a5a5', 'color':'#fff'});
          $('.popbInputHoverwidg .popb_tab_content').css('display','none');
          $('.popbInputHoverwidg .widgHGrCon').css('display','block');
        }

        var widgGradientHover = widgHoverOptions['widgGradientHover'];
        $.each(widgGradientHover, function(index,val){

          if (index == 'widgGradientColorFirstHover') {
            $('.widgGradientColorFirstHover').spectrum( 'set', val );
          }
          if (index == 'widgGradientColorSecondHover') {
            $('.widgGradientColorSecondHover').spectrum( 'set', val );
          }

          $('.'+index).val(val);

        });

        if (widgGradientHover['widgGradientTypeHover'] == 'linear') {
          $('.radialInputHover').css('display','none');
          $('.linearInputHover').css('display','block');
        } else if (widgGradientHover['widgGradientTypeHover'] == 'radial') {
          $('.radialInputHover').css('display','block');
          $('.linearInputHover').css('display','none');
        }

        if (typeof(widgHoverOptions['widgetHoverAnimation']) !== "undefined") {
          var widgetHoverAnimation = widgHoverOptions['widgetHoverAnimation'];
          $('.widgetHoverAnimation').val(widgetHoverAnimation);
        }else{
          $('.widgetHoverAnimation').val('');
        }

      }else{
        $('.widgGradientColorFirstHover').val('');
        $('.widgGradientLocationFirstHover').val('');
        $('.widgGradientColorSecondHover').val('');
        $('.widgGradientLocationSecondHover').val('');
        $('.widgGradientTypeHover').val('');
        $('.widgGradientPositionHover').val('');
        $('.widgGradientAngleHover').val('');
      }



    jQuery('.widgetblock').hide();

    jQuery('.widgetblock:contains("'+this_widget_type+'")').show();

    //$('#columnContent').val(this_column_content);
    $('.pbp-widgets').hide(50);

    switch (this_widget_type) { 
        case 'wigt-WYSIWYG':
            // WYISWYG Options
            var this_widget_editor_content = this.model.get('widgetWYSIWYG');
            var editorContent = this_widget_editor_content['widgetContent'];

            // Editor Widget Options
            var editorID = 'columnContent';
            if ($('#wp-'+editorID+'-wrap').hasClass("tmce-active"))
                tinyMCE.get(editorID).setContent(editorContent);
            else
              $('#'+editorID).val(editorContent);
          
          $('.wdt-editor').slideDown(500);
          break;
        case 'wigt-img':
            //Image widget Options
            var this_widget_img_content = this.model.get('widgetImg');
            var imgUrl  = this_widget_img_content['imgUrl'];
            var imgSize = this_widget_img_content['imgSize'];
            var imgAlignment = this_widget_img_content['imgAlignment'];
            var imgSizeCustomWidth = this_widget_img_content['imgSizeCustomWidth'];
            var imgSizeCustomHeight = this_widget_img_content['imgSizeCustomHeight'];
            var imgLightBox = this_widget_img_content['imgLightBox'];
            var imgLink = this_widget_img_content['imgLink'];

            $('.ftr-img').val(imgUrl);
            $('#ftr-img-size').val(imgSize);
            $('.imgAlignment').val(imgAlignment);
            $('.imgAlignmentTablet').val(this_widget_img_content['imgAlignmentTablet']);
            $('.imgAlignmentMobile').val(this_widget_img_content['imgAlignmentMobile']);
            $('.ftr-img').val(imgUrl);
            $('.imgSizeCustomWidth').val(imgSizeCustomWidth);
            $('.imgSizeCustomWidthTablet').val(this_widget_img_content['imgSizeCustomWidthTablet']);
            $('.imgSizeCustomWidthMobile').val(this_widget_img_content['imgSizeCustomWidthMobile']);
            $('.imgSizeCustomHeight').val(imgSizeCustomHeight);
            $('.imgSizeCustomHeightTablet').val(this_widget_img_content['imgSizeCustomHeightTablet']);
            $('.imgSizeCustomHeightMobile').val(this_widget_img_content['imgSizeCustomHeightMobile']);
            $('.imgLightBox').val(imgLightBox);
            $('.imgLink').val(imgLink);

            $('.iwbs').val(this_widget_img_content['iwbs']);
            $('.iwbc').val(this_widget_img_content['iwbc']);
            $(".iwbc").spectrum( 'set', $('.iwbc').val() );
            $('.iwbsh').val(this_widget_img_content['iwbsh']);
            $('.iwbsv').val(this_widget_img_content['iwbsv']);
            $('.iwbsb').val(this_widget_img_content['iwbsb']);
            $('.iwbsc').val(this_widget_img_content['iwbsc']);
            $(".iwbsc").spectrum( 'set', $('.iwbsc').val() );

            if (this_widget_img_content['iborderRadius'] != 'undefined' && this_widget_img_content['iborderRadius'] != null) {
              iborderRadius = this_widget_img_content['iborderRadius'];
              $('.iwbrt').val(iborderRadius['iwbrt'] );
              $('.iwbrb').val(iborderRadius['iwbrb'] );
              $('.iwbrl').val(iborderRadius['iwbrl'] );
              $('.iwbrr').val(iborderRadius['iwbrr'] );
            }else{
              $('.iwbrt').val( '' );
              $('.iwbrb').val( '' );
              $('.iwbrl').val( '' );
              $('.iwbrr').val( '' );
            }
            if (this_widget_img_content['iborderWidth'] != 'undefined' && this_widget_img_content['iborderWidth'] != null) {
              iborderWidth = this_widget_img_content['iborderWidth'];
              $('.iwbwt').val(iborderWidth['iwbwt'] );
              $('.iwbwb').val(iborderWidth['iwbwb'] );
              $('.iwbwl').val(iborderWidth['iwbwl'] );
              $('.iwbwr').val(iborderWidth['iwbwr'] );
            }else{
              $('.iwbwt').val( '' );
              $('.iwbwb').val( '' );
              $('.iwbwl').val( '' );
              $('.iwbwr').val( '' );
            }

            
            $('.wdt-img').slideDown(500);
        break;
        case 'wigt-menu':
            // Menu Widget
            var this_widget_menu_content = this.model.get('widgetMenu');
            var menuName = this_widget_menu_content['menuName'];
            var menuStyle = this_widget_menu_content['menuStyle'];
            var menuColor = this_widget_menu_content['menuColor'];

            if (typeof(this_widget_menu_content['pbMenuFontFamily']) != 'undefined') {
                pbMenuFontFamily = this_widget_menu_content['pbMenuFontFamily'];
            } else{
                pbMenuFontFamily = ' none';
            }

            if (typeof(this_widget_menu_content['pbMenuFontHoverColor']) != 'undefined') {
                pbMenuFontHoverColor = this_widget_menu_content['pbMenuFontHoverColor'];
            } else{
                pbMenuFontHoverColor = '';
            }
            if (typeof(this_widget_menu_content['pbMenuFontHoverBgColor']) != 'undefined') {
                pbMenuFontHoverBgColor = this_widget_menu_content['pbMenuFontHoverBgColor'];
            } else{
                pbMenuFontHoverBgColor = '';
            }
            if (typeof(this_widget_menu_content['pbMenuFontSize']) != 'undefined') {
                pbMenuFontSize = this_widget_menu_content['pbMenuFontSize'];
            } else{
                pbMenuFontSize = '';
            }

            $('#ftr-menu-select').val(menuName);
            $('input[value='+menuStyle+']').attr('checked','checked');
            $('#ftr-menu-color').val(menuColor);
            $('.pbMenuFontFamily').val(pbMenuFontFamily);
            $('.pbMenuFontHoverColor').val(pbMenuFontHoverColor);
            $('.pbMenuFontHoverBgColor').val(pbMenuFontHoverBgColor);
            $('.pbMenuFontSize').val(pbMenuFontSize);

            $('.pbMenuFontFamily').siblings('.font-select').children('a').children('.font_select_placeholder').html(pbMenuFontFamily.replace(/\+/g, ' '));
            $("#ftr-menu-color").spectrum( 'set', $('#ftr-menu-color').val() );

            $(".pbMenuFontHoverColor").spectrum( 'set', $('.pbMenuFontHoverColor').val() );
            $(".pbMenuFontHoverBgColor").spectrum( 'set', $('.pbMenuFontHoverBgColor').val() );

          
          $('.wdt-menu').slideDown(500);
          break;
        case 'wigt-btn-gen':
          $('.btnHoverTextColor').val('');
            var this_widget_btn = this.model.get('widgetButton');
            $('.btnButtonAlignmentTablet').val('');
            $('.btnButtonAlignmentMobile').val('');
            $('.btnCAction').val('');
            if (typeof(this_widget_btn['btnClickAction']) == 'undefined') {
                this_widget_btn['btnClickAction'] = 'openLink';
            }

            if ( this_widget_btn['btnClickAction'] == 'openPopUp' ) {
                $('.btnLinkOpsContainer').css('display','none');
                $('.openPopUpOpsContainer').css('display','block');
            }else{
                $('.btnLinkOpsContainer').css('display','block');
                $('.openPopUpOpsContainer').css('display','none');
            }
            $.each(this_widget_btn,function(index, val){

                if (index == 'btnTextColor') {
                    $('.btnColor').val(val);
                    $('.btnColor').spectrum( 'set', val );
                }
                if (index == 'btnBgColor') {
                    $('.btnBgColor').spectrum( 'set', val );
                }
                if (index == 'btnHoverBgColor') {
                    $('.btnHoverBgColor').spectrum( 'set', val );
                }
                if (index == 'btnHoverTextColor') {
                    $('.btnHoverTextColor').spectrum( 'set', val );
                }
                if (index == 'btnColor') {
                    $('.btnColor').spectrum( 'set', val );
                }
                if (index == 'btnBorderColor') {
                    $('.btnBorderColor').spectrum( 'set', val );
                }

                if (index == 'btnButtonFontFamily') {
                    if (val !== '') {
                        $('.btnButtonFontFamily').siblings('.font-select').children('a').children('.font_select_placeholder').html(val.replace(/\+/g, ' '));
                    }
                }

                if (index == 'btnSelectedIcon') {
                  $('.btnSelectedIconpbicp-auto').val(val);
                  $('.btnSelectedIcon').children().attr('class',val);
                }
                
                $('.'+index).val(val);

            });

          
          $('.wdt-btn-gen').slideDown(500);
          break;
          case 'wigt-pb-form':
            // Subscribe Form Widget
            var this_widget_subscribeForm = this.model.get('widgetSubscribeForm');
            var formLayout = this_widget_subscribeForm['formLayout'];
            var showNameField = this_widget_subscribeForm['showNameField'];
            var successAction = this_widget_subscribeForm['successAction'];
            var successURL = this_widget_subscribeForm['successURL'];
            var successMessage = this_widget_subscribeForm['successMessage'];

            var formBtnText = this_widget_subscribeForm['formBtnText'];
            var formBtnHeight = this_widget_subscribeForm['formBtnHeight'];
            var formBtnWidth = this_widget_subscribeForm['formBtnWidth'];
            var formBtnBgColor = this_widget_subscribeForm['formBtnBgColor'];
            var formBtnColor = this_widget_subscribeForm['formBtnColor'];
            var formBtnHoverBgColor = this_widget_subscribeForm['formBtnHoverBgColor'];
            var formBtnFontSize = this_widget_subscribeForm['formBtnFontSize'];
            var formBtnBorderWidth = this_widget_subscribeForm['formBtnBorderWidth'];
            var formBtnBorderColor = this_widget_subscribeForm['formBtnBorderColor'];
            var formBtnBorderRadius = this_widget_subscribeForm['formBtnBorderRadius'];

            if (this_widget_subscribeForm['formDataSaveType'] != 'undefined') {
                var formDataSaveType = this_widget_subscribeForm['formDataSaveType'];
            }
            if (this_widget_subscribeForm['formBtnHeightTablet'] != 'undefined') {
                $('.formBtnHeightTablet').val(this_widget_subscribeForm['formBtnHeightTablet']);
                $('.formBtnHeightMobile').val(this_widget_subscribeForm['formBtnHeightMobile']);
                $('.formBtnFontSizeTablet').val(this_widget_subscribeForm['formBtnFontSizeTablet']);
                $('.formBtnFontSizeMobile').val(this_widget_subscribeForm['formBtnFontSizeMobile']);
            }else{
                $('.formBtnHeightTablet').val('');
                $('.formBtnHeightMobile').val('');
                $('.formBtnFontSizeTablet').val('');
                $('.formBtnFontSizeMobile').val('');
            }
            formBtnFontFamily = 'select';
            if (typeof(this_widget_subscribeForm['formBtnFontFamily']) != 'undefined') {
                var formBtnFontFamily = this_widget_subscribeForm['formBtnFontFamily'];
            }

            formSuccessMessageColor = '#333';
            if (typeof(this_widget_subscribeForm['formSuccessMessageColor']) != 'undefined') {
                var formSuccessMessageColor = this_widget_subscribeForm['formSuccessMessageColor'];
            }
            formBtnHoverTextColor = '';
            if (typeof(this_widget_subscribeForm['formBtnHoverTextColor']) != 'undefined') {
                var formBtnHoverTextColor = this_widget_subscribeForm['formBtnHoverTextColor'];
            }

            if (this_widget_subscribeForm['formbtnSelectedIcon'] != 'undefined') {
              $('.formbtnIconPosition').val(this_widget_subscribeForm['formbtnIconPosition']);
              $('.formbtnIconGap').val(this_widget_subscribeForm['formbtnIconGap']);
              $('.formbtnIconAnimation').val(this_widget_subscribeForm['formbtnIconAnimation']);

              $('.formbtnSelectedIconpbicp-auto').val(this_widget_subscribeForm['formbtnSelectedIcon']);
              $('.formbtnSelectedIcon').children().attr('class',this_widget_subscribeForm['formbtnSelectedIcon']);
            }else{
              $('.formbtnSelectedIcon').val('');
              $('.formbtnIconPosition').val('');
              $('.formbtnIconGap').val('');
              $('.formbtnIconAnimation').val('');
              $('.formbtnSelectedIcon').children().attr('class','');
            }

            var formAccountName = $('.mailchimpListIdHolder').val();
            var formApiKey = $('.mailchimpApiKeyHolder').val();

            formDataMailChimpApi = $('.mailchimpApiKeyHolder').val();
            formDataMailChimpListId = $('.mailchimpListIdHolder').val();
            if (typeof(this_widget_subscribeForm['formDataMailChimpApi']) != 'undefined') {
                var formDataMailChimpApi = this_widget_subscribeForm['formDataMailChimpApi'];
                var formDataMailChimpListId = this_widget_subscribeForm['formDataMailChimpListId'];
            }

            if (typeof(this_widget_subscribeForm['isMcActive']) != 'undefined') {
              $('.isMcActive').val(this_widget_subscribeForm['isMcActive']);
            }

            var formIntegrations = '';
            if (typeof(this_widget_subscribeForm['formIntegrations']) != 'undefined' ) {
              formIntegrations = this_widget_subscribeForm['formIntegrations'];
              $.each(formIntegrations['getResponse'], function(index,val){
                $('.'+index).val(val);
              });
              $.each(formIntegrations['campaignMonitor'], function(index,val){
                $('.'+index).val(val);
              });

              $.each(formIntegrations['activeCampaign'], function(index,val){
                $('.'+index).val(val);
              });

              if (typeof(formIntegrations['drip']) != 'undefined') {
                $.each(formIntegrations['drip'], function(index,val){
                  $('.'+index).val(val);
                });
              }

            }


            //  Subs Form
            $('.formLayout').val(formLayout);
            $('.showNameField').val(showNameField);
            $('.successAction').val(successAction);
            $('.successURL').val(successURL);
            $('.successMessage').val(successMessage);
            $('.formBtnText').val(formBtnText);
            $('.formBtnHeight').val(formBtnHeight);
            $('.formBtnWidth').val(formBtnWidth);
            $('.formBtnBgColor').val(formBtnBgColor);
            $('.formBtnHoverTextColor').val(formBtnHoverTextColor);
            $('.formBtnColor').val(formBtnColor);
            $('.formBtnHoverBgColor').val(formBtnHoverBgColor);
            $('.formBtnFontSize').val(formBtnFontSize);
            $('.formBtnBorderWidth').val(formBtnBorderWidth);
            $('.formBtnBorderColor').val(formBtnBorderColor);
            $('.formBtnBorderRadius').val(formBtnBorderRadius); 
            $('.formBtnFontFamily').val(formBtnFontFamily);
            $('.formSuccessMessageColor').val(formSuccessMessageColor);
            $('.formDataSaveType').val(formDataSaveType);
            $('.formDataMailChimpListId').val(formDataMailChimpListId);
            $('.formDataMailChimpApi').val(formDataMailChimpApi);   

            $('.formBtnFontFamily').siblings('.font-select').children('a').children('.font_select_placeholder').html(formBtnFontFamily.replace(/\+/g, ' '));
            
            $('.formBtnBgColor').spectrum( 'set', $('.formBtnBgColor').val() );
            $('.formBtnColor').spectrum( 'set', $('.formBtnColor').val() );
            $('.formBtnHoverBgColor').spectrum( 'set', $('.formBtnHoverBgColor').val() );
            $('.formBtnBorderColor').spectrum( 'set', $('.formBtnBorderColor').val() );

            $('.formSuccessMessageColor').spectrum( 'set', $('.formSuccessMessageColor').val() );


          
          $('.wdt-pb-form').slideDown(500);
          break;
          case 'wigt-video':

            //Video Widget
            var this_widget_video = this.model.get('widgetVideo');
            var videoWebM = this_widget_video['videoWebM'];
            var videoMpfour = this_widget_video['videoMpfour'];
            var videoThumb = this_widget_video['videoThumb'];
            var vidAutoPlay = this_widget_video['vidAutoPlay'];
            var vidLoop = this_widget_video['vidLoop'];
            var vidControls = this_widget_video['vidControls'];

            //video
            $('.videoMpfour').val(videoMpfour);
            $('.videoWebM').val(videoWebM);
            $('.videoThumb').val(videoThumb);
            $('.vidAutoPlay').val(vidAutoPlay);
            $('.vidLoop').val(vidLoop); 
            $('.vidControls').val(vidControls);  

          
          $('.wdt-video').slideDown(500);
          break;
          case 'wigt-pb-postSlider':

            //post slider
            var this_widget_pbPS = this.model.get('widgetPBPostsSlider');
            psAutoplay = this_widget_pbPS['psAutoplay'];
            psSlideDelay = this_widget_pbPS['psSlideDelay'];
            psSlideLoop = this_widget_pbPS['psSlideLoop'];
            psSlideTransition = this_widget_pbPS['psSlideTransition'];
            psPostsNumber = this_widget_pbPS['psPostsNumber'];
            psDots = this_widget_pbPS['psDots'];
            psArrows = this_widget_pbPS['psArrows'];
            psFtrImage = this_widget_pbPS['psFtrImage'];
            psFtrImageSize = this_widget_pbPS['psFtrImageSize'];
            psExcerpt = this_widget_pbPS['psExcerpt'];
            psReadMore = this_widget_pbPS['psReadMore'];
            psMoreLinkText = this_widget_pbPS['psMoreLinkText'];
            psHeadingSize = this_widget_pbPS['psHeadingSize'];
            psTextAlignment = this_widget_pbPS['psTextAlignment'];
            psBgColor = this_widget_pbPS['psBgColor'];
            psTxtColor = this_widget_pbPS['psTxtColor'];
            psHeadingTxtColor = this_widget_pbPS['psHeadingTxtColor'];
            psPostType = this_widget_pbPS['psPostType'];
            psPostsOrderBy = this_widget_pbPS['psPostsOrderBy'];
            psPostsOrder = this_widget_pbPS['psPostsOrder'];
            psPostsFilterBy = this_widget_pbPS['psPostsFilterBy'];
            psFilterValue = this_widget_pbPS['psFilterValue'];

            // Widget Posts Slider
            $('.psAutoplay').val(psAutoplay);
            $('.psSlideDelay').val(psSlideDelay);
            $('.psSlideLoop').val(psSlideLoop);
            $('.psSlideTransition').val(psSlideTransition);
            $('.psPostsNumber').val(psPostsNumber);
            $('.psDots').val(psDots);
            $('.psArrows').val(psArrows);
            $('.psFtrImage').val(psFtrImage);
            $('.psFtrImageSize').val(psFtrImageSize);
            $('.psExcerpt').val(psExcerpt);
            $('.psReadMore').val(psReadMore);
            $('.psMoreLinkText').val(psMoreLinkText);
            $('.psHeadingSize').val(psHeadingSize);
            $('.psTextAlignment').val(psTextAlignment);
            $('.psBgColor').val(psBgColor);
            $('.psTxtColor').val(psTxtColor);
            $('.psHeadingTxtColor').val(psHeadingTxtColor);
            $('.psPostType').val(psPostType);
            $('.psPostsOrderBy').val(psPostsOrderBy);
            $('.psPostsOrder').val(psPostsOrder);
            $('.psPostsFilterBy').val(psPostsFilterBy);
            $('.psFilterValue').val(psFilterValue);

            $('.psBgColor').spectrum( 'set', $('.psBgColor').val() );
            $('.psTxtColor').spectrum( 'set', $('.psTxtColor').val() );
            $('.psHeadingTxtColor').spectrum( 'set', $('.psHeadingTxtColor').val() );

          
          $('.wdt-pbPostSlider').slideDown(500);
          break;
          case 'wigt-pb-icons':

            // Icons Widget
            var this_widget_pbIcon = this.model.get('widgetIcons');
            
            pbSelectedIcon = this_widget_pbIcon['pbSelectedIcon'];
            $('.pbicp-auto').val(pbSelectedIcon);
            $('.pbSelectedIcon').children().attr('class',pbSelectedIcon);
            
            if (typeof(this_widget_pbIcon['pbIcStyle']) != 'undefined') {
                if ( this_widget_pbIcon['pbIcStyle'] == 'solid') {
                    $('.iconStyleOps').css('display','block');
                }else{
                    $('.iconStyleOps').css('display','none');
                }
            }else{
                this_widget_pbIcon['pbIcStyle'] = 'none';
                $('.iconStyleOps').css('display','none');
                $('.pbIcStyle').val('none');
                $('.pbIcBgC').val('');
                $('.pbIcBC').val('');
                $('.pbIcBW').val('');
                $('.pbIcBR').val('');
                $('.pbIcSHP').val('');
                $('.pbIcSVP').val('');
                $('.pbIcSDB').val('');
                $('.pbIcSC').val('');
            }

            $.each(this_widget_pbIcon, function(index,val){
                
                if ( index == 'pbIconColor' || index == 'pbIcBgC' || index == 'pbIcBC' || index == 'pbIcSC' || index == 'pbIcHC' || index == 'pbIcHBgC' ) {
                    $('.'+index).spectrum( 'set', val );
                }

                $('.'+index).val(val);
                
            });

            
        
            $('.pbIcBC').spectrum( 'set', $('.pbIcBC').val() );

          
            $('.wdt-icons').slideDown(500);
          break;
          case 'wigt-pb-counter': 

            // Counter Widget
            var this_widget_pbCounter = this.model.get('widgetCounter');
            counterStartingNumber = this_widget_pbCounter['counterStartingNumber'];
            counterEndingNumber = this_widget_pbCounter['counterEndingNumber'];
            counterNumberPrefix = this_widget_pbCounter['counterNumberPrefix'];
            counterNumberSuffix = this_widget_pbCounter['counterNumberSuffix'];
            counterAnimationTime = this_widget_pbCounter['counterAnimationTime'];
            counterTitle = this_widget_pbCounter['counterTitle'];
            counterTextColor = this_widget_pbCounter['counterTextColor'];
            counterNumberFontSize = this_widget_pbCounter['counterNumberFontSize'];
            counterTitleFontSize = this_widget_pbCounter['counterTitleFontSize'];

            $('.counterStartingNumber').val(counterStartingNumber);
            $('.counterEndingNumber').val(counterEndingNumber);
            $('.counterNumberPrefix').val(counterNumberPrefix);
            $('.counterNumberSuffix').val(counterNumberSuffix);
            $('.counterAnimationTime').val(counterAnimationTime);
            $('.counterTitle').val(counterTitle);
            $('.counterTextColor').val(counterTextColor);
            $('.counterTitleColor').val(counterTitleColor);
            $('.counterNumberFontSize').val(counterNumberFontSize);
            $('.counterTitleFontSize').val(counterTitleFontSize);

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-counter').slideDown(500);
          break;
          case 'wigt-pb-audio':

            // Audio Widget
            var this_widget_audio = this.model.get('widgetAudio'); 

            $('.audioOgg').val(this_widget_audio['audioOgg']);
            $('.audioMpThree').val(this_widget_audio['audioMpThree']);
            $('.audioAutoPlay').val(this_widget_audio['audioAutoPlay']);
            $('.audioLoop').val(this_widget_audio['audioLoop']);
            $('.audioControls').val(this_widget_audio['audioControls']);

          
          $('.wdt-audio').slideDown(500);
          break;
          case 'wigt-pb-cards': 

            // Card Widget 
            var this_widget_card = this.model.get('widgetCard');
                
            $.each(this_widget_card, function(index,val){
                
                if (index == 'pbSelectedCardIcon') {
                    $('.pbSelectedCardIcon').children().attr('class','fa '+this_widget_card['pbSelectedCardIcon']);
                }

                if (index == 'pbCardIconColor') {
                    $('.pbCardIconColor').spectrum( 'set', val );
                }
                if (index == 'pbCardTitleColor') {
                    $('.pbCardTitleColor').spectrum( 'set', val );
                }
                if (index == 'pbCardDescColor') {
                    $('.pbCardDescColor').spectrum( 'set', val );
                }

                $('.'+index).val(val);

            });

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-card').slideDown(500);
          break;
          case 'wigt-pb-testimonial': 

            // Testimonial widget
            var this_widget_testimonial = this.model.get('widgetTestimonial');

            $('.tsAuthorName').val(this_widget_testimonial['tsAuthorName']);
            $('.tsJob').val(this_widget_testimonial['tsJob']);
            $('.tsCompanyName').val(this_widget_testimonial['tsCompanyName']);
            $('.tsTestimonial').val(this_widget_testimonial['tsTestimonial']);
            $('.tsUserImg').val(this_widget_testimonial['tsUserImg']);
            $('.tsImageShape').val(this_widget_testimonial['tsImageShape']);
            $('.tsIconColor').val(this_widget_testimonial['tsIconColor']);
            $('.tsIconSize').val(this_widget_testimonial['tsIconSize']);
            $('.tsTextColor').val(this_widget_testimonial['tsTextColor']);
            $('.tsTextSize').val(this_widget_testimonial['tsTextSize']);
            $('.tsTestimonialColor').val(this_widget_testimonial['tsTestimonialColor']);
            $('.tsTestimonialSize').val(this_widget_testimonial['tsTestimonialSize']);
            $('.tsTextAlignment').val(this_widget_testimonial['tsTextAlignment']);

            $('.tsIconColor').spectrum( 'set', $('.tsIconColor').val() );
            $('.tsTextColor').spectrum( 'set', $('.tsTextColor').val() );
            $('.tsTestimonialColor').spectrum( 'set', $('.tsTestimonialColor').val() );

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-testimonial').slideDown(500);
          break;
          case 'wigt-pb-shortcode':
            // Shortcode Widget
            var this_widget_shortcode = this.model.get('widgetShortCode');

            $('.shortCodeInput').val(this_widget_shortcode['shortCodeInput']);

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-shortcode').slideDown(500);
          break;
          case 'wigt-pb-countdown':

            // Countdown Widget
            var this_widget_countdown = this.model.get('widgetCowntdown');

            $('.daysText').val('');
            $('.hoursText').val('');
            $('.minutesText').val('');
            $('.secondsText').val('');
            $('.hideDays').val('');
            $('.hideHours').val('');
            $('.hideMinutes').val('');
            $('.hideSeconds').val('');

            $.each(this_widget_countdown, function(index,val){
              $('.'+index).val(val);

              if (index == 'pbCountDownColor' || index == 'pbCountDownLabelColor' || index == 'pbCountDownNumberBgColor' || index == 'pbCountDownLabelBgColor') {
                $('.'+index).spectrum( 'set', val );
                $('.'+index).val(val);
              }

              if (index == 'pbCountDownLabelFontFamily' || index == 'pbCountDownNumberFontFamily'){
                  if (val !== '') {
                    $('.'+index).siblings('.font-select').children('a').children('.font_select_placeholder').html(val.replace(/\+/g, ' '));
                  }
                }
              
            });

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-countdown').slideDown(500);
          break;
          case 'wigt-pb-imageSlider':

            // Image Slider Widget
            var this_widget_image_slider = this.model.get('widgetImageSlider');
            // Image Slider Widget
            $('.pbSliderHeight').val(this_widget_image_slider['pbSliderHeight']);
            $('.pbSliderHeightUnit').val(this_widget_image_slider['pbSliderHeightUnit']);
            $('.pbSliderContentBgColor').val(this_widget_image_slider['pbSliderContentBgColor']);
            $('.pbSliderAuto').val(this_widget_image_slider['pbSliderAuto']);
            $('.pbSliderDelay').val(this_widget_image_slider['pbSliderDelay']);
            $('.pbSliderPager').val(this_widget_image_slider['pbSliderPager']);
            $('.pbSliderPager').val(this_widget_image_slider['pbSliderPager']);
            $('.pbSliderRandom').val(this_widget_image_slider['pbSliderRandom']);
            $('.pbSliderPause').val(this_widget_image_slider['pbSliderPause']);

            if ( typeof(this_widget_image_slider['pbSliderHeightTablet'])!= 'undefined' ) {
              $('.pbSliderHeightTablet').val(this_widget_image_slider['pbSliderHeightTablet']);
              $('.pbSliderHeightMobile').val(this_widget_image_slider['pbSliderHeightMobile']);

              $('.pbSliderHeightUnitTablet').val(this_widget_image_slider['pbSliderHeightUnitTablet']);
              $('.pbSliderHeightUnitMobile').val(this_widget_image_slider['pbSliderHeightUnitMobile']);
            }else{
              $('.pbSliderHeightTablet').val('');
              $('.pbSliderHeightMobile').val('');
              $('.pbSliderHeightUnitTablet').val('');
              $('.pbSliderHeightUnitMobile').val('');
            }

            pbSliderImagesURL = this_widget_image_slider['pbSliderImagesURL'];
            pbSliderContent = this_widget_image_slider['pbSliderContent'];
            $('.sliderImageSlidesContainer').html('');
            
            $.each(pbSliderImagesURL,function(index, val){
                
                var slideCountA = index + 30;

                if (typeof(pbSliderContent) == 'undefined') {
                    imageSlideHeading = '';
                    imageSlideDesc = '';
                    imageSlideButtonText = '';
                    imageSlideButtonURL = '';
                }else{
                    imageSlideHeading = pbSliderContent[index]['imageSlideHeading'];
                    imageSlideDesc = pbSliderContent[index]['imageSlideDesc'];
                    imageSlideButtonText = pbSliderContent[index]['imageSlideButtonText'];
                    imageSlideButtonURL = pbSliderContent[index]['imageSlideButtonURL'];
                }
                

                jQuery('.sliderImageSlidesContainer').append('<li> <h3 class="handleHeader widgetOpsAccordionHandle">Slide <span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> <span class="dashicons dashicons-admin-page slideDuplicateButton" style="float: right;" title="Duplicate"></span>  </h3> <div class="accordContentHolder"> <br><br> <label>Slide Image :</label> <input id="image_location'+slideCountA+'" type="text" class="slideImgURL upload_image_button'+slideCountA+'" name="lpp_add_img_'+slideCountA+'" value="'+val+'" placeholder="Insert Image URL here" style="width:40%;" /> <input id="image_location'+slideCountA+'" type="button" class="upload_bg_btn_imageSlider" data-id="'+slideCountA+'" value="Upload" /> <br> <br> <br> <br> <hr> <br> <br> <h4>Slide Content</h4> <br> <label>Slide Heading :</label> <input type="text" class="imageSlideHeading" value="'+imageSlideHeading+'"> <br> <br> <br> <label>Slide Description :</label> <textarea class="imageSlideDesc" value="'+imageSlideDesc+'">'+imageSlideDesc+'</textarea> <br> <br> <br> <label>Slide Button Text :</label> <input type="text" class="imageSlideButtonText" value="'+imageSlideButtonText+'"> <br> <br> <br> <label>Slide Button URL :</label> <input type="url" class="imageSlideButtonURL" value="'+imageSlideButtonURL+'"> <br> <br> <br> </div> </li>');

                $( '.sliderImageSlidesContainer' ).accordion( "refresh" );
            });

            if (typeof(this_widget_image_slider['slideHeadingStyles']) != 'undefined' ) {
                slideHeadingStyles = this_widget_image_slider['slideHeadingStyles'];
                $.each(slideHeadingStyles,function(index, val){
                    $('.'+index).val(val);
                    
                    if (index == 'slideHeadingColor') {
                      $('.slideHeadingColor').spectrum( 'set', val );
                    }
                    if (index == 'slideHeadingBold' || index == 'slideHeadingItalic' || index == 'slideHeadingUnderlined') {
                        if(val == true){
                            if( $('.'+index).is(':checked') ){
                            }else{
                                $('.'+index).click();
                                $('.'+index).attr('checked', 'checked');
                            }
                        }else{
                            if( $('.'+index).is(':checked') ){
                                $('.'+index).click();
                            }
                        }
                    }

                    if (index == 'slideHeadingFontFamily') {
                        $('.'+index).siblings('.font-select').children('a').children('.font_select_placeholder').html($('.'+index).val().replace(/\+/g, ' '));
                    }
                    
                 });
            }

            slideDescStyles = this_widget_image_slider['slideDescStyles'];
            $.each(slideDescStyles,function(index, val){
                $('.'+index).val(val);
                if (index == 'slideDescColor') {
                  $('.slideDescColor').spectrum( 'set', val );
                }

                if (index == 'slideDescBold' || index == 'slideDescItalic' || index == 'slideDescUnderlined') {
                    if(val == true){
                        if( $('.'+index).is(':checked') ){
                        }else{
                            $('.'+index).click();
                            $('.'+index).attr('checked', 'checked');
                        }
                    }else{
                        if( $('.'+index).is(':checked') ){
                            $('.'+index).click();
                        }
                    }
                }

                if (index == 'slideDescFontFamily') {
                    $('.'+index).siblings('.font-select').children('a').children('.font_select_placeholder').html($('.'+index).val().replace(/\+/g, ' '));
                }
             });

            slideButtonStyles = this_widget_image_slider['slideButtonStyles'];
            $.each(slideButtonStyles,function(index, val){
                $('.'+index).val(val);
                
                if (index == 'slideButtonBtnBgColor') {
                  $('.slideButtonBtnBgColor').spectrum( 'set', val );
                }
                if (index == 'slideButtonBtnHoverBgColor') {
                  $('.slideButtonBtnHoverBgColor').spectrum( 'set', val );
                }
                if (index == 'slideButtonBtnHoverTextColor') {
                  $('.slideButtonBtnHoverTextColor').spectrum( 'set', val );
                }
                if (index == 'slideButtonBtnColor') {
                  $('.slideButtonBtnColor').spectrum( 'set', val );
                }
                if (index == 'slideButtonBtnBorderColor') {
                  $('.slideButtonBtnBorderColor').spectrum( 'set', val );
                }

                if (index == 'slideButtonBtnFontFamily') {
                    $('.'+index).siblings('.font-select').children('a').children('.font_select_placeholder').html($('.'+index).val().replace(/\+/g, ' '));
                }
             });

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-imageSlider').slideDown(500);
          break;
          case 'wigt-pb-progressBar':

            var this_widget_progressBar = this.model.get('widgetProgressBar');
            $.each(this_widget_progressBar, function(index,val){
                if (index == 'pbProgressBarTitleColor') {
                  $('.pbProgressBarTitleColor').spectrum( 'set', val );
                }
                if (index == 'pbProgressBarTextColor') {
                  $('.pbProgressBarTextColor').spectrum( 'set', val );
                }
                if (index == 'pbProgressBarColor') {
                  $('.pbProgressBarColor').spectrum( 'set', val );
                }
                if (index == 'pbProgressBarBgColor') {
                  $('.pbProgressBarBgColor').spectrum( 'set', val );
                }

                $('.'+index).val(val);
            });

            if (typeof(this_widget_progressBar['pbProgressBarTextFontFamily']) != 'undefined') {
                pbProgressBarTextFontFamily = this_widget_progressBar['pbProgressBarTextFontFamily'];
            } else{
                pbProgressBarTextFontFamily = ' none';
            }

            $('.pbProgressBarTextFontFamily').siblings('.font-select').children('a').children('.font_select_placeholder').html($('.pbProgressBarTextFontFamily').val().replace(/\+/g, ' '));

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-progressBar').slideDown(500);
          break;
          case 'wigt-pb-pricing':

            // Pricing Widget
            var this_widget_pricing = this.model.get('widgetPricing');
            pbPricingContent = this_widget_pricing['pbPricingContent'];
            $.each(this_widget_pricing, function(index,val){
                

                if (index == 'pricingbtnTextColor') {
                    $('.pricingbtnColor').spectrum( 'set', val );
                }
                if (index == 'pricingbtnBgColor') {
                    $('.pricingbtnBgColor').spectrum( 'set', val );
                }
                if (index == 'pricingbtnHoverBgColor') {
                    $('.pricingbtnHoverBgColor').spectrum( 'set', val );
                }
                if (index == 'pricingbtnHoverTextColor') {
                    $('.pricingbtnHoverTextColor').spectrum( 'set', val );
                }
                if (index == 'pricingbtnColor') {
                    $('.pricingbtnColor').spectrum( 'set', val );
                }
                if (index == 'pricingbtnBorderColor') {
                    $('.pricingbtnBorderColor').spectrum( 'set', val );
                }

                if (index == 'pricingbtnButtonFontFamily') {
                    if (val !== '') {
                        $('.pricingbtnButtonFontFamily').siblings('.font-select').children('a').children('.font_select_placeholder').html(val.replace(/\+/g, ' '));
                    }
                }
                if (index == 'pricingbtnSelectedIcon') {
                  $('.pricingbtnSelectedIconpbicp-auto').val(val);
                  $('.pricingbtnSelectedIcon').children().attr('class',val);
                }

                $('.'+index).val(val);

            });

            var pricingeditorID = 'pbPricingContent';
            if ($('#wp-'+pricingeditorID+'-wrap').hasClass("tmce-active"))
                tinyMCE.get(pricingeditorID).setContent(pbPricingContent);
            else
              $('#'+pricingeditorID).val(pbPricingContent);


            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-pricing').slideDown(500);
          break;
          case 'wigt-pb-imgCarousel':

            var this_widget_image_carousel = this.model.get('widgetImgCarousel');

            $('.pbImgCarouselAutoplay').val(this_widget_image_carousel['pbImgCarouselAutoplay']);
            $('.pbImgCarouselDelay').val(this_widget_image_carousel['pbImgCarouselDelay']);
            $('.imgCarouselSlideLoop').val(this_widget_image_carousel['imgCarouselSlideLoop']);
            $('.imgCarouselSlideTransition').val(this_widget_image_carousel['imgCarouselSlideTransition']);
            $('.imgCarouselPagination').val(this_widget_image_carousel['imgCarouselPagination']);
            $('.pbImgCarouselNav').val(this_widget_image_carousel['pbImgCarouselNav']);

            imgCarouselSlidesURL = this_widget_image_carousel['imgCarouselSlidesURL'];

            $('.carouselSlidesContainer').html('');
            $.each(imgCarouselSlidesURL,function(index, val){
                
                var slideCountA = index + 180;

                jQuery('.carouselSlidesContainer').append('<li><h3 class="handleHeader">Slide <span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> <span class="dashicons dashicons-admin-page slideDuplicateButton" style="float: right;" title="Duplicate"></span>  </h3><div  class="accordContentHolder"><label>Slide Image :</label><input id="image_location'+slideCountA+'" type="text" class="carouselImgURL upload_image_button'+slideCountA+'"  name="lpp_add_img_'+slideCountA+'" value="'+val+'"   placeholder="Insert Video URL here" style="width:40%;" /><input id="image_location'+slideCountA+'" type="button" class="upload_bg_btn_imageSlider" data-id="'+slideCountA+'" value="Upload" /></div></li>');

                $( '.carouselSlidesContainer' ).accordion( "refresh" );

            });

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-imgCarousel').slideDown(500);
          break;
          case 'wigt-pb-wooCommerceProducts':

            var this_widget_wooPorducts = this.model.get('widgetWooPorducts');

            $.each(this_widget_wooPorducts, function(index,val){
                $('.'+index).val(val);
            });

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }
          
          $('.wdt-wooCommerceProducts').slideDown(500);
          break;
          case 'wigt-pb-iconList':

            var this_widget_icon_list = this.model.get('widgetIconList');

            $('.iconListLineHeight').val(this_widget_icon_list['iconListLineHeight']);
            $('.iconListAlignment').val(this_widget_icon_list['iconListAlignment']);
            $('.iconListIconSize').val(this_widget_icon_list['iconListIconSize']);
            $('.iconListIconColor').val(this_widget_icon_list['iconListIconColor']);
            $('.iconListTextSize').val(this_widget_icon_list['iconListTextSize']);
            $('.iconListTextIndent').val(this_widget_icon_list['iconListTextIndent']);
            $('.iconListTextColor').val(this_widget_icon_list['iconListTextColor']);
            $('.iconListTextFontFamily').val(this_widget_icon_list['iconListTextFontFamily']);

            if (typeof(this_widget_icon_list['iconListIconSizeTablet']) !== 'undefined') {
              $('.iconListIconSizeTablet').val(this_widget_icon_list['iconListIconSizeTablet']);
              $('.iconListIconSizeMobile').val(this_widget_icon_list['iconListIconSizeMobile']);

              $('.iconListTextSizeTablet').val(this_widget_icon_list['iconListTextSizeTablet']);
              $('.iconListTextSizeMobile').val(this_widget_icon_list['iconListTextSizeMobile']);

              $('.iconListTextIndentTablet').val(this_widget_icon_list['iconListTextIndentTablet']);
              $('.iconListTextIndentMobile').val(this_widget_icon_list['iconListTextIndentMobile']);
            }else{
              $('.iconListIconSizeTablet').val('');
              $('.iconListIconSizeMobile').val('');
              $('.iconListTextSizeTablet').val('');
              $('.iconListTextSizeMobile').val('');
              $('.iconListTextIndentTablet').val('');
              $('.iconListTextIndentMobile').val('');
            }

            $('.'+'iconListTextFontFamily').siblings('.font-select').children('a').children('.font_select_placeholder').html($('.'+'iconListTextFontFamily').val().replace(/\+/g, ' '));

            iconListComplete = this_widget_icon_list['iconListComplete'];

            $('.iconListItemsContainer').html('');
            $.each(iconListComplete,function(index, val){

                jQuery('.iconListItemsContainer').append('<li> <h3 class="handleHeader">'+val['iconListItemText']+'<span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> <span class="dashicons dashicons-admin-page slideDuplicateButton" style="float: right;" title="Duplicate"></span>  </h3> <div  class="accordContentHolder"> <label>List Text</label> <input type="text" class="iconListItemText" value="'+val['iconListItemText']+'"> <br> <br> <label>Select Icon:  </label> <input  data-placement="bottomRight" class="icp pbIconListPicker iconListItemIcon" value="'+val['iconListItemIcon']+'" type="text" /> <span class="input-group-addon" style="font-size: 16px;"></span> <br> <br> <label>Link : </label> <input type="url" class="iconListItemLink" value="'+val['iconListItemLink']+'"> <br> <br> <label>Open Link in :</label> <select class="iconListItemLinkOpen ililo-'+index+' " value="'+val['iconListItemLinkOpen']+'"> <option value="_blank">New Tab</option> <option value="_self">Same Tab</option> </select> </div> </li>');
                $('.ililo-'+index).val( val['iconListItemLinkOpen'] );
                $( '.iconListItemsContainer' ).accordion( "refresh" );

            });

            $('.iconListIconColor').spectrum( 'set', $('.iconListIconColor').val() );
            $('.iconListTextColor').spectrum( 'set', $('.iconListTextColor').val() );

            jQuery('.pbIconListPicker').iconpicker({ });
            jQuery('.pbIconListPicker').on('iconpickerSelected',function(event){
              $(this).val(event.iconpickerValue);
              $(this).trigger('change');
            });

          $('.wdt-iconList').slideDown(500);
          break;
          case 'wigt-pb-spacer':

            var this_widget_Spacer = this.model.get('widgetVerticalSpace');

            $.each(this_widget_Spacer, function(index,val){
                $('.'+index).val(val);
            });

          
          $('.wdt-spacer').slideDown(500);
          break;
          case 'wigt-pb-break':

            var this_widget_Breaker = this.model.get('widgetBreaker');

            $.each(this_widget_Breaker, function(index,val){

                if (index == 'widgetBreakerColor') {
                  $('.widgetBreakerColor').spectrum( 'set', val );
                }
                
                $('.'+index).val(val);
            });

          
          $('.wdt-breaker').slideDown(500);
          break;
          case 'wigt-pb-anchor':
            var widgetAnchor = this.model.get('widgetAnchor');
            $.each(widgetAnchor, function(index,val){
                $('.'+index).val(val);
            });

          
          $('.wdt-anchor').slideDown(500);
          break;
          case 'wigt-pb-formBuilder':

                var this_widget_FormBuilder = this.model.get('widgetFormBuilder');

                widgetPbFbFormFeilds = this_widget_FormBuilder['widgetPbFbFormFeilds'];
                widgetPbFbFormFeildOptions = this_widget_FormBuilder['widgetPbFbFormFeildOptions'];
                widgetPbFbFormSubmitOptions = this_widget_FormBuilder['widgetPbFbFormSubmitOptions'];
                widgetPbFbFormEmailOptions = this_widget_FormBuilder['widgetPbFbFormEmailOptions'];
                widgetPbFbFormMailChimp = this_widget_FormBuilder['widgetPbFbFormMailChimp'];

                $('.formFieldItemsContainer').html('');
                $('.formBuilderFieldFontFamily').val('');
                $('.formBuilderBtnFontFamily').val('');
                $('.formSuccessCustomAction').val('');
                $('.onSuccessOptin').val('');
                $('.formDuplicateMessage').val('');
                $('.formDuplicateCustomAction').val('');
                $('.formFailureMessage').val('');
                $('.formRequiredFieldMessage').val('Please fill all the required * fields.');
                $('.formFailureCustomAction').val('');

                renderFormBuilderFieldsList(widgetPbFbFormFeilds);
                

                $.each(widgetPbFbFormFeildOptions, function(index,val){

                    if (index == 'formBuilderLabelColor') {
                      $('.formBuilderLabelColor').spectrum( 'set', val );
                    }
                    if (index == 'formBuilderFieldColor') {
                      $('.formBuilderFieldColor').spectrum( 'set', val );
                    }
                    if (index == 'formBuilderFieldBgColor') {
                      $('.formBuilderFieldBgColor').spectrum( 'set', val );
                    }
                    if (index == 'formBuilderFieldBorderColor') {
                      $('.formBuilderFieldBorderColor').spectrum( 'set', val );
                    }

                    $('.'+index).val(val);
                });

                $('.formBuilderbtnSelectedIconpbicp-auto').val('');
                $('.formBuilderbtnSelectedIcon').children().attr('class','');

                $.each(widgetPbFbFormSubmitOptions, function(index,val){

                    if (index == 'formBuilderBtnBgColor') {
                      $('.formBuilderBtnBgColor').spectrum( 'set', val );
                    }
                    if (index == 'formBuilderBtnHoverBgColor') {
                      $('.formBuilderBtnHoverBgColor').spectrum( 'set', val );
                    }
                    if (index == 'formBuilderBtnHoverTextColor') {
                      $('.formBuilderBtnHoverTextColor').spectrum( 'set', val );
                    }
                    if (index == 'formBuilderBtnColor') { 
                      $('.formBuilderBtnColor').spectrum( 'set', val );
                    }
                    if (index == 'formBuilderBtnBorderColor') {
                      $('.formBuilderBtnBorderColor').spectrum( 'set', val );
                    }

                    if (index == 'formBuilderbtnSelectedIcon') {
                      $('.formBuilderbtnSelectedIconpbicp-auto').val(val);
                      $('.formBuilderbtnSelectedIcon').children().attr('class',val);
                    }

                    $('.'+index).val(val);

                });

                $.each(widgetPbFbFormEmailOptions, function(index,val){
                    $('.'+index).val(val);

                    if (index == 'formEmailTo') {
                      if (val == '' || val == 'example@example.com' || val == 'test@example.com') {
                        $('.formErrorNotice').css('display','block');
                      }else{
                        $('.formErrorNotice').css('display','none');
                      }
                    }

                    if (index == 'formSuccessAction') {
                        if (val == 'redirect') {
                            $('.successFormActionCont').css('display','block');
                        }else{
                            $('.successFormActionCont').css('display','none');
                        }
                    }
                });



                $.each(widgetPbFbFormMailChimp, function(index,val){
                  $('.'+index).val(val);
                });

                if (widgetPbFbFormMailChimp['formBuilderMCAccountName'] != '' && widgetPbFbFormMailChimp['formBuilderMCApiKey'] != '' ) {

                    if ( typeof(widgetPbFbFormMailChimp['formBuilderMCGroups']) != 'undefined' ) {
                        $('.formBuilderMCGroups').val(widgetPbFbFormMailChimp['formBuilderMCGroups']);
                        pageBuilderApp.thisMCSelectedGroup = widgetPbFbFormMailChimp['formBuilderMCGroups'];
                    }

                    $('#mcGetGrpsBtn').click();
                }
                

                if (typeof(this_widget_FormBuilder['widgetPbFbFormAllowDuplicates']) != 'undefined') {
                  $('.widgetPbFbFormAllowDuplicates').val(this_widget_FormBuilder['widgetPbFbFormAllowDuplicates']);
                }

                if (typeof(this_widget_FormBuilder['formCustomHTML']) != 'undefined') {
                  $('.formCustomHTML').val(this_widget_FormBuilder['formCustomHTML']);
                }

                
                $('.wdt-formBuilder').slideDown(500);
          break;
          case 'wigt-pb-text':

            var this_widget_Text = this.model.get('widgetText');
            $('.widgetTextAlignmentTablet').val('');
            $('.widgetTextAlignmentMobile').val('');
            $.each(this_widget_Text, function(index,val){
                if (index == 'widgetTextContent') {
                    fieldParentValue = val;
                    fieldValArraySplit = fieldParentValue.replace(/<br>/g, "\n");

                    val = fieldValArraySplit;
                }

                if (index == 'widgetTextTag') {
                  if (val == 'a') {
                    $('.linkOpsDiv').css('display','block');
                  }else{
                    $('.linkOpsDiv').css('display','none');
                  }
                }

                $('.'+index).val(val);

                if (index == 'widgetTextFamily') {
                    $('.'+index).siblings('.font-select').children('a').children('.font_select_placeholder').html($('.'+index).val().replace(/\+/g, ' '));
                }

                if (index == 'widgetTextBold' || index == 'widgetTextItalic' || index == 'widgetTextUnderlined') {
                        if(val == true){
                            if( $('.'+index).is(':checked') ){
                            }else{
                                $('.'+index).click();
                                $('.'+index).attr('checked', 'checked');
                            }
                        }else{
                            if( $('.'+index).is(':checked') ){
                                $('.'+index).click();
                            }
                        }
                }

                if (index == 'widgetTextColor') {
                  $('.widgetTextColor').spectrum( 'set', val );
                  $('.'+index).val(val);
                }
                

            });

          
          $('.wdt-text').slideDown(500);
          break;
          case 'wigt-pb-liveText':

            var thisWidget = this.model.get('wLText');
            var liveTextContent = thisWidget['wltc'];
            var wlteditorID = 'wltc';

            if ($('#wp-'+wlteditorID+'-wrap').hasClass("tmce-active"))
                tinyMCE.get(wlteditorID).setContent(liveTextContent);
            else
              $('#'+wlteditorID).val(liveTextContent);

          
          $('.wdt-pb-liveText').slideDown(500);
          break;
          case 'wigt-pb-embededVideo':

          var this_widget_widgetEmbedVideo = this.model.get('widgetEmbedVideo');

            $.each(this_widget_widgetEmbedVideo, function(index,val){
                
                if (index == 'widgetEvidImageIconColor') {
                  $('.widgetEvidImageIconColor').spectrum( 'set', val );
                }

                $('.'+index).val(val);
            });

          
          $('.wdt-embededVideo').slideDown(500);
          break;
          case 'wigt-pb-popupClose':

            var this_widget_close_btn = this.model.get('widgetClosePopUp');

              $.each(this_widget_close_btn, function(index,val){
                  $('.'+index).val(val);


                  if (index == 'closeBtnButtonFontFamily') {
                    if (val != '') {
                        $('.' + index).siblings('.font-select').children('a').children('.font_select_placeholder').html( val.replace(/\+/g, ' '));
                    }
                  }
                  
                  if (index == 'closeBtnBold' || index == 'closeBtnItalic' || index == 'closeBtnUnderlined') {
                    if (val == true) {
                      if ($('.' + index).is(':checked')) {} else {
                        $('.' + index).click();
                        $('.' + index).attr('checked', 'checked');
                      }
                    } else {
                      if ($('.' + index).is(':checked')) {
                        $('.' + index).click();
                      }
                    }
                  }

                  $('.'+index).spectrum( 'set', val );

              });

            
            $('.wdt-closeBtn').slideDown(500);
          break;
          case 'wigt-pb-testimonialCarousel':

            var this_widget_t_carousel = this.model.get('widgetTCarousel');
            var tCarOps = this_widget_t_carousel['tCarOps'];
            var tCarSlides = this_widget_t_carousel['tCarSlides'];
            var tDesignOps = this_widget_t_carousel['tDesignOps'];


            $.each(tCarOps,function(index, val){
              $('.'+index).val(val);
            });

            $.each(tDesignOps,function(index, val){
              $('.'+index).val(val);

              if (index == 'tcic' || index == 'tcntc' || index == 'tcttc') {
                $('.'+index).spectrum( 'set', val );
                $('.'+index).val(val);
              }

              if (index == 'tcntf' || index == 'tcttf' ) {
                $('.'+index).siblings('.font-select').children('a').children('.font_select_placeholder').html($('.'+index).val().replace(/\+/g, ' '));
              }

            });

            $('.testimonialCarSlidesContainer').html('');
            $.each(tCarSlides,function(index, val){
                
                var slideCountA = index + 480;

                jQuery('.testimonialCarSlidesContainer').append('<li><h3 class="handleHeader">Testimonial <span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> <span class="dashicons dashicons-admin-page slideDuplicateButton" style="float: right;" title="Duplicate"></span> </h3> <div  class="accordContentHolder wdt-fields">'+
                  '<label> Name : </label> <input type="text" value="'+val['tcn']+'" class="tcut tcn"> <br><br>'+
                  '<label> Job : </label> <input type="text" value="'+val['tcj']+'" class="tcut tcj"> <br><br>'+
                  '<label> Testimonial : </label> <br> <textarea type="text" class="tcut tct" rows="5" cols="40"> '+val['tct']+' </textarea> <br><br>'+
                  '<label>Testimonial Image :</label> <input id="image_location'+slideCountA+'" type="text" class="tcut tci upload_image_button'+slideCountA+'"  name="lpp_add_img_'+slideCountA+'" value="'+val['tci']+'"  placeholder="Image URL" style="width:40%;" /> <label></label> <input id="image_location'+slideCountA+'" type="button" class="tcut upload_bg_btn_imageSlider" data-id="'+slideCountA+'" value="Upload" /> <br><br><br><br>'+
                  '<label> Link : </label> <input type="url" value="'+val['tcl']+'" class="tcut tcl"> <br><br>'+
                  '   </div></li>');

                $( '.testimonialCarSlidesContainer' ).accordion( "refresh" );

            });

            if (pageBuilderApp.premActive == 'false') {
              $('.premWidgetNotice').css('display','block');
            }

          
        $('.wdt-testimonialSlider').slideDown(0);
        break;
        case 'wigt-pb-poOptins':

            var thisWidgetData = this.model.get('widgetPoOptins');
            $('.widgetOptinId').val(thisWidgetData['widgetOptinId']);
            
            $('.wdt-pluginopsOptins').slideDown(500);
        break;
        case 'wigt-pb-navmenu':
            var thisWidgetData = this.model.get('widgetNavBuilder');
            var allNavItems = thisWidgetData['navItems'];
            $('.customNavItemsContainer').html('');
            $.each(allNavItems,function(index, val){

                jQuery('.customNavItemsContainer').append(

                    '<li>'+
                        '<h3 class="handleHeader">Menu Item - '+val['cnilab']+' <span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> </h3>'+
                        '<div  class="accordContentHolder">'+
                            '<label> Link Label :</label>'+
                            "<input type='text' class='cnilab' value='"+val['cnilab']+"'> <br> <br>"+
                            '<label> Link URL :</label>'+
                            '<input type="text" class="cniurl" value="'+val['cniurl']+'"> <br> <br>'+
                        '</div>'+
                    '</li>'

                );
                $( '.customNavItemsContainer' ).accordion( "refresh" );
            });

            var navStyles = thisWidgetData['navStyle'];
            $.each(navStyles,function(index, val){
                $('.'+index).val(val);
                
                if (index == 'cnsff') {
                    $('.' + index).siblings('.font-select').children('a').children('.font_select_placeholder').html($('.' + index).val().replace(/\+/g, ' '));
                }

                if (index == 'cnsfc' || index == 'cnsfhc' || index == 'cnsbc' || index == 'cnshbc' ) {
                    $('.'+index).spectrum( 'set', val );
                    $('.'+index).val(val);
                }

            });

            $('.wdt-navMenu').slideDown(0);
        break;
        case 'wigt-pb-gallery':

            var thisWidgetData = this.model.get('widgetIGallery');
            
            var allGalleryItems = thisWidgetData['gallItems'];
            var allGalleryStyles = thisWidgetData['gallStyles'];
            $('.customImageGalleryItems').html('');

            $.each(allGalleryItems,function(index, val){
                var slideCountA = 380 + index;

                jQuery('.customImageGalleryItems').append(

                    '<li>'+
                        '<h3 class="handleHeader"> Image <span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> <img src="'+val['gur']+'" style="width:20px; float:right; margin-right:10px;">  </h3>'+
                        '<div  class="accordContentHolder">'+
                            "<label>Select Image :</label>"+
                            '<input id="image_location'+slideCountA+'" type="text" class="gallItemUrl upload_image_button'+slideCountA+'"  name="lpp_add_img_'+slideCountA+'" value="'+val['gur']+'"  placeholder="Insert Video URL here" style="width:40%;" />'+
                            "<label></label>"+
                            '<input id="image_location'+slideCountA+'" type="button" class="upload_bg_btn_imageSlider" data-id="'+slideCountA+'" value="Select" />'+
                            "<br><br><br><br><hr><br>"+
                            "<label> Title : </label>"+
                            "<input type'text' placeholder='This is also alt text of image' value='"+val['gti']+"' class='gallItemTitle'  >"+
                            "<br><br><br><hr><br>"+
                            "<label> Caption : </label>"+
                            "<textarea class='gallItemCaption' value='"+val['gca']+"'>"+val['gca']+"</textarea>"+
                        '</div>'+
                    '</li>'

                );

                $( '.customImageGalleryItems' ).accordion( "refresh" );
            });

            $.each(allGalleryStyles,function(index, val){
                $('.'+index).val(val);
            });


            if ( allGalleryStyles['wgISD'] == 'custom') {
                jQuery('.customImageSizeDiv').show();
            } else{
                jQuery('.customImageSizeDiv').hide();
            }

            $('.wdt-gallery').slideDown(500);
        break;
        case 'wigt-pb-shareThis':

            var thisWidgetData = this.model.get('widgetShareThis');
            
            $.each(thisWidgetData,function(index, val){
                $('.'+index).val(val);
            });


            

            $('.wdt-shareThis').slideDown(500);
        break;
        default:
          $('.wdt-droppable').slideDown(100);
          $('.wdt-editor, .wdt-img, .wdt-menu, .wdt-smuzform').css('display','none');
        break;
      }



    var that = this.model.cid;
      $('.closeWidgetPopup').attr('data-CurrWidget',that);
      $('.closeWidgetPopupIcon').attr('data-CurrWidget',that);



        //$('.color-picker_btn_two').iris('hide');
        CPtopParent = $('.color-picker_btn_two').parent().parent().parent();
        
    },
  updateWidget: function (ev) {

    // var tuc0 = performance.now();

    var updateWidgetOpType = pageBuilderApp.changedOpType;
    var updatedWidgetOpName = pageBuilderApp.changedOpName;
    
    if (typeof(updatedWidgetOpName) == 'undefined') {
        updatedWidgetOpName = ' ';
    }

    var widgetType = $('input[data-widgetType-id="'+this.model.cid+'"]').val();


    if (updateWidgetOpType == 'general') {
        
        // var thisWidgetDefaultGeneralOps = {
        //     defaults:{
        //         widgetType:' ',
        //         widgetStyling:'/* Custom CSS for widget here. */',
        //         widgetMtop:'0',
        //         widgetMleft:'0',
        //         widgetMbottom:'0',
        //         widgetMright:'0',
        //         widgetPtop:'0',
        //         widgetPleft:'0',
        //         widgetPbottom:'0',
        //         widgetPright:'0',
        //         widgetPaddingTablet:{
        //           rPTT:'',
        //           rPBT:'',
        //           rPLT:'',
        //           rPRT:'',
        //         },
        //         widgetPaddingMobile:{
        //           rPTM:'',
        //           rPBM:'',
        //           rPLM:'',
        //           rPRM:'',
        //         },
        //         widgetMarginTablet:{
        //           rMTT:'',
        //           rMBT:'',
        //           rMLT:'',
        //           rMRT:'',
        //         },
        //         widgetMarginMobile:{
        //           rMTM:'',
        //           rMBM:'',
        //           rMLM:'',
        //           rMRM:'',
        //         },
        //         widgetBgColor: 'transparent',
        //         widgetAnimation: 'none',
        //         widgetBorderWidth: '',
        //         widgetBorderStyle:'',
        //         widgetBorderColor:'',
        //         widgetBorderRadius: '',
        //         borderRadius:{
        //           wbrt: '',
        //           wbrb: '',
        //           wbrl: '',
        //           wbrr: '',
        //         },
        //         borderWidth:{
        //           wbwt: '',
        //           wbwb: '',
        //           wbwl: '',
        //           wbwr: '',
        //         },
        //         widgetBoxShadowH: '',
        //         widgetBoxShadowV: '',
        //         widgetBoxShadowBlur: '',
        //         widgetBoxShadowColor: '',
        //         widgetIsInline:false,
        //         widgetIsInlineTablet:'',
        //         widgetIsInlineMobile:'',
        //         widgetCustomClass: '',
        //         widgBgImg:'',
        //         widgBackgroundType:'solid',
        //         widgGradient:{
        //           widgGradientColorFirst: '#dd9933',
        //           widgGradientLocationFirst:'55',
        //           widgGradientColorSecond:'#eeee22',
        //           widgGradientLocationSecond:'50',
        //           widgGradientType:'linear',
        //           widgGradientPosition:'top left',
        //           widgGradientAngle:'135',
        //         },
        //         widgHoverOptions: {
        //           widgBgColorHover:'',
        //           widgBackgroundTypeHover:'',
        //           widgHoverTransitionDuration:'',
        //           widgGradientHover:{
        //             widgGradientColorFirstHover: '',
        //             widgGradientLocationFirstHover:'',
        //             widgGradientColorSecondHover:'',
        //             widgGradientLocationSecondHover:'',
        //             widgGradientTypeHover:'linear',
        //             widgGradientPositionHover:'top left',
        //             widgGradientAngleHover:'',
        //           }
        //         },
        //         widgHideOnDesktop:'',
        //         widgHideOnTablet:'',
        //         widgHideOnMobile:'',
        //     }
        // };

        var thischangedValue = $('[data-optname="'+updatedWidgetOpName+'"]').val();
        if (updatedWidgetOpName == 'widgBackgroundType') {
          var thischangedValue = $('.widgBackgroundType:checked').val();
        }
        if (updatedWidgetOpName == 'widgHoverOptions.widgBackgroundTypeHover') {
          var thischangedValue = $('.widgBackgroundTypeHover:checked').val();
        }

        var thisWidgetDataAttrNew = _.clone(this.model.attributes);

        setUpdateObject(thisWidgetDataAttrNew, updatedWidgetOpName, thischangedValue);

        this.model.set(thisWidgetDataAttrNew); // prev took 120-150ms / Now only 4-10ms

        delete thisWidgetDataAttrNew;
    }
        
    if (updateWidgetOpType == 'specific') {
        switch(widgetType){
            case 'wigt-WYSIWYG': 

                var editorID = 'columnContent';
                if($('#wp-'+editorID+'-wrap').hasClass("tmce-active")){
                    var widgetEditorData = tinyMCE.get(editorID).getContent({format : 'raw'});
                }else{
                    var widgetEditorData = $('#'+editorID).val();
                }

                widgetWYSIWYG = this.model.get('widgetWYSIWYG');
                if (typeof(widgetWYSIWYG['widgetContentFonts']) == 'undefined' ) {
                  widgetWYSIWYG['widgetContentFonts'] == '';
                }
                this.model.set({
                    widgetWYSIWYG: {
                      widgetContent:widgetEditorData,
                      widgetContentFonts: widgetWYSIWYG['widgetContentFonts'],
                    }
                });

                var widgetCurrentType = 'widgetWYSIWYG';
            break;
            case 'wigt-img': 

                var widgetImgUrl      = $('.ftr-img').val();
                var widgetImgSize     = $('#ftr-img-size').val();
                var widgetImgAlignment = $('.imgAlignment').val();
                var imgSizeCustomWidth = $('.imgSizeCustomWidth').val();
                var imgSizeCustomHeight = $('.imgSizeCustomHeight').val();
                var imgLightBox       = $('.imgLightBox').val();
                var imgLink           = $('.imgLink').val(); 

                this.model.set({
                    widgetImg:{
                      imgUrl: widgetImgUrl,
                      imgSize: widgetImgSize,
                      imgAlignment: widgetImgAlignment,
                      imgAlignmentTablet: $('.imgAlignmentTablet').val(),
                      imgAlignmentMobile: $('.imgAlignmentMobile').val(),
                      imgSizeCustomWidth: imgSizeCustomWidth,
                      imgSizeCustomWidthTablet: $('.imgSizeCustomWidthTablet').val(),
                      imgSizeCustomWidthMobile: $('.imgSizeCustomWidthMobile').val(),
                      imgSizeCustomHeight: imgSizeCustomHeight,
                      imgSizeCustomHeightTablet: $('.imgSizeCustomHeightTablet').val(),
                      imgSizeCustomHeightMobile: $('.imgSizeCustomHeightMobile').val(),
                      imgLightBox: imgLightBox,
                      imgLink: imgLink,
                      iwbs:$('.iwbs').val(),
                      iwbc:$('.iwbc').val(),
                      iborderRadius:{
                        iwbrt:$('.iwbrt').val(),
                        iwbrb:$('.iwbrb').val(),
                        iwbrl:$('.iwbrl').val(),
                        iwbrr:$('.iwbrr').val(),
                      },
                      iborderWidth:{
                        iwbwt:$('.iwbwt').val(),
                        iwbwb:$('.iwbwb').val(),
                        iwbwl:$('.iwbwl').val(),
                        iwbwr:$('.iwbwr').val(),
                      },
                      iwbsh: $('.iwbsh').val(),
                      iwbsv: $('.iwbsv').val(),
                      iwbsb: $('.iwbsb').val(),
                      iwbsc: $('.iwbsc').val(),
                      }
                });
            break;
            case 'wigt-menu':

                var widgetMenuName    = $('#ftr-menu-select').val();
                var widgetMenuStyle   = $('input[name=ftr-menu-select-style]:checked').val();
                var widgetMenuColor   = $('#ftr-menu-color').val();
                var pbMenuFontFamily   = $('.pbMenuFontFamily').val();

                this.model.set({
                    widgetMenu:{
                      menuName: widgetMenuName,
                      menuStyle: widgetMenuStyle,
                      menuColor: widgetMenuColor,
                      pbMenuFontFamily: pbMenuFontFamily,
                      pbMenuFontHoverColor: $('.pbMenuFontHoverColor').val(),
                      pbMenuFontHoverBgColor:$('.pbMenuFontHoverBgColor').val(),
                      pbMenuFontSize: $('.pbMenuFontSize').val(),
                    }
                });
            break;
            case 'wigt-btn-gen':

                

                btnicon = $('.btnSelectedIconpbicp-auto').val();
                if (btnicon != '') {
                 btnSelectedIcon = $('.btnSelectedIcon').children().attr('class');
                }else{
                 btnSelectedIcon = '';
                }

                var btnLink = $('.btnLink').val();
                /*
                if (btnLink.indexOf('#') == -1) {
                  if (!/^(f|ht)tps?:\/\//i.test(btnLink)) {
                    btnLink = "http://" + btnLink;
                  }
                }
                */

                if (updatedWidgetOpName != '' && typeof(updatedWidgetOpName) != 'undefined' && updatedWidgetOpName != ' ' ) {

                    var thischangedValue = $('[data-optname="'+updatedWidgetOpName+'"]').val();
                    if (updatedWidgetOpName == 'btnSelectedIcon') {
                        thischangedValue = $('.btnSelectedIcon').children().attr('class');
                    }

                    if (typeof(thischangedValue) == 'undefined' ) {
                        break;
                    }

                    var thisWidgetDataAttrNew = _.clone(this.model.get('widgetButton'));

                    setUpdateObject(thisWidgetDataAttrNew, updatedWidgetOpName, thischangedValue);

                    this.model.set({
                        widgetButton : thisWidgetDataAttrNew
                    });

                    delete thisWidgetDataAttrNew;

                }

                /*
                this.model.set({
                    widgetButton:{
                      btnText: $('.btnText').val(),
                      btnClickAction: $('.btnClickAction').val(),
                      btnWidgetPopUpId: $('.btnWidgetPopUpId').val(),
                      btnLink: $('.btnLink').val(),
                      btnTextColor: $('.btnColor').val(),
                      btnCAction: $('.btnCAction').val(),
                      btnFontSize: $('.btnFontSize').val(),
                      btnFontSizeTablet:$('.btnFontSizeTablet').val(),
                      btnFontSizeMobile:$('.btnFontSizeMobile').val(),
                      btnBgColor: $('.btnBgColor').val(),
                      btnWidth: $('.btnWidth').val(),
                      btnWidthPercent: $('.btnWidthPercent').val(),
                      btnWidthPercentTablet:$('.btnWidthPercentTablet').val(),
                      btnWidthPercentMobile:$('.btnWidthPercentMobile').val(),
                      btnWidthUnit: $('.btnWidthUnit').val(),
                      btnWidthUnitTablet: $('.btnWidthUnitTablet').val(),
                      btnWidthUnitMobile: $('.btnWidthUnitMobile').val(),
                      btnHeight: $('.btnHeight').val(),
                      btnHeightTablet:$('.btnHeightTablet').val(),
                      btnHeightMobile:$('.btnHeightMobile').val(),
                      btnHoverBgColor: $('.btnHoverBgColor').val(),
                      btnHoverTextColor: $('.btnHoverTextColor').val(),
                      btnBlankAttr: $('.btnBlankAttr').val(),
                      btnBorderColor: $('.btnBorderColor').val(),
                      btnBorderWidth: $('.btnBorderWidth').val(),
                      btnBorderRadius: $('.btnBorderRadius').val(),
                      btnButtonAlignment: $('.btnButtonAlignment').val(),
                      btnButtonAlignmentTablet: $('.btnButtonAlignmentTablet').val(),
                      btnButtonAlignmentMobile: $('.btnButtonAlignmentMobile').val(),
                      btnButtonFontFamily: $('.btnButtonFontFamily').val(),
                      btnSelectedIcon: btnSelectedIcon,
                      btnIconPosition: $('.btnIconPosition').val(),
                      btnIconAnimation: $('.btnIconAnimation').val(),
                      btnIconGap: $('.btnIconGap').val(),
                    }
                });
                */
            break;
            case 'wigt-pb-form': 
                var this_widget_subscribeForm = this.model.get('widgetSubscribeForm');
                pbFormID = this_widget_subscribeForm['pbFormID'];


                // subs form
                formLayout = $('.formLayout').val();
                showNameField = $('.showNameField').val();
                successAction = $('.successAction').val();
                successURL = $('.successURL').val();
                successMessage = $('.successMessage').val();
                formBtnText = $('.formBtnText').val();
                formBtnHeight = $('.formBtnHeight').val();
                formBtnWidth = $('.formBtnWidth').val();
                formBtnColor = $('.formBtnColor').val();
                formBtnFontSize = $('.formBtnFontSize').val();
                formBtnBgColor = $('.formBtnBgColor').val();
                formBtnHoverBgColor = $('.formBtnHoverBgColor').val();
                formBtnBorderWidth = $('.formBtnBorderWidth').val();
                formBtnBorderColor = $('.formBtnBorderColor').val();
                formBtnBorderRadius = $('.formBtnBorderRadius').val();
                formDataSaveType = $('.formDataSaveType').val();
                formAccountName = $('.formAccountName').val();
                formApiKey = $('.formApiKey').val();

                $('.mailchimpApiKeyHolder').val(formApiKey);
                $('.mailchimpListIdHolder').val(formAccountName);

                btnicon = $('.formbtnSelectedIconpbicp-auto').val();
                if (btnicon != '') {
                 formbtnSelectedIcon = $('.formbtnSelectedIcon').children().attr('class');
                }else{
                 formbtnSelectedIcon = '';
                }

                this.model.set({
                    widgetSubscribeForm:{
                      pbFormID: pbFormID,
                      formLayout: formLayout,
                      showNameField: showNameField,
                      successAction:successAction,
                      successURL:successURL,
                      successMessage:successMessage,
                      formBtnText:formBtnText,
                      formBtnHeight:formBtnHeight,
                      formBtnHeightTablet:$('.formBtnHeightTablet').val(),
                      formBtnHeightMobile:$('.formBtnHeightMobile').val(),
                      formBtnWidth:formBtnWidth,
                      formBtnBgColor:formBtnBgColor,
                      formBtnHoverTextColor: $('.formBtnHoverTextColor').val(),
                      formBtnColor:formBtnColor,
                      formBtnHoverBgColor:formBtnHoverBgColor,
                      formBtnFontSize:formBtnFontSize,
                      formBtnFontSizeTablet:$('.formBtnFontSizeTablet').val(),
                      formBtnFontSizeMobile:$('.formBtnFontSizeMobile').val(),
                      formBtnBorderWidth:formBtnBorderWidth,
                      formBtnBorderColor:formBtnBorderColor,
                      formBtnBorderRadius:formBtnBorderRadius,
                      formBtnFontFamily:$('.formBtnFontFamily').val(),
                      formSuccessMessageColor:$('.formSuccessMessageColor').val(),
                      formDataSaveType: formDataSaveType,
                      formDataMailChimpApi:$('.formDataMailChimpApi').val(),
                      formDataMailChimpListId:$('.formDataMailChimpListId').val(),
                      isMcActive:$('.isMcActive').val(),
                      formbtnSelectedIcon:formbtnSelectedIcon,
                      formbtnIconPosition:$('.formbtnIconPosition').val(),
                      formbtnIconGap:$('.formbtnIconGap').val(),
                      formbtnIconAnimation:$('.formbtnIconAnimation').val(),
                      formIntegrations:{
                        getResponse:{
                          isGrActive:$('.isGrActive').val(),
                          GrApiKey:$('.GrApiKey').val(),
                          GrAccountName:$('.GrAccountName').val(),
                        },
                        campaignMonitor:{
                          isCmActive: $('.isCmActive').val(),
                          CmApiKey: $('.CmApiKey').val(),
                          CmAccountName: $('.CmAccountName').val(),
                        },
                        activeCampaign:{
                          isAcActive: $('.isAcActive').val(),
                          AcApiKey: $('.AcApiKey').val(),
                          AcApiURL: $('.AcApiURL').val(),
                          AcAccountName: $('.AcAccountName').val(),
                        },
                        drip:{
                          isDripActive: $('.isDripActive').val(),
                          DripApiKey: $('.DripApiKey').val(),
                          DripAccountName: $('.DripAccountName').val(),
                        },
                      }
                    }
                });
            break;
            case 'wigt-video': 

                videoMpfour = $('.videoMpfour').val();
                videoWebM = $('.videoWebM').val();
                videoThumb = $('.videoThumb').val();
                vidAutoPlay = $('.vidAutoPlay').val();
                vidLoop = $('.vidLoop').val(); 
                vidControls = $('.vidControls').val();

                this.model.set({
                    widgetVideo:{
                      videoWebM: videoWebM,
                      videoMpfour: videoMpfour,
                      videoThumb: videoThumb,
                      vidAutoPlay: vidAutoPlay,
                      vidLoop: vidLoop,
                      vidControls: vidControls
                    }
                });
            break;
            case 'wigt-pb-postSlider': 

                psAutoplay = $('.psAutoplay').val();
                psSlideDelay = $('.psSlideDelay').val();
                psSlideLoop = $('.psSlideLoop').val();
                psSlideTransition = $('.psSlideTransition').val();
                psPostsNumber = $('.psPostsNumber').val();
                psDots = $('.psDots').val();
                psArrows = $('.psArrows').val();
                psFtrImage = $('.psFtrImage').val();
                psFtrImageSize = $('.psFtrImageSize').val();
                psExcerpt = $('.psExcerpt').val();
                psReadMore = $('.psReadMore').val();
                psMoreLinkText = $('.psMoreLinkText').val();
                psHeadingSize = $('.psHeadingSize').val();
                psTextAlignment = $('.psTextAlignment').val();
                psBgColor = $('.psBgColor').val();
                psTxtColor = $('.psTxtColor').val();
                psHeadingTxtColor = $('.psHeadingTxtColor').val();
                psPostType = $('.psPostType').val();
                psPostsOrderBy = $('.psPostsOrderBy').val();
                psPostsOrder = $('.psPostsOrder').val();
                psPostsFilterBy = $('.psPostsFilterBy').val();
                psFilterValue = $('.psFilterValue').val();

                this.model.set({
                    widgetPBPostsSlider:{
                      psAutoplay: psAutoplay,
                      psSlideDelay: psSlideDelay,
                      psSlideLoop: psSlideLoop,
                      psSlideTransition: psSlideTransition,
                      psPostsNumber: psPostsNumber,
                      psDots: psDots,
                      psArrows: psArrows,
                      psFtrImage: psFtrImage,
                      psFtrImageSize: psFtrImageSize,
                      psExcerpt: psExcerpt,
                      psReadMore: psReadMore,
                      psMoreLinkText: psMoreLinkText,
                      psHeadingSize: psHeadingSize,
                      psTextAlignment: psTextAlignment,
                      psBgColor: psBgColor,
                      psTxtColor: psTxtColor,
                      psHeadingTxtColor: psHeadingTxtColor,
                      psPostType: psPostType,
                      psPostsOrderBy: psPostsOrderBy,
                      psPostsOrder: psPostsOrder,
                      psPostsFilterBy: psPostsFilterBy,
                      psFilterValue: psFilterValue,
                    }
                });
            break;
            case 'wigt-pb-icons':

                pbSelectedIcon = $('.pbSelectedIcon').children().attr('class');
                pbIconSize = $('.pbIconSize').val();
                pbIconRotation = $('.pbIconRotation').val();
                pbIconColor = $('.pbIconColor').val();
                pbIconLink = $('.pbIconLink').val();

                this.model.set({
                    widgetIcons:{
                      pbSelectedIcon: pbSelectedIcon,
                      pbIcStyle:$('.pbIcStyle').val(),
                      pbIconSize: pbIconSize,
                      pbIconRotation: pbIconRotation,
                      pbIconColor: pbIconColor,
                      pbIconLink: pbIconLink,
                      pbIcBgC:$('.pbIcBgC').val(),
                      pbIcBC:$('.pbIcBC').val(),
                      pbIcBW:$('.pbIcBW').val(),
                      pbIcBR:$('.pbIcBR').val(),
                      pbIcSHP:$('.pbIcSHP').val(),
                      pbIcSVP:$('.pbIcSVP').val(),
                      pbIcSDB:$('.pbIcSDB').val(),
                      pbIcSC:$('.pbIcSC').val(),
                      pbIcHC:$('.pbIcHC').val(),
                      pbIcHBgC:$('.pbIcHBgC').val(),
                      pbIcHAn:$('.pbIcHAn').val(),
                    }
                });
            break;
            case 'wigt-pb-counter': 
                var this_widget_counter = this.model.get('widgetCounter');
                pbCounterID = this_widget_counter['pbCounterID'];

                counterStartingNumber = $('.counterStartingNumber').val();
                counterEndingNumber = $('.counterEndingNumber').val();
                counterNumberPrefix = $('.counterNumberPrefix').val();
                counterNumberSuffix = $('.counterNumberSuffix').val();
                counterAnimationTime = $('.counterAnimationTime').val(); 
                counterTitle = $('.counterTitle').val();
                counterTextColor = $('.counterTextColor').val();
                counterTitleColor = $('.counterTitleColor').val();
                counterNumberFontSize = $('.counterNumberFontSize').val();
                counterTitleFontSize = $('.counterTitleFontSize').val();

                this.model.set({
                    widgetCounter:{
                      pbCounterID: pbCounterID,
                      counterStartingNumber: counterStartingNumber,
                      counterEndingNumber:counterEndingNumber,
                      counterNumberPrefix: counterNumberPrefix,
                      counterNumberSuffix: counterNumberSuffix,
                      counterAnimationTime: counterAnimationTime,
                      counterTitle: counterTitle,
                      counterTextColor: counterTextColor,
                      counterTitleColor: counterTitleColor,
                      counterNumberFontSize: counterNumberFontSize,
                      counterTitleFontSize: counterTitleFontSize,
                    }
                });
            break;
            case 'wigt-pb-audio':

                //audio widget
                audioOgg = $('.audioOgg').val();
                audioMpThree = $('.audioMpThree').val();
                audioAutoPlay = $('.audioAutoPlay').val();
                audioLoop = $('.audioLoop').val();
                audioControls = $('.audioControls').val();

                this.model.set({
                    widgetAudio:{
                      audioOgg: audioOgg,
                      audioMpThree: audioMpThree,
                      audioAutoPlay: audioAutoPlay,
                      audioLoop: audioLoop,
                      audioControls: audioControls
                    }
                });
            break;
            case 'wigt-pb-cards': 

                // Card Widget
                pbSelectedCardIcon = $('.pbSelectedCardIcon').children().attr('class');
                pbCardIconSize = $('.pbCardIconSize').val();
                pbCardIconRotation = $('.pbCardIconRotation').val();
                pbCardIconColor = $('.pbCardIconColor').val();
                pbCardTitleColor = $('.pbCardTitleColor').val();
                pbCardTitleSize = $('.pbCardTitleSize').val();
                pbCardDescColor = $('.pbCardDescColor').val();
                pbCardDescSize = $('.pbCardDescSize').val();
                pbCardTitle = $('.pbCardTitle').val();
                pbCardDesc = $('.pbCardDesc').val();

                this.model.set({
                    widgetCard:{
                      pbSelectedCardIcon: pbSelectedCardIcon,
                      pbCardIconSize: pbCardIconSize,
                      pbCardIconRotation: pbCardIconRotation,
                      pbCardIconColor: pbCardIconColor,
                      pbCardTitleColor: pbCardTitleColor,
                      pbCardTitleSize: pbCardTitleSize,
                      pbCardDescColor: pbCardDescColor,
                      pbCardDescSize: pbCardDescSize,
                      pbCardTitle: pbCardTitle,
                      pbCardDesc: pbCardDesc,
                      pbCardTitleSizeTablet: $('.pbCardTitleSizeTablet').val(),
                      pbCardTitleSizeMobile: $('.pbCardTitleSizeMobile').val(),
                      pbCardDescSizeTablet:$('.pbCardDescSizeTablet').val(),
                      pbCardDescSizeMobile:$('.pbCardDescSizeMobile').val(),
                    }
                });
            break;
            case 'wigt-pb-testimonial':

                //testimonial widget
                tsAuthorName = $('.tsAuthorName').val();
                tsJob = $('.tsJob').val();
                tsCompanyName = $('.tsCompanyName').val();
                tsTestimonial = $('.tsTestimonial').val();
                tsUserImg = $('.tsUserImg').val();
                tsImageShape = $('.tsImageShape').val();
                tsIconColor = $('.tsIconColor').val();
                tsIconSize = $('.tsIconSize').val();
                tsTextColor = $('.tsTextColor').val();
                tsTextSize = $('.tsTextSize').val();
                tsTestimonialColor = $('.tsTestimonialColor').val();
                tsTestimonialSize = $('.tsTestimonialSize').val();
                tsTextAlignment = $('.tsTextAlignment').val();

                this.model.set({
                    widgetTestimonial: {
                      tsAuthorName: tsAuthorName,
                      tsJob: tsJob,
                      tsCompanyName: tsCompanyName,
                      tsTestimonial: tsTestimonial,
                      tsUserImg: tsUserImg,
                      tsImageShape: tsImageShape,
                      tsIconColor: tsIconColor,
                      tsIconSize: tsIconSize,
                      tsTextColor: tsTextColor,
                      tsTextSize: tsTextSize,
                      tsTestimonialColor: tsTestimonialColor,
                      tsTestimonialSize:tsTestimonialSize,
                      tsTextAlignment: tsTextAlignment,
                    }
                });
            break;
            case 'wigt-pb-shortcode': 

                shortCodeInput = $('.shortCodeInput').val();
                this.model.set({
                    widgetShortCode: {
                      shortCodeInput: shortCodeInput,
                    }
                });
            break;
            case 'wigt-pb-countdown': 

                this.model.set({
                  widgetCowntdown: {
                    pbCountDownDate: $('.pbCountDownDate').val(),
                    pbCountDownTimezone: $('.pbCountDownTimezone').val(),
                    pbCountDownLabel: $('.pbCountDownLabel').val(),
                    pbCountDownColor: $('.pbCountDownColor').val(),
                    pbCountDownLabelColor: $('.pbCountDownLabelColor').val(),
                    pbCountDownTextSize: $('.pbCountDownTextSize').val(),
                    pbCountDownTextSizeTablet:$('.pbCountDownTextSizeTablet').val(),
                    pbCountDownTextSizeMobile:$('.pbCountDownTextSizeMobile').val(),
                    pbCountDownLabelTextSize: $('.pbCountDownLabelTextSize').val(),
                    pbCountDownLabelTextSizeTablet:$('.pbCountDownLabelTextSizeTablet').val(),
                    pbCountDownLabelTextSizeMobile:$('.pbCountDownLabelTextSizeMobile').val(),
                    pbCountDownLabelFontFamily:$('.pbCountDownLabelFontFamily').val(),
                    pbCountDownNumberFontFamily:$('.pbCountDownNumberFontFamily').val(),
                    pbCountDownType:$('.pbCountDownType').val(),
                    pbCountDownNumberBgColor:$('.pbCountDownNumberBgColor').val(),
                    pbCountDownNumberBorderRadius:$('.pbCountDownNumberBorderRadius').val(),
                    pbCountDownHGap:$('.pbCountDownHGap').val(),
                    pbCountDownHGapTablet:$('.pbCountDownHGapTablet').val(),
                    pbCountDownHGapMobile:$('.pbCountDownHGapMobile').val(),
                    pbCountDownVGap:$('.pbCountDownVGap').val(),
                    pbCountDownVGapTablet:$('.pbCountDownVGapTablet').val(),
                    pbCountDownVGapMobile:$('.pbCountDownVGapMobile').val(),
                    pbCountDownDateDays:$('.pbCountDownDateDays').val(),
                    pbCountDownDateHours:$('.pbCountDownDateHours').val(),
                    pbCountDownDateMins:$('.pbCountDownDateMins').val(),
                    pbCountDownDateSecs:$('.pbCountDownDateSecs').val(),
                    daysText:$('.daysText').val(),
                    hoursText:$('.hoursText').val(),
                    minutesText:$('.minutesText').val(),
                    secondsText:$('.secondsText').val(),
                    hideDays:$('.hideDays').val(),
                    hideHours:$('.hideHours').val(),
                    hideMinutes:$('.hideMinutes').val(),
                    hideSeconds:$('.hideSeconds').val(),
                  }
                });
            break;
            case 'wigt-pb-imageSlider': 

                // Image Slider Widget
                pbSliderAuto = $('.pbSliderAuto').val();
                pbSliderDelay = $('.pbSliderDelay').val();
                pbSliderPager = $('.pbSliderPager').val();
                pbSliderNav = $('.pbSliderNav').val();
                pbSliderRandom = $('.pbSliderRandom').val();
                pbSliderPause = $('.pbSliderPause').val();


                var pbSliderSlideList = [];
                var pbSliderContentList = [];

                $('.sliderImageSlidesContainer li').each(function(index){

                    pbSliderSlideList.push($( this ).children('.accordContentHolder').children('.slideImgURL').val() );

                    pbSliderContentThisObject = {};
                    pbSliderContentThisObject = {
                        imageSlideHeading: $( this ).children('.accordContentHolder').children('.imageSlideHeading').val(),
                        imageSlideDesc:$( this ).children('.accordContentHolder').children('.imageSlideDesc').val(),
                        imageSlideButtonText:$( this ).children('.accordContentHolder').children('.imageSlideButtonText').val(),
                        imageSlideButtonURL:$( this ).children('.accordContentHolder').children('.imageSlideButtonURL').val()
                    };

                    pbSliderContentList.push(pbSliderContentThisObject);

                });

                pbSliderImagesURL = pbSliderSlideList;

                slideHeadingBold = false; 
                slideHeadingItalic = false;
                slideHeadingUnderlined = false;
                if( $('.slideHeadingBold').is(':checked') ){
                    slideHeadingBold = true;
                }
                if( $('.slideHeadingItalic').is(':checked') ){
                    slideHeadingItalic = true;
                }
                if( $('.slideHeadingUnderlined').is(':checked') ){
                    slideHeadingUnderlined = true;
                }

                slideHeadingStyles = {
                    slideHeadingColor: $('.slideHeadingColor').val(),
                    slideHeadingSize: $('.slideHeadingSize').val(),
                    slideHeadingSizeTablet: $('.slideHeadingSizeTablet').val(),
                    slideHeadingSizeMobile: $('.slideHeadingSizeMobile').val(),
                    slideHeadingLetterSpacing: $('.slideHeadingLetterSpacing').val(),
                    slideHeadingLetterSpacingTablet:$('.slideHeadingLetterSpacingTablet').val(),
                    slideHeadingLetterSpacingMobile:$('.slideHeadingLetterSpacingMobile').val(),
                    slideHeadingLineHeight:$('.slideHeadingLineHeight').val(),
                    slideHeadingLineHeightTablet:$('.slideHeadingLineHeightTablet').val(),
                    slideHeadingLineHeightMobile:$('.slideHeadingLineHeightMobile').val(),
                    slideHeadingFontFamily: $('.slideHeadingFontFamily').val(),
                    slideHeadingBold: slideHeadingBold,
                    slideHeadingItalic: slideHeadingItalic,
                    slideHeadingUnderlined: slideHeadingUnderlined,
                };

                slideDescBold = false; 
                slideDescItalic = false;
                slideDescUnderlined = false;
                if( $('.slideDescBold').is(':checked') ){
                    slideDescBold = true;
                }
                if( $('.slideDescItalic').is(':checked') ){
                    slideDescItalic = true;
                }
                if( $('.slideDescUnderlined').is(':checked') ){
                    slideDescUnderlined = true;
                }

                slideDescStyles = {
                    slideDescColor: $('.slideDescColor').val(),
                    slideDescSize: $('.slideDescSize').val(),
                    slideDescSizeTablet:$('.slideDescSizeTablet').val(),
                    slideDescSizeMobile:$('.slideDescSizeMobile').val(),
                    slideDescLetterSpacing: $('.slideDescLetterSpacing').val(),
                    slideDescLetterSpacingTablet:$('.slideDescLetterSpacingTablet').val(),
                    slideDescLetterSpacingMobile:$('.slideDescLetterSpacingMobile').val(),
                    slideDescLineHeight:$('.slideDescLineHeight').val(),
                    slideDescLineHeightTablet:$('.slideDescLineHeightTablet').val(),
                    slideDescLineHeightMobile:$('.slideDescLineHeightMobile').val(),
                    slideDescFontFamily: $('.slideDescFontFamily').val(),
                    slideDescBold: slideDescBold,
                    slideDescItalic: slideDescItalic,
                    slideDescUnderlined: slideDescUnderlined,
                };

                slideButtonStyles = {
                    slideButtonBtnHeight: $('.slideButtonBtnHeight').val(),
                    slideButtonBtnHeightTablet:$('.slideButtonBtnHeightTablet').val(),
                    slideButtonBtnHeightMobile:$('.slideButtonBtnHeightMobile').val(),
                    slideButtonBtnWidth: $('.slideButtonBtnWidth').val(),
                    slideButtonBtnWidthTablet:$('.slideButtonBtnWidthTablet').val(),
                    slideButtonBtnWidthMobile:$('.slideButtonBtnWidthMobile').val(),
                    slideButtonBtnBgColor:$('.slideButtonBtnBgColor').val(),
                    slideButtonBtnColor:$('.slideButtonBtnColor').val(),
                    slideButtonBtnHoverBgColor:$('.slideButtonBtnHoverBgColor').val(),
                    slideButtonBtnHoverTextColor:$('.slideButtonBtnHoverTextColor').val(),
                    slideButtonBtnFontSize:$('.slideButtonBtnFontSize').val(),
                    slideButtonBtnFontSizeTablet:$('.slideButtonBtnFontSizeTablet').val(),
                    slideButtonBtnFontSizeMobile:$('.slideButtonBtnFontSizeMobile').val(),
                    slideButtonBtnFontFamily:$('.slideButtonBtnFontFamily').val(),
                    slideButtonBtnFontLetterSpacing:$('.slideButtonBtnFontLetterSpacing').val(),
                    slideButtonBtnFontLetterSpacingTablet:$('.slideButtonBtnFontLetterSpacingTablet').val(),
                    slideButtonBtnFontLetterSpacingMobile:$('.slideButtonBtnFontLetterSpacingMobile').val(),
                    slideButtonBtnBorderWidth:$('.slideButtonBtnBorderWidth').val(),
                    slideButtonBtnBorderColor:$('.slideButtonBtnBorderColor').val(),
                    slideButtonBtnBorderRadius:$('.slideButtonBtnBorderRadius').val()
                }

                this.model.set({
                    widgetImageSlider: {
                      pbSliderImagesURL: pbSliderImagesURL,
                      pbSliderContent: pbSliderContentList,
                      slideHeadingStyles: slideHeadingStyles,
                      slideDescStyles: slideDescStyles,
                      slideButtonStyles: slideButtonStyles,
                      pbSliderHeight: $('.pbSliderHeight').val(),
                      pbSliderHeightTablet:$('.pbSliderHeightTablet').val(),
                      pbSliderHeightMobile:$('.pbSliderHeightMobile').val(),
                      pbSliderHeightUnit: $('.pbSliderHeightUnit').val(),
                      pbSliderHeightUnitTablet:$('.pbSliderHeightUnitTablet').val(),
                      pbSliderHeightUnitMobile:$('.pbSliderHeightUnitMobile').val(),
                      pbSliderContentBgColor: $('.pbSliderContentBgColor').val(),
                      pbSliderAuto:  $('.pbSliderAuto').val(),
                      pbSliderDelay:  $('.pbSliderDelay').val(),
                      pbSliderPager:  $('.pbSliderPager').val(),
                      pbSliderNav:  $('.pbSliderNav').val(),
                      pbSliderRandom:  $('.pbSliderRandom').val(),
                      pbSliderPause:  $('.pbSliderPause').val(),
                    }
                });
            break;
            case 'wigt-pb-progressBar': 
                this.model.set({
                    widgetProgressBar: {
                      pbProgressBarTitle: $('.pbProgressBarTitle').val(),
                      pbProgressBarPrecentage: $('.pbProgressBarPrecentage').val(),
                      pbProgressBarDisplayPrecentage: $('.pbProgressBarDisplayPrecentage').val(),
                      pbProgressBarText: $('.pbProgressBarText').val(),
                      pbProgressBarTitleColor: $('.pbProgressBarTitleColor').val(),
                      pbProgressBarTextColor: $('.pbProgressBarTextColor').val(),
                      pbProgressBarColor: $('.pbProgressBarColor').val(),
                      pbProgressBarBgColor: $('.pbProgressBarBgColor').val(),
                      pbProgressBarTitleSize: $('.pbProgressBarTitleSize').val(),
                      pbProgressBarHeight: $('.pbProgressBarHeight').val(),
                      pbProgressBarTextSize: $('.pbProgressBarTextSize').val(),
                      pbProgressBarTextFontFamily: $('.pbProgressBarTextFontFamily').val(),
                    }
                });
            break;
            case 'wigt-pb-pricing': 
                var pricingeditorID = 'pbPricingContent';
                if($('#wp-'+pricingeditorID+'-wrap').hasClass("tmce-active")){
                    var pbPricingContent = tinyMCE.get(pricingeditorID).getContent({format : 'raw'});
                }else{
                    var pbPricingContent = $('#'+pricingeditorID).val();
                }
                btnicon = $('.pricingbtnSelectedIconpbicp-auto').val();
                if (btnicon != '') {
                 pricingbtnSelectedIcon = $('.pricingbtnSelectedIcon').children().attr('class');
                }else{
                 pricingbtnSelectedIcon = '';
                }
                this.model.set({
                    widgetPricing: {
                      pbPricingHeaderText: $('.pbPricingHeaderText').val(),
                      pbPricingContent: pbPricingContent,
                      pbPricingHeaderTextColor: $('.pbPricingHeaderTextColor').val(),
                      pbPricingHeaderBgColor: $('.pbPricingHeaderBgColor').val(),
                      pbPricingHeaderTextSize: $('.pbPricingHeaderTextSize').val(),
                      pbPricingBorderWidth: $('.pbPricingBorderWidth').val(),
                      pbPricingBorderColor: $('.pbPricingBorderColor').val(),
                      pbPricingButtonSectionBgColor: $('.pbPricingButtonSectionBgColor').val(),
                      pricingbtnText: $('.pricingbtnText').val(),
                      pricingbtnLink: $('.pricingbtnLink').val(),
                      pricingbtnTextColor: $('.pricingbtnTextColor').val(),
                      pricingbtnFontSize: $('.pricingbtnFontSize').val(),
                      pricingbtnFontSizeTablet:$('.pricingbtnFontSizeTablet').val(),
                      pricingbtnFontSizeMobile:$('.pricingbtnFontSizeMobile').val(),
                      pricingbtnBgColor: $('.pricingbtnBgColor').val(),
                      pricingbtnWidth: $('.pricingbtnWidth').val(),
                      pricingbtnWidthPercent: $('.pricingbtnWidthPercent').val(),
                      pricingbtnWidthPercentTablet:$('.pricingbtnWidthPercentTablet').val(),
                      pricingbtnWidthPercentMobile:$('.pricingbtnWidthPercentMobile').val(),
                      pricingbtnWidthUnit: $('.pricingbtnWidthUnit').val(),
                      pricingbtnWidthUnitTablet: $('.pricingbtnWidthUnitTablet').val(),
                      pricingbtnWidthUnitMobile: $('.pricingbtnWidthUnitMobile').val(),
                      pricingbtnHeight: $('.pricingbtnHeight').val(),
                      pricingbtnHeightTablet:$('.pricingbtnHeightTablet').val(),
                      pricingbtnHeightMobile:$('.pricingbtnHeightMobile').val(),
                      pricingbtnHoverBgColor: $('.pricingbtnHoverBgColor').val(),
                      pricingbtnHoverTextColor: $('.pricingbtnHoverTextColor').val(),
                      pricingbtnBlankAttr: $('.pricingbtnBlankAttr').val(),
                      pricingbtnBorderColor: $('.pricingbtnBorderColor').val(),
                      pricingbtnBorderWidth: $('.pricingbtnBorderWidth').val(),
                      pricingbtnBorderRadius: $('.pricingbtnBorderRadius').val(),
                      pricingbtnButtonAlignment: $('.pricingbtnButtonAlignment').val(),
                      pricingbtnButtonAlignmentTablet: $('.pricingbtnButtonAlignmentTablet').val(),
                      pricingbtnButtonAlignmentMobile: $('.pricingbtnButtonAlignmentMobile').val(),
                      pricingbtnButtonFontFamily: $('.pricingbtnButtonFontFamily').val(),
                      pricingbtnSelectedIcon: pricingbtnSelectedIcon,
                      pricingbtnIconPosition: $('.pricingbtnIconPosition').val(),
                      pricingbtnIconAnimation: $('.pricingbtnIconAnimation').val(),
                      pricingbtnIconGap: $('.pricingbtnIconGap').val(),
                    }
                });
            break;

            case 'wigt-pb-imgCarousel': 

                // Image Carousel Widget
                var pbCarouselSlideList = [];

                $('.carouselSlidesContainer li').each(function(index){
                    pbCarouselSlideList.push($( this ).children('.accordContentHolder').children('.carouselImgURL').val() );
                });

                imgCarouselSlidesURL = pbCarouselSlideList;

                this.model.set({
                    widgetImgCarousel:{
                      pbImgCarouselAutoplay: $('.pbImgCarouselAutoplay').val(),
                      pbImgCarouselDelay: $('.pbImgCarouselDelay').val(),
                      imgCarouselSlideLoop: $('.imgCarouselSlideLoop').val(),
                      imgCarouselSlideTransition: $('.imgCarouselSlideTransition').val(),
                      imgCarouselPagination: $('.imgCarouselPagination').val(),
                      pbImgCarouselNav: $('.pbImgCarouselNav').val(),
                      imgCarouselSlidesURL: imgCarouselSlidesURL,
                    }
                });
            break;

            case 'wigt-pb-wooCommerceProducts': 
                this.model.set({
                    widgetWooPorducts:{
                      wooProductsColumn: $('.wooProductsColumn').val(),
                      wooProductsCount: $('.wooProductsCount').val(),
                      wooProductsCategories: $('.wooProductsCategories').val(),
                      wooProductsTags:$('.wooProductsTags').val(),
                      wooProductsOrderBy:$('.wooProductsOrderBy').val(),
                      wooProductsOrder:$('.wooProductsOrder').val(),
                    }
                });
            break;
            case 'wigt-pb-iconList':
                // iconList Widget
                var pbIconListAllItems = [];

                $('.iconListItemsContainer li').each(function(index){
                    var thisListValues = {
                        iconListItemText: $( this ).children('.accordContentHolder').children('.iconListItemText').val(),
                        iconListItemIcon: $( this ).children('.accordContentHolder').children('.iconListItemIcon').val(),
                        iconListItemLink: $( this ).children('.accordContentHolder').children('.iconListItemLink').val(),
                        iconListItemLinkOpen: $( this ).children('.accordContentHolder').children('.iconListItemLinkOpen').val()
                    }
                    pbIconListAllItems.push( thisListValues );
                });

                pbIconListAllItemsArray = pbIconListAllItems;
                this.model.set({
                    widgetIconList:{
                      iconListComplete: pbIconListAllItemsArray,
                      iconListLineHeight:$('.iconListLineHeight').val(),
                      iconListAlignment:$('.iconListAlignment').val(),
                      iconListIconSize:$('.iconListIconSize').val(),
                      iconListIconSizeTablet:$('.iconListIconSizeTablet').val(),
                      iconListIconSizeMobile:$('.iconListIconSizeMobile').val(),
                      iconListIconColor: $('.iconListIconColor').val(),
                      iconListTextSize:$('.iconListTextSize').val(),
                      iconListTextSizeTablet:$('.iconListTextSizeTablet').val(),
                      iconListTextSizeMobile:$('.iconListTextSizeMobile').val(),
                      iconListTextIndent:$('.iconListTextIndent').val(),
                      iconListTextIndentTablet:$('.iconListTextIndentTablet').val(),
                      iconListTextIndentMobile:$('.iconListTextIndentMobile').val(),
                      iconListTextColor:$('.iconListTextColor').val(),
                      iconListTextFontFamily:$('.iconListTextFontFamily').val(),
                    }
                });
            break;
            case 'wigt-pb-spacer': 
                this.model.set({
                    widgetVerticalSpace:{
                      widgetVerticalSpaceValue: $('.widgetVerticalSpaceValue').val(),
                      widgetVerticalSpaceValueTablet:$('.widgetVerticalSpaceValueTablet').val(),
                      widgetVerticalSpaceValueMobile:$('.widgetVerticalSpaceValueMobile').val()
                    }
                });
            break;
            case 'wigt-pb-break': 
                this.model.set({
                    widgetBreaker:{
                      widgetBreakerStyle: $('.widgetBreakerStyle').val(),
                      widgetBreakerWeight: $('.widgetBreakerWeight').val(),
                      widgetBreakerColor: $('.widgetBreakerColor').val(),
                      widgetBreakerWidth: $('.widgetBreakerWidth').val(),
                      widgetBreakerAlignment: $('.widgetBreakerAlignment').val(),
                      widgetBreakerSpacing: $('.widgetBreakerSpacing').val(),
                    }
                });
            break;
            case 'wigt-pb-anchor': 
                this.model.set({
                    widgetAnchor:{
                      wdtanchorid: $('.wdtanchorid').val(),
                    }
                });
            break;
            case 'wigt-pb-formBuilder': 


                if (updatedWidgetOpName != '' && typeof(updatedWidgetOpName) != 'undefined' && updatedWidgetOpName != ' ' ) {

                    var thischangedValue = $('[data-optname="'+updatedWidgetOpName+'"]').val();
                    if (updatedWidgetOpName == 'formBuilderbtnSelectedIcon') {
                        thischangedValue = $('.formBuilderbtnSelectedIcon').children().attr('class');
                    }

                    
                    if (updatedWidgetOpName == 'slideListEdit') {
                        
                        var pbFormBuilderAllFields = [];

                        $('.formFieldItemsContainer li').each(function(index){
                            var thisListValues = {
                                fbFieldType: $( this ).children('.accordContentHolder').children('.fbFieldType').val(),
                                thisFieldOptions: {
                                    fbFieldLabel: $( this ).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldLabel').val(),
                                    fbFieldName: $( this ).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldName').val(),
                                    fbFieldPlaceHolder: $( this ).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldPlaceHolder').val(),
                                    fbFieldRequired: $( this ).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldRequired').val(),
                                    fbFieldWidth: $( this ).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldWidth').val(),
                                    multiOptionFieldValues: $( this ).children('.accordContentHolder').children('.multiOptionField').children('.multiOptionFieldValues').val(),
                                    fbtextareaRows: $( this ).children('.accordContentHolder').children('.textareaOptions').children('.fbtextareaRows').val(),
                                    displayFieldsInline: $( this ).children('.accordContentHolder').children('.multiOptionField').children('.displayFieldsInline').val(),
                                    fbFieldPreset: $( this ).children('.accordContentHolder').children('.thisFieldOptions').children('.fbFieldPreset').val(),
                                    fbTextContent: $( this ).children('.accordContentHolder').children('.textHtmlFeildOptions').children('.fbTextContent').val(),
                                }
                            }

                            pbFormBuilderAllFields.push( thisListValues );

                        });

                        pbFormBuilderAllFieldsArray = pbFormBuilderAllFields;

                        updatedWidgetOpName = 'widgetPbFbFormFeilds';
                        thischangedValue = pbFormBuilderAllFieldsArray;
                        renderFormBuilderFieldsList(pbFormBuilderAllFieldsArray);

                    }

                    if (typeof(thischangedValue) == 'undefined' ) {
                        break;
                    }

                    var thisWidgetDataAttrNew = _.clone(this.model.get('widgetFormBuilder'));

                    setUpdateObject(thisWidgetDataAttrNew, updatedWidgetOpName, thischangedValue);

                    this.model.set({
                        widgetFormBuilder :thisWidgetDataAttrNew
                    }); // prev took 120-150ms / Now only 4-10ms

                    delete thisWidgetDataAttrNew;

                }

                /*  
                this.model.set({
                    widgetFormBuilder:{
                      widgetPbFbFormFeilds:pbFormBuilderAllFieldsArray, 
                      widgetPbFbFormFeildOptions: {
                            formBuilderFieldSize: $('.formBuilderFieldSize').val() ,
                            formBuilderFieldLabelDisplay: $('.formBuilderFieldLabelDisplay').val() ,
                            formBuilderFieldBgColor: $('.formBuilderFieldBgColor').val() ,
                            formBuilderFieldColor: $('.formBuilderFieldColor').val() ,
                            formBuilderFieldBorderColor: $('.formBuilderFieldBorderColor').val() ,
                            formBuilderFieldBorderWidth: $('.formBuilderFieldBorderWidth').val() ,
                            formBuilderFieldBorderRadius: $('.formBuilderFieldBorderRadius').val() ,
                            formBuilderLabelSize: $('.formBuilderLabelSize').val(),
                            formBuilderLabelSizeTablet: $('.formBuilderLabelSizeTablet').val(),
                            formBuilderLabelSizeMobile: $('.formBuilderLabelSizeMobile').val(),
                            formBuilderLabelColor:$('.formBuilderLabelColor').val(),
                            formBuilderFieldVGap:$('.formBuilderFieldVGap').val(),
                            formBuilderFieldHGap:$('.formBuilderFieldHGap').val(),
                            formBuilderFieldFontFamily:$('.formBuilderFieldFontFamily').val(),
                      },
                      widgetPbFbFormSubmitOptions:{
                            formBuilderBtnText: $('.formBuilderBtnText').val(),
                            formBuilderBtnSize: $('.formBuilderBtnSize').val(),
                            formBuilderBtnWidth: $('.formBuilderBtnWidth').val(),
                            formBuilderBtnBgColor: $('.formBuilderBtnBgColor').val(),
                            formBuilderBtnColor: $('.formBuilderBtnColor').val(),
                            formBuilderBtnHoverBgColor: $('.formBuilderBtnHoverBgColor').val(),
                            formBuilderBtnHoverTextColor: $('.formBuilderBtnHoverTextColor').val(),
                            formBuilderBtnFontSize: $('.formBuilderBtnFontSize').val(),
                            formBuilderBtnFontSizeTablet:$('.formBuilderBtnFontSizeTablet').val(),
                            formBuilderBtnFontSizeMobile:$('.formBuilderBtnFontSizeMobile').val(),
                            formBuilderBtnBorderWidth: $('.formBuilderBtnBorderWidth').val(),
                            formBuilderBtnBorderColor: $('.formBuilderBtnBorderColor').val(),
                            formBuilderBtnBorderRadius: $('.formBuilderBtnBorderRadius').val(),
                            formBuilderBtnAlignment: $('.formBuilderBtnAlignment').val(),
                            formBuilderBtnHGap: $('.formBuilderBtnHGap').val(),
                            formBuilderBtnVGap: $('.formBuilderBtnVGap').val(),
                            formBuilderbtnSelectedIcon:formBuilderbtnSelectedIcon,
                            formBuilderbtnIconPosition:$('.formBuilderbtnIconPosition').val(),
                            formBuilderbtnIconGap:$('.formBuilderbtnIconGap').val(),
                            formBuilderbtnIconAnimation:$('.formBuilderbtnIconAnimation').val(),
                            formBuilderBtnFontFamily:$('.formBuilderBtnFontFamily').val(),
                      },
                      widgetPbFbFormEmailOptions:{
                            formEmailformName: $('.formEmailformName').val(),
                            formEmailTo: $('.formEmailTo').val(),
                            formEmailfromEmail: $('.formEmailfromEmail').val(),
                            formEmailSubject: $('.formEmailSubject').val(),
                            formEmailFromEmail: $('.formEmailFromEmail').val(),
                            formEmailName: $('.formEmailName').val(),
                            formEmailFormat: $('.formEmailFormat').val(),
                            formSuccessMessage: $('.formSuccessMessage').val(),
                            formSuccessAction:$('.formSuccessAction').val(),
                            formSuccessActionURL:$('.formSuccessActionURL').val(),
                            formSuccessCustomAction:$('.formSuccessCustomAction').val(),
                            onSuccessOptin:$('.onSuccessOptin').val(),
                            formDuplicateMessage: $('.formDuplicateMessage').val(),
                            formDuplicateCustomAction: $('.formDuplicateCustomAction').val(),
                            formFailureMessage: $('.formFailureMessage').val(),
                            formRequiredFieldMessage: $('.formRequiredFieldMessage').val(),
                            formFailureCustomAction: $('.formFailureCustomAction').val(),
                      },
                      widgetPbFbFormMailChimp: {
                         formBuilderEnableMailChimp: $('.formBuilderEnableMailChimp').val(),
                         formBuilderMCAccountName: $('.formBuilderMCAccountName').val(),
                         formBuilderMCApiKey: $('.formBuilderMCApiKey').val(),
                         formBuilderMCDoubleOptin: $('.formBuilderMCDoubleOptin').val(),
                         formBuilderMCGroups: $('.formBuilderMCGroups').val(),
                         formBuilderMCTags: $('.formBuilderMCTags').val(),
                         formBuilderEnableGetResponse: $('.formBuilderEnableGetResponse').val(),
                         formBuilderGRAccountName: $('.formBuilderGRAccountName').val(),
                         formBuilderGRApiKey: $('.formBuilderGRApiKey').val(),
                         formBuilderEnableCM: $('.formBuilderEnableCM').val(),
                         formBuilderCMAccountName: $('.formBuilderCMAccountName').val(),
                         formBuilderCMApiKey: $('.formBuilderCMApiKey').val(),
                         formBuilderEnableAC: $('.formBuilderEnableAC').val(),
                         formBuilderACAccountName: $('.formBuilderACAccountName').val(),
                         formBuilderACApiKey: $('.formBuilderACApiKey').val(),
                         formBuilderACApiUrl: $('.formBuilderACApiUrl').val(),
                         formBuilderEnableDrip: $('.formBuilderEnableDrip').val(),
                         formBuilderDripAccountName: $('.formBuilderDripAccountName').val(),
                         formBuilderDripApiKey: $('.formBuilderDripApiKey').val(),
                         formBuilderEnableAweber: $('.formBuilderEnableAweber').val(),
                         formBuilderAweberList: $('.formBuilderAweberList').val(),
                         formBuilderEnableConvertKit: $('.formBuilderEnableConvertKit').val(),
                         formBuilderConvertKitApiKey: $('.formBuilderConvertKitApiKey').val(),
                         formBuilderConvertKitAccountName: $('.formBuilderConvertKitAccountName').val(),
                         wfb_cWebHook:$('.wfb_cWebHook').val(),
                         wfb_cWebHookURL:$('.wfb_cWebHookURL').val(),
                         wfb_cWebHookSuccResponse:$('.wfb_cWebHookSuccResponse').val(),
                         wfb_cWebHookType: $('.wfb_cWebHookType').val(),
                         fbgreCaptcha:$('.fbgreCaptcha').val(), // Google Captcha
                         fbgreCSiteKey:$('.fbgreCSiteKey').val(), // Google Captcha
                         fbgreCSiteSecret:$('.fbgreCSiteSecret').val(),
                         wfbMHEnable: $('.wfbMHEnable').val(), // Market Hero Enable
                         wfbMHApiKey:$('.wfbMHApiKey').val(),
                         wfbSibEnable: $('.wfbSibEnable').val(), // SendInBlue Enable
                         wfbSibApiKey:$('.wfbSibApiKey').val(),
                         wfbSibListIds:$('.wfbSibListIds').val(),
                         wfbMPEnable: $('.wfbMPEnable').val(), // MailPoet  Enable
                         wfbMPList:$('.wfbMPList').val(),
                         wfbMPConfEmail:$('.wfbMPConfEmail').val(),
                         wfbMPWelcEmail:$('.wfbMPWelcEmail').val(),
                         wfbCCEnable: $('.wfbCCEnable').val(), // ContantContact  Enable
                         wfbCCLists:$('.wfbCCLists').val(),
                      },
                      widgetPbFbFormAllowDuplicates:$('.widgetPbFbFormAllowDuplicates').val(),
                      formCustomHTML:$('.formCustomHTML').val(),
                    }
                });
                */
            break;
            case 'wigt-pb-text': 

                if (updatedWidgetOpName != '' && typeof(updatedWidgetOpName) != 'undefined' && updatedWidgetOpName != ' ' ) {

                    var thischangedValue = $('[data-optname="'+updatedWidgetOpName+'"]').val();
                    if (updatedWidgetOpName == 'widgetTextBold' || updatedWidgetOpName == 'widgetTextItalic' || updatedWidgetOpName == 'widgetTextUnderlined') {
                        thischangedValue = false;
                        if( $('.'+updatedWidgetOpName).is(':checked') ){
                            thischangedValue = true;
                        }
                    }

                    if (typeof(thischangedValue) == 'undefined' ) {
                        break;
                    }

                    var thisWidgetDataAttrNew = _.clone(this.model.get('widgetText') );

                    setUpdateObject(thisWidgetDataAttrNew, updatedWidgetOpName, thischangedValue);

                    this.model.set({
                        widgetText : thisWidgetDataAttrNew
                    }); // prev took 120-150ms / Now only 4-10ms

                    delete thisWidgetDataAttrNew;

                    // console.log(updatedWidgetOpName);
                    // console.log(thischangedValue);
                    
                }
            

                /*
                this.model.set({
                    widgetText:{
                      widgetTextContent:  $('.widgetTextContent').val(),
                      widgetTextAlignment: $('.widgetTextAlignment').val(),
                      widgetTextAlignmentTablet: $('.widgetTextAlignmentTablet').val(),
                      widgetTextAlignmentMobile: $('.widgetTextAlignmentMobile').val(),
                      widgetTextTag: $('.widgetTextTag').val(),
                      wtextLink: $('.wtextLink').val(),
                      widgetTextColor: $('.widgetTextColor').val(),
                      widgetTextSize: $('.widgetTextSize').val(),
                      widgetTextFamily: $('.widgetTextFamily').val(),
                      widgetTextWeight: $('.widgetTextWeight').val(),
                      widgetTextTransform: $('.widgetTextTransform').val(),
                      widgetTextLineHeight: $('.widgetTextLineHeight').val(),
                      widgetTextSpacing: $('.widgetTextSpacing').val(),
                      widgetTextBold: widgetTextBold,
                      widgetTextItalic: widgetTextItalic,
                      widgetTextUnderlined: widgetTextUnderlined,
                      widgetTextSizeTablet:$('.widgetTextSizeTablet').val(),
                      widgetTextSizeMobile:$('.widgetTextSizeMobile').val(),
                      widgetTextLineHeightTablet:$('.widgetTextLineHeightTablet').val(),
                      widgetTextLineHeightMobile:$('.widgetTextLineHeightMobile').val(),
                      widgetTextSpacingTablet:$('.widgetTextSpacingTablet').val(),
                      widgetTextSpacingMobile:$('.widgetTextSpacingMobile').val()
                    }
                });
                */ // Improvements : Decreased lag from 20 ms to 4ms.
                
                var widgetCurrentType = 'widgetText';
            break;
            case 'wigt-pb-liveText': 

              var wlteditorID = 'wltc';
              if($('#wp-'+wlteditorID+'-wrap').hasClass("tmce-active")){
                var widgetLiveTextEditorData = tinyMCE.get(wlteditorID).getContent({format : 'raw'});
              }else{
                var widgetLiveTextEditorData = $('#'+wlteditorID).val();
              }

              wltfs = this.model.get('wLText');
              wltfs = wltfs['wltfs'];
              this.model.set({
                wLText:{
                  wltc:  widgetLiveTextEditorData,
                  wltfs:  wltfs,
                }
              });
            break;
            case 'wigt-pb-embededVideo':
                this.model.set({
                    widgetEmbedVideo:{
                      widgetEvidVideoType: $('.widgetEvidVideoType').val(),
                      widgetEvidVideoLink: $('.widgetEvidVideoLink').val(),
                      widgetEvidVideoAutoplay:$('.widgetEvidVideoAutoplay').val(),
                      widgetEvidVideoPlayerControls:$('.widgetEvidVideoPlayerControls').val(),
                      widgetEvidVideoTitle:$('.widgetEvidVideoTitle').val(),
                      widgetEvidVideoSuggested:$('.widgetEvidVideoSuggested').val(),
                      widgetEvidImageOverlay: $('.widgetEvidImageOverlay').val(),
                      widgetEvidImageUrl:$('.widgetEvidImageUrl').val(),
                      widgetEvidImageIcon:$('.widgetEvidImageIcon').val(),
                      widgetEvidImageIconColor:$('.widgetEvidImageIconColor').val(),
                      widgetEvidImageLightbox:$('.widgetEvidImageLightbox').val()
                    }
                });
            break;
            case 'wigt-pb-popupClose':

                closeBtnBold = false; 
                closeBtnItalic = false;
                closeBtnUnderlined = false;
                if( $('.closeBtnBold').is(':checked') ){
                    closeBtnBold = true;
                }
                if( $('.closeBtnItalic').is(':checked') ){
                    closeBtnItalic = true;
                }
                if( $('.closeBtnUnderlined').is(':checked') ){
                    closeBtnUnderlined = true;
                }

                this.model.set({
                  widgetClosePopUp:{
                    closeBtnText: $('.closeBtnText').val(),
                    closeBtnTextColor: $('.closeBtnTextColor').val(),
                    closeBtnFontSize: $('.closeBtnFontSize').val(),
                    closeBtnFontSizeTablet:$('.closeBtnFontSizeTablet').val(),
                    closeBtnFontSizeMobile:$('.closeBtnFontSizeMobile').val(),
                    closeBtnColor: $('.closeBtnColor').val(),
                    closeBtnBgColor: $('.closeBtnBgColor').val(),
                    closeBtnWidth: $('.closeBtnWidth').val(),
                    closeBtnWidthPercent:$('.closeBtnWidthPercent').val(),
                    closeBtnWidthUnit: $('.closeBtnWidthUnit').val(),
                    closeBtnWidthUnitTablet: $('.closeBtnWidthUnitTablet').val(),
                    closeBtnWidthUnitMobile: $('.closeBtnWidthUnitMobile').val(),
                    closeBtnWidthPercentTablet:$('.closeBtnWidthPercentTablet').val(),
                    closeBtnWidthPercentMobile:$('.closeBtnWidthPercentMobile').val(),
                    closeBtnHeight: $('.closeBtnHeight').val(),
                    closeBtnHeightTablet:$('.closeBtnHeightTablet').val(),
                    closeBtnHeightMobile:$('.closeBtnHeightMobile').val(),
                    closeBtnHoverBgColor: $('.closeBtnHoverBgColor').val(),
                    closeBtnHoverColor: $('.closeBtnHoverColor').val(),
                    closeBtnBlankAttr: $('.closeBtnBlankAttr').val(),
                    closeBtnBorderColor: $('.closeBtnBorderColor').val(),
                    closeBtnBorderWidth: $('.closeBtnBorderWidth').val(),
                    closeBtnBorderRadius: $('.closeBtnBorderRadius').val(),
                    closeBtnButtonAlignment: $('.closeBtnButtonAlignment').val(),
                    closeBtnButtonFontFamily: $('.closeBtnButtonFontFamily').val(),
                    closeBtnBold: closeBtnBold,
                    closeBtnItalic: closeBtnItalic,
                    closeBtnUnderlined: closeBtnUnderlined,
                    }
                });
            break;
            case 'wigt-pb-testimonialCarousel': 

                // Image Carousel Widget
                var testimonialsList = [];
                $('.testimonialCarSlidesContainer li').each(function(index){
                  var thisListValues = {
                    fbFieldType: $( this ).children('.accordContentHolder').children('.fbFieldType').val(),
                    tct:$( this ).children('.accordContentHolder').children('.tct').val(),
                    tcn:$( this ).children('.accordContentHolder').children('.tcn').val(),
                    tcj:$( this ).children('.accordContentHolder').children('.tcj').val(),
                    tcl:$( this ).children('.accordContentHolder').children('.tcl').val(),
                    tci:$( this ).children('.accordContentHolder').children('.tci').val(),
                  };
                  testimonialsList.push( thisListValues );
                });

                this.model.set({
                    widgetTCarousel:{
                      tCarOps:{
                        tCarAutoplay: $('.tCarAutoplay').val(),
                        tCarDelay: $('.tCarDelay').val(),
                        tCarSlideLoop: $('.tCarSlideLoop').val(),
                        tCarSlideTransition: $('.tCarSlideTransition').val(),
                        tCarPagination: $('.tCarPagination').val(),
                        tCarNav: $('.tCarNav').val(),
                        tNSlides: $('.tNSlides').val(),
                      },
                      tCarSlides: testimonialsList,
                      tDesignOps:{
                        tcic: $('.tcic').val(),
                        tcis: $('.tcis').val(),
                        tcist: $('.tcist').val(),
                        tcism: $('.tcism').val(),
                        tcntc: $('.tcntc').val(),
                        tcntf: $('.tcntf').val(),
                        tcnts: $('.tcnts').val(),
                        tcntst: $('.tcntst').val(),
                        tcntsm: $('.tcntsm').val(),
                        tcttc: $('.tcttc').val(),
                        tcttf: $('.tcttf').val(),
                        tctts: $('.tctts').val(),
                        tcttst: $('.tcttst').val(),
                        tcttsm: $('.tcttsm').val(),
                        tcca: $('.tcca').val(),
                        tcir: $('.tcir').val(),
                        tcisi: $('.tcisi').val(),
                      }
                    }
                });
            break;
            case 'wigt-pb-poOptins':
                this.model.set({
                    widgetPoOptins:{
                      widgetOptinId: $('.widgetOptinId').val(),
                    }
                });
            break;
            case 'wigt-pb-navmenu':
                var pbNavListAllItems = [];

                $('.customNavItemsContainer li').each(function(index){
                    var thisListValues = {
                        cnilab: $( this ).children('.accordContentHolder').children('.cnilab').val(),
                        cniurl: $( this ).children('.accordContentHolder').children('.cniurl').val(),
                    }
                    pbNavListAllItems.push( thisListValues );
                });

                this.model.set({
                    widgetNavBuilder:{
                      navItems: pbNavListAllItems,
                      navStyle: {
                        cnsfc: $('.cnsfc').val(),
                        cnsfhc: $('.cnsfhc').val(),
                        cnsbc: $('.cnsbc').val(),
                        cnshbc: $('.cnshbc').val(),
                        cnsnic: $('.cnsnic').val(),
                        cnsfs: $('.cnsfs').val(),
                        cnsfst: $('.cnsfst').val(),
                        cnsfsm: $('.cnsfsm').val(),
                        cnslg: $('.cnslg').val(),
                        cnslh: $('.cnslh').val(),
                        cnsff: $('.cnsff').val(),
                        cnslourl: $('.cnslourl').val(),
                        cnslos: $('.cnslos').val(),
                        cnslayout: $('.cnslayout').val(),
                      }
                    }
                });
            break;
            case 'wigt-pb-gallery':

                var allGalleryItems = [];

                $('.customImageGalleryItems li').each(function(index){
                    var thisListValues = {
                        gur: $( this ).children('.accordContentHolder').children('.gallItemUrl').val(),
                        gti: $( this ).children('.accordContentHolder').children('.gallItemTitle').val(),
                        gca: $( this ).children('.accordContentHolder').children('.gallItemCaption').val(),
                    }
                    allGalleryItems.push( thisListValues );

                });

                this.model.set({
                    widgetIGallery:{
                        gallItems: allGalleryItems,
                        gallStyles:{
                            wgType: $('.wgType').val(),
                            wgGC: $('.wgGC').val(),
                            wgGCT: $('.wgGCT').val(),
                            wgGCM: $('.wgGCM').val(),
                            wgGCG: $('.wgGCG').val(),
                            wgISD: $('.wgISD').val(),
                            wgICW: $('.wgICW').val(),
                            wgICWT: $('.wgICWT').val(),
                            wgICWM: $('.wgICWM').val(),
                            wgICH: $('.wgICH').val(),
                            wgICHT: $('.wgICHT').val(),
                            wgICHM: $('.wgICHM').val(),
                        }
                    }
                });
            break;
            case 'wigt-pb-shareThis':
                this.model.set({
                    widgetShareThis:{
                      wdtstId: $('.wdtstId').val(),
                      wdtstbt: $('.wdtstbt').val(),
                    }
                });
            break;
            default :  break;

            //$('.isChagesMade').val('true');
        } // prev took 40-60ms
    }
    


    var thisWidgetDataAttr = this.model.attributes;
    var thisColFontsToLoad = [];

    //console.log( JSON.stringify(thisWidgetDataAttr) );

    currentlyEditedColId = pageBuilderApp.currentlyEditedColId;
    currentlyEditedWidgId = pageBuilderApp.currentlyEditedWidgId;
    currentlyEditedThisCol = pageBuilderApp.currentlyEditedThisCol;
    currentlyEditedThisRow = pageBuilderApp.currentlyEditedThisRow;
    

    var renderredWidget = completeWidgetRender(thisWidgetDataAttr,currentlyEditedWidgId, currentlyEditedThisCol , currentlyEditedThisRow, thisColFontsToLoad ); // takes about 5-10 ms 


    $('#'+currentlyEditedColId+' '+'.widget-'+currentlyEditedWidgId).replaceWith(renderredWidget['WidgetHtml']); // takes 2ms 


    $('#'+currentlyEditedColId+' '+'.widget-'+currentlyEditedWidgId + ' #thisRenderredWidgetScritps ').html(renderredWidget['WidgetScript']); // takes 70ms cuz of scripts execution.
    
    
    $('#'+currentlyEditedThisRow+'-'+currentlyEditedThisCol + ' .widget-Draggable').mouseenter(function(ev){
      $(this).children('.widgetHandle').css('display','block');

      if (pageBuilderApp.copiedWidgOps == '') {
        jQuery('.widgetPasteHandle').css('display','none');
      }
    });

    $('#'+currentlyEditedThisRow+'-'+currentlyEditedThisCol + ' .widget-Draggable').mouseleave(function(){
      $('.widgetHandle').css('display','none');
    });
    
    $('.widget-Draggable').draggable({
                helper: function(event){
                  var thisELE  = $(event.currentTarget);
                  
                  var elMarigns  = thisELE.css('margin-top') + ' ' + thisELE.css('margin-right') + ' ' +thisELE.css('margin-bottom') + ' ' +thisELE.css('margin-left');

                  return $("<div class='widgetDragHelper' style='margin:"+elMarigns+"; padding: 20px; background: #333; border-radius: 100px;'> <span class='dashicons dashicons-move' style='color:#fff;' title='Move'></span> </div>");
                }, cursor: "move", appendTo: "#container", handle:'.widgetMoveHandle',
                start: function(event,ui){
                  $(event.target).attr('style','display:none;');
                  $('.isDroppedOnDroppable').val('false');
                  $('.droppableBelowWidget').css('display','block');
                  //  console.log(this);
                  $(this).children('.draggableWidgets').click();
                },
                stop: function(event,ui){
                  $('.droppableBelowWidget').hide(250);

                  var isDroppedOnDroppable = $('.isDroppedOnDroppable').val();

                  if (isDroppedOnDroppable != 'true') {
                    $(event.target).attr('style','display:block;');
                  }
                },
    }); // takes 6-8ms

    // var tuc1 = performance.now();
    // console.log("Call to updateWidgetTrigger took " + (tuc1 - tuc0) + " milliseconds.");

    // prev total took 250-330ms
  },
  duplicateWidget: function () {
      newModel = this.model.clone();
      var modelIndex = pageBuilderApp.widgetList.indexOf(this.model);
      pageBuilderApp.widgetList.add(newModel.attributes, {at: modelIndex+1});
      $(this.el).html('');
      this.render();
      ColcurrentEditableRowID = jQuery('.ColcurrentEditableRowID').val();
        currentEditableColId = jQuery('.currentEditableColId').val();
        jQuery('section[rowid="'+ColcurrentEditableRowID+'"]').children('.ulpb_column_controls'+currentEditableColId).children('#editColumnSave').click();
        jQuery('#'+pageBuilderApp.currentlyEditedColId).children('.wdgt-colChange').click();
          $('.ulpb_column_controls').hide();
          $('.columnWidgetPopup').hide(300);
          $('.pageops_modal').hide(300);
          $('.edit_column').hide(300);
          $('.insertRowBlock').hide(300);
          //$('.isChagesMade').val('true');
  },
  updateWidgetTemplate: function(ev){
        var blockName = $(ev.target).attr('data-selected_widget_template');
        var widgetBlock = '';
        var modelIndex = $('.insertwidgBlockAtIndex').val();

        var widgetMtop = this.model.get('widgetMtop');
        var widgetMbottom = this.model.get('widgetMbottom');
        var widgetMleft = this.model.get('widgetMleft');
        var widgetMright = this.model.get('widgetMright');
        var widgetMarginTablet = this.model.get('widgetMarginTablet');
        var widgetMarginMobile = this.model.get('widgetMarginMobile');

        


        modelIndex = parseInt(modelIndex);
        $.ajax({
          type: 'GET',
          dataType: "json",
          url: widgetViewLinks.pluginsUrl+'/admin/scripts/blocks/widgetBlocks/'+blockName+''+".json",
          data: { get_param: 'value' },
          success: function( data ) {
            widgetBlock = data;
          },
          error: function(  thrownError ) {
            alert('Some Error Occurred :'+thrownError);
          },
          async:false
        });

        if ( widgetBlock !='' ) {

          if ( this.model.get('widgetType') == 'wigt-pb-text') {
            contents = this.model.get('widgetText');
            widgetBlock['widgetText']['widgetTextContent'] = contents['widgetTextContent'];
          }
          this.model.set(widgetBlock);

          this.model.set({
            widgetMtop:widgetMtop,
            widgetMleft:widgetMleft,
            widgetMbottom:widgetMbottom,
            widgetMright:widgetMright,
            widgetMarginTablet:widgetMarginTablet,
            widgetMarginMobile:widgetMarginMobile,
          });

          var thisWidgetDataAttr = this.model.attributes;
          var thisColFontsToLoad = [];

          currentlyEditedColId = pageBuilderApp.currentlyEditedColId;
          currentlyEditedWidgId = pageBuilderApp.currentlyEditedWidgId;
          currentlyEditedThisCol = pageBuilderApp.currentlyEditedThisCol;
          currentlyEditedThisRow = pageBuilderApp.currentlyEditedThisRow;

          var renderredWidget = completeWidgetRender(thisWidgetDataAttr,currentlyEditedWidgId, currentlyEditedThisCol , currentlyEditedThisRow, thisColFontsToLoad );

          
          $('#'+currentlyEditedColId+' '+'.widget-'+currentlyEditedWidgId).replaceWith(renderredWidget['WidgetHtml']);

          $('#'+currentlyEditedColId+' '+'.widget-'+currentlyEditedWidgId + ' #thisRenderredWidgetScritps ').append(renderredWidget['WidgetScript']);
          $('#'+currentlyEditedThisRow+'-'+currentlyEditedThisCol + ' .widget-Draggable').mouseenter(function(ev){   
            $(this).children('.widgetHandle').css('display','block');
          });
          $('#'+currentlyEditedThisRow+'-'+currentlyEditedThisCol + ' .widget-Draggable').mouseleave(function(){
            $('.widgetHandle').css('display','none');
          });

          $('.widget-Draggable').draggable({
                      helper: function(event){
                        var thisELE  = $(event.currentTarget);
                        
                        var elMarigns  = thisELE.css('margin-top') + ' ' + thisELE.css('margin-right') + ' ' +thisELE.css('margin-bottom') + ' ' +thisELE.css('margin-left');

                        return $("<div class='widgetDragHelper' style='margin:"+elMarigns+"; padding: 20px; background: #333; border-radius: 100px;'> <span class='dashicons dashicons-move' style='color:#fff;' title='Move'></span> </div>");
                      }, cursor: "move", appendTo: "#container", handle:'.widgetMoveHandle',
                      start: function(event,ui){
                        $(event.target).attr('style','display:none;');
                        $('.isDroppedOnDroppable').val('false');
                        $('.droppableBelowWidget').css('display','block');
                        //  console.log(this);
                        $(this).children('.draggableWidgets').click();
                      },
                      stop: function(event,ui){
                        $('.droppableBelowWidget').hide(250);

                        var isDroppedOnDroppable = $('.isDroppedOnDroppable').val();

                        if (isDroppedOnDroppable != 'true') {
                          $(event.target).attr('style','display:block;');
                        }
                      },
          });

            //$('.columnWidgetPopup').slideUp('200');
            ColcurrentEditableRowID = $('.ColcurrentEditableRowID').val();
            currentEditableColId = $('.currentEditableColId').val();
            $('section[rowid="'+ColcurrentEditableRowID+'"]').children('.ulpb_column_controls'+currentEditableColId).children('#editColumnSaveWidget').click();

            $(this.el).html('');
            this.render();
            this.EditWidget();
            //$('.columnWidgetPopup').hide(300);
            //$('.edit_column').hide(300);
            //$('.ulpb_column_controls').css('display','none');
            $('.popb_confirm_action_popup').css('display','none');
            
        }
  },
  pasteCopiedOptions: function(ev){
    if (pageBuilderApp.copiedWidgOps != '') {

      var thisWidgetType = this.model.get('widgetType');

      var thisWidgetName = getRealWidgetType(thisWidgetType);
      var thisWidgetProps = this.model.get(thisWidgetName);

      var copiedWidget = JSON.parse(pageBuilderApp.copiedWidgOps);
      var copiedWidgetName = getRealWidgetType(copiedWidget['widgetType']);
      delete copiedWidget[copiedWidgetName];
      copiedWidget['widgetType'] = thisWidgetType;
      copiedWidget[thisWidgetName] = thisWidgetProps;

      this.model.set(copiedWidget);

      var thisWidgetDataAttr = this.model.attributes;
      var thisColFontsToLoad = [];

      currentlyEditedColId = pageBuilderApp.currentlyEditedColId;
      currentlyEditedWidgId = pageBuilderApp.currentlyEditedWidgId;
      currentlyEditedThisCol = pageBuilderApp.currentlyEditedThisCol;
      currentlyEditedThisRow = pageBuilderApp.currentlyEditedThisRow;

      var renderredWidget = completeWidgetRender(thisWidgetDataAttr,currentlyEditedWidgId, currentlyEditedThisCol , currentlyEditedThisRow, thisColFontsToLoad );

      
      $('#'+currentlyEditedColId+' '+'.widget-'+currentlyEditedWidgId).replaceWith(renderredWidget['WidgetHtml']);

      $('#'+currentlyEditedColId+' '+'.widget-'+currentlyEditedWidgId + ' #thisRenderredWidgetScritps ').append(renderredWidget['WidgetScript']);
      $('#'+currentlyEditedThisRow+'-'+currentlyEditedThisCol + ' .widget-Draggable').mouseenter(function(ev){   
        $(this).children('.widgetHandle').css('display','block');
      });
      $('#'+currentlyEditedThisRow+'-'+currentlyEditedThisCol + ' .widget-Draggable').mouseleave(function(){
        $('.widgetHandle').css('display','none');
      });

      $('.widget-Draggable').draggable({
                  helper: function(event){
                    var thisELE  = $(event.currentTarget);
                    
                    var elMarigns  = thisELE.css('margin-top') + ' ' + thisELE.css('margin-right') + ' ' +thisELE.css('margin-bottom') + ' ' +thisELE.css('margin-left');

                    return $("<div class='widgetDragHelper' style='margin:"+elMarigns+"; padding: 20px; background: #333; border-radius: 100px;'> <span class='dashicons dashicons-move' style='color:#fff;' title='Move'></span> </div>");
                  }, cursor: "move", appendTo: "#container", handle:'.widgetMoveHandle',
                  start: function(event,ui){
                    $(event.target).attr('style','display:none;');
                    $('.isDroppedOnDroppable').val('false');
                    $('.droppableBelowWidget').css('display','block');
                    //  console.log(this);
                    $(this).children('.draggableWidgets').click();
                  },
                  stop: function(event,ui){
                    $('.droppableBelowWidget').hide(250);

                    var isDroppedOnDroppable = $('.isDroppedOnDroppable').val();

                    if (isDroppedOnDroppable != 'true') {
                      $(event.target).attr('style','display:block;');
                    }
                  },
      });

        ColcurrentEditableRowID = $('.ColcurrentEditableRowID').val();
        currentEditableColId = $('.currentEditableColId').val();
        $('section[rowid="'+ColcurrentEditableRowID+'"]').children('.ulpb_column_controls'+currentEditableColId).children('#editColumnSaveWidget').click();

        $(this.el).html('');
        this.render();
        $('.popb_confirm_action_popup').css('display','none');

        jQuery('.columnWidgetPopup').hide(300);
        jQuery('.edit_column').hide(300); 
    }
  },
  updateInlineTextChanges: function(ev){
    //var tuc0 = performance.now();
    if (pageBuilderApp.copiedInlineOps != '') {   
        
        thisWidgetType = this.model.get('widgetType');
        passedWidgetData = pageBuilderApp.copiedInlineOps;

        if (passedWidgetData['widgetType'] == 'wigt-pb-liveText' && thisWidgetType == 'wigt-pb-liveText') {
            this.model.set({
                wLText:{
                  wltc:  passedWidgetData['wltc'],
                  wltfs:  passedWidgetData['wltfs'],
                }
            });
        } else if (passedWidgetData['widgetType'] == 'wigt-btn-gen' && thisWidgetType == 'wigt-btn-gen') {
            thisWidgetDefault = this.model.get('widgetButton');
            if (typeof(passedWidgetData['btnClickAction']) != 'undefined') {
                thisWidgetDefault['btnClickAction'] = '';
                thisWidgetDefault['btnWidgetPopUpId'] = '';
            }
            this.model.set({
                widgetButton:{
                  btnText: passedWidgetData['btnText'],
                  btnLink: passedWidgetData['btnLink'],
                  btnClickAction: thisWidgetDefault['btnClickAction'],
                  btnWidgetPopUpId:thisWidgetDefault['btnWidgetPopUpId'],
                  btnTextColor: thisWidgetDefault['btnTextColor'],
                  btnCAction: thisWidgetDefault['btnCAction'],
                  btnFontSize: thisWidgetDefault['btnFontSize'],
                  btnFontSizeTablet:thisWidgetDefault['btnFontSizeTablet'],
                  btnFontSizeMobile:thisWidgetDefault['btnFontSizeMobile'],
                  btnBgColor: thisWidgetDefault['btnBgColor'],
                  btnWidth: thisWidgetDefault['btnWidth'],
                  btnWidthPercent: thisWidgetDefault['btnWidthPercent'],
                  btnWidthPercentTablet:thisWidgetDefault['btnWidthPercentTablet'],
                  btnWidthPercentMobile:thisWidgetDefault['btnWidthPercentMobile'],
                  btnWidthUnit: thisWidgetDefault['btnWidthUnit'],
                  btnWidthUnitTablet: thisWidgetDefault['btnWidthUnitTablet'],
                  btnWidthUnitMobile: thisWidgetDefault['btnWidthUnitMobile'],
                  btnHeight: thisWidgetDefault['btnHeight'],
                  btnHeightTablet:thisWidgetDefault['btnHeightTablet'],
                  btnHeightMobile:thisWidgetDefault['btnHeightMobile'],
                  btnHoverBgColor: thisWidgetDefault['btnHoverBgColor'],
                  btnHoverTextColor: thisWidgetDefault['btnHoverTextColor'],
                  btnBlankAttr: thisWidgetDefault['btnBlankAttr'],
                  btnBorderColor: thisWidgetDefault['btnBorderColor'],
                  btnBorderWidth: thisWidgetDefault['btnBorderWidth'],
                  btnBorderRadius: thisWidgetDefault['btnBorderRadius'],
                  btnButtonAlignment: thisWidgetDefault['btnButtonAlignment'],
                  btnButtonAlignmentTablet: thisWidgetDefault['btnButtonAlignmentTablet'],
                  btnButtonAlignmentMobile: thisWidgetDefault['btnButtonAlignmentMobile'],
                  btnButtonFontFamily: thisWidgetDefault['btnButtonFontFamily'],
                  btnSelectedIcon: thisWidgetDefault['btnSelectedIcon'],
                  btnIconPosition: thisWidgetDefault['btnIconPosition'],
                  btnIconAnimation: thisWidgetDefault['btnIconAnimation'],
                  btnIconGap: thisWidgetDefault['btnIconGap'],
                }
            });
        } else if (passedWidgetData['widgetType'] == 'wigt-WYSIWYG' && thisWidgetType == 'wigt-WYSIWYG') {
            this.model.set({
                widgetWYSIWYG: {
                  widgetContent:passedWidgetData['widgetContent'],
                  widgetContentFonts: passedWidgetData['widgetContentFonts'],
                }
            });
        } else if (passedWidgetData['widgetType'] == 'wigt-pb-text' && thisWidgetType == 'wigt-pb-text') {

            thisWidgetDefault = this.model.get('widgetText');

            if ( passedWidgetData['widgetTextAlignment'] == false ) {
                passedWidgetData['widgetTextAlignment'] = thisWidgetDefault['widgetTextAlignment'];
            }

            this.model.set({
                widgetText:{
                  widgetTextContent:  passedWidgetData['widgetTextContent'],
                  widgetTextAlignment: passedWidgetData['widgetTextAlignment'],
                  widgetTextAlignmentTablet: thisWidgetDefault['widgetTextAlignmentTablet'],
                  widgetTextAlignmentMobile: thisWidgetDefault['widgetTextAlignmentMobile'],
                  widgetTextTag: thisWidgetDefault['widgetTextTag'],
                  wtextLink: thisWidgetDefault['wtextLink'],
                  widgetTextColor: thisWidgetDefault['widgetTextColor'],
                  widgetTextSize: thisWidgetDefault['widgetTextSize'],
                  widgetTextFamily: thisWidgetDefault['widgetTextFamily'],
                  widgetTextWeight: thisWidgetDefault['widgetTextWeight'],
                  widgetTextTransform: thisWidgetDefault['widgetTextTransform'],
                  widgetTextLineHeight: thisWidgetDefault['widgetTextLineHeight'],
                  widgetTextSpacing: thisWidgetDefault['widgetTextSpacing'],
                  widgetTextBold: thisWidgetDefault['widgetTextBold'],
                  widgetTextItalic: thisWidgetDefault['widgetTextItalic'],
                  widgetTextUnderlined: thisWidgetDefault['widgetTextUnderlined'],
                  widgetTextSizeTablet:thisWidgetDefault['widgetTextSizeTablet'],
                  widgetTextSizeMobile:thisWidgetDefault['widgetTextSizeMobile'],
                  widgetTextLineHeightTablet:thisWidgetDefault['widgetTextLineHeightTablet'],
                  widgetTextLineHeightMobile:thisWidgetDefault['widgetTextLineHeightMobile'],
                  widgetTextSpacingTablet:thisWidgetDefault['widgetTextSpacingTablet'],
                  widgetTextSpacingMobile:thisWidgetDefault['widgetTextSpacingMobile']
                }
            });
        } else if (passedWidgetData['widgetType'] == 'wigt-pb-pricing' && thisWidgetType == 'wigt-pb-pricing') {
            thisWidgetDefault = this.model.get('widgetPricing');
            this.model.set({
                widgetPricing: {
                  pbPricingHeaderText: passedWidgetData['pbPricingHeaderText'],
                  pbPricingContent: passedWidgetData['pbPricingContent'],
                  pbPricingHeaderTextColor: thisWidgetDefault['pbPricingHeaderTextColor'],
                  pbPricingHeaderBgColor: thisWidgetDefault['pbPricingHeaderBgColor'],
                  pbPricingHeaderTextSize: thisWidgetDefault['pbPricingHeaderTextSize'],
                  pbPricingBorderWidth: thisWidgetDefault['pbPricingBorderWidth'],
                  pbPricingBorderColor: thisWidgetDefault['pbPricingBorderColor'],
                  pbPricingButtonSectionBgColor: thisWidgetDefault['pbPricingButtonSectionBgColor'],
                  pricingbtnText: passedWidgetData['pricingbtnText'],
                  pricingbtnLink: thisWidgetDefault['pricingbtnLink'],
                  pricingbtnTextColor: thisWidgetDefault['pricingbtnTextColor'],
                  pricingbtnFontSize: thisWidgetDefault['pricingbtnFontSize'],
                  pricingbtnFontSizeTablet:thisWidgetDefault['pricingbtnFontSizeTablet'],
                  pricingbtnFontSizeMobile:thisWidgetDefault['pricingbtnFontSizeMobile'],
                  pricingbtnBgColor: thisWidgetDefault['pricingbtnBgColor'],
                  pricingbtnWidth: thisWidgetDefault['pricingbtnWidth'],
                  pricingbtnWidthPercent: thisWidgetDefault['pricingbtnWidthPercent'],
                  pricingbtnWidthPercentTablet:thisWidgetDefault['pricingbtnWidthPercentTablet'],
                  pricingbtnWidthPercentMobile:thisWidgetDefault['pricingbtnWidthPercentMobile'],
                  pricingbtnWidthUnit: thisWidgetDefault['pricingbtnWidthUnit'],
                  pricingbtnWidthUnitTablet: thisWidgetDefault['pricingbtnWidthUnitTablet'],
                  pricingbtnWidthUnitMobile: thisWidgetDefault['pricingbtnWidthUnitMobile'],
                  pricingbtnHeight: thisWidgetDefault['pricingbtnHeight'],
                  pricingbtnHeightTablet:thisWidgetDefault['pricingbtnHeightTablet'],
                  pricingbtnHeightMobile:thisWidgetDefault['pricingbtnHeightMobile'],
                  pricingbtnHoverBgColor: thisWidgetDefault['pricingbtnHoverBgColor'],
                  pricingbtnHoverTextColor: thisWidgetDefault['pricingbtnHoverTextColor'],
                  pricingbtnBlankAttr: thisWidgetDefault['pricingbtnBlankAttr'],
                  pricingbtnBorderColor: thisWidgetDefault['pricingbtnBorderColor'],
                  pricingbtnBorderWidth: thisWidgetDefault['pricingbtnBorderWidth'],
                  pricingbtnBorderRadius: thisWidgetDefault['pricingbtnBorderRadius'],
                  pricingbtnButtonAlignment: thisWidgetDefault['pricingbtnButtonAlignment'],
                  pricingbtnButtonAlignmentTablet: thisWidgetDefault['pricingbtnButtonAlignmentTablet'],
                  pricingbtnButtonAlignmentMobile: thisWidgetDefault['pricingbtnButtonAlignmentMobile'],
                  pricingbtnButtonFontFamily: thisWidgetDefault['pricingbtnButtonFontFamily'],
                  pricingbtnSelectedIcon: thisWidgetDefault['pricingbtnSelectedIcon'],
                  pricingbtnIconPosition: thisWidgetDefault['pricingbtnIconPosition'],
                  pricingbtnIconAnimation: thisWidgetDefault['pricingbtnIconAnimation'],
                  pricingbtnIconGap: thisWidgetDefault['pricingbtnIconGap'],
                }
            });
        } else if (passedWidgetData['widgetType'] == 'wigt-pb-navmenu' && thisWidgetType == 'wigt-pb-navmenu') {
            thisWidgetDefault = this.model.get('widgetNavBuilder');

            navItems = thisWidgetDefault['navItems'];

            if (passedWidgetData['editedFieldName'] == 'cnilab') {

                var changedNavItems = [];
                $.each(navItems, function(index, val){

                    var thisListValues = {
                        cnilab: val['cnilab'],
                        cniurl: val['cniurl'],
                    }
                    if ( index == passedWidgetData['editedFieldIndex'] ) {
                        var thisListValues = {
                            cnilab: passedWidgetData['widgetContent'],
                            cniurl: val['cniurl'],
                        }
                    }

                    changedNavItems.push( thisListValues );

                });

            }

            this.model.set({
                widgetNavBuilder:{
                  navItems: changedNavItems,
                  navStyle: thisWidgetDefault['navStyle']
                }
            });
        } else if (passedWidgetData['widgetType'] == 'wigt-pb-cards' && thisWidgetType == 'wigt-pb-cards'){
            thisWidgetDefault = this.model.get('widgetCard');

            if (passedWidgetData['editedFieldName'] == 'pbCardTitle') {
                pbCardTitle = passedWidgetData['widgetContent'];
            }else{
                pbCardTitle = thisWidgetDefault['pbCardTitle'];
            }

            if (passedWidgetData['editedFieldName'] == 'pbCardDesc') {
                pbCardDesc = passedWidgetData['widgetContent'];
            }else{
                pbCardDesc = thisWidgetDefault['pbCardDesc'];
            }

            this.model.set({
                widgetCard:{
                  pbSelectedCardIcon: thisWidgetDefault['pbSelectedCardIcon'],
                  pbCardIconSize: thisWidgetDefault['pbCardIconSize'],
                  pbCardIconRotation: thisWidgetDefault['pbCardIconRotation'],
                  pbCardIconColor: thisWidgetDefault['pbCardIconColor'],
                  pbCardTitleColor: thisWidgetDefault['pbCardTitleColor'],
                  pbCardTitleSize: thisWidgetDefault['pbCardTitleSize'],
                  pbCardDescColor: thisWidgetDefault['pbCardDescColor'],
                  pbCardDescSize: thisWidgetDefault['pbCardDescSize'],
                  pbCardTitle: pbCardTitle,
                  pbCardDesc: pbCardDesc,
                  pbCardTitleSizeTablet: thisWidgetDefault['pbCardTitleSizeTablet'],
                  pbCardTitleSizeMobile: thisWidgetDefault['pbCardTitleSizeMobile'],
                  pbCardDescSizeTablet: thisWidgetDefault['pbCardDescSizeTablet'],
                  pbCardDescSizeMobile: thisWidgetDefault['pbCardDescSizeMobile'],
                }
            });
        } else if (passedWidgetData['widgetType'] == 'wigt-pb-formBuilder' && thisWidgetType == 'wigt-pb-formBuilder') {
            thisWidgetDefault = this.model.get('widgetFormBuilder');

            wfsops = thisWidgetDefault['widgetPbFbFormSubmitOptions'];

            this.model.set({
                widgetFormBuilder:{
                  widgetPbFbFormFeilds:thisWidgetDefault['widgetPbFbFormFeilds'], 
                  widgetPbFbFormFeildOptions: thisWidgetDefault['widgetPbFbFormFeildOptions'],
                  widgetPbFbFormSubmitOptions:{
                    formBuilderBtnText: passedWidgetData['btnText'],
                    formBuilderBtnSize: wfsops['formBuilderBtnSize'], 
                    formBuilderBtnWidth: wfsops['formBuilderBtnWidth'], 
                    formBuilderBtnBgColor: wfsops['formBuilderBtnBgColor'], 
                    formBuilderBtnColor: wfsops['formBuilderBtnColor'], 
                    formBuilderBtnHoverBgColor: wfsops['formBuilderBtnHoverBgColor'], 
                    formBuilderBtnHoverTextColor: wfsops['formBuilderBtnHoverTextColor'], 
                    formBuilderBtnFontSize: wfsops['formBuilderBtnFontSize'], 
                    formBuilderBtnFontSizeTablet: wfsops['formBuilderBtnFontSizeTablet'],
                    formBuilderBtnFontSizeMobile: wfsops['formBuilderBtnFontSizeMobile'],
                    formBuilderBtnBorderWidth: wfsops['formBuilderBtnBorderWidth'], 
                    formBuilderBtnBorderColor: wfsops['formBuilderBtnBorderColor'], 
                    formBuilderBtnBorderRadius: wfsops['formBuilderBtnBorderRadius'], 
                    formBuilderBtnAlignment: wfsops['formBuilderBtnAlignment'], 
                    formBuilderBtnHGap: wfsops['formBuilderBtnHGap'], 
                    formBuilderBtnVGap: wfsops['formBuilderBtnVGap'], 
                    formBuilderbtnSelectedIcon: wfsops['formBuilderbtnSelectedIcon'],
                    formBuilderbtnIconPosition: wfsops['formBuilderbtnIconPosition'],
                    formBuilderbtnIconGap: wfsops['formBuilderbtnIconGap'],
                    formBuilderbtnIconAnimation: wfsops['formBuilderbtnIconAnimation'],
                    formBuilderBtnFontFamily: wfsops['formBuilderBtnFontFamily'],
                  },
                  widgetPbFbFormEmailOptions:thisWidgetDefault['widgetPbFbFormEmailOptions'],
                  widgetPbFbFormMailChimp: thisWidgetDefault['widgetPbFbFormMailChimp'],
                  widgetPbFbFormAllowDuplicates: thisWidgetDefault['widgetPbFbFormAllowDuplicates'],
                  formCustomHTML: thisWidgetDefault['formCustomHTML'],
                }
            });
        }

        pageBuilderApp.copiedInlineOps = '';
        ColcurrentEditableRowID = $('.ColcurrentEditableRowID').val();
        currentEditableColId = $('.currentEditableColId').val();
        $('section[rowid="'+ColcurrentEditableRowID+'"]').children('.ulpb_column_controls'+currentEditableColId).children('#editColumnSaveWidget').click();
    }

    //var tuc1 = performance.now();
    //console.log("Call to updateInlineTextChanges took " + (tuc1 - tuc0) + " milliseconds.");
  },

});

}( jQuery ) );
<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="lpp_modal_column edit_column" style="background: #fff;">
<div class="lpp_modal_wrapper_column">
    <div class="edit_options_left_row">
      <div class="tabs colEditTabs">
        <ul class="tab-links" style="background: #2fa8f9;">
          <li style="margin: 0;"  class="active colOpsTabBtn"><a style="font-size:12px; padding: 10px; text-align: center;" href="#tabColumnOptions" class="tab_link"> <i class="fa fa-gears" style="font-size: 20px;"></i> <br> Column Options</a></li>
          
          <li style="margin: 0;" class="colNewWidgetTabBtn"><a style="font-size:12px; padding: 10px; text-align: center;" href="#tabColumnWidgets" class="tab_link"> <i class="fa  fa-plus-square" style="font-size: 20px;"></i> <br> New Widget</a></li>
          <li style="margin: 0;"><a style="font-size:12px; padding: 10px; text-align: center;" href="#tabColumnWidgetArea" class="tab_link"> <i class="fa fa-puzzle-piece" style="font-size: 20px;"></i> <br> Column Widgets</a></li>
        </ul>
        <div class="tab-content">
            <div id="tabColumnOptions" class="tab active" style="min-height:400px;">
                <div class="pbp_form" style="width: 400px; margin: 10px;">
                <br>
                <div>
                    <h4>Column Width 
                      <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                      <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                      <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                    </h4>
                    <div class="responsiveOps responsiveOptionsContainterLarge">
                      <label></label>
                      <input type="number" name="columnWidth" class="columnWidth colOptionsFields" id="columnWidth" value='0' data-optname="width" >%
                    </div>
                    <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                      <label></label>
                      <input type="number" name="columnWidthTablet" class="columnWidthTablet colOptionsFields" id="columnWidthTablet" data-optname="widthTablet" >%
                    </div>
                    <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                      <label></label>
                      <input type="number" name="columnWidthMobile" class="columnWidthMobile colOptionsFields" id="columnWidthMobile" data-optname="widthMobile" >%
                    </div>
                </div>
                <hr>
                        
                <br><hr>
                
                  <div class="PB_accordion" style="margin-left: -10px;">

                    <h4> Background Options </h4>
                    <div>
                        
                        <div>
                            <div class="tabs">
                                <ul class="tab-links tabEditFields">
                                    <li class="active"><a href="#defaultColBgOptions" class="tab_link">Default</a></li>
                                    <li><a href="#hoverColBgOptions" class="tab_link">Hover</a></li>
                                </ul>
                                <div class="tab-content" style="box-shadow: none;">
                                    <div id="defaultColBgOptions" class="tab active">
                                        <br>
                                        <br>
                                        <div id="pluginops_input_tabs" class="popbinputTabsWrapper POPBInputNormalRow">
                                            <p style="display: inline;"> Background Type </p>
                                            <div class="iputTabNav">
                                                <div class="popbNavItem" data-inptabID='content_popb_tab_1' title="Simple">
                                                    <label for="inputID1"> <i class="fa fa-paint-brush"></i></label>
                                                    <input type="radio" name="colBackgroundType" id="inputID1" value='solid' class="colBackgroundType colBackgroundTypeSolid colOptionsFields tabbedInputRadio" data-optname="colBackgroundType" > </div>
                                                <div class="popbNavItem" data-inptabID='content_popb_tab_2' title="Gradient">
                                                    <label for="inputID2 " class="GradientIcon"> <i class="fa fa-square"></i></label>
                                                    <input type="radio" name="colBackgroundType" id="inputID2" class="colBackgroundType colBackgroundTypeGradient colOptionsFields tabbedInputRadio" value="gradient" data-optname="colBackgroundType" > </div>
                                            </div>
                                            <div class="popb_input_tabContent">
                                                <div class="content_popb_tab_1 popb_tab_content popb_col_fields_container ">
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <label>Color :</label>
                                                    <input type="text" name="columnBgColor" class="color-picker_btn_two columnBgColor" data-alpha='true' id="columnBgColor" value='' data-optname="bg_color" >
                                                    <br>
                                                    <br><br>
                                                    <div>
                                                        <label> <span title="Background Image">Bg Image</span>
                                                          <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>
                                                          <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                          <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                        </label>
                                                        <div class="responsiveOps responsiveOptionsContainterLarge">
                                                            <input id="image_location1" type="text" class=" colBgImg upload_image_button2993" name='lpp_add_img_1' value='' placeholder='Insert Image URL here' data-optname="colBgImg" >
                                                            <br>
                                                            <br>
                                                            <label></label>
                                                            <input id="image_location1" type="button" class="upload_bg pb_upload_btn" data-id="2993" value="Upload" style="" />
                                                        </div>
                                                        <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;" >
                                                            <input id="image_location1" type="text" class="upload_image_button2995" name='lpp_add_img_1' value='' placeholder='Insert Image URL here' data-optname="colBgImgT" >
                                                            <br>
                                                            <br>
                                                            <label></label>
                                                            <input id="image_location1" type="button" class="upload_bg pb_upload_btn" data-id="2995" value="Upload" style="" />
                                                        </div>
                                                        <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;" >
                                                            <input id="image_location1" type="text" class="upload_image_button2996" name='lpp_add_img_1' value='' placeholder='Insert Image URL here' data-optname="colBgImgM" >
                                                            <br>
                                                            <br>
                                                            <label></label>
                                                            <input id="image_location1" type="button" class="upload_bg pb_upload_btn" data-id="2996" value="Upload" style="" />
                                                        </div>
                                                    </div>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <div class="imageBackgroundOpsCol" style="display: none;">
                                                        <div>
                                                          <label> Position 
                                                            <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                                                            <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                            <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                          </label>
                                                          <div class="responsiveOps responsiveOptionsContainterLarge">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.pos" >
                                                              <option value="">Default</option>
                                                              <option value="top left">Top Left</option>
                                                              <option value="top center">Top Center</option>
                                                              <option value="top right">Top Right</option>
                                                              <option value="center left">Center Left</option>
                                                              <option value="center center">Center Center</option>
                                                              <option value="center right">Center Right</option>
                                                              <option value="bottom left">Bottom Left</option>
                                                              <option value="bottom center">Bottom Center</option>
                                                              <option value="bottom right">Bottom Right</option>
                                                              <option value="custom">Custom</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.posT" >
                                                              <option value="">Default</option>
                                                              <option value="top left">Top Left</option>
                                                              <option value="top center">Top Center</option>
                                                              <option value="top right">Top Right</option>
                                                              <option value="center left">Center Left</option>
                                                              <option value="center center">Center Center</option>
                                                              <option value="center right">Center Right</option>
                                                              <option value="bottom left">Bottom Left</option>
                                                              <option value="bottom center">Bottom Center</option>
                                                              <option value="bottom right">Bottom Right</option>
                                                              <option value="custom">Custom</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.posM" >
                                                              <option value="">Default</option>
                                                              <option value="top left">Top Left</option>
                                                              <option value="top center">Top Center</option>
                                                              <option value="top right">Top Right</option>
                                                              <option value="center left">Center Left</option>
                                                              <option value="center center">Center Center</option>
                                                              <option value="center right">Center Right</option>
                                                              <option value="bottom left">Bottom Left</option>
                                                              <option value="bottom center">Bottom Center</option>
                                                              <option value="bottom right">Bottom Right</option>
                                                              <option value="custom">Custom</option>
                                                            </select>
                                                          </div>
                                                        </div>
                                                        <div class="rowBgImgCustomPositionDiv" style="display: none;">
                                                          <br><br><br><br>
                                                          <div>
                                                            <label>X Position 
                                                              <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                                                              <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                              <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                            </label>
                                                            <div class="responsiveOps responsiveOptionsContainterLarge">
                                                              <input type="number" class="colOptionsFields " data-optname="bgImgOps.xPos" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.xPosU" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                            <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                                                              <input type="number" class="colOptionsFields " data-optname="bgImgOps.xPosT" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.xPosUT" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                            <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                                                              <input type="number" class="colOptionsFields " data-optname="bgImgOps.xPosM" style="width:60px;">
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.xPosUM" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                          <br><br><br><br>
                                                          <div>
                                                            <label>Y Position 
                                                              <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                                                              <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                              <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                            </label>
                                                            <div class="responsiveOps responsiveOptionsContainterLarge">
                                                              <input type="number" class="colOptionsFields " data-optname="bgImgOps.yPos" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.yPosU" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                            <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                                                              <input type="number" class="colOptionsFields " data-optname="bgImgOps.yPosT" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.yPosUT" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                            <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                                                              <input type="number" class="colOptionsFields " data-optname="bgImgOps.yPosM" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.yPosUM" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <br><br><br><br>
                                                        <div>
                                                          <label>Repeat 
                                                            <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>
                                                            <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                            <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                          </label>
                                                          <div class="responsiveOps responsiveOptionsContainterLarge">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.rep" >
                                                              <option value="default">Default</option>
                                                              <option value="no-repeat">No-repeat</option>
                                                              <option value="repeat">Repeat</option>
                                                              <option value="repeat-x">Repeat-x</option>
                                                              <option value="repeat-y">Repeat-y</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.repT" >
                                                              <option value="default">Default</option>
                                                              <option value="no-repeat">No-repeat</option>
                                                              <option value="repeat">Repeat</option>
                                                              <option value="repeat-x">Repeat-x</option>
                                                              <option value="repeat-y">Repeat-y</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.repM" >
                                                              <option value="default">Default</option>
                                                              <option value="no-repeat">No-repeat</option>
                                                              <option value="repeat">Repeat</option>
                                                              <option value="repeat-x">Repeat-x</option>
                                                              <option value="repeat-y">Repeat-y</option>
                                                            </select>
                                                          </div>
                                                        </div>
                                                        <br><br><br><br>
                                                        <div>
                                                          <label>Size 
                                                            <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                                                            <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                            <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                          </label>
                                                          <div class="responsiveOps responsiveOptionsContainterLarge">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.size" >
                                                              <option value="">Default</option>
                                                              <option value="auto">Auto</option>
                                                              <option value="cover">Cover</option>
                                                              <option value="contain">Contain</option>
                                                              <option value="custom">Custom</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.sizeT" >
                                                              <option value="">Default</option>
                                                              <option value="auto">Auto</option>
                                                              <option value="cover">Cover</option>
                                                              <option value="contain">Contain</option>
                                                              <option value="custom">Custom</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.sizeM" >
                                                              <option value="">Default</option>
                                                              <option value="auto">Auto</option>
                                                              <option value="cover">Cover</option>
                                                              <option value="contain">Contain</option>
                                                              <option value="custom">Custom</option>
                                                            </select>
                                                          </div>
                                                        </div>
                                                        <div class="rowBgImgCustomSizeDiv" style="display: none;">
                                                          <br><br><br><br>
                                                          <div>
                                                            <label>Width 
                                                              <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                                                              <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                              <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                            </label>
                                                            <div class="responsiveOps responsiveOptionsContainterLarge">
                                                              <input class="colOptionsFields " data-optname="bgImgOps.cWid"  type="number" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.widU" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                            <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                                                              <input class="colOptionsFields " data-optname="bgImgOps.cWidT"  type="number" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.widUT" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                            <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                                                              <input class="colOptionsFields " data-optname="bgImgOps.cWidM"  type="number" style="width:60px;" >
                                                              <select class="colOptionsFields " style="width:50px;" data-optname="bgImgOps.widUM" >
                                                                <option value="px">px</option>
                                                                <option value="%">%</option>
                                                                <option value="vw">vw</option>
                                                              </select>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <br><br><br><br>
                                                        <div>
                                                          <label> <span title="Fixed Background">Fixed Bg</span>
                                                            <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                                                            <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                                                            <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                                                          </label>
                                                          <div class="responsiveOps responsiveOptionsContainterLarge">
                                                            <select class="colOptionsFields " id="rowBackgroundParallax" data-optname="bgImgOps.parlx" >
                                                              <option value="">Select</option>
                                                              <option value="true">Yes</option>
                                                              <option value="false">No</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.parlxT" >
                                                              <option value="">Select</option>
                                                              <option value="true">Yes</option>
                                                              <option value="false">No</option>
                                                            </select>
                                                          </div>
                                                          <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                                                            <select class="colOptionsFields " data-optname="bgImgOps.parlxM" >
                                                              <option value="">Select</option>
                                                              <option value="true">Yes</option>
                                                              <option value="false">No</option>
                                                            </select>
                                                          </div>
                                                        </div>
                                                        
                                                      </div>
                                                </div>
                                                <div class="content_popb_tab_2 popb_tab_content popb_col_fields_container ">
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <label>First Color </label>
                                                    <input type="text" name="colGradientColorFirst" class="color-picker_btn_two colGradientColorFirst" data-alpha='true' id="colGradientColorFirst" value='' data-optname="colGradient.colGradientColorFirst" >
                                                    <p>Location</p>
                                                    <div class="PoPbrangeSlider PoPbnumberSlider" data-targetRangeInput='colGradientLocationFirst'></div>
                                                    <input type="number" class="colGradientLocationFirst" data-optname="colGradient.colGradientLocationFirst" >
                                                    <br>
                                                    <br>
                                                    <hr>
                                                    <br>
                                                    <br>
                                                    <label>Second Color </label>
                                                    <input type="text" name="colGradientColorSecond" class="color-picker_btn_two colGradientColorSecond" data-alpha='true' id="colGradientColorSecond" value='' data-optname="colGradient.colGradientColorSecond" >
                                                    <p>Location</p>
                                                    <div class="PoPbrangeSlider PoPbnumberSlider" data-targetRangeInput='colGradientLocationSecond'></div>
                                                    <input type="number" class="colGradientLocationSecond" data-optname="colGradient.colGradientLocationSecond" >
                                                    <br>
                                                    <br>
                                                    <hr>
                                                    <br>
                                                    <br>
                                                    <label>Type </label>
                                                    <select class="colGradientType" data-optname="colGradient.colGradientType" >
                                                        <option value="linear">Linear</option>
                                                        <option value="radial">Radial</option>
                                                    </select>
                                                    <br>
                                                    <br>
                                                    <div class="radialInputCol" style="display: none;">
                                                        <br>
                                                        <label>Position </label>
                                                        <select class="colGradientPosition" data-optname="colGradient.colGradientPosition" >
                                                            <option value="center center">Center Center</option>
                                                            <option value="center left">Center Left</option>
                                                            <option value="center right">Center Right</option>
                                                            <option value="top center">Top Center</option>
                                                            <option value="top left">Top Left</option>
                                                            <option value="top right">Top Right</option>
                                                            <option value="bottom center">Bottom Center</option>
                                                            <option value="bottom left">Bottom Left</option>
                                                            <option value="bottom right">Bottom Right</option>
                                                        </select>
                                                        <br>
                                                        <br>
                                                    </div>
                                                    <div class="linearInputCol" style="display: none;">
                                                        <p>Angle</p>
                                                        <div class="PoPbrangeSliderAngle PoPbnumberSlider" data-targetRangeInput='colGradientAngle'></div>
                                                        <input type="number" class="colGradientAngle" data-optname="colGradient.colGradientAngle" > </div>
                                                    <br>
                                                    <br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="hoverColBgOptions" class="tab">
                                        <br>
                                        <br>
                                        <div id="pluginops_input_tabs" class="popbinputTabsWrapper POPBInputNormalcol POPBInputHovercol">
                                            <p style="display: inline;"> Background Type </p>
                                            <div class="iputTabNav">
                                                <div class="popbNavItem" data-inptabID='content_popb_tab_1' title="Simple">
                                                    <label for="inputIDHover1"> <i class="fa fa-paint-brush"></i></label>
                                                    <input type="radio" name="colBackgroundTypeHover" id="inputIDHover1" class="colBackgroundTypeHover colBackgroundTypeSolidHover colOptionsFields tabbedInputRadio" value='solid' data-optname="colHoverOptions.colBackgroundTypeHover" > </div>
                                                <div class="popbNavItem" data-inptabID='content_popb_tab_2' title="Gradient">
                                                    <label for="inputIDHover2 " class="GradientIcon"> <i class="fa fa-square"></i></label>
                                                    <input type="radio" name="colBackgroundTypeHover" id="inputIDHover2" class="colBackgroundTypeHover colBackgroundTypeGradientHover  colOptionsFields tabbedInputRadio" value="gradient" data-optname="colHoverOptions.colBackgroundTypeHover" > 
                                                </div>
                                                <div class="popbNavItem noneValueSelector" data-inptabID='content_popb_tab_3' style="display: none !important">
                                                    <label for="inputIDHover3 " class="GradientIcon"> <i class="fa fa-square"></i></label>
                                                    <input type="radio" name="colBackgroundTypeHover" id="inputIDHover3" class="colBackgroundTypeHover colBackgroundTypeNoneHover  colOptionsFields tabbedInputRadio" value="none" data-optname="colHoverOptions.colBackgroundTypeHover" >
                                                </div>
                                            </div>
                                            <div class="popb_input_tabContent">
                                                <div class="content_popb_tab_1 popb_tab_content popb_col_fields_container">
                                                    <br>
                                                    <br>
                                                    <label>Color :</label>
                                                    <input type="text" name="colBgColorHover" class="color-picker_btn_two colBgColorHover" data-alpha='true' id="colBgColorHover" value='' data-optname="colHoverOptions.colBgColorHover" >
                                                    <br>
                                                </div>
                                                <div class="content_popb_tab_2 popb_tab_content popb_col_fields_container">
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <label>First Color </label>
                                                    <input type="text" name="colGradientColorFirstHover" class="color-picker_btn_two colGradientColorFirstHover" data-alpha='true' id="colGradientColorFirstHover" value='' data-optname="colHoverOptions.colGradientHover.colGradientColorFirstHover" >
                                                    <p>Location</p>
                                                    <div class="PoPbrangeSlider PoPbnumberSlider" data-targetRangeInput='colGradientLocationFirstHover'></div>
                                                    <input type="number" class="colGradientLocationFirstHover" data-optname="colHoverOptions.colGradientHover.colGradientLocationFirstHover" >
                                                    <br>
                                                    <br>
                                                    <hr>
                                                    <br>
                                                    <br>
                                                    <label>Second Color </label>
                                                    <input type="text" name="colGradientColorSecondHover" class="color-picker_btn_two colGradientColorSecondHover" data-alpha='true' id="colGradientColorSecondHover" value='' data-optname="colHoverOptions.colGradientHover.colGradientColorSecondHover" >
                                                    <p>Location</p>
                                                    <div class="PoPbrangeSlider PoPbnumberSlider" data-targetRangeInput='colGradientLocationSecondHover'></div>
                                                    <input type="number" class="colGradientLocationSecondHover" data-optname="colHoverOptions.colGradientHover.colGradientLocationSecondHover" >
                                                    <br>
                                                    <br>
                                                    <hr>
                                                    <br>
                                                    <br>
                                                    <label>Type </label>
                                                    <select class="colGradientTypeHover" data-optname="colHoverOptions.colGradientHover.colGradientTypeHover" >
                                                        <option value="linear">Linear</option>
                                                        <option value="radial">Radial</option>
                                                    </select>
                                                    <br>
                                                    <br>
                                                    <div class="radialInputColHover" style="display: none;">
                                                        <br>
                                                        <label>Position </label>
                                                        <select class="colGradientPositionHover" data-optname="colHoverOptions.colGradientHover.colGradientPositionHover" >
                                                            <option value="center center">Center Center</option>
                                                            <option value="center left">Center Left</option>
                                                            <option value="center right">Center Right</option>
                                                            <option value="top center">Top Center</option>
                                                            <option value="top left">Top Left</option>
                                                            <option value="top right">Top Right</option>
                                                            <option value="bottom center">Bottom Center</option>
                                                            <option value="bottom left">Bottom Left</option>
                                                            <option value="bottom right">Bottom Right</option>
                                                        </select>
                                                        <br>
                                                        <br>
                                                    </div>
                                                    <div class="linearInputColHover" style="display: none;">
                                                        <p>Angle</p>
                                                        <div class="PoPbrangeSliderAngle PoPbnumberSlider" data-targetRangeInput='colGradientAngleHover'></div>
                                                        <input type="number" class="colGradientAngleHover" data-optname="colHoverOptions.colGradientHover.colGradientAngleHover" > </div>
                                                    <br>
                                                    <br>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <br>
                                        <p>Transition Duration</p>
                                        <div class="PoPbrangeSliderTransition PoPbnumberSlider" data-targetRangeInput='colHoverTransitionDuration'></div>
                                        <input type="number" class="colHoverTransitionDuration colOptionsFields" data-optname="colHoverOptions.colHoverTransitionDuration" >
                                        <br>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4> Margins & Paddings </h4>
                    <div>
                        <div>
                            <h4>Column Margin   
                              <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>   
                              <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                              <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                            </h4>
                            <div class="responsiveOps responsiveOptionsContainterLarge">
                              <input type="number" name="columnMarginTop" class=" padding_inline_inp linkedField columnMarginTop colOptionsFields" id="columnMarginTop" value='0' placeholder="Top" data-optname="margin.columnMarginTop" >
                               
                              <input type="number" name="columnMarginBottom" class=" padding_inline_inp linkedField columnMarginBottom colOptionsFields" id="columnMarginBottom" value='0' placeholder="Bottom" data-optname="margin.columnMarginBottom" >
                                 
                              <input type="number" name="columnMarginLeft" class=" padding_inline_inp linkedField columnMarginLeft colOptionsFields" id="columnMarginLeft" value='0' placeholder="Left" data-optname="margin.columnMarginLeft" >
                                 
                              <input type="number" name="columnMarginRight" class=" padding_inline_inp linkedField columnMarginRight colOptionsFields" id="columnMarginRight" value='0' placeholder="Right" data-optname="margin.columnMarginRight" >

                              <span class="linkfieldBtn colLinkBtn linkBtn" > <i class="fa fa-link"></i> </span>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                              <input type="number" name="columnMarginTopTablet" class="padding_inline_inp linkedField  columnMarginTopTablet colOptionsFields" id="columnMarginTopTablet"  placeholder="Top" data-optname="marginTablet.rMTT" >
                              
                              <input type="number" name="columnMarginBottomTablet" class="padding_inline_inp linkedField  columnMarginBottomTablet colOptionsFields" id="columnMarginBottomTablet"  placeholder="Bottom" data-optname="marginTablet.rMBT" >
                              
                              <input type="number" name="columnMarginLeftTablet" class="padding_inline_inp linkedField  columnMarginLeftTablet colOptionsFields" id="columnMarginLeftTablet"  placeholder="Left" data-optname="marginTablet.rMLT" >
                              
                              <input type="number" name="columnMarginRightTablet" class="padding_inline_inp linkedField  columnMarginRightTablet colOptionsFields" id="columnMarginRightTablet"  placeholder="Right" data-optname="marginTablet.rMRT" >

                              <span class="linkfieldBtn colLinkBtn linkBtn" > <i class="fa fa-link"></i> </span>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                              <input type="number" name="columnMarginTopMobile" class="padding_inline_inp linkedField  columnMarginTopMobile colOptionsFields" id="columnMarginTopMobile"  placeholder="Top" data-optname="marginMobile.rMTM" >
                              
                              <input type="number" name="columnMarginBottomMobile" class="padding_inline_inp linkedField  columnMarginBottomMobile colOptionsFields" id="columnMarginBottomMobile"  placeholder="Bottom" data-optname="marginMobile.rMBM" >
                              
                              <input type="number" name="columnMarginLeftMobile" class="padding_inline_inp linkedField  columnMarginLeftMobile colOptionsFields" id="columnMarginLeftMobile"  placeholder="Left" data-optname="marginMobile.rMLM" >
                              
                              <input type="number" name="columnMarginRightMobile" class="padding_inline_inp linkedField  columnMarginRightMobile colOptionsFields" id="columnMarginRightMobile"  placeholder="Right" data-optname="marginMobile.rMRM" >

                              <span class="linkfieldBtn colLinkBtn linkBtn" > <i class="fa fa-link"></i> </span>
                            </div>
                        </div>
                        <br>
                        <br>
                        <span class="ulp-note">The unit is percentage so set values accordingly.</span>
                        <br>
                        <br>  
                        <br>
                        <hr>
                        <div>
                            <h4>Column Padding
                              <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>
                              <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                              <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                            </h4>
                            <div class="responsiveOps responsiveOptionsContainterLarge">
                              <input type="number" name="columnPaddingTop" class=" padding_inline_inp linkedField columnPaddingTop colOptionsFields" id="columnPaddingTop" value='0' placeholder="Top" data-optname="padding.columnPaddingTop" >
                            
                              <input type="number" name="columnPaddingBottom" class=" padding_inline_inp linkedField columnPaddingBottom colOptionsFields" id="columnPaddingBottom" value='0' placeholder="Bottom" data-optname="padding.columnPaddingBottom" >
                              
                              <input type="number" name="columnPaddingLeft" class=" padding_inline_inp linkedField columnPaddingLeft colOptionsFields" id="columnPaddingLeft" value='0' placeholder="Left" data-optname="padding.columnPaddingLeft" >
                              
                              <input type="number" name="columnPaddingRight" class=" padding_inline_inp linkedField columnPaddingRight colOptionsFields" id="columnPaddingRight" value='0' placeholder="Right" data-optname="padding.columnPaddingRight" >

                              <span class="linkfieldBtn colLinkBtn linkBtn" > <i class="fa fa-link"></i> </span>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                              <input type="number" name="columnPaddingTopTablet" class="padding_inline_inp linkedField  columnPaddingTopTablet colOptionsFields" id="columnPaddingTopTablet"  placeholder="Top" data-optname="paddingTablet.rPTT" >
                              
                              <input type="number" name="columnPaddingBottomTablet" class="padding_inline_inp linkedField  columnPaddingBottomTablet colOptionsFields" id="columnPaddingBottomTablet"  placeholder="Bottom" data-optname="paddingTablet.rPBT" >
                              
                              <input type="number" name="columnPaddingLeftTablet" class="padding_inline_inp linkedField  columnPaddingLeftTablet colOptionsFields" id="columnPaddingLeftTablet"  placeholder="Left" data-optname="paddingTablet.rPLT" >
                              
                              <input type="number" name="columnPaddingRightTablet" class="padding_inline_inp linkedField  columnPaddingRightTablet colOptionsFields" id="columnPaddingRightTablet"  placeholder="Right" data-optname="paddingTablet.rPRT" >

                              <span class="linkfieldBtn colLinkBtn linkBtn" > <i class="fa fa-link"></i> </span>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                              <input type="number" name="columnPaddingTopMobile" class="padding_inline_inp linkedField  columnPaddingTopMobile colOptionsFields" id="columnPaddingTopMobile"  placeholder="Top" data-optname="paddingMobile.rPTM" >
                              
                              <input type="number" name="columnPaddingBottomMobile" class="padding_inline_inp linkedField  columnPaddingBottomMobile colOptionsFields" id="columnPaddingBottomMobile"  placeholder="Bottom" data-optname="paddingMobile.rPBM" >
                              
                              <input type="number" name="columnPaddingLeftMobile" class="padding_inline_inp linkedField  columnPaddingLeftMobile colOptionsFields" id="columnPaddingLeftMobile"  placeholder="Left" data-optname="paddingMobile.rPLM" >
                              
                              <input type="number" name="columnPaddingRightMobile" class="padding_inline_inp linkedField  columnPaddingRightMobile colOptionsFields" id="columnPaddingRightMobile"  placeholder="Right" data-optname="paddingMobile.rPRM" >

                              <span class="linkfieldBtn colLinkBtn linkBtn" > <i class="fa fa-link"></i> </span>
                            </div>
                        </div>
                        <br>
                        <br>
                        <span class="ulp-note">The unit is percentage so set values accordingly.</span>
                        <br>
                        <br>  
                        <br>
                        <hr>
                        <br>
                    </div>
                    <h4> Column Display </h4>
                    <div>
                        <div>
                            <h4>Content Align  
                              <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>
                              <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                              <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                            </h4>
                            <div class="responsiveOps responsiveOptionsContainterLarge">
                              <label>Desktop </label>
                              <select class="colOptionsFields colCAD" data-optname="colCAD" >
                                <option value="default">Default</option>
                                <option value="baseline">Top</option>
                                <option value="center">Middle</option>
                                <option value="flex-end">Bottom</option>
                              </select>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                              <label>Tablet </label>
                              <select class="colOptionsFields colCAT" data-optname="colCAT" >
                                <option value="default">Default</option>
                                <option value="baseline">Top</option>
                                <option value="center">Middle</option>
                                <option value="flex-end">Bottom</option>
                              </select>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                              <label>Mobile </label>
                              <select class="colOptionsFields colCAM" data-optname="colCAM" >
                                <option value="default">Default</option>
                                <option value="baseline">Top</option>
                                <option value="center">Middle</option>
                                <option value="flex-end">Bottom</option>
                              </select>
                            </div>
                        </div>
                        <br>
                        <br>  
                        <br>
                        <hr>
                        <br>
                        <label>Custom Column Class :</label>
                        <input type="text" class="colOptionsFields columnCustomClass" data-optname="columnCustomClass" >
                        <br>
                        <br>  
                        <br>
                        <hr>
                        <br>
                        <div>
                            <h4>Hide Column  
                              <span class="responsiveBtn rbt-l " > <i class="fa fa-desktop"></i> </span>
                              <span class="responsiveBtn rbt-m " > <i class="fa fa-tablet"></i> </span>
                              <span class="responsiveBtn rbt-s " > <i class="fa fa-mobile-phone"></i> </span>
                            </h4>
                            <div class="responsiveOps responsiveOptionsContainterLarge">
                              <label>Desktop </label>
                              <select class="colOptionsFields colHideOnDesktop" data-optname="colHideOnDesktop" >
                                <option value="show">Show</option>
                                <option value="hide">Hide</option>
                              </select>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterMedium" style="display: none;">
                              <label>Tablet </label>
                              <select class="colOptionsFields colHideOnTablet" data-optname="colHideOnTablet" >
                                <option value="show">Show</option>
                                <option value="hide">Hide</option>
                              </select>
                            </div>
                            <div class="responsiveOps responsiveOptionsContainterSmall" style="display: none;">
                              <label>Mobile </label>
                              <select class="colOptionsFields colHideOnMobile" data-optname="colHideOnMobile" >
                                <option value="show">Show</option>
                                <option value="hide">Hide</option>
                              </select>
                            </div>
                        </div>
                        <br>
                        <br>  
                        <br>
                        <hr>
                        <br>
                    </div>
                    <h4>Shadow & Border </h4>
                    <div>
                        <div class="pbp_form" style="width: 100%;">
                          <br>
                          <p>Border</p>
                          <br>
                          <label>Border Width : </label>
                          <input type="number" class="colBorderWidth colOptionsFields" data-optname="colBorder.colBorderWidth" >px
                          <br>
                          <br>
                          <label>Border Style : </label>
                          <select class="colBorderStyle colOptionsFields" data-optname="colBorder.colBorderStyle" >
                            <option value="solid">Solid</option>
                            <option value="dotted">Dotted</option>
                            <option value="dashed">Dashed</option>
                            <option value="double">Double</option>
                          </select>
                          <br>
                          <br>
                          <label>Border Color : </label>
                          <input type="text" id="colBorderColor" class="color-picker_btn_two  colBorderColor colOptionsFields" data-optname="colBorder.colBorderColor" >
                          <br>
                          <label>Corner Radius : </label>
                          <input type="number" class="colBorderRadius colOptionsFields" data-optname="colBorder.colBorderRadius" >px
                          <br>
                          <hr>
                          <br>
                          <br>
                          <p>Box Shadow</p>
                          <br>
                          <label>Shadow Horizontal Position : </label>
                          <input type="number" class="colOptionsFields colBoxShadowH" data-optname="colBoxShadow.colBoxShadowH" > px
                          <br>
                          <br>
                          <label>Shadow Vertcal Position : </label>
                          <input type="number" class="colOptionsFields colBoxShadowV" data-optname="colBoxShadow.colBoxShadowV" > px
                          <br>
                          <br>
                          <label>Shadow Distance (Blur) : </label>
                          <input type="number" class="colOptionsFields colBoxShadowBlur" data-optname="colBoxShadow.colBoxShadowBlur" > px
                          <br>
                          <br>
                          <br>
                          <label>Shadow Color : </label>
                          <input type="text" id="colBoxShadowColor" class="color-picker_btn_two  colBoxShadowColor colOptionsFields" data-alpha='true' data-optname="colBoxShadow.colBoxShadowColor" >
                        </div>
                    </div>
                  </div>
                </div>

            </div>
            <div id="tabColumnWidgetArea" class="tab" style="min-height:400px;">
                <div class="tabs">
                  <ul class="tab-links">
                    <li class="active"><a href="#colWidgetsTab" class="tab_link">Widgets</a></li>
                    <li><a href="#columnTabCustomCss" class="tab_link">Custom CSS</a></li>
                  </ul>
                  <div class="tab-content">
                    <div id="colWidgetsTab" class="tab active" style="min-height:400px;">
                      <ul id="widgets">
                        <script type="text/template" id="widget-template"></script>
                      </ul> 
                    </div>
                    <div id="columnTabCustomCss" class="tab">
                        <textarea  class="colOptionsFields columnCustomStyling" style="width: 90%; min-height: 280px;" data-optname="columnCSS" > </textarea>
                    </div>
                  </div>
                </div>
            </div>
            <div id="tabColumnWidgets" class="tab" style="min-height:550px;">
                <div class="edit_column_widgets">
                    <div class="tabs">
                      <ul class="tab-links">
                      </ul>
                      <div class="tab-content" style="padding:10px 0px 15px 15px; background: #fff;">
                        <input type="text" class="pbSearchWidget" placeholder="Search a widget" style="width: 90%;">
                        <?php
                            $proWidgetLoaded = false;
                            if (is_plugin_active( 'PluginOps-Optin-Builder-Extensions-Pack/extension-pack.php' ) ) {
                                if (function_exists('smfb_available_pro_widgets') ) {
                                  smfb_available_pro_widgets();
                                  $proWidgetLoaded = true;
                                }
                            }
                            if($proWidgetLoaded == false) {
                                ?>
                                  <div style="display: inline-block; width: 49%; float: left;">
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-liveText"><i class="fa fa-edit"></i> <br>Text Editor</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-img"><i class="fa fa-picture-o"></i> <br> Image</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-navmenu"><i class="fa fa-navicon"></i> <br>Nav Builder</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-menu"><i class="fa fa-navicon"></i> <br> Menu</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-formBuilder"> <i class="fa fa-wpforms"></i> <br> Form Builder</div>
                                        <div class="widget POPB_widget" data-type="wigt-video"> <i class="fa fa-video-camera"></i> <br>  Video</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-audio"> <i class="fa fa-file-audio-o"></i> <br>  Audio</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-anchor"> <i class="fa fa-anchor"></i> <br> Anchor </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-break"> <i class="fa fa-ellipsis-h"></i> <br> Break </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-shareThis"><i class="fa fa-share"></i> <br> Share This </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-shortcode"><i class="fa fa-code"></i> <br> ShortCode </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-imageSlider"><i class="fa fa-file-image-o"></i> <br> Image Slider </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-pricing"><i class="fa fa-tags"></i> <br> Pricing </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-imgCarousel"><i class="fa fa-image"></i><i class="fa fa-image"></i>  <br> Image Carousel </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-countdown"><i class="fa fa-sort-numeric-desc"></i> <br> Countdown </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-progressBar"><i class="fa fa-align-left"></i> <br> Progress Bar </div>
                                    
                                  </div>
                                  <div style="display: inline-block; width: 49%;">
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-text"><i class="fa fa-text-width"></i> <br> Heading </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-btn-gen"><i class="fa fa-mouse-pointer"></i> <br> Button</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-gallery"><i class="fa fa-image"></i> <i class="fa fa-image"></i> <br>Image Gallery</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-form"> <i class="fa fa-envelope-o"></i> <br> Subscribe Form</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-postSlider"><i class="fa fa-file-image-o"></i> <br> Posts Slider</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-embededVideo"> <i class="fa fa-youtube-play"></i> <br> Embed Video </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-icons"><i class="fa fa-fonticons"></i> <br> Icons</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-spacer"> <i class="fa fa-arrows-v"></i> <br> Spacer </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-popupClose"><i class="fa fa-remove"></i> <br> PopUp Close</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-WYSIWYG"><i class="fa fa-file-text-o"></i> <br> HTML Editor</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-iconList"> <i class="fa fa-list"></i> <br> Icon List</div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-testimonialCarousel"><i class="fa fa-quote-left"></i> <br> Testimonial Slider </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-cards"><i class="fa fa-fonticons"></i> <br> Card </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-testimonial"><i class="fa fa fa-quote-left"></i> <br> Testimonial </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-counter"> <i class="fa fa-sort-numeric-desc"></i> <br> Counter </div>
                                        <div class="widget POPB_widget wdt-draggable" data-type="wigt-pb-wooCommerceProducts"> <i class="fa fa-shopping-cart"></i> <br> WooCommerce Products </div>
                                  </div>
                                  <br><br><br> <a href="https://pluginops.com/page-builder/?ref=widgets" target="_blank" style="padding:5px 10px; text-decoration: none; font-size: 17px; text-align: center; color: #fff; background:#8BC34A; border-radius: 3px;"> Unlock All These Amazing Widgets </a> <br>
                                <?php
                            }
                        ?>

                          <div style="display: inline-block; width: 49%; float: left;">
                            
                          </div>

                          <div style="display: inline-block; width: 49%;">
                            
                          </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    
    
    </div>
  </div>
<input type="hidden" class="ColcurrentEditableRowID" value="">
<input type="hidden" class="currentEditableColId" value="">


<script>
  ( function( $ ) {

    $('[data-optname="colBgImg"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal != '' && thisFieldVal != ' ') {
        $('.imageBackgroundOpsCol').css('display','block');
      }else{
        $('.imageBackgroundOpsCol').css('display','none');
      }
    });

    $('[data-optname="colBgImgT"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal != '' && thisFieldVal != ' ') {
        $('.imageBackgroundOpsCol').css('display','block');
      }else{
        $('.imageBackgroundOpsCol').css('display','none');
      }
    });

    $('[data-optname="colBgImgM"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal != '' && thisFieldVal != ' ') {
        $('.imageBackgroundOpsCol').css('display','block');
      }else{
        $('.imageBackgroundOpsCol').css('display','none');
      }
    });

    $('[data-optname="bgImgOps.pos"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal == 'custom') {
        $('.rowBgImgCustomPositionDiv').css('display','block');
      }else{
        $('.rowBgImgCustomPositionDiv').css('display','none');
      }
    });
    $('[data-optname="bgImgOps.posT"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal == 'custom') {
        $('.rowBgImgCustomPositionDiv').css('display','block');
      }else{
        $('.rowBgImgCustomPositionDiv').css('display','none');
      }
    });
    $('[data-optname="bgImgOps.posM"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal == 'custom') {
        $('.rowBgImgCustomPositionDiv').css('display','block');
      }else{
        $('.rowBgImgCustomPositionDiv').css('display','none');
      }
    });



    $('[data-optname="bgImgOps.size"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal == 'custom') {
        $('.rowBgImgCustomSizeDiv').css('display','block');
      }else{
        $('.rowBgImgCustomSizeDiv').css('display','none');
      }
    });
    $('[data-optname="bgImgOps.sizeT"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal == 'custom') {
        $('.rowBgImgCustomSizeDiv').css('display','block');
      }else{
        $('.rowBgImgCustomSizeDiv').css('display','none');
      }
    });
    $('[data-optname="bgImgOps.sizeM"]').on('change',function(){
      var thisFieldVal = $(this).val();
      if (thisFieldVal == 'custom') {
        $('.rowBgImgCustomSizeDiv').css('display','block');
      }else{
        $('.rowBgImgCustomSizeDiv').css('display','none');
      }
    });

  }( jQuery ) );
</script>
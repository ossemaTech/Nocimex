<?php if ( ! defined( 'ABSPATH' ) ) exit;

include SMFB_PLUGIN_PATH.'/integrations/form-builder-database/extension.php';

?>

<div  class="abTestNotice" style=""> 

    <i class='fa fa-circle-o-notch'></i> 
   	Did you know You can Download, Export & Sync your form submissions with your favorite  email marketing services :   
    <a href='https://pluginops.com/page-builder/?ref=templates' target='_blank' style="padding: 5px 10px;"> Click here to order</a>
        
</div>

<?php
if (function_exists('smfb_formBuilder_database_renderFormDataTable_extension')) {
  echo smfb_formBuilder_database_renderFormDataTable_extension($postId);
}else{
	echo "<h1> Please get Form Builder Database extension to access all the submissions. </h1>";
}



?>


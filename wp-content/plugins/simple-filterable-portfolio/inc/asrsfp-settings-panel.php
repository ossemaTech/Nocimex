<?php
/**
* Add Setting Page
*/
function asrsfp_add_submenu_page() {
	add_submenu_page( 
		'edit.php?post_type=portfolio', 
		'Portfolio Settings', 
		'Settings', 
		'manage_options', 
		'settings', 
		'asrsfp_settings_callback' 
	);
}
add_action( 'admin_menu', 'asrsfp_add_submenu_page' );

function asrsfp_settings_callback(){
	?>
	<div class="wrap">
		<h1>Simple Filterable Portfolio</h1>
		<form method="post" action="options.php">
			<?php settings_fields( 'asrsfp_plugin_settings_group' ); ?>
			<?php do_settings_sections( 'asrsfp_plugin_settings_group' ); ?>
			<table class="form-table">
				<tr valign="top">
					<th scope="row">Use Filter :</th>
					<td>
						<fieldset>
							<input style="" type="checkbox" name="asrsfp_filter_val" value="1" <?php checked( get_option('asrsfp_filter_val'), 1 ); ?>/>
						</fieldset>				
					</td>
				</tr>
				<tr valign="top">
					<th scope="row">Click To Open :</th>
					<td>
						<fieldset>
							<label>
								<input style="" type="radio" name="asrsfp_click_val" value="0" <?php checked( get_option('asrsfp_click_val'), 0 ); ?>/>
								<span>Portfolio Popup</span>
							</label>
							<br>
							<label>
								<input style="" type="radio" name="asrsfp_click_val" value="1" <?php checked( get_option('asrsfp_click_val'), 1 ); ?>/>
								<span>Single Portfolio Page</span>
							</label>
						</fieldset>
					</td>
				</tr>
			</table>
			
			<?php submit_button(); ?>
		</form>
	</div>
	<?php 
}


function register_asrgm_plugin_settings() {
	//register our settings
	register_setting( 'asrsfp_plugin_settings_group', 'asrsfp_filter_val', array( 'default' => '1' ) );
	register_setting( 'asrsfp_plugin_settings_group', 'asrsfp_click_val', array( 'default' => '0' ) );
}
add_action( 'admin_init', 'register_asrgm_plugin_settings' );
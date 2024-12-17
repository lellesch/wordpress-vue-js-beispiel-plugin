<?php
/**
 * Plugin Name: Mein Vue Plugin
 * Description: Ein WordPress-Plugin mit Vue.js 3 und einem Counter.
 * Version: 1.0
 * Author: Dein Name
 */

function mein_vue_plugin_menu() {
	add_menu_page(
		'Vue Options Page',
		'Vue Options',
		'manage_options',
		'vue-options-page',
		'mein_vue_plugin_render_page'
	);
}
add_action('admin_menu', 'mein_vue_plugin_menu');

function mein_vue_plugin_render_page() {
	echo '<div id="vue-app"></div>';
	wp_enqueue_script('mein-vue-script', plugin_dir_url(__FILE__) . 'build/bundle.js', [], '1.0', true);
}

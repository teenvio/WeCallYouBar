<?php
/*
Plugin Name: We Will Call You
Plugin URI: https://github.com/teenvio/we-will-call-you
Description: Simple WordPress plugin to create a bottom bar with a simple form to indicate the contact data to call: name, email and telephone. Synchronized with Teenvio.com
Version: 1.0
Author: Víctor J. Chamorro - Teenvio.com
Author URI: http://teenvio.com
License: GPL2
*/
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function wewillcallyou_add_scripts(){
	wp_register_script( 'wewillcallyou', plugins_url( '/we-will-call-you.js', __FILE__ ), array( 'jquery' ) );	
	wp_enqueue_script( 'wewillcallyou' );
}

function wewillcallyou_addhtml(){
	echo "\n<!-- HTML WeWillCallYou -->\n";
	$tpl = file_get_contents(plugins_url( 'tpl/bottom_bar.tpl', __FILE__ ));
	$tpl = str_replace('__#name#__', __('name','wewillcallyou'),$tpl);
	$tpl = str_replace('__#email#__', __('email','wewillcallyou'),$tpl);
	$tpl = str_replace('__#phone#__', __('phone','wewillcallyou'),$tpl);
	$tpl = str_replace('__#send#__', __('send','wewillcallyou'),$tpl);
	$tpl = str_replace('__#title_text#__', get_option('title_text'),$tpl);
	$tpl = str_replace('__#conditions_url#__', get_option('conditions_url'),$tpl);
	$tpl = str_replace('__#conditions#__', __('conditions','wewillcallyou'),$tpl);
	$tpl = str_replace('__#acept#__', __('acept the','wewillcallyou'),$tpl);
	
	echo $tpl;
	
	echo "\n<!-- / HTML WeWillCallYou -->\n";
}

function wewillcallyou_init(){
	add_option('title_text',"Any questions? We'll call you!");
	load_plugin_textdomain( 'wewillcallyou', false, dirname( plugin_basename( __FILE__ ) ) . '/i18n' );
	
}

function wewillcallyou_admin_init(){
	add_options_page("We'll Call You", "We'll Call You", "read", 'wewillcallyou','wewillcallyou_admin_page');
}

function wewillcallyou_admin_page(){
	$tpl = file_get_contents(plugins_url( 'tpl/admin.tpl', __FILE__ ));
	$tpl = str_replace('__#save#__', __('save','wewillcallyou'),$tpl);
	$tpl = str_replace('__#title#__', __('title','wewillcallyou'),$tpl);
	$tpl = str_replace('__#action#__', __('action','wewillcallyou'),$tpl);
	$tpl = str_replace('__#send-email#__', __('send email','wewillcallyou'),$tpl);
	$tpl = str_replace('__#save-app#__', __('save into external app','wewillcallyou'),$tpl);
	$tpl = str_replace('__#send-email-save-app#__', __('send email and save into external app','wewillcallyou'),$tpl);
	echo $tpl;
}

add_action('plugins_loaded','wewillcallyou_init');
add_action('wp_enqueue_scripts', 'wewillcallyou_add_scripts' );
add_action('wp_footer', 'wewillcallyou_addhtml');
add_action('admin_menu','wewillcallyou_admin_init');
?>
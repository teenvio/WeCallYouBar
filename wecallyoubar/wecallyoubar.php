<?php
/*
Plugin Name: We Call You Bar
Plugin URI: https://github.com/teenvio/wecallyou
Description: Simple WordPress plugin to create a bottom bar with a simple form to indicate the contact data to call: name, email and telephone
Version: 1.0
Author: Teenvio.com
Author URI: http://teenvio.com
License: GPL2
*/


function wecallyou_load_header() {
        echo "<!-- Teenvio WeCallYouBar -->";
}

add_action('wp_head', 'wecallyou_load_header');

?>
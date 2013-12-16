<?php
/**
 * @version 1.0
 */
/*
  Plugin Name: Kittify
  Plugin URI: http://wordpress.org/plugins/kittify/
  Description: You really love your cat? Show it with Kittify and replace every image with a picture of a sweet kitty. 
  Author: Tim Pietrusky
  Version: 1.0
  Author URI: http://timpietrusky.com
*/
?>

<?php 

  // Load the kittify.js
  function kittify_script() {
    if (!is_admin()) {
      wp_register_script('kittify_js', plugins_url() . '/kittify/kittify.js', array(), '1.0.0'); 
      wp_enqueue_script('kittify_js'); 
    }
  }

  // Add the kittify.js to the footer
  add_action('wp_footer', 'kittify_script');
?>
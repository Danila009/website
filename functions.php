<?php
  function herobiz_public_scripts(){

    wp_enqueue_script( 'main', get_template_directory_uri() . '/api/api.js', [], wp_rand(), true );
  }
 ?>

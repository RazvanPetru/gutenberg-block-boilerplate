<?php
/*
* Plugin Name: Aimee Blocks
* Plugin URI: https://aimee.ro/
* Description: Aimee Gutenberg Blocks Plugin
* Author: Razvan Petru
* Author URI: https://aimee.ro/
*/

function blocks_aimee_init() {
    register_block_type( __DIR__ . "/build/block-one" );
    register_block_type( __DIR__ . "/build/block-two" );
}

add_action( "init", "blocks_aimee_init");
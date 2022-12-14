<?php

session_start();

// database
require_once 'core/database.php';

// auth
require_once 'core/auth.php';

// autoload model
spl_autoload_register(function($classname){
    require_once 'app/models/'.$classname.'.php';
});

require_once 'core/app.php';
require_once 'core/controller.php';
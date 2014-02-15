<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

// For development only
$app['debug'] = true;

// Database connection
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_sqlite',
        'dbname' => 'gallery',
        'host' => '127.0.0.1',
        'port' => '33000',
        'user' => 'root',
        'password' => 'root',
        'path'     => __DIR__.'/app.db',
    ),
));

$app->get('/hello/{name}', function ($name) use ($app) {
    return 'Hello '.$app->escape($name);
});

$app->run();


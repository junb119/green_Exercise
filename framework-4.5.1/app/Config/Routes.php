<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/board', 'Board::list');
$routes->get('/board/write', 'Board::write');
$routes->match(['get','post'], 'writeSave', 'Board::save');
$routes->get('/boardView/(:num)', 'Board::view/$1');

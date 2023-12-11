<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index',['filter' => 'authGuard']);

//Signup, Signin
$routes->get('register', 'SignupController::index');
$routes->match(['get','post'],'register/store', 'SignupController::store');

$routes->get('login', 'SigninController::index');
$routes->post('login', 'SigninController::login');
$routes->get('logout', 'SigninController::logout');


$routes->get('profile', 'ProfileController::index',['filter' => 'authGuard']);

//Category
$routes->get('categories', 'CategoryController::index',['filter' => 'authGuard']); //list
$routes->get('categories/add-category', 'CategoryController::create',['filter' => 'authGuard']); //entry
$routes->post('categories/store', 'CategoryController::store',['filter' => 'authGuard']); //save
$routes->get('categories/edit/(:num)', 'CategoryController::edit/$1',['filter' => 'authGuard']); //edit
$routes->post('categories/update/(:num)', 'CategoryController::update/$1',['filter' => 'authGuard']); //update
$routes->get('categories/delete/(:num)', 'CategoryController::delete/$1',['filter' => 'authGuard']); //delete


//Services
$routes->get('services', 'ServiceController::index',['filter' => 'authGuard']);
$routes->get('services/add-service', 'ServiceController::add',['filter' => 'authGuard']);
$routes->post('services/store', 'ServiceController::store',['filter' => 'authGuard']);

//Property
$routes->get('properties', 'PropertyController::index');
$routes->get('properties/add-property', 'PropertyController::add');
$routes->post('properties/store', 'PropertyController::store');
$routes->get('properties/delete/(:num)', 'PropertyController::delete/$1');
$routes->get('properties/edit/(:num)', 'PropertyController::edit/$1');
$routes->post('properties/update/(:num)', 'PropertyController::update/$1');

//Order
$routes->get('orders', 'OrderController::index',['filter' => 'authGuard']);


//Products
$routes->get('products', 'ProductController::index');
$routes->get('products/add-product', 'ProductController::add');
$routes->post('products/store', 'ProductController::store');
$routes->get('products/delete/(:num)', 'ProductController::delete/$1');
$routes->get('products/edit/(:num)', 'ProductController::edit/$1');
$routes->post('products/update/(:num)', 'ProductController::update/$1');


//Photo
$routes->get('photos', 'PhotoController::index');
$routes->get('photos/add-photo', 'PhotoController::add');
$routes->post('photos/store', 'PhotoController::store');
$routes->get('photos/delete/(:num)', 'PhotoController::delete/$1');
$routes->get('photos/edit/(:num)', 'PhotoController::edit/$1');
$routes->post('photos/update/(:num)', 'PhotoController::update/$1');


//Flat
$routes->get('flats', 'FlatController::index');
$routes->get('flats/add-flat', 'FlatController::add');
$routes->post('flats/store', 'FlatController::store');
$routes->get('flats/delete/(:num)', 'FlatController::delete/$1');
$routes->get('flats/edit/(:num)', 'FlatController::edit/$1');
$routes->post('flats/update/(:num)', 'FlatController::update/$1');


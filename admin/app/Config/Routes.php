<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index',['filter' => 'authGuard','noAuth']);
$routes->get('/editor', 'EditorController::index',['filter' => 'authGuard','noAuth']);

//Signup, Signin
$routes->get('register', 'SignupController::index');
$routes->match(['get','post'],'register/store', 'SignupController::store');

$routes->get('login', 'SigninController::index');
$routes->post('login', 'SigninController::login');
$routes->get('logout', 'SigninController::logout');

// Profile
$routes->get('profile', 'ProfileController::index',['filter' => 'authGuard']);

//Category
$routes->get('categories', 'CategoryController::index',['filter' => 'authGuard']); //list
$routes->get('categories/add-category', 'CategoryController::create',['filter' => 'authGuard']); //entry
$routes->post('categories/store', 'CategoryController::store',['filter' => 'authGuard']); //save
$routes->get('categories/edit/(:num)', 'CategoryController::edit/$1',['filter' => 'authGuard']); //edit
$routes->post('categories/update/(:num)', 'CategoryController::update/$1',['filter' => 'authGuard']); //update
$routes->get('categories/delete/(:num)', 'CategoryController::delete/$1',['filter' => 'authGuard']); //delete

//Type
$routes->get('type', 'TypeController::index',['filter' => 'authGuard']); //list
$routes->get('type/add-type', 'TypeController::add',['filter' => 'authGuard']); //entry
$routes->post('type/store', 'TypeController::store',['filter' => 'authGuard']); //save
$routes->get('type/edit/(:num)', 'TypeController::edit/$1',['filter' => 'authGuard']); //edit
$routes->post('type/update/(:num)', 'TypeController::update/$1',['filter' => 'authGuard']); //update
$routes->get('type/delete/(:num)', 'TypeController::delete/$1',['filter' => 'authGuard']); //delete

//Services
$routes->get('services', 'ServiceController::index',['filter' => 'authGuard']);
$routes->get('services/add-service', 'ServiceController::add',['filter' => 'authGuard']);
$routes->post('services/store', 'ServiceController::store',['filter' => 'authGuard']);
$routes->get('services/delete/(:num)', 'ServiceController::delete/$1',['filter' => 'authGuard']);
$routes->get('services/edit/(:num)', 'ServiceController::edit/$1',['filter' => 'authGuard']);
$routes->post('services/update/(:num)', 'ServiceController::update/$1',['filter' => 'authGuard']);

//Property
$routes->get('properties', 'PropertyController::index',['filter' => 'authGuard']);
$routes->get('properties/add-property', 'PropertyController::add',['filter' => 'authGuard']);
$routes->post('properties/store', 'PropertyController::store',['filter' => 'authGuard']);
$routes->get('properties/delete/(:num)', 'PropertyController::delete/$1',['filter' => 'authGuard']);
$routes->get('properties/edit/(:num)', 'PropertyController::edit/$1',['filter' => 'authGuard']);
$routes->post('properties/update/(:num)', 'PropertyController::update/$1',['filter' => 'authGuard']);

//Order
$routes->get('orders', 'OrderController::index',['filter' => 'authGuard']);


// frontend
$routes->get('allproducts', 'frontend\ProductController::index');
$routes->post('allproducts/(:num)', 'frontend\ProductController::show/$1');
$routes->get('registration', 'frontend\RegistrationController::index');



//Services for Editor
$routes->get('editor/services', 'ServiceController::index',['filter' => 'authGuard'],);
$routes->get('editor/services/add-service', 'ServiceController::add',['filter' => 'authGuard']);
$routes->post('editor/services/store', 'ServiceController::store',['filter' => 'authGuard']);
$routes->get('editor/services/delete/(:num)', 'ServiceController::delete/$1',['filter' => 'authGuard']);
$routes->get('editor/services/edit/(:num)', 'ServiceController::edit/$1',['filter' => 'authGuard']);
$routes->post('editor/services/update/(:num)', 'ServiceController::update/$1',['filter' => 'authGuard']);

//Property for Editor
$routes->get('editor/properties', 'PropertyController::index',['filter' => 'authGuard']);
$routes->get('editor/properties/add-property', 'PropertyController::add',['filter' => 'authGuard']);
$routes->post('editor/properties/store', 'PropertyController::store',['filter' => 'authGuard']);
$routes->get('editor/properties/delete/(:num)', 'PropertyController::delete/$1',['filter' => 'authGuard']);
$routes->get('editor/properties/edit/(:num)', 'PropertyController::edit/$1',['filter' => 'authGuard']);
$routes->post('editor/properties/update/(:num)', 'PropertyController::update/$1',['filter' => 'authGuard']);

//Category for Editor
$routes->get('editor/categories', 'CategoryController::index',['filter' => 'authGuard']); //list
$routes->get('editor/categories/add-category', 'CategoryController::create',['filter' => 'authGuard']); //entry
$routes->post('editor/categories/store', 'CategoryController::store',['filter' => 'authGuard']); //save
$routes->get('editor/categories/edit/(:num)', 'CategoryController::edit/$1',['filter' => 'authGuard']); //edit
$routes->post('editor/categories/update/(:num)', 'CategoryController::update/$1',['filter' => 'authGuard']); //update
$routes->get('editor/categories/delete/(:num)', 'CategoryController::delete/$1',['filter' => 'authGuard']); //delete

//Type for Editor
$routes->get('editor/type', 'TypeController::index',['filter' => 'authGuard']); //list
$routes->get('editor/type/add-type', 'TypeController::add',['filter' => 'authGuard']); //entry
$routes->post('editor/type/store', 'TypeController::store',['filter' => 'authGuard']); //save
$routes->get('editor/type/edit/(:num)', 'TypeController::edit/$1',['filter' => 'authGuard']); //edit
$routes->post('editor/type/update/(:num)', 'TypeController::update/$1',['filter' => 'authGuard']); //update
$routes->get('editor/type/delete/(:num)', 'TypeController::delete/$1',['filter' => 'authGuard']); //delete
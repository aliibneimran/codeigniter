<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\OrderModel;

class OrderController extends BaseController
{
    protected $order = '';
    protected $helpers = ['form'];
    public function __construct(){
        $this->order = new OrderModel;
    } 
    public function index()
    {
        $data['items'] = $this->order->findAll();
        return view("orders/index", $data);
    }
    
}

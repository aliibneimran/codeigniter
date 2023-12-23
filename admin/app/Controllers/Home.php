<?php

namespace App\Controllers;

use App\Models\CategoryModel;
use App\Models\OrderModel;
use App\Models\PropertyModel;
use App\Models\ServiceModel;
use App\Models\TypeModel;

class Home extends BaseController
{
    protected $property = '';
    protected $service = '';
    protected $category = '';
    protected $type = '';
    protected $order = '';

    protected $helpers = ['form', 'url', 'file'];
    public function __construct()
    {
        $this->property = new PropertyModel();
        $this->service = new ServiceModel();
        $this->category = new CategoryModel();
        $this->type = new TypeModel();
        $this->order = new OrderModel();
    }
    public function index(): string
    {
        $totalProperty = $this->property->countAllResults();
        $totalService = $this->service->countAllResults();
        $totalCategory = $this->category->countAllResults();
        $totalType = $this->type->countAllResults();
        $totalOrder = $this->order->countAllResults();

        $data['totalProperty'] = $totalProperty;
        $data['totalService'] = $totalService;
        $data['totalCategory'] = $totalCategory;
        $data['totalType'] = $totalType;
        $data['totalOrder'] = $totalOrder;
        return view('dashboard',$data);
    }
    
}

<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\CategoryModel;
use App\Models\PropertyModel;

class PropertyController extends BaseController
{
    private $property = '';
    private $category = '' ;

    protected $helpers = ['form', 'url','file'];
    public function __construct()
    {
        $this->property = new PropertyModel();
        $this->category = new CategoryModel();       

    }
    public function index()
    {
        // $this->property->join('category','category.id= products.category_id');
        // $data['items'] = $this->property->findAll();       
        // $data['title'] = 'All Properties';  
        return view('properties/index');
    }
    public function add()
    {
        return view("properties/add");
    }
    public function store()
    {
        $rules = [
            'title' => 'required|max_length[30]',
            'photo'  => 'uploaded[photo]|max_size[photo,1024]|ext_in[photo,jpg,jpeg,png]',
        ];
        if(! $this->validate($rules)){
            return view('/properties/add');
        }else{
            $img = $this->request->getFile('photo');
            $img_name = $img->getRandomName();
            $img->move('assets/uploads', $img_name);
    
            $data = [
                'title' => $this->request->getVar("title"),
                'description' => $this->request->getVar("description"),
                'price' => $this->request->getVar("price"),
                'category' => $this->request->getVar("cat"),
                'type' => $this->request->getVar("type"),
                'status' => $this->request->getVar("status"),
                'address' => $this->request->getVar("address"),
                'country' => $this->request->getVar("country"),
                'city' => $this->request->getVar("city"),
                'zip' => $this->request->getVar("zip"),
                'size' => $this->request->getVar("size"),
                'bed' => $this->request->getVar("bed"),
                'bath' => $this->request->getVar("bath"),
                'floor' => $this->request->getVar("floor"),
                // 'interior'=> $this->request->getVar("interior"),
                // 'outdoor'=> $this->request->getVar("outdoor"),
                // 'utility'=> $this->request->getVar("utility"),
                'photo' => $img_name
            ];
            print_r($data);
            $this->property->insert($data);
            $session = session();
            $session->setFlashdata('msg', 'Successfully Added');
            return $this->response->redirect('/properties/add-property');
        }
      
    }
}

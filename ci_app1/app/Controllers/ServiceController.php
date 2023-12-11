<?php

namespace App\Controllers;
use App\Models\ServiceModel;

use App\Controllers\BaseController;

class ServiceController extends BaseController
{
    private $service = '' ;
    public function __construct(){
      
        $this->service = new ServiceModel();       
    }
    public function index()
    { 
        $data['items'] = $this->service->findAll();       
        $data['title'] = 'All Service';       
        return view('services/index',$data);
    }
    public function add(){
        return view("services/add");
    }
    public function store(){
        $data = [
            'blog_title'=> $this->request->getVar("title"),
            'blog_description'=> $this->request->getVar("description"),
        ];
            $this->service->insert($data); 
            $session = session(); 
            $session->setFlashdata('msg', 'Service Successfully Added');   
            return $this->response->redirect('/services/add-service'); 
    }
            
}

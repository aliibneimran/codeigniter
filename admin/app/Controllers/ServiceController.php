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
            'title'=> $this->request->getVar("title"),
            'description'=> $this->request->getVar("description"),
        ];
            $this->service->insert($data); 
            $session = session(); 
            $session->setFlashdata('msg', 'Service Successfully Added');   
            return $this->response->redirect('/services/add-service'); 
    }
    public function edit($id){
        $data= $this->service->find($id);
        // print_r($data);
        return view('/services/edit',$data); 
    }
    public function update($id){
        $data = [
            'title'=> $this->request->getVar("title"),
            'description'=> $this->request->getVar("description"),
        ];
        $this->service->update($id, $data);
        $session = session(); 
        $session->setFlashdata('msg', 'Service Successfully Updated');
        $this->response->redirect('/services');
    }
    public function delete($id){
        $this->service->delete($id);
        $session = session(); 
        $session->setFlashdata('msg', 'Service Successfully Deleted');   
        return $this->response->redirect('/services/'); 
    }
            
}

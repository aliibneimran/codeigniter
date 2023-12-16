<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\TypeModel;

class TypeController extends BaseController
{
    protected $helpers = ['form','url'];
    protected $type ='';
    public function __construct(){
        $this->type = new TypeModel();       

    }
    public function index()
    {
        $data['items'] = $this->type->findAll(); 
        return view('type/index',$data);
    }
    public function add(){
        return view("type/add");
    }
    public function store(){
        $data = ['type'=> $this->request->getVar("name"),];
        $this->type->insert($data); 
        $session = session(); 
        $session->setFlashdata('msg', 'Type Successfully Added');   
        return $this->response->redirect('/type/add-type');
    }
    public function edit($id){
        $data= $this->type->find($id);
        // print_r($data);
        return view('/type/edit',$data); 
    }
    public function update($id){
        $data = ['type'=> $this->request->getVar("name"),];
        $this->type->update($id, $data);
        $session = session(); 
        $session->setFlashdata('msg', 'Type Successfully Updated');
        $this->response->redirect('/type');
    }
    public function delete($id){
        $this->type->delete($id);
        $session = session(); 
        $session->setFlashdata('msg', 'Type Successfully Deleted');   
        return $this->response->redirect('/type/'); 
    }

    
}

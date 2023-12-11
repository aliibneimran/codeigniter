<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\CategoryModel;


class CategoryController extends BaseController
{

    protected $category = '';
    protected $helpers = ['form','url'];
    public function __construct(){
      
        $this->category = new CategoryModel();       
    }    public function index()
    {
        $data['items'] = $this->category->findAll(); 
        $data['title'] = 'All Categories'; 
        return view('categories/index',$data);
    }
    public function create(){
        return view("categories/create");
    }
    public function store(){
        $data = ['category'=> $this->request->getVar("name"),];
        $this->category->insert($data); 
        $session = session(); 
        $session->setFlashdata('msg', 'Category Successfully Added');   
        return $this->response->redirect('/categories/add-category');
    }
    public function edit($id){
        $data= $this->category->find($id);
        // print_r($data);
        return view('/categories/edit',$data); 
    }
    public function update($id){
        $data = ['category'=> $this->request->getVar("name"),];
        $this->category->update($id, $data);
        $session = session(); 
        $session->setFlashdata('msg', 'Category Successfully Updated');
        $this->response->redirect('/categories');
    }
    public function delete($id){
        $this->category->delete($id);
        $session = session(); 
        $session->setFlashdata('msg', 'Category Successfully Deleted');   
        return $this->response->redirect('/categories/'); 
    }

}

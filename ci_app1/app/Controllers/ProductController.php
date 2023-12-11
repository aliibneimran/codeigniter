<?php

namespace App\Controllers;
use App\Models\ProductModel;

use App\Controllers\BaseController;
use App\Models\CategoryModel;

class ProductController extends BaseController
{
    private $product = '' ;
    private $category = '' ;
    protected $helpers = ['form','url','file'];
    public function __construct(){
      
        $this->product = new ProductModel();       
        $this->category = new CategoryModel();       
    }
    public function index()
    { 
        $this->product->join('category','category.id= products.category_id');
        $data['items'] = $this->product->findAll();       
        $data['title'] = 'All Products';       
        return view('products/index',$data);
    }
    public function add(){
        $data['cats'] = $this->category->findAll();
        return view("products/add",$data);
    }
    public function store(){
        $rules = [
            'name' => 'required|max_length[30]',
            // 'cat'  => 'required|max_length[30]',
            'model'  => 'required|max_length[10]',
            'sku'  => 'required|max_length[5]',
            'price'  => 'required|numeric',
            'photo'  => 'uploaded[photo]|max_size[photo,1024]|ext_in[photo,jpg,jpeg,png]',
        ];

        if(! $this->validate($rules)){
            return view('/products/add');
        }else{
            $img = $this->request->getFile('photo');
            $img_name = $img->getRandomName();
            $img->move('assets/uploads',$img_name);

            $data = [
                'product'=> $this->request->getVar("name"),
                'model'=> $this->request->getVar("model"),
                'price'=> $this->request->getVar("price"),
                'sku'=> $this->request->getVar("sku"),
                'category_id'=> $this->request->getVar("cat"),
                'photo'=> $img_name
            ];
    
            $this->product->insert($data); 
            $session = session(); 
            $session->setFlashdata('msg', 'Product Successfully Added');   
            return $this->response->redirect('/products/add-product');  
        }
    }
    public function edit($id){
        $data= $this->product->find($id);
        // print_r($data);
        return view('/products/edit',$data); 
    }

    public function update($id){
        $data = [
            'product'=> $this->request->getVar("name"),
            'model'=> $this->request->getVar("model"),
            'price'=> $this->request->getVar("price"),
            'sku'=> $this->request->getVar("sku"),
            'category'=> $this->request->getVar("cat"),
            'photo'=> $this->request->getVar("photo"),
        ];
        $this->product->update($id, $data);
        $session = session(); 
        $session->setFlashdata('msg', 'Product Successfully Updated');
        $this->response->redirect('/products');
    }
    

    public function delete($id){
        $this->product->delete($id);
        $session = session(); 
        $session->setFlashdata('msg', 'Product Successfully Deleted');   
        return $this->response->redirect('/products/'); 
    }
    
}

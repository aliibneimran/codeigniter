<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\PhotoModel;

class PhotoController extends BaseController
{
    protected $helpers = ['form','url','file'];
    private $product = '' ;
    public function __construct(){
      
        $this->product = new PhotoModel();             
    }
    public function index()
    {
        $data['items'] = $this->product->findAll();  
        return view('photos/index',$data);
    }
    public function add()
    {
        return view('photos/add');
    }
    public function store(){
        $rules = [
            'name' => 'required|max_length[30]',
            'photo'  => 'uploaded[photo]|max_size[photo,1024]|ext_in[photo,jpg,jpeg,png]',
        ];

        if(! $this->validate($rules)){
            return view('/photos/add');
        }else{
            // echo (WRITEPATH) ;

            $img = $this->request->getFile('photo');
            $img_name = $img->getRandomName();
            $img->move('assets/uploads',$img_name);
            $data = [
                'name'=> $this->request->getVar("name"),
                'photo'=> $img_name
            ];
    
            $this->product->insert($data); 
            $session = session(); 
            $session->setFlashdata('msg', 'Photo Successfully Added');   
            return $this->response->redirect('/photos/add-photo');  
        }
    }
    public function edit($id){
        $data= $this->product->find($id);
        // print_r($data);
        return view('/photos/edit',$data); 
    }
    public function update($id){
        $img = $this->request->getFile('photo');
        $img_name = $img->getRandomName();
        $img->move('assets/uploads',$img_name);
        $data = [
            'name'=> $this->request->getVar("name"),
            'photo'=> $img_name,
        ];
        $this->product->update($id, $data);
        $session = session(); 
        $session->setFlashdata('msg', 'Photo Successfully Updated');
        $this->response->redirect('/photos');
    }
    public function delete($id){
        $this->product->delete($id);
        $session = session(); 
        $session->setFlashdata('msg', 'Photo Successfully Deleted');   
        return $this->response->redirect('/photos/'); 
    }
}

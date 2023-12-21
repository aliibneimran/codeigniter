<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\CategoryModel;
use App\Models\PropertyModel;
use App\Models\StatusModel;
use App\Models\TypeModel;

class PropertyController extends BaseController
{
    protected $property = '';
    protected $category = '';
    protected $type = '';
    protected $status = '';

    protected $helpers = ['form', 'url', 'file'];
    public function __construct()
    {
        $this->property = new PropertyModel();
        $this->category = new CategoryModel();
        $this->type = new TypeModel();
        $this->status = new StatusModel();

    }
    public function index()
    {
        $this->property->join('categories', 'categories.c_id= property.category_id');
        $this->property->join('types', 'types.t_id= property.type_id');
        $this->property->join('statuses', 'statuses.s_id= property.status_id');
        $data['items'] = $this->property->findAll();
        $data['title'] = 'All Properties';
        return view('properties/index', $data);
    }
    public function add()
    {
        $data['cats'] = $this->category->findAll();
        $data['types'] = $this->type->findAll();
        $data['status'] = $this->status->findAll();
        return view("properties/add", $data);
    }
    public function store()
    {
        $rules = [
            'title' => 'required|max_length[30]',
            'photo' => 'uploaded[photo]|max_size[photo,1024]|ext_in[photo,jpg,jpeg,png]',
        ];
        if (!$this->validate($rules)) {
            return view('/properties/add');
        } else {
            $img = $this->request->getFile('photo');
            $img_name = $img->getRandomName();
            $img->move('assets/uploads', $img_name);

            $data = [
                'title' => $this->request->getVar("title"),
                'description' => $this->request->getVar("description"),
                'price' => $this->request->getVar("price"),
                'category_id' => $this->request->getVar("cat"),
                'type_id' => $this->request->getVar("type"),
                'status_id' => $this->request->getVar("status"),
                'address' => $this->request->getVar("address"),
                'country' => $this->request->getVar("country"),
                'city' => $this->request->getVar("city"),
                'zip' => $this->request->getVar("zip"),
                'size' => $this->request->getVar("size"),
                'bed' => $this->request->getVar("bed"),
                'bath' => $this->request->getVar("bath"),
                'floor' => $this->request->getVar("floor"),
                'utility' => implode(',', $this->request->getVar("utility")),
                'interior' => implode(',', $this->request->getVar("interior")),
                'outdoor' => implode(',', $this->request->getVar("outdoor")),
                'photo' => $img_name,
            ];
            // print_r($data);
            $this->property->insert($data);
            $session = session();
            $session->setFlashdata('msg', 'Successfully Added');
            return $this->response->redirect('/properties/add-property');
        }

    }
    public function edit($id)
    {

        $data['cats'] = $this->category->findAll();
        $data['types'] = $this->type->findAll();
        $data['status'] = $this->status->findAll();
        $data ['items']= $this->property->find($id);

        return view('/properties/edit', $data);
    }
    public function update($id)
    {
        $img = $this->request->getFile('photo');
        $img_name = $img->getRandomName();
        $img->move('assets/uploads', $img_name);
        $data = [
            'title' => $this->request->getVar("title"),
            'description' => $this->request->getVar("description"),
            'price' => $this->request->getVar("price"),
            'category_id' => $this->request->getVar("cat"),
            'type_id' => $this->request->getVar("type"),
            'status_id' => $this->request->getVar("status"),
            'address' => $this->request->getVar("address"),
            'country' => $this->request->getVar("country"),
            'city' => $this->request->getVar("city"),
            'zip' => $this->request->getVar("zip"),
            'size' => $this->request->getVar("size"),
            'bed' => $this->request->getVar("bed"),
            'bath' => $this->request->getVar("bath"),
            'floor' => $this->request->getVar("floor"),
            'utility' => implode(',', $this->request->getVar("utility")),
            'interior' => implode(',', $this->request->getVar("interior")),
            'outdoor' => implode(',', $this->request->getVar("outdoor")),
            'photo' => $img_name,
        ];
        $this->property->update($id, $data);
        $session = session();
        $session->setFlashdata('msg', 'Property Successfully Updated');
        $this->response->redirect('/properties');
    }
    public function delete($id)
    {
        $this->property->delete($id);
        $session = session();
        $session->setFlashdata('msg', 'Property Successfully Deleted');
        return $this->response->redirect('/properties/');
    }

}

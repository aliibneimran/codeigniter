<?php

namespace App\Controllers\Frontend;

use App\Controllers\BaseController;
use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class RegistrationController extends BaseController
{
    use ResponseTrait;
    public function index()
    {
        $userModel = new UserModel;
        $data=[
            'name'=>$this->request->getVar('name'),
            'email'=>$this->request->getVar('email'),
            'password'=>password_hash($this->request->getVar('password'),PASSWORD_DEFAULT),
        ];
        if($userModel->insert($data)){
            $data['msg'] = 'Registration Success';
            return $this->respond($data);
        }else{
            $data['msg'] = 'Registration Failed';
            return $this->respond($data);
        }
    }
}

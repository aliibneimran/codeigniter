<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;

class SigninController extends BaseController
{
    protected $helpers = ['form','url'];

    public function index()
    {
        return view('login');
    }

    public function login(){
        $userModel = new UserModel();
        $session = session();
        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');

        $data = $userModel->where('email', $email)->first();
        // print_r($data);

        if($data){
            $dbpass = $data['password'];
            $authenticatePassword = password_verify($password, $dbpass);
            // echo $authenticatePassword;
            if($authenticatePassword){
                $user_data = [
                    'id' => $data['id'],
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'user_role' => $data['role'],
                    'isLoggedIn' => TRUE,
                ];
                $session->set($user_data);
                if($data['role'] == 'admin'){
                    return redirect()->to('/');
                }
                if($data['role'] == 'editor'){
                    return redirect()->to('/editor');
                }
                //return redirect()->to('/');
            
            }else{
                $session->setFlashdata('msg', 'Password is incorrect.');
                return redirect()->to('/login');
            }
        }else{
            $session->setFlashdata('msg', 'Email does not exist');
            return redirect()->to('/login');
        }
    }
    public function logout(){
        session()->destroy();
        return redirect()->to('login');
    }
}

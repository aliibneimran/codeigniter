<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class FlatController extends BaseController
{
    public function index()
    {
        return view('flats/index');
    }
}

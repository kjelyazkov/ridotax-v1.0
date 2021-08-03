<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function list()
    {
        return response()->json(CarResource::collection(auth()->user()->cars));
    }
}

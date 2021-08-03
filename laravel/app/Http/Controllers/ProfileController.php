<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;

class ProfileController extends Controller
{
    public function index()
    {
        return response()->json(new ProfileResource(auth()->user()));
    }
}

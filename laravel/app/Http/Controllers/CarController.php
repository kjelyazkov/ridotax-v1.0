<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCarRequest;
use App\Http\Resources\CarResource;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function list()
    {
        return response()->json(CarResource::collection(auth()->user()->cars));
    }
    public function store(StoreCarRequest $request)
    {
        $newCar = auth()->user()->cars()->create($request->only('name', 'model', 'number'));

        return response()->json(new CarResource($newCar));
    }
}

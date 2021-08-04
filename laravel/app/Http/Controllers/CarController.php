<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use App\Http\Resources\CarResource;
use App\Http\Requests\StoreCarRequest;

class CarController extends Controller
{
    public function list()
    {
        return response()->json(CarResource::collection(auth()->user()->cars));
    }
    public function store(StoreCarRequest $request)
    {
        $newCar = auth()->user()->cars()->create($request->only('name', 'model', 'number', 'color'));

        return response()->json(new CarResource($newCar));
    }
    public function update(Car $car, Request $request)
    {
        $car->update($request->all());

        return new CarResource($car->fresh());
    }
}

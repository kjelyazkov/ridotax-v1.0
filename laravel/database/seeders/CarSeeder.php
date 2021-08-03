<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\User;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cars = [
            ['name' => 'skoda', 'model' => 'octavia', 'number' => 'в3643ен'],
            ['name' => 'bmw', 'model' => 'm6', 'number' => 'сс8462тт'],
            ['name' => 'volkswagen', 'model' => 'golf', 'number' => 'рр5382кн'],
            ['name' => 'skoda', 'model' => 'fabia', 'number' => 'е43653ер'],
            ['name' => 'audi', 'model' => 'a4', 'number' => 'р0432ке'],
            ['name' => 'volkswagen', 'model' => 'passat', 'number' => 'в1053ее'],
            ['name' => 'audi', 'model' => 'rs6', 'number' => 'са7623нн'],
            ['name' => 'bmw', 'model' => '318i', 'number' => 'с1212нт'],
        ];

        foreach ($cars as $car) {
            Car::factory()->create([
                'name' => $car['name'],
                'model' => $car['model'],
                'number' => $car['number'],
                'user_id' => rand(1, User::count())
            ]);
        }
    }
}

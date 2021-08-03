<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\User;
use Database\Seeders\CarSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (!User::exists()) User::factory(10)->create();
        if (!Car::exists()) $this->call(CarSeeder::class);
    }
}

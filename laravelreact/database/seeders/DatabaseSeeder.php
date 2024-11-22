<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Huy Hoàng',
            'email' => 'alo@gmail.com',
            'password' => Hash::make('1234'),
            'address' => 'Phường 15 Quận Tân Bình thành phố Hồ Chí Minh',
            'phone' => '0941280073'
        ]);
      
    }
}

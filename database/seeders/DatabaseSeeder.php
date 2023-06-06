<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Perkim',
            'role' => 'Dinas',
            'email' => 'perkim@madiunkab.go.id',
            'password' => bcrypt('Perkim123'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Kepala Dinas Perkim',
            'role' => 'Kepala Dinas',
            'email' => 'kepala@madiunkab.go.id',
            'password' => bcrypt('Perkim123'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'DPMPTSP',
            'role' => 'DPMPTSP',
            'email' => 'dpmptsp@madiunkab.go.id',
            'password' => bcrypt('Perkim123'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'User',
            'role' => 'User',
            'email' => 'user@madiunkab.go.id',
            'password' => bcrypt('Perkim123'),
        ]);
    }
}

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

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

            $rolSeeder = New RolSeeder;
            $rolSeeder->run();

            $paginaSeeder = New PaginaSeeder;
            $paginaSeeder->run();

            $enlaceSeeder = New EnlaceSeeder;
            $enlaceSeeder->run();

            $personaSeeder = New PersonaSeeder;
            $personaSeeder->run();

            $usuarioSeeder = New UsuarioSeeder;
            $usuarioSeeder->run();

            $bitacoraSeeder = New BitacoraSeeder;
            $bitacoraSeeder->run();

    }
}
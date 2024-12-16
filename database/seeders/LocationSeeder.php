<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('locations')->insert([
            ['title' => "Acarigua", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Anaco", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Barcelona", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Barinas", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Barquisimeto", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Boconó", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cabimas", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cabudare", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cagua", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Calabozo", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Caracas", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Carora", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Carúpano", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ciudad Bolívar", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ciudad Ojeda", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Coro", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cumaná", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "El Tigre", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "El Vigía", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Guacara", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Guama", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Guanare", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Guaraca", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Guarenas", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Guatire", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "La Guaira", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "La Victoria", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Lechería", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Los Teques", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Maracaibo", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Maracay", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Maturín", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Mérida", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Pampatar", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Porlamar", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Puerto Ayacucho", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Puerto Cabello", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Puerto La Cruz", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Puerto Ordaz", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Punto Fijo", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "San Carlos", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "San Cristóbal", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "San Felipe", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "San Félix", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "San Fernando de Apure", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "San Juan de los Morros", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Socopo", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Tocuyito", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Trujillo", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Tucupita", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Turmero", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Upata", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Valencia", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Valera", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Valle la Pascua", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}

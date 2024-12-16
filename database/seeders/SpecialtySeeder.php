<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SpecialtySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('specialties')->insert([
            ['title' => "Alergología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Alergólogo Pediatra", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Anestesiología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cardiología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cardiología Pediátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía Bariátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía Cardiovascular", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía de Columna", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía de Mano", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía General", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía Maxilofacial", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía Oncológica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía Pediátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía Plástica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirugía Torácica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirujano Plástico Ocular", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cirujano Vascular Periférico", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Coloproctología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Cosmiatra", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Dermatología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Diabetología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ecografista", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Electrofisiólogo", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Endocrinología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Endocrinología Pediátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Endodoncista", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Estudios", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Fisiatría", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Fisioterapia", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Flebología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Foniatría", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Gastroenterología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Gastroenterología Infantil", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Geriatría", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ginecología regenerativa, estética y funcional", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ginecología Reproductiva", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ginecología y Obstetricia", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ginecólogo", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Hematología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Implantología y Rehabilitación Oral", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Infectología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Infectología Pediátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Laboratorio", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Mastología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Medicina Bucomaxilofacial", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Medicina Estética", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Medicina Familiar", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Medicina General", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Medicina Interna", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Medicina Ocupacional", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Medicina Ortomolecular", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Médico Intensivista", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Nefrología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Nefrología Pediátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Neumología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Neumonología Pediátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Neurocirugía", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Neurología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Neurólogo Pediatra", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Nutrición", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Nutriología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Obesología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Odontología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Odontología Pediátrica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Oftalmología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Oftalmólogo Pediatra", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Oncología y Radioterapia", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Ortodoncista", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Otorrinolaringología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Pediatra Neonatal", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Pediatría", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Perinatología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Podología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Psicología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Psicopedagogía", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Psicoterapeuta", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Psiquiatría", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Radiología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Radioterapia Oncológica", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Reumatología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Sexología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Traumatología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => "Urología", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usersData = [
            [
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'password' => Hash::make('admin'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'doctor',
                'email' => 'doctor@doctor.com',
                'password' => Hash::make('doctor'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'patient',
                'email' => 'patient@patient.com',
                'password' => Hash::make('patient'),
                'remember_token' => Str::random(10),
            ],
        ];
        foreach ($usersData as $userData) {
            $user = User::factory()->create($userData);
            if ($userData['name'] == "admin") {
                $user->roles()->attach(1);
            }
            if ($userData['name'] == "doctor") {
                $user->roles()->attach(2);
                DB::table('doctors')->insert([
                    [
                        'user_id' => $user->id,
                        'fullname' => 'Doctor Doctor',
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now()
                    ],
                ]);
            }
            if ($userData['name'] == "patient") {
                $user->roles()->attach(3);
                DB::table('patients')->insert([
                    [
                        'user_id' => $user->id,
                        'fullname' => 'Patient Patient',
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now()
                    ],
                ]);
            }
        }
    }
}

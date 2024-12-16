<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SpecialtyController;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/login',[AuthController::class, 'login']);
Route::post('/register',[AuthController::class, 'register']);
Route::post('/logout',[AuthController::class, 'logout'])->middleware('auth:sanctum');

// Route::get('/specialties', SpecialtyController::class, 'getSpecialties')->middleware('auth:sanctum');
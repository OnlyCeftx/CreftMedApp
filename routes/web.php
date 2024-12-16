<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DoctorServiceController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $role = Auth::user()->roles;
    return Inertia::render('Dashboard', ['userRole' => $role->first()->name]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/send-event', function () {
    event(new \App\Events\MyEvent('Test message from Laravel'));
    return 'Event sent!';
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Admin
    Route::post('/doctors/{doctorId}/toggle-status', [AdminController::class, 'toggleStatus']);
    Route::get('/get/Doctors', [AdminController::class, 'getDoctors'])->name('get.doctors');

    //Doctor
    Route::get('/completeDoctor', [ProfileController::class, 'profileCompleteDoctor'])->name('doctor.profile.complete');
    Route::post('/completeDoctor', [ProfileController::class, 'storeCompleteDoctor']);
    Route::put('/appointments/{appointment}/schedule', [AppointmentController::class, 'schedule']);
    Route::get('/DoctorData', [ProfileController::class, 'DataDoctor'])->name('doctor.profile.data');
    Route::post('/DoctorFormUpdate', [ProfileController::class, 'DoctorFormUpdate'])->name('doctor.profile.update');


    Route::get('/DoctorService', [DoctorServiceController::class, 'create'])->name('doctor_service.create');
    Route::post('/DoctorService', [DoctorServiceController::class, 'store'])->name('doctor_service.store');

    //patient
    Route::post('/patient/new/appointment', [AppointmentController::class, 'newAppointment']);
    Route::get('/get/Appointments', [AppointmentController::class, 'getAppoinments'])->name('get.appoinments');
    Route::get('/get/Specialties', [AppointmentController::class, 'getSpecialties'])->name('get.specialties');
});

require __DIR__ . '/auth.php';

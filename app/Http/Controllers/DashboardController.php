<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Location;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render(
            'Dashboard',
            [
                'userRole' => Auth::user()->roles->first()->name,
                'specialties' => Specialty::with('services', 'doctors')->get(),
                'locations' => Location::all(),
                'data_session' => session('data_session'),
            ]
        );
    }
}

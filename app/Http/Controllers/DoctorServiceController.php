<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\DoctorService;
use App\Models\Service;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DoctorServiceController extends Controller
{
    public function create()
    {
        $doctor = Auth::user()->doctor;
        $specialty = Specialty::findOrFail($doctor->specialty_id);
        $services = Service::where("specialty_id", $specialty->id)->get();
        $doctor_services = DoctorService::where('doctor_id', $doctor->id)->get();
        $data = [
            'specialty' =>  $specialty,
            'services' =>  $services,
            'doctor_services' => $doctor_services
        ];
        return $data;
    }

    public function store(Request $request)
    {
        $request->validate([
            'id' => '',
            'doctor_id' => 'required|exists:doctors,id',
            'service_id' => 'required|exists:services,id',
            'price' => 'required|integer|min:0',
        ]);

        $DoctorServiceUpdate = DoctorService::find($request->id);

        if ($DoctorServiceUpdate) {
            $DoctorServiceUpdate->price = $request->price;

            $DoctorServiceUpdate->save();

            $message = "Servicio Actualizado exitosamente.";
            return back()->with('success', $message);
        }

        $doctor = Doctor::find($request->doctor_id);
        $doctor->services()->attach($request->service_id, ['price' => $request->price]);
        $message = "Servicio agregado exitosamente.";
        return back()->with('success', $message);
    }
}

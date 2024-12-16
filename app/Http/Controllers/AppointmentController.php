<?php

namespace App\Http\Controllers;

use App\Events\MyEvent;
use App\Models\Appointment;
use App\Models\Specialty;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;

class AppointmentController extends Controller
{
    public function newAppointment(Request $request)
    {

        // event(new MyEvent('create Appointment'));

        $user = Auth::user();
        $validated = $request->validate([
            'doctor_id' => 'required|exists:doctors,id'
        ]);
        try {
            $appointment = Appointment::create([
                'patient_id' => $user->patient->id,
                'doctor_id' => $validated['doctor_id'],
                // 'date' => now()->format('Y-m-d'),
                // 'hour' => now()->format('H:i:s'),
            ]);
            return response()->json($appointment, 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al solicitar cita',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getAppoinments(): JsonResponse
    {
        $user = Auth::user();
        $role = $user->roles->first()->name;

        if ($role == 'admin') {
            $data = $this->AppoAdmin();
        }

        if ($role == 'doctor') {
            $data = $this->AppoDoctor();
        }

        if ($role == 'patient') {
            $data = $this->AppoPatient();
        }

        return response()->json($data);
    }

    private function AppoAdmin(): Collection
    {
        try {
            $appointments = Appointment::with('doctor', 'patient')
                ->get();
            return $appointments;
        } catch (\Exception $e) {
            $error = [
                'message' => 'Error al cargar citas',
                'error' => $e->getMessage(),
                'status' => 500
            ];
            return $error;
        }
    }

    private function AppoDoctor(): Collection
    {
        try {
            $appointments = Appointment::with('patient')
                ->where('doctor_id', Auth::user()->doctor->id)
                ->get();
            return $appointments;
        } catch (\Exception $e) {
            $error = [
                'message' => 'Error al cargar citas',
                'error' => $e->getMessage(),
                'status' => 500
            ];
            return $error;
        }
    }

    private function AppoPatient(): Collection
    {
        try {
            $appointments = Appointment::with('doctor')
                ->where('patient_id', Auth::user()->patient->id)
                ->get();
            return $appointments;
        } catch (\Exception $e) {
            $error = [
                'message' => 'Error al cargar citas',
                'error' => $e->getMessage(),
                'status' => 500
            ];
            return $error;
        }
    }

    public function getSpecialties(): JsonResponse
    {
        $data = Specialty::with('services', 'doctors.doctorServices')->get();
        return response()->json($data);
    }

    public function schedule(Request $request, Appointment $appointment)
    {
        $validatedData = $request->validate([
            'date' => 'required|date',
            'hour' => 'required|date_format:h:i A'
        ]);

        $appointment->update([
            'date' => $validatedData['date'],
            'hour' => $validatedData['hour'],
            'status' => 'approved' // Opcional: cambiar estado
        ]);

        return back()->with('success', 'Cita agendada exitosamente');
    }
}

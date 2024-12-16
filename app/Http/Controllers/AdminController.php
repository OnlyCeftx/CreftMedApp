<?php
namespace App\Http\Controllers;
use App\Models\Doctor;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class AdminController extends Controller
{
    public function getDoctors(): JsonResponse
    {
        try {
            $doctors = Doctor::with('specialty', 'location')->get();
            return response()->json($doctors);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al cargar doctores',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function toggleStatus($doctorId)
    {
        try {
            $doctor = Doctor::findOrFail($doctorId);
            $doctor->status = !$doctor->status;
            $doctor->save();
            return response()->json([
                'message' => 'Estado actualizado exitosamente',
                'status' => $doctor->status
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al actualizar el estado',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

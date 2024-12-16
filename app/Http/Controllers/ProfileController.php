<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Doctor;
use App\Models\DoctorService;
use App\Models\Location;
use App\Models\Specialty;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function profileCompleteDoctor(): \Inertia\Response
    {
        $user = User::with(['roles', 'doctor'])->find(Auth::user()->id);
        $specialties = Specialty::with('services', 'doctors')->get();
        $locations = Location::all();
        return Inertia::render(
            'Profile/CompleteDoctor',
            [
                'doctorData' => $user,
                'specialties' => $specialties,
                'locations' => $locations
            ]
        );
    }

    public function storeCompleteDoctor(Request $request)
    {

        $doctor = Doctor::where('user_id', Auth::user()->id)->first();

        $doctor->location_id = $request->location;
        $doctor->specialty_id = $request->specialty;
        $doctor->phone = $request->phone;

        $doctor->save();

        $data_session = [
            "message" => "Datos Actualizados.",
        ];
        return redirect()->route('dashboard')->with('data_session', $data_session);
    }


    public function DataDoctor()
    {
        $doctor =  [
            'main' => Auth::user()->doctor,
            'specialty' =>  Auth::user()->doctor->specialty,
            'location' =>  Auth::user()->doctor->location,
            'services' => Auth::user()->doctor->services,
        ];
        $data = [
            'doctor' => $doctor,
        ];
        return $data;
    }

    public function DoctorFormUpdate(Request $request) {

        $id = $request->doctor_id;
        $doctor = Doctor::findOrFail($id);

        $doctor->services()->detach();

        $doctor->fullname = $request->fullname;
        $doctor->location_id = $request->location;
        $doctor->specialty_id = $request->specialty;
        $doctor->phone = $request->phone;

        $doctor->save();

        $message = "Datos de Doctor Actualizados.";
        return $message;
    }
}

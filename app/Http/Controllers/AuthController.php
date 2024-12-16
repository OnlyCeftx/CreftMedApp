<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed',
        ]);

        $type_field = $request->validate([
            'type' => 'required|string|max:20',
        ]);

        $user = User::create($fields);
        if ($type_field['type'] == 'doctor') {
            $user->roles()->attach(2);
        }
        if ($type_field['type'] == 'patient') {
            $user->roles()->attach(3);
        }

        $token = $user->createToken($request->name);

        $data = [
            'user' => $user,
            'token' => $token->plainTextToken
        ];

        return $data;
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            $data = [
                'message' => 'The provided credentials are incorrect.'
            ];
            return $data;
        }

        $token = $user->createToken($user->name);

        $data = [
            'user' => $user,
            'token' => $token->plainTextToken
        ];

        return $data;
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        $data = [
            'message' => 'You are logged out.'
        ];
        return $data;
    }
}

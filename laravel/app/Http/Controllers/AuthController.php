<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        sleep(1);
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Wrong credentials!'
            ], 401);
        }

        $token = auth()->user()->createToken("accessToken")->plainTextToken;

        return [
            "token" => $token
        ];
    }

    public function register(RegisterRequest $request)
    {
        sleep(1);
        $newUser = User::create($request->only('email', 'name') + [
            'password' => Hash::make($request->password)
        ]);

        if (!$newUser) {
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }

        return response()->json([
            'message' => 'Register was successful!'
        ], 200);
    }

    public function logout()
    {
        auth()->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out.'
        ]);
    }
}

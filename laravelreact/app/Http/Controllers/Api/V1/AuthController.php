<?php
namespace App\Http\Controllers\Api\v1;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\Authrequest;
use Symfony\Component\HttpFoundation\Response;
class AuthController extends Controller
{

    public function __construct(


    )
    {
        // $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(Authrequest $request)
    {
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];
        

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }
        $access_Token = cookie('access_token', $token, auth()->factory()->getTTL() * 1, '/', null, false, true);
        return $this->respondWithToken($token)->withCookie($access_Token);
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 1
        ]);
    }

}

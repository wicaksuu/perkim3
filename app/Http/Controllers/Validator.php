<?php

namespace App\Http\Controllers;

use App\Models\FormData;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Validator extends Controller
{
    public function Validator($kode_unik)
    {
        $kepala_dinas = User::where('role', 'Kepala Dinas')->first();
        $dpmptsp      = User::where('role', 'DPMPTSP')->first();
        $data         = FormData::first();
        return Inertia::render('Validate', [
            'kepalaDinas' => $kepala_dinas,
            'Dpmptsp' => $dpmptsp,
            'Data' => $data
        ]);
    }
}

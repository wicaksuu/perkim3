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
        $arsip        = url('storage/arsip/' . $kode_unik . 'pdf');
        if (file_exists('storage/arsip/' . $kode_unik . 'pdf')) {
            return Inertia::render('Validate', [
                'kepalaDinas' => $kepala_dinas,
                'Dpmptsp' => $dpmptsp,
                'Data' => $data,
                'Arsip' => $arsip,
                'Kode' => $kode_unik
            ]);
        } else {
            return Inertia::render('NotValid', [
                'Arsip' => $arsip,
                'Kode' => $kode_unik
            ]);
        }
    }
}

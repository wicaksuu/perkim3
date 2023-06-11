<?php

use App\Http\Controllers\FormDataController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Validator;
use App\Models\FormData;
use App\Models\PSUs;

use function PHPUnit\Framework\returnSelf;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/validate/{kode_unik}', [Validator::class, 'Validator']);

Route::get('/', function () {
    return view('Welcome');
    return redirect('/login');
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
    return view('Welcome');
})->name('home');;

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {


    Route::get('/arsip', function () {
        switch (Auth::user()->role) {
            case 'Dinas':
                return Inertia::render('Data/Dinas/DaftarArsip');
                break;
            case 'Kepala Dinas':
                return Inertia::render('Data/KepalaDinas/DaftarArsip');
                break;
            case 'DPMPTSP':
                return Inertia::render('Data/Dpmptsp/DaftarArsip');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('arsip');


    Route::get('/menunggu-dpmptsp', function () {
        switch (Auth::user()->role) {
            case 'Dinas':
                return Inertia::render('Data/Dinas/DaftarAntrianDpmptsp');
                break;
            case 'Kepala Dinas':
                return Inertia::render('Data/KepalaDinas/DaftarAntrianDpmptsp');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('menunggu-dpmptsp');

    Route::get('/daftar-ditolak', function () {
        switch (Auth::user()->role) {
            case 'Dinas':
                return Inertia::render('Data/Dinas/DaftarDitolak');
                break;
            case 'Kepala Dinas':
                return Inertia::render('Data/KepalaDinas/DaftarDitolak');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('daftar-ditolak');

    Route::get('/daftar-terverifikasi', function () {
        switch (Auth::user()->role) {
            case 'Dinas':
                return Inertia::render('Data/Dinas/DaftarTerverifikasi');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('daftar-terverifikasi');


    Route::get('/dashboard', function () {
        switch (Auth::user()->role) {
            case 'User':
                $data = FormData::with('user')->where('user_id', Auth::user()->id)->get();
                return Inertia::render('Data/User/Dashboard', ['data' => $data]);
                break;
            case 'Dinas':
                $data = FormData::with('user')->get();
                return Inertia::render('Data/Dinas/Dashboard', ['data' => $data]);
                break;
            case 'Kepala Dinas':
                return Inertia::render('Data/KepalaDinas/Dashboard');
                break;
            case 'DPMPTSP':
                return Inertia::render('Data/Dpmptsp/Dashboard');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('dashboard');

    Route::get('/pengajuan', function () {
        switch (Auth::user()->role) {
            case 'User':
                return Inertia::render('Data/User/Pengajuan');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('pengajuan');

    Route::get('/pengajuan-mbr', function () {
        switch (Auth::user()->role) {
            case 'User':
                $data = FormData::where('ref_mbrOrNon', 'MBR')->where('user_id', auth()->user()->id)->first();
                $psu = PSUs::where('kode_unik', $data->kode_unik)->where('user_id', auth()->user()->id)->get();
                return Inertia::render('Data/User/Mbr', ['KodeUnik' => $data->kode_unik, 'psu' => $psu]);
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('pengajuan-mbr');

    Route::get('/pengajuan-non-mbr-1', function () {
        switch (Auth::user()->role) {
            case 'User':
                return Inertia::render('Data/User/NonMbr1');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('pengajuan-non-mbr-1');

    Route::get('/pengajuan-non-mbr-2', function () {
        switch (Auth::user()->role) {
            case 'User':
                return Inertia::render('Data/User/NonMbr2');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('pengajuan-non-mbr-2');

    Route::get('/pengajuan-non-mbr-3', function () {
        switch (Auth::user()->role) {
            case 'User':
                return Inertia::render('Data/User/NonMbr3');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('pengajuan-non-mbr-3');

    Route::post('/submit', function () {
        switch (Auth::user()->role) {
            case 'User':
                return app()->call('App\Http\Controllers\FormDataController@submit');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('submit');
    Route::post('/kirim-submit', function () {
        switch (Auth::user()->role) {
            case 'User':
                return app()->call('App\Http\Controllers\FormDataController@kirimuser');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('kirim-submit');


    Route::get('/data-pemohon', function () {
        switch (Auth::user()->role) {
            case 'User':
                return Inertia::render('Data/User/DataPemohon', ['user' => Auth::user()]);
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('data-pemohon');

    Route::get('/data-perusahaan', function () {
        switch (Auth::user()->role) {
            case 'User':
                return Inertia::render('Data/User/DataPerusahaan', ['user' => Auth::user()]);
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('data-perusahaan');


    Route::post('/psu-lain-lain', function () {
        switch (Auth::user()->role) {
            case 'User':
                return app()->call('App\Http\Controllers\FormDataController@addPSU');
                break;
            default:
                return redirect('/');
                break;
        }
    })->name('psu-lain-lain');

});

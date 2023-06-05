<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    // return redirect('/login');
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return view('Welcome');
});



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/data-perusahaan', function () {
        return Inertia::render('Data/DataPerusahaan');
    })->name('data-perusahaan');

    Route::get('/data-pemohon', function () {
        return Inertia::render('Data/DataPemohon');
    })->name('data-pemohon');



    Route::get('/riwayat', function () {
        return Inertia::render('Riwayat');
    })->name('riwayat');


    Route::get('/dashboard/dinas', function () {
        return Inertia::render('Data/Dinas/Dashboard');
    })->name('dinas-dashboard');
    Route::get('/dashboard/dinas/ditolak', function () {
        return Inertia::render('Data/Dinas/DaftarDitolak');
    })->name('dinas-daftar-ditolak');
    Route::get('/dashboard/dinas/diterima', function () {
        return Inertia::render('Data/Dinas/DaftarTerverifikasi');
    })->name('dinas-daftar-diterima');



    Route::get('/dashboard/kepala-dinas', function () {
        return Inertia::render('Data/KepalaDinas/Dashboard');
    })->name('kepala-dinas-dashboard');

    Route::get('/dashboard/kepala-dinas/dpmptsp', function () {
        return Inertia::render('Data/KepalaDinas/DaftarAntrianDpmptsp');
    })->name('kepala-dinas-dashboard-dpmptsp');


    Route::get('/arsip', function () {
        return Inertia::render('Data/DaftarArsip');
    })->name('arsip');



    Route::get('/dashboard/dpmptsp', function () {
        return Inertia::render('Data/Dpmptsp/Dashboard');
    })->name('dpmptsp-dashboard');

});

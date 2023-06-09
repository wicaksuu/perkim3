<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',

        'nama_pemohon',
        'tempat_lahir_pemohon',
        'tanggal_lahirpemohon',
        'jabatan_pemohon',
        'npwp_pemohon',
        'nik_pemohon',
        'nomor_telepon_pemohon',
        'nomor_whatsapp_pemohon',
        'alamat_pemohon',
        'ref_bentukBadanUsaha',


        'ref_status_badan_usaha',
        'nama_badan_usaha',
        'titik_koordinat',
        'nama_pimpinan',
        'npwp_badan_usaha',
        'nomor_telepon_badan_usaha',
        'nomor_whatsapp_usaha',
        'nik_pimpinan',
        'alamat_badan_usaha',
        'nomor_akta_pendirian',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormData extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'kode_unik',
        'nama_perumahan',
        'koordinat_perumahan',
        'nomor_induk_berusaha',
        'alamat_perumahan',
        'klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian',
        'klasifikasi_usaha_41011',
        'klasifikasi_usaha_68111',
        'ref_kode_a',
        'ref_kode_b',
        'ref_kode_c',
        'ref_kode_d',
        'ref_kode_e',
        'ref_kode_f',
        'ref_kode_g',
        'ref_kode_h',
        'ref_kode_i',
        'ref_kode_j',
        'ref_kode_k',
        'ref_kode_l',
        'ref_mbrOrNon',
    ];

    // Relasi dengan User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormData extends Model
{
    use HasFactory;


    protected $fillable = [
        'status',
        'tanggal_pengesahasan',
        'tanggal_penerbitan',
        'komentar',
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
        'luas_lahan',
        'kode_unik',
        'persyaratan_prasarana_saran_dan_utilitas_umum',
        'persyaratan_penyajian_gambar_rencana_tapak',
        'ref_sertifikat_tanah',
        'ref_akta_jual_beli',
        'ref_bukti_pelunasan_sppt_pbb',
        'ref_gambar_rencana_zip',
        'ref_gambar_rencana_pdf',
        'ref_keberadaan_perumahan',
        'luas_ruang_milik_jalan',
        'tempat_ibadah',
        'makam',
        'ruang_terbuka_hijau',
        'makam',
        'tgl_jadwaal_rencana_dimulainya_pembangunan',
        'tanggal_jadwal_rencana_dimulainya_pemasaran',
        'tanggal_jadwal_dimulainya_perjanjian_jual_beli',
        'tanggal_jadwal_rencana_selesai_pembangunan_psu',
        'tanggal_jadwal_rencana_penyerahan_psu',
    ];

    // Relasi dengan User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\FormData;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FormDataController extends Controller
{

    public function submit(Request $request)
    {
        $data = $request->all();
        $kode_unik = uniqid();
        Validator::make($data, [
            'nama_perumahan' => ['required', 'string', 'max:255'],
            'koordinat_perumahan' => ['required', 'string', 'max:255'],
            'nomor_induk_berusaha' => ['required', 'string', 'max:255'],
            'alamat_perumahan' => ['required', 'string'],
            'klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian' => ['required', 'boolean', 'accepted'],
            'klasifikasi_usaha_41011' => ['boolean'],
            'klasifikasi_usaha_68111' => ['boolean'],
            'ref_kode_a' => ['required', 'mimes:pdf'],
            'ref_kode_b' => ['required', 'mimes:pdf'],
            'ref_kode_c' => ['required', 'mimes:pdf'],
            'ref_kode_d' => ['required', 'mimes:pdf'],
            'ref_kode_e' => ['required', 'mimes:pdf'],
            'ref_kode_f' => ['required', 'mimes:pdf'],
            'ref_kode_g' => ['required', 'mimes:pdf'],
            'ref_kode_h' => ['required', 'mimes:pdf'],
            'ref_kode_i' => ['nullable', 'mimes:pdf'],
            'ref_kode_j' => ['nullable', 'mimes:pdf'],
            'ref_kode_k' => ['required', 'mimes:pdf'],
            'ref_kode_l' => ['required', 'mimes:pdf'],
            'ref_mbrOrNon' => ['required', 'string', 'max:255'],
        ])->validateWithBag('submit');

        $filePaths = [];
        $fileKeys = ['ref_kode_a', 'ref_kode_b', 'ref_kode_c', 'ref_kode_d', 'ref_kode_e', 'ref_kode_f', 'ref_kode_g', 'ref_kode_h', 'ref_kode_i', 'ref_kode_j', 'ref_kode_k', 'ref_kode_l'];

        foreach ($fileKeys as $fileKey) {
            if ($request->hasFile($fileKey)) {
                $file = $request->file($fileKey);
                $filePath = Storage::disk('public')->put('pdf', $file);
                $filePaths[$fileKey] = $filePath;
            }
        }

        // Simpan data ke database
        $formData = new FormData();
        $formData->nama_perumahan = $data['nama_perumahan'];
        $formData->kode_unik = $kode_unik;
        $formData->koordinat_perumahan = $data['koordinat_perumahan'];
        $formData->nomor_induk_berusaha = $data['nomor_induk_berusaha'];
        $formData->alamat_perumahan = $data['alamat_perumahan'];
        $formData->klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian = $data['klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian'];
        $formData->klasifikasi_usaha_41011 = $data['klasifikasi_usaha_41011'];
        $formData->klasifikasi_usaha_68111 = $data['klasifikasi_usaha_68111'];
        $formData->ref_mbrOrNon = $data['ref_mbrOrNon'];
        $formData->user_id = auth()->user()->id;

        foreach ($filePaths as $fileKey => $filePath) {
            $formData->$fileKey = $filePath;
        }

        $formData->save();
        if ($data['ref_mbrOrNon'] == 'MBR') {
            return redirect(route('pengajuan-mbr'));
        } elseif ($data['ref_mbrOrNon'] == 'NON MBR Jumlah Unit Kurang dari 100') {
            return redirect(route('pengajuan-non-mbr-1'));
        } elseif ($data['ref_mbrOrNon'] == 'NON MBR Jumlah Unit 100 sd 3000') {
            return redirect(route('pengajuan-non-mbr-2'));
        } else {
            return redirect(route('dashboard'));
        }
    }
    public function kirimuser(Request $request)
    {

        $data = $request->all();
        Validator::make($data, [
            'luas_lahan' => ['required', 'string', 'max:255'],
            'kode_unik' => ['required', 'string', 'max:255'],
            'persyaratan_prasarana_saran_dan_utilitas_umum' => ['required', 'boolean', 'accepted'],
            'persyaratan_penyajian_gambar_rencana_tapak' => ['required', 'boolean', 'accepted'],
            'wajib' => ['required', 'boolean', 'accepted'],
            'ref_sertifikat_tanah' => ['required', 'mimes:pdf'],
            'ref_akta_jual_beli' => ['required', 'mimes:pdf'],
            'ref_bukti_pelunasan_sppt_pbb' => ['required', 'mimes:pdf'],
            'ref_gambar_rencana_zip' => ['required', 'mimes:zip'],
            'ref_gambar_rencana_pdf' => ['required', 'mimes:pdf'],
            'ref_keberadaan_perumahan' => ['required'],
            'luas_ruang_milik_jalan' => ['required', 'string', 'max:255'],
            'tempat_ibadah' => ['required', 'string', 'max:255'],
            'ruang_terbuka_hijau' => ['required', 'string', 'max:255'],
            'makam' => ['required', 'string', 'max:255'],
            'tgl_jadwaal_rencana_dimulainya_pembangunan' => ['required', 'string', 'max:255'],
            'tanggal_jadwal_rencana_dimulainya_pemasaran' => ['required', 'string', 'max:255'],
            'tanggal_jadwal_dimulainya_perjanjian_jual_beli' => ['required', 'string', 'max:255'],
            'tanggal_jadwal_rencana_selesai_pembangunan_psu' => ['required', 'string', 'max:255'],
            'tanggal_jadwal_rencana_penyerahan_psu' => ['required', 'string', 'max:255'],
        ])->validateWithBag('submit');
    }
}

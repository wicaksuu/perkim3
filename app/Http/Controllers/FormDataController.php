<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\FormData;
use App\Models\PSUs;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use setasign\Fpdi\Fpdi;
use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

require_once(app_path('paket/fpdf/fpdf.php'));
require_once(app_path('paket/fdi/src/autoload.php'));


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

        if ($data['kode_unik'] == 'MBR') {
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
            unset($data['wajib']);
            unset($data['kode_unik']);

            $filePaths = [];
            $fileKeys = [
                'ref_sertifikat_tanah',
                'ref_akta_jual_beli',
                'ref_bukti_pelunasan_sppt_pbb',
                'ref_gambar_rencana_zip',
                'ref_gambar_rencana_pdf',
            ];

            foreach ($fileKeys as $fileKey) {
                if ($request->hasFile($fileKey)) {
                    $file = $request->file($fileKey);
                    $filePath = Storage::disk('public')->put('pdf', $file);
                    $filePaths[$fileKey] = $filePath;
                }
            }

            $data = FormData::where('ref_mbrOrNon', 'MBR')->where('user_id', auth()->user()->id)->first();
            foreach ($data as $key => $value) {
                $data->$key = $value;
            }
            foreach ($filePaths as $fileKey => $filePath) {
                $data->$fileKey = $filePath;
            }

            $data->save();
        } elseif ($data['ref_mbrOrNon'] == 'NON MBR Jumlah Unit Kurang dari 100') {
        } elseif ($data['ref_mbrOrNon'] == 'NON MBR Jumlah Unit 100 sd 3000') {
        } else {
        }
        return redirect(route('dashboard'));
    }

    public function addPSU(Request $request)
    {
        $data = $request->all();
        Validator::make($data, [
            'psu' => ['required', 'string', 'max:255'],
            'luas_lahan' => ['required', 'string', 'max:255'],
            'kode_unik' => ['required', 'string', 'max:255'],
        ])->validateWithBag('submit');

        $formData = new PSUs();
        $formData->user_id = auth()->user()->id;
        $formData->kode_unik = $data['kode_unik'];
        $formData->psu = $data['psu'];
        $formData->luas = $data['luas_lahan'];
        $formData->save();
    }

    public function viewData($kodeunik)
    {

        if (Auth::user()->role == 'Dinas') {

            $data = FormData::where('kode_unik', $kodeunik)->with('psu', 'user')->first();
            return Inertia::render('Data/Dinas/Buka/View', ['data' => $data]);
        } else {
            return back();
        }
    }

    public function ttd($kodeunik)
    {
        if (Auth::user()->role == 'Kepala Dinas') {
            FormData::where('kode_unik', $kodeunik)->update([
                'status' => 'Disahkan',
                'tanggal_pengesahasan' => date("d-m-Y H:i:s"),
            ]);
            return back();
        } else {
            return back();
        }
    }
    public function terbit($kodeunik)
    {

        if (Auth::user()->role == 'DPMPTSP') {

            $berkas = FormData::where('kode_unik',  $kodeunik)->first();
            $options = new QROptions([
                'version' => 5,
                'outputType' => QRCode::OUTPUT_IMAGE_JPG,
                'imageBase64' => true,
            ]);
            $qrCode         = new QRCode($options);


            $x              = 52;
            $y              = 55;
            $width          = 25;
            $height         = 25;
            $code           = $kodeunik;
            $file_name      = storage_path('qr/' . $code . '.jpg');
            $qrImageData    = $qrCode->render("https://sipedalrum.madiunkab.go.id/validate/$code");

            list($type, $qrImageData) = explode(';', $qrImageData);
            list(, $qrImageData) = explode(',', $qrImageData);
            $image_data = base64_decode($qrImageData);
            file_put_contents($file_name, $image_data);
            $pdf        = new FPDI();

            $pageCount  = $pdf->setSourceFile(storage_path($berkas->ref_gambar_rencana_pdf));
            $tplIdx     = $pdf->importPage(1);
            $size       = $pdf->getTemplateSize($tplIdx);

            $pdf->AddPage($size['orientation'], array($size['width'], $size['height']));
            $pdf->useTemplate($tplIdx);
            $pdf->SetTextColor(0, 0, 255);
            $pdf->SetXY(0, $size['height'] - 22);
            $pdf->SetFont('Arial', 'I', 11);
            $pdf->Cell(0, 0, 'Dokumen ini telah ditandatangani secara elektronik oleh Kepala Dinas Perumahan dan Kawasan Permukiman Kabupaten Madiun', 0, 0, 'C');
            $pdf->Image($file_name, $size['width'] - $x, $size['height'] - $y, $width, $height);
            $pdf->Output(storage_path($code . '.pdf'), 'F');
            unlink($file_name);
            FormData::where('kode_unik', $kodeunik)->update([
                'status' => 'Diterbitkan',
                'tanggal_penerbitan' => date("d-m-Y H:i:s"),
            ]);
            return back();
        } else {
            return back();
        }
    }

}

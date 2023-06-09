<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('form_data', function (Blueprint $table) {
            $table->id();

            $table->string('status')->default('Diproses');
            $table->string('tanggal_pengesahasan')->nullable();
            $table->string('tanggal_penerbitan')->nullable();
            $table->text('komentar')->nullable();

            $table->unsignedBigInteger('user_id');
            $table->string('nama_perumahan');
            $table->string('koordinat_perumahan');
            $table->string('nomor_induk_berusaha');
            $table->text('alamat_perumahan');
            $table->boolean('klasifikasi_kegiatan_usaha_sesuai_tercantum_dalam_akte_pendirian');
            $table->boolean('klasifikasi_usaha_41011')->nullable();
            $table->boolean('klasifikasi_usaha_68111')->nullable();
            $table->string('ref_kode_a')->nullable();
            $table->string('ref_kode_b')->nullable();
            $table->string('ref_kode_c')->nullable();
            $table->string('ref_kode_d')->nullable();
            $table->string('ref_kode_e')->nullable();
            $table->string('ref_kode_f')->nullable();
            $table->string('ref_kode_g')->nullable();
            $table->string('ref_kode_h')->nullable();
            $table->string('ref_kode_i')->nullable();
            $table->string('ref_kode_j')->nullable();
            $table->string('ref_kode_k')->nullable();
            $table->string('ref_kode_l')->nullable();
            $table->string('ref_mbrOrNon');

            $table->string('luas_lahan')->nullable();
            $table->string('kode_unik')->nullable();
            $table->boolean('persyaratan_prasarana_saran_dan_utilitas_umum')->nullable();
            $table->boolean('persyaratan_penyajian_gambar_rencana_tapak')->nullable();
            $table->string('ref_sertifikat_tanah')->nullable();
            $table->string('ref_akta_jual_beli')->nullable();
            $table->string('ref_bukti_pelunasan_sppt_pbb')->nullable();
            $table->string('ref_gambar_rencana_zip')->nullable();
            $table->string('ref_gambar_rencana_pdf')->nullable();
            $table->string('ref_keberadaan_perumahan')->nullable();
            $table->string('luas_ruang_milik_jalan')->nullable();
            $table->string('tempat_ibadah')->nullable();
            $table->string('makam')->nullable();
            $table->string('ruang_terbuka_hijau')->nullable();
            $table->string('tgl_jadwaal_rencana_dimulainya_pembangunan')->nullable();
            $table->string('tanggal_jadwal_rencana_dimulainya_pemasaran')->nullable();
            $table->string('tanggal_jadwal_dimulainya_perjanjian_jual_beli')->nullable();
            $table->string('tanggal_jadwal_rencana_selesai_pembangunan_psu')->nullable();
            $table->string('tanggal_jadwal_rencana_penyerahan_psu')->nullable();


            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_data');
    }
};

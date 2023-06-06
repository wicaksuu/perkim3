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
            $table->unsignedBigInteger('user_id');
            $table->string('kode_unik');
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

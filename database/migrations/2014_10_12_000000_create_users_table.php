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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};


// create 15 - 5 database 6. administrasi new fields
// create 14 - 1 database 7. data perumahan (d dipisah)
// create 9  -1 database 8 PERSYARATAN PRASARANA, SARANA DAN UTILITAS UMUM (PSU) (E)
// destroy 7  - 1 database 10 PERSYARATAN PRASARANA, SARANA DAN UTILITAS UMUM (PSU)
// simpedalrum.madiunkab.go.id

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PSUs extends Model
{
    use HasFactory;
    protected $fillable = [
        'kode_unik',
        'user_id',
        'psu',
        'luas',
    ];

    // Relasi dengan User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

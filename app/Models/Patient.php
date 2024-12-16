<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Patient extends Model
{
    protected $fillable = [
        'user_id',
        'fullname',
        'phone',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}

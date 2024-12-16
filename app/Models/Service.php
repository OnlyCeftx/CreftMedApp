<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    public function doctors()
    {
        return $this->belongsToMany(Doctor::class, 'doctor_service')
            ->withPivot('id', 'price')
            ->withTimestamps();
    }

    public function specialtyies()
    {
        return $this->belongsTo(Doctor::class);
    }
}

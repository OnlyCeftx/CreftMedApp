<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
class Appointment extends Model
{
    protected $fillable = [
        'patient_id',
        'doctor_id',
        'status',
        'title_patient',
        'title_doctor',
        'date',
        'hour',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

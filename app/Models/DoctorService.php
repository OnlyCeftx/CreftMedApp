<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoctorService extends Model
{
    use HasFactory;

    protected $table = 'doctor_service';

    protected $fillable = ['id', 'doctor_id', 'service_id', 'price'];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}

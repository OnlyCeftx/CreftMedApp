<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Doctor extends Model
{
    protected $fillable = [
        'user_id',
        'location_id',
        'specialty_id',
        'fullname',
        'phone',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
    public function services()
    {
        return $this->belongsToMany(Service::class, 'doctor_service')
            ->withPivot('id', 'price')
            ->withTimestamps();
    }

    public function doctorServices()
    {
        return $this->hasMany(DoctorService::class);
    }

    public function servicesWithCurrentDoctor()
    {
        return $this->doctorServices()->with('service')->get();
    }
}

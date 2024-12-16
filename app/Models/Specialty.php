<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Specialty extends Model
{

    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }

    public function doctors(): HasMany
    {
        return $this->hasMany(Doctor::class);
    }
}

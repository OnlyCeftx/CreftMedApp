<?php

use App\Models\Doctor;
use App\Models\Patient;
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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Doctor::class);
            $table->foreignIdFor(Patient::class);
            $table->enum('status', ['pending', 'approved'])->default('pending');
            $table->string('title_doctor')->nullable();
            $table->string('title_patient')->nullable();
            $table->date('date')->nullable();
            $table->time('hour')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};

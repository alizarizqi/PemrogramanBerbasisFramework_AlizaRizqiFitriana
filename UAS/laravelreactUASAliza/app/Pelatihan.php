<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pelatihan extends Model
{
    protected $table = "pelatihans";
    protected $fillable = ['tanggal', 'namapel','tempatpel'];
}

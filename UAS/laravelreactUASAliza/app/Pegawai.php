<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    protected $table = "pegawais";
    protected $fillable = ['nip', 'nama', 'ttl', 'alamat', 'jk', 'agama', 'kewarganegaraan', 'goldar', 'status', 'nohp'];
}

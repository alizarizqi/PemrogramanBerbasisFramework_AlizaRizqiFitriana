<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    public function index()
    {
        $pegawais = \App\Pegawai::all();
 
        return $pegawais->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nip' => 'required',
          'nama' => 'required',
          'ttl' => 'required',
          'alamat' => 'required',
          'jk' => 'required',
          'agama' => 'required',
          'kewarganegaraan' => 'required',
          'goldar' => 'required',
          'status' => 'required',
          'nohp' => 'required',
        ]);
 
        $project = \App\Pegawai::create([
          'nip' => $validatedData['nip'],
          'nama' => $validatedData['nama'],
          'ttl' => $validatedData['ttl'],
          'alamat' => $validatedData['alamat'],
          'jk' => $validatedData['jk'],
          'agama' => $validatedData['agama'],
          'kewarganegaraan' => $validatedData['kewarganegaraan'],
          'goldar' => $validatedData['goldar'],
          'status' => $validatedData['status'],
          'nohp' => $validatedData['nohp'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Pegawai created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getPegawai($id) // for edit and show
    {
        $pegawai = \App\Pegawai::find($id);
 
        return $pegawai->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nip' => 'required',
            'nama' => 'required',
            'ttl' => 'required',
            'alamat' => 'required',
            'jk' => 'required',
            'agama' => 'required',
            'kewarganegaraan' => 'required',
            'goldar' => 'required',
            'status' => 'required',
            'nohp' => 'required',
        ]);
 
        $pegawai = \App\Pegawai::find($id);
        $pegawai->nip = $validatedData['nip'];
        $pegawai->nama = $validatedData['nama'];
        $pegawai->ttl = $validatedData['ttl'];
        $pegawai->alamat = $validatedData['alamat'];
        $pegawai->jk = $validatedData['jk'];
        $pegawai->agama = $validatedData['agama'];
        $pegawai->kewarganegaraan = $validatedData['kewarganegaraan'];
        $pegawai->goldar = $validatedData['goldar'];
        $pegawai->status = $validatedData['status'];
        $pegawai->nohp = $validatedData['nohp'];
        $pegawai->save();
 
        $msg = [
            'success' => true,
            'message' => 'Pegawai updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $pegawai = \App\Pegawai::find($id);
        if(!empty($pegawai)){
            $pegawai->delete();
            $msg = [
                'success' => true,
                'message' => 'Pegawai deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Pegawai deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PelatihanController extends Controller
{
    public function index()
    {
        $pelatihans = \App\Pelatihan::all();
 
        return $pelatihans->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'tanggal' => 'required',
          'namapel' => 'required',
          'tempatpel' => 'required',
        ]);
 
        $project = \App\Pelatihan::create([
          'tanggal' => $validatedData['tanggal'],
          'namapel' => $validatedData['namapel'],
          'tempatpel' => $validatedData['tempatpel'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Pelatihan created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getPelatihan($id) // for edit and show
    {
        $pelatihan = \App\Pelatihan::find($id);
 
        return $pelatihan->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
          'tanggal' => 'required',
          'namapel' => 'required',
          'tempatpel' => 'required',
        ]);
 
        $pelatihan = \App\Pelatihan::find($id);
        $pelatihan->tanggal = $validatedData['tanggal'];
        $pelatihan->namapel = $validatedData['namapel'];
        $pelatihan->$tempatpel = $validatedData['tempatpel'];
        $pelatihan->save();
 
        $msg = [
            'success' => true,
            'message' => 'Pelatihan updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $pelatihan = \App\Pelatihan::find($id);
        if(!empty($pelatihan)){
            $pelatihan->delete();
            $msg = [
                'success' => true,
                'message' => 'Pelatihan deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Pelatihan deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}

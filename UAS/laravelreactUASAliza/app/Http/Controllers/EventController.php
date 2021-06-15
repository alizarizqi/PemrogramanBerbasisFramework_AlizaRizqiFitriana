<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $events = \App\Event::all();
 
        return $events->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'tanggal' => 'required',
          'namaevent' => 'required',
          'tempatevent' => 'required',
          'gambar' => 'required',
        ]);
 
        $project = \App\Event::create([
          'tanggal' => $validatedData['tanggal'],
          'namaevent' => $validatedData['namaevent'],
          'tempatevent' => $validatedData['tempatevent'],
          'gambar' => $validatedData['gambar'],

        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Event created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getEvent($id) // for edit and show
    {
        $event = \App\Event::find($id);
 
        return $event->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
          'tanggal' => 'required',
          'namaevent' => 'required',
          'tempatevent' => 'required',
          'gambar' => 'required',
        ]);
 
        $event = \App\Event::find($id);
        $event->tanggal = $validatedData['tanggal'];
        $event->namaevent = $validatedData['namaevent'];
        $event->$tempatevent = $validatedData['tempatevent'];
        $event->$gambar = $validateData['gambar'];
        $event->save();
 
        $msg = [
            'success' => true,
            'message' => 'Event updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $event = \App\Event::find($id);
        if(!empty($event)){
            $event->delete();
            $msg = [
                'success' => true,
                'message' => 'Event deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Event deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}

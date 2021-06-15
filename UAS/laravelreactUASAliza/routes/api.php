<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/pegawais', 'PegawaiController@index');
Route::post('/pegawai/store', 'PegawaiController@store');
Route::get('/pegawai/edit/{id}', 'PegawaiController@getPegawai');
Route::get('/pegawai/{id}', 'PegawaiController@getPegawai');
Route::put('/pegawai/{id}', 'PegawaiController@update');
Route::delete('/pegawai/delete/{id}', 'PegawaiController@delete');

Route::get('/pelatihans', 'PelatihanController@index');
Route::post('/pelatihan/store', 'PelatihanController@store');
Route::get('/pelatihan/edit/{id}', 'PelatihanController@getPelatihan');
Route::get('/pelatihan/{id}', 'PelatihanController@getPelatihan');
Route::put('/pelatihan/{id}', 'PelatihanController@update');
Route::delete('/pelatihan/delete/{id}', 'PelatihanController@delete');

Route::get('/events', 'EventController@index');
Route::post('/event/store', 'EventController@store');
Route::get('/event/edit/{id}', 'EventController@getEvent');
Route::get('/event/{id}', 'EventController@getEvent');
Route::put('/event/{id}', 'EventController@update');
Route::delete('/event/delete/{id}', 'EventController@delete');

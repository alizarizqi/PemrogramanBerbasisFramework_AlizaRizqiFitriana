<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/pegawais', 'app');
Route::view('/pegawai/edit/{id}', 'app');
Route::view('/pegawai/{id}', 'app');
Route::view('/pegawai', 'app');
Route::view('/{path}', 'app');

Route::view('/pelatihans', 'app');
Route::view('/pelatihan', 'app');
Route::view('/pelatihan/edit/{id}', 'app');
Route::view('/pelatihan/{id}', 'app');
Route::view('/{path}', 'app');

Route::view('/home', 'app');
Route::view('/about', 'app');

Route::view('/events', 'app');
Route::view('/event', 'app');
Route::view('/event/edit/{id}', 'app');
Route::view('/event/{id}', 'app');
Route::view('/{path}', 'app');


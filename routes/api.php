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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/todos', 'TodoController@index');
Route::get('/todos/{id}', 'TodoController@show');
Route::post('/todos', 'TodoController@store');
Route::post('/todos/{id}/answers', 'TodoController@answer');
Route::delete('/todos/{id}', 'TodoController@delete');
Route::delete('/todos/{id}/answers', 'TodoController@resetAnswers');

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoController;

// Define routes here
Route::get('/videos', [VideoController::class, 'index']);
Route::get('/search', [VideoController::class, 'search']);


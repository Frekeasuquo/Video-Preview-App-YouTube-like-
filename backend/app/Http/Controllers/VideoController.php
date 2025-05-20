<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VideoController extends Controller
{
    private $videos;

    public function __construct() {
        $this->videos = json_decode(file_get_contents(storage_path('app/db.json')), true)['videos'];
    }

    public function index() {
        return response()->json($this->videos);
    }

    public function search(Request $request) {
        $query = strtolower($request->get('query', ''));
        if (strlen($query) < 3) {
            return response()->json([]);
        }

        $results = array_filter($this->videos, function ($video) use ($query) {
            return str_contains(strtolower($video['title']), $query) || str_contains(strtolower($video['description']), $query);
        });

        return response()->json(array_values($results));
    }
}

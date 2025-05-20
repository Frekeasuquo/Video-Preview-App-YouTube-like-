<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Video;

class VideoController extends Controller
{
    public function index()
    {
        return response()->json(Video::all());
    }

    public function search(Request $request)
    {
        $query = $request->get('query', '');

        if (strlen($query) < 3) {
            return response()->json([]);
        }

        $results = Video::where('title', 'LIKE', "%$query%")
            ->orWhere('description', 'LIKE', "%$query%")
            ->get();

        return response()->json($results);
    }
}
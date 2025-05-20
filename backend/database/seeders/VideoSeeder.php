<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Video;

class VideoSeeder extends Seeder
{
    public function run()
    {
        $json = file_get_contents(storage_path('app/db.json'));
        $data = json_decode($json, true)['videos'];

        foreach ($data as $item) {
            Video::create([
                'title' => $item['title'],
                'thumbnailUrl' => $item['thumbnailUrl'],
                'duration' => $item['duration'],
                'uploadTime' => $item['uploadTime'],
                'views' => $item['views'],
                'author' => $item['author'],
                'videoUrl' => $item['videoUrl'],
                'description' => $item['description'],
                'subscriber' => $item['subscriber'],
                'isLive' => $item['isLive'],
            ]);
        }
    }
}

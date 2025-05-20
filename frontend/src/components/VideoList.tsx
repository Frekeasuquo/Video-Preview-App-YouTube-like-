import { useEffect, useState } from "react";
import { Video } from "../types";
import { fetchData } from "../utils/fetcher";
import SearchBar from "./SearchBar";
import VideoPreview from "./VideoPreview";


const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const fetchVideos = async (query?: string) => {
        const url = query ? `/api/search?query=${query}` : "/api/videos";
        const result = await fetchData(url);
        setVideos(result);
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div className="p-4">
            <SearchBar onSearch={fetchVideos} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {videos.map((video) => (
                    <VideoPreview key={video.id} video={video} mode="interactive" />
                ))}
            </div>
        </div>
    )
};

export default VideoList;
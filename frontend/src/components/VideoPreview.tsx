
import { useRef, useState } from "react";
import { Video } from "../types";

interface Props {
    video: Video;
    mode: "interactive" | "static";
    onVideoStart?: () => void;
    onVideoEnd?: () => void;
    onVideoSeek?: () => void;
}

const VideoPreview: React.FC<Props> = ({ video, mode, ...callbacks}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [showVideo, setShowVideo] = useState(false);
    const [isMuted, setMuted] = useState(true);
    const [hovering, setHovering] = useState(false);

    if (mode === "static" && (callbacks.onVideoStart || callbacks.onVideoEnd || callbacks.onVideoSeek)) {
        throw new Error("Callbacks not allowed in static mode");
    }

    const handleMouseEnter = () => {
        if (mode === "interactive") {
          const newTimer = setTimeout(() => {
            setShowVideo(true);
            setHovering(true);
          }, 500);
          setTimer(newTimer);
        }
      };
    
      const handleMouseLeave = () => {
        if (timer) clearTimeout(timer);
        setShowVideo(false);
        setHovering(false);
      };

      const toggleMute = () => {
        setMuted((prev) => !prev);
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
        }
      };

    return (
      <div 
        className="rrelative w-full bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full aspect-video">
          {showVideo && mode === "interactive" ? (
            <video
              ref={videoRef}
              src={video.videoUrl}
              muted={isMuted}
              autoPlay
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img src={video.thumbnailUrl} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
          )}

          {/* Show sound button only when video is visible and hovered */}
          {hovering && showVideo && (
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 text-xs rounded-full"
            >
              {isMuted ? "Unmute" : "Mute"}
            </button>
          )}
        </div>
        <div className="flex gap-3 p-3">
          <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0" />
          <div className="overflow-hidden">
            <h2 className="text-sm font-semibold truncate">{video.title}</h2>
            <p className="text-xs text-gray-600 truncate">{video.author} • {video.views} views • {video.uploadTime}</p>
          </div>
        </div>
      </div>
    );
};


export default VideoPreview;































// import { useRef, useState } from "react";
// import { Video } from "../types";

// interface Props {
//     video: Video;
//     mode: "interactive" | "static";
//     onVideoStart?: () => void;
//     onVideoEnd?: () => void;
//     onVideoSeek?: () => void;
// }

// const VideoPreview: React.FC<Props> = ({ video, mode, ...callbacks}) => {
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

//     const [isPlaying, setPlaying] = useState(false);
//     const [isMuted, setMuted] = useState(true);
//     const [hovering, setHovering] = useState(false);

//     if (mode === "static" && (callbacks.onVideoStart || callbacks.onVideoEnd || callbacks.onVideoSeek)) {
//         throw new Error("Callbacks not allowed in static mode");
//     }

//     const handleMouseEnter = () => {
//         if (mode !== "interactive") return;
        
//         setHovering(true)
//         hoverTimeout.current = setTimeout(() => {
//             if (videoRef.current) {
//                 videoRef.current
//                     .play()
//                     .then(() => {
//                         setPlaying(true);
//                         callbacks.onVideoStart?.();
//                     })
//                     .catch((err) => {
//                         console.error("Autoplay failed", err)
//                     })
//             }
//         }, 500);
//     };

//     const handleMouseLeave = () => {
//         if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

//         if (videoRef.current) {
//             videoRef.current.pause();
//             videoRef.current.currentTime = 0;
//         }

//         setPlaying(false);
//         setHovering(false);
//         callbacks.onVideoEnd?.();
//     };


//     return (
//         <div className="w-80 p-2 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//             {isPlaying ? (
//                 <>
//                     <video 
//                         ref={videoRef}
//                         src={video.videoUrl}
//                         muted={isMuted}
//                         className="w-full rounded-lg"
//                         autoPlay
//                         playsInline
//                     />

//                     {hovering && (
//                         <button
//                             onClick={() => setMuted(!isMuted)}
//                             className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded"
//                         >
//                             {isMuted ? 'Unmute' : 'Mute'}
//                         </button>
//                     )}
//                 </>
//             ) : (
//                 <img src={video.thumbnailUrl} alt={video.title} className="rounded-lg" />
//             )}

//             <div className="flex gap-2 mt-4">
//                 <div className="w-10 h-10 bg-gray-300 rounded-full" />
//                 <div className="">
//                     <div className="font-bold">{video.title}</div>
//                     <div className="text-sm text-gray-600">{video.author}</div>
//                     <div className="text-xs text-gray-500">{video.views} . {video.uploadTime}</div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default VideoPreview;
import React, { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-black relative group">
      <video 
        ref={videoRef}
        className="w-full aspect-video cursor-pointer" 
        controls={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/videos/soundmesh-brief.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-colors hover:bg-black/30 z-10"
          onClick={handlePlayClick}
        >
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md border-4 border-white/80 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-110">
            <Play size={48} className="text-white fill-white ml-2" />
          </div>
        </div>
      )}
    </div>
  );
}

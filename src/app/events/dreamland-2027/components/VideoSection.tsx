"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <section className="w-full py-10 md:pb-20 px-2 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
          onClick={handlePlayClick}
        >
          {!isPlaying ? (
            <>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </>
          ) : null}
          <video
            className="w-full aspect-[16/9] object-cover"
            poster={"/assets/images/events/thamnail.webp"}
            controls={isPlaying}
            playsInline
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/thakshara-3c6c3.appspot.com/o/momento%2Fdreamland_intro.mp4?alt=media&token=f901c154-3776-458d-9582-880ffc652db8"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="text-2xl font-medium text-center mt-12">
          The Dream Behind the Beat
        </h2>
      </div>
    </section>
  );
}

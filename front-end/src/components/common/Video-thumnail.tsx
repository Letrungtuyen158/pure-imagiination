"use client";
import { useState } from "react";
import Image from "next/image";
import { CTA_DATA } from "../cta-section/data";
import Play from "./icon/Play";

const VideoThumbnail = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoLoaded(true);
  };

  const handleCloseClick = () => {
    setIsVideoLoaded(false);
  };

  return (
    <div className="relative">
      <div onClick={handleThumbnailClick}>
        <Image alt={CTA_DATA.title} placeholder="blur" className="object-center rounded-[2rem]" quality={100} width={616} height={413} src={CTA_DATA.banner} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Play />
        </div>
      </div>
      {isVideoLoaded && (
        <div className="fixed w-full h-screen inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative h-[800px] w-[1000px]  max-w-3xl">
            <button onClick={handleCloseClick} className="absolute top-0 right-0 bg-white rounded-full w-8 h-8">
              ✕
            </button>
            <iframe
              width="700"
              height="615"
              src="https://www.youtube.com/embed/iJYp5l2GNzA?si=qa32JsjcV-cfZ8ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;

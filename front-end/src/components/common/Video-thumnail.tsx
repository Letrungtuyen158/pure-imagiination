"use client";
import { useRef, useState, useEffect } from "react";
import Play from "./icon/Play";
import useOnClickOutside from "@/hook/useOnClickoutSite";

const VideoThumbnail = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => {
    setIsVideoLoaded(false);
  });

  useEffect(() => {
    if (isVideoLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVideoLoaded]);

  const handleThumbnailClick = () => {
    setIsVideoLoaded(true);
  };

  const handleCloseClick = () => {
    setIsVideoLoaded(false);
  };

  return (
    <div className="relative ">
      <div>
        <video width={616} height={346} className="object-center rounded-[2rem]" autoPlay muted loop playsInline>
          <source src="/Pure_Imagination.mp4" type="video/mp4" />
          <source src="/Pure_Imagination.webm" type="video/webm" />
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={handleThumbnailClick}>
          <Play />
        </div>
      </div>
      {isVideoLoaded && (
        <div className="fixed w-full h-screen inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div ref={ref} className="relative h-[800px] w-[1000px] max-w-3xl">
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

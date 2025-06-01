"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
      // Listen for events from YouTube API if needed
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video Background Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/2 left-1/2 w-screen h-[100vh] -translate-x-1/2 -translate-y-1/2">
          {/* <iframe
            ref={iframeRef}
            className="w-full h-full"
            src="https://www.youtube.com/embed/pqkVOxt7Tk4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=pqkVOxt7Tk4&modestbranding=1&enablejsapi=1"
            title="Ulaman Resort Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          /> */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/relaxation.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-beige z-10" />

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce text-white text-xl">↓</div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pqkVOxt7Tk4?autoplay=1&mute=1&loop=1&playlist=pqkVOxt7Tk4&controls=0&modestbranding=1&showinfo=0&rel=0&enablejsapi=1"
            title="Ulaman Hero Video"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
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

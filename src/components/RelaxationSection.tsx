"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function RelaxationSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xBlanace = useTransform(scrollYProgress, [0, 1], ["50vw", "-50vw"]);
  const xHealing = useTransform(scrollYProgress, [0, 1], ["-50vw", "50vw"]);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isOpen) {
      video.pause();
    } else {
      video.play();
    }

    setIsOpen((prev) => !prev);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={ref}
      className=" min-h-[80vh] flex items-center relative justify-center px-4 overflow-hidden mx-8 rounded-l-lg"
    >
      <div className="flex flex-col items-center my-auto">
        <motion.div
          style={{ x: xBlanace }}
          className=" opacity-10 text-gold text-9xl font-semibold font-sans text-nowrap"
        >
          Balance - Relaxation
        </motion.div>
        <motion.div
          layout
          onClick={() => toggleVideo()}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="absolute top-0 bottom-0 my-auto cursor-pointer overflow-hidden z-10"
          initial={{
            width: "80%",
            maxWidth: "400px",
            height: "80%",
            borderTopLeftRadius: "1000px",
            borderTopRightRadius: "1000px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          animate={{
            width: isOpen ? "100%" : "80%",
            maxWidth: isOpen ? "100%" : "400px",
            height: isOpen ? "100%" : "80%",
            borderTopLeftRadius: isOpen ? "0px" : "1000px",
            borderTopRightRadius: isOpen ? "0px" : "1000px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <video
            ref={videoRef}
            src="/videos/relaxation.webm"
            className={`w-full h-full pointer-events-none object-cover`}
            muted
            playsInline
            preload="metadata"
            onClick={(e) => e.stopPropagation()}
          />
          {hovered && (
            <motion.div
              className="absolute z-20 flex items-center gap-2 px-4 py-1 bg-gold text-white text-sm font-medium rounded-full pointer-events-none"
              style={{
                top: mousePosition.y - 40,
                left: mousePosition.x,
                transform: "translateX(-50%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-white" />
              {isOpen ? "Stop Video" : "Play Video"}
            </motion.div>
          )}
        </motion.div>
        <motion.div
          style={{ x: xHealing }}
          className=" opacity-10 text-gold text-9xl font-semibold font-sans text-nowrap"
        >
          Renewal - Healing
        </motion.div>
      </div>
    </section>
  );
}

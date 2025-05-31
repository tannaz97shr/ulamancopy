"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
  "/images/craft-1.avif",
  "/images/craft-2.avif",
  "/images/craft-3.avif",
];

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.35]);

  return (
    <div
      ref={ref}
      className="overflow-hidden relative rounded-xl aspect-[3/4] w-full"
    >
      <motion.div
        style={{ y }}
        className="w-full h-full will-change-transform relative"
      >
        <Image src={src} alt="" fill className="object-cover" priority />
      </motion.div>
    </div>
  );
}

export default function DineSection() {
  return (
    <section className="bg-beige py-32 px-4 flex flex-col items-center">
      <h2 className="text-gold text-xl font-serif text-center max-w-2xl leading-relaxed mb-4">
        A world-class gastronomic journey where nature’s finest ingredients meet
        culinary craftsmanship.
      </h2>
      <a className="text-sm text-gold border-b border-gold mb-16 cursor-pointer hover:opacity-70">
        VISIT THE WEBSITE
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((src, i) => (
          <ParallaxImage key={i} src={src} />
        ))}
      </div>
    </section>
  );
}

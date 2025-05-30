"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function NatureSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const radius = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const clipPath = useTransform(radius, (r) => `circle(${r}% at center)`);

  return (
    <section
      ref={ref}
      className="bg-beige py-24 px-4 flex flex-col items-center justify-center"
    >
      <h2 className="text-gold text-center font-serif text-xl mb-6">
        Experience a blend of nature, comfort and <br /> luxury like never
        before.
      </h2>
      <a href="#book" className="text-gold underline text-sm mb-12">
        BOOK YOUR STAY
      </a>

      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <motion.div
          style={{
            WebkitClipPath: clipPath,
            clipPath: clipPath,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/experience-nature.avif"
            alt="Nature and luxury"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

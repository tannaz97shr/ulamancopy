"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RetreatSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [shift, setShift] = useState(0);

  useEffect(() => {
    // Ensure window is available only on the client
    setShift(window.innerWidth);
  }, []);

  const xLeft = useTransform(scrollYProgress, [0, 1], [100, -1 * shift]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, shift]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], ["0deg", "-30deg"]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], ["0deg", "30deg"]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div ref={containerRef} className="flex relative">
        <motion.div
          style={{ x: xLeft, rotate: rotateLeft }}
          className="w-80 aspect-[10/14] rounded-md overflow-hidden shadow-xl absolute"
        >
          <Image
            src="/images/retreat-left.avif"
            alt="Retreat Image"
            fill
            className="object-cover rounded-md"
            priority
          />
        </motion.div>

        <div className="flex flex-col max-w-80 items-center text-center font-sans">
          <h2 className=" text-gold text-xl">
            Discover your path to wellness and growth.
          </h2>
          <p className="text-xs mt-6">
            At Ulaman we redefine luxury as an experience that not only pampers
            the senses but also nurtures the soul. Nestled in pristine nature,
            our eco-luxury retreat offers a sanctuary for healing and
            transformation. With personalized programs year-round, enjoy
            dedicated attention and care, immersing yourself in relaxation,
            rejuvenation, or profound inner change through meticulously curated
            activities and treatments. Your transformative journey begins here.
          </p>
          <a
            href="#"
            className="text-xs font-medium text-gold mt-3 inline-block underline underline-offset-4"
          >
            Learn More
          </a>
        </div>

        <motion.div
          style={{ x: xRight, rotate: rotateRight }}
          className="w-80 aspect-[10/14] rounded-md overflow-hidden shadow-xl absolute"
        >
          <Image
            src="/images/retreat-right.avif"
            alt="Retreat Image"
            fill
            className="object-cover rounded-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "Nestled among the rice fields and coconut trees of Tabanan, Ulaman is only 20 minutes away from the vibrant town of Canggu.";

export default function TextIntro() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = text.split(" ");
  return (
    <section className="relative text-center py-40 px-4">
      <p
        ref={element}
        className="max-w-[600px] flex flex-wrap mx-auto justify-center"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </section>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const characters = children?.toString().split("");
  const amount = range[1] - range[0];
  const step = amount / (children?.toString().length || 1);
  return (
    <span className="relative mr-3 text-2xl lg:text-3xl text-gold">
      {characters?.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <>
      <span className="text-2xl lg:text-3xl text-gold absolute opacity-20">
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </>
  );
};

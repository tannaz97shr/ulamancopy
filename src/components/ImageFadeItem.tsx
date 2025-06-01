"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  interval: number;
};

export default function ImageFadeItem({ images, interval }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Experience image"
            fill
            className="object-cover rounded-xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

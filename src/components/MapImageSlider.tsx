/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "./Icons";

export default function MapImageSlider({ images }: { images: string[] }) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      // @ts-ignore
      swiperInstance.params.navigation
    ) {
      // @ts-ignore
      swiperInstance.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative group w-full h-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={prevRef}
        className="absolute bottom-4 left-4 z-20 w-10 h-10 bg-black/40 text-white rounded-lg flex items-center justify-center cursor-pointer border border-white"
      >
        <ArrowLeft className="w-5 h-5 rotate-180" />
      </div>

      <div
        ref={nextRef}
        className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-black/40 text-white rounded-lg flex items-center justify-center cursor-pointer border border-white"
      >
        <ArrowRight className="w-5 h-5" />
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          margin: 0 4px !important;
          border-radius: 9999px;
        }
        .swiper-pagination-bullet-active {
          background: white;
        }
      `}</style>
    </div>
  );
}

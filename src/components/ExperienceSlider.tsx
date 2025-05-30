/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "./Icons";

const images = [
  "/images/slide-1.avif",
  "/images/slide-2.avif",
  "/images/slide-3.avif",
];

export default function ExperienceSlider() {
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
    <div className="relative max-w-5xl mx-auto overflow-hidden rounded-tl-3xl rounded-br-3xl lg:w-1/2">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        loop
        effect="fade"
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="relative w-full h-[600px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Built-in Swiper pagination rendered automatically */}
        <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10" />
      </Swiper>

      {/* Custom navigation arrows */}
      <div
        ref={prevRef}
        className="absolute bottom-6 left-6 z-20 w-10 h-10 bg-black/40 text-white rounded-lg flex items-center justify-center cursor-pointer border border-white"
      >
        <ArrowLeft className="w-5 h-5 rotate-180" />
      </div>
      <div
        ref={nextRef}
        className="absolute bottom-6 right-6 z-20 w-10 h-10 bg-black/40 text-white rounded-lg flex items-center justify-center cursor-pointer border border-white"
      >
        <ArrowRight className="w-5 h-5" />
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 4px !important;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: white;
        }
      `}</style>
    </div>
  );
}

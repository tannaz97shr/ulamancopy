"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function VillaSlider({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      loop
      className="w-full h-[400px] overflow-hidden rounded-tl-3xl rounded-br-3xl"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Villa image ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { fetchVillas } from "@/lib/fetchVillas";
import { Villa } from "@/types/villa";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "./Icons";
import VillaCard from "./VillaCard";

export default function VillaSection() {
  const [villas, setVillas] = useState<Villa[]>([]);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    fetchVillas().then(setVillas).catch(console.error);
  }, []);

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
    <section className="bg-beige py-16 px-4">
      <h2 className="text-center text-gold text-xl max-w-xl mx-auto leading-relaxed font-serif mb-12">
        Discover cozy elegance, where tranquility <br /> meets Bali’s serene
        beauty.
      </h2>

      <div className="relative flex max-w-screen-xl mx-auto">
        {/* Arrows - left vertical stack on desktop */}
        <div className="hidden lg:flex flex-col gap-4 justify-center mr-20">
          <div
            ref={prevRef}
            className="w-12 h-12 border border-gold text-gold hover:bg-gold hover:text-white rounded-md flex items-center justify-center cursor-pointer transition"
          >
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </div>
          <div
            ref={nextRef}
            className="w-12 h-12 border border-gold text-gold hover:bg-gold hover:text-white rounded-md flex items-center justify-center cursor-pointer transition"
          >
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Swiper carousel */}
        <div className="flex-1 max-w-[94%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.1}
            onSwiper={setSwiperInstance}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {villas.map((villa) => (
              <SwiperSlide key={villa.id}>
                <VillaCard villa={villa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

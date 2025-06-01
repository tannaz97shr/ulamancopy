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
import Spinner from "./Spinner";
import VillaCard from "./VillaCard";

export default function VillaSection() {
  const [villas, setVillas] = useState<Villa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    fetchVillas()
      .then(setVillas)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
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

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className="bg-beige py-16 px-4">
      <h2 className="text-center text-gold text-xl max-w-xl mx-auto leading-relaxed font-serif mb-12">
        Discover cozy elegance, where tranquility <br /> meets Bali’s serene
        beauty.
      </h2>

      <div className="relative flex max-w-screen-xl mx-auto">
        {/* Arrows - left vertical stack on desktop */}
        <div className="hidden lg:flex flex-col gap-4 justify-center w-[10%]">
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
        <div className="flex-1 max-w-[90%]">
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

"use client";

import { fetchVillas } from "@/lib/fetchVillas";
import { Villa } from "@/types/villa";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import VillaCard from "./VillaCard";

export default function VillaSection() {
  const [villas, setVillas] = useState<Villa[]>([]);

  useEffect(() => {
    fetchVillas().then(setVillas).catch(console.error);
  }, []);

  return (
    <section className="bg-beige py-16 px-4">
      <h2 className="text-center text-gold text-xl max-w-xl mx-auto leading-relaxed font-serif mb-12">
        Discover cozy elegance, where tranquility <br /> meets Bali’s serene
        beauty.
      </h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {villas.map((villa) => (
          <SwiperSlide key={villa.id}>
            <VillaCard villa={villa} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "./Icons";
import PackageCard from "./PackagesCard";

type Package = {
  id: string;
  title: string;
  duration: string;
  image: string;
  description: string;
};

export default function PackageSection() {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    fetch("/api/packages")
      .then((res) => res.json())
      .then(setPackages)
      .catch(console.error);
  }, []);

  return (
    <section className="bg-beige py-16 px-4">
      <h2 className="text-center text-gold text-xl max-w-xl mx-auto leading-relaxed font-serif mb-12">
        Book one of our special packages for a getaway <br />
        you’ll never forget.
      </h2>

      <div className="relative max-w-screen-xl mx-auto">
        {/* Desktop arrows */}
        <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-4 z-10 pl-4">
          <div className="swiper-button-prev-packages w-12 h-12 border border-gold text-gold hover:bg-gold hover:text-white rounded-md flex items-center justify-center cursor-pointer transition">
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </div>
          <div className="swiper-button-next-packages w-12 h-12 border border-gold text-gold hover:bg-gold hover:text-white rounded-md flex items-center justify-center cursor-pointer transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-button-next-packages",
            prevEl: ".swiper-button-prev-packages",
          }}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <PackageCard
                image={pkg.image}
                title={pkg.title}
                duration={pkg.duration}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

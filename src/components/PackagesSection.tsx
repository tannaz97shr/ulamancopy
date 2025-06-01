/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useRef, useState } from "react";
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
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    fetch("/api/packages")
      .then((res) => res.json())
      .then(setPackages)
      .catch(console.error);
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
    <section className="py-16 px-4">
      <h2 className="text-center text-gold text-xl max-w-xl mx-auto leading-relaxed font-serif mb-12">
        Book one of our special packages for a getaway <br />
        you’ll never forget.
      </h2>

      <div className="relative flex mx-auto">
        {/* Desktop arrows */}
        <div className="hidden lg:flex flex-col gap-4 justify-center w-[10%]">
          <div
            ref={prevRef}
            className={`w-12 h-12 rounded-md flex items-center justify-center transition ${
              isBeginning
                ? "border border-gray-300 text-gray-300 cursor-not-allowed"
                : "border border-gold text-gold hover:bg-gold hover:text-white cursor-pointer"
            }`}
          >
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </div>

          <div
            ref={nextRef}
            className={`w-12 h-12 rounded-md flex items-center justify-center transition ${
              isEnd
                ? "border border-gray-300 text-gray-300 cursor-not-allowed"
                : "border border-gold text-gold hover:bg-gold hover:text-white cursor-pointer"
            }`}
          >
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Swiper carousel */}
        <div className="flex-1 max-w-[90%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.1}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
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
      </div>
    </section>
  );
}

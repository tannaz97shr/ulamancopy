/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { fetchTestimonials } from "@/lib/fetchTestimonials";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "./Icons";
import Spinner from "./Spinner";

type Testimonial = {
  name: string;
  date: string;
  title: string;
  quote: string;
  emphasis: string;
  summary: string;
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    fetchTestimonials()
      .then(setTestimonials)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className="bg-beige py-20 px-4 text-brown">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-col w-fit">
            <h2 className="text-gold text-2xl font-serif mb-4 flex">
              What Our Guests <br className="md:hidden" />
              Have To Say About Us
            </h2>

            <div className="flex justify-between gap-8 text-sm mb-8 flex-wrap text-gold">
              <div>
                <p>5.0 ★ /</p>
                <p>242 Tripadvisor Reviews</p>
              </div>
              <div>
                <p>4.8 ★ /</p>
                <p>552 Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4 mb-6">
            <div
              ref={prevRef}
              className="border border-gold w-14 h-14 flex items-center justify-center rounded-md cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 rotate-180 text-gold" />
            </div>
            <div
              ref={nextRef}
              className="border border-gold w-14 h-14 flex items-center justify-center rounded-md cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-gold" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="border-t border-gray-700 pt-8 flex flex-col lg:flex-row gap-12 text-base">
                {/* Author info */}
                <div className="min-w-[200px] shrink-0 flex items-center justify-between lg:flex-col h-fit">
                  <p className="font-serif text-lg text-green-900 mb-1">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-700">{t.date}</p>
                </div>

                <h3 className="text-lg font-serif text-green-900 mb-2">
                  “{t.title}”
                </h3>
                {/* Testimonial content */}
                <div className="flex-1">
                  <p className="italic text-brown mb-3">{t.quote}</p>
                  <p className="text-gray-800 mb-3">{t.emphasis}</p>
                  <p className="text-gray-600">{t.summary}</p>
                  <a className="text-gold underline mt-4 inline-block text-sm cursor-pointer">
                    CONTINUE READING
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

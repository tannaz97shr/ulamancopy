"use client";

import { fetchMapPoints } from "@/lib/fetchMapPoints";
import Image from "next/image";
import { useEffect, useState } from "react";
import { iconRegistry } from "./Icons";

type MapPoint = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
};

export default function MapSection() {
  const [points, setPoints] = useState<MapPoint[]>([]);

  useEffect(() => {
    fetchMapPoints().then(setPoints).catch(console.error);
  }, []);

  return (
    <section className="relative w-full bg-beige py-20 px-4">
      {/* Heading and Tag */}
      <div className="max-w-screen-xl mx-auto text-left mb-10">
        <h2 className="text-gold text-2xl font-serif mb-4 leading-snug">
          Discover Ulaman <br className="md:hidden" />
          From Above
        </h2>
        <div className="inline-block text-sm text-white bg-gold px-4 py-2 rounded-full cursor-default select-none">
          ● Tap on an icon
        </div>
      </div>

      {/* Map and Points */}
      <div className="relative w-full max-w-screen-xl mx-auto aspect-[16/9]">
        <Image
          src="/images/map.jpg"
          alt="Ulaman Map"
          fill
          priority
          className="object-contain rounded-xl"
        />

        {points.map((point) => {
          const IconComponent =
            iconRegistry[point.icon] || iconRegistry["IconMapPin"];

          return (
            <div
              key={point.id}
              className="absolute z-10 group"
              style={{
                top: `${point.y}%`,
                left: `${point.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative flex items-center">
                {/* Icon */}
                <div className="text-gold w-8 h-8 p-2 bg-beige rounded-full shadow-sm z-10">
                  <IconComponent className="w-full h-full" />
                </div>

                {/* Label on hover */}
                <div className="opacity-0 group-hover:opacity-100 ml-0 transition-opacity duration-200 text-gold bg-beige px-3 py-1 rounded-full text-sm whitespace-nowrap shadow">
                  {point.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

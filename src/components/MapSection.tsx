"use client";

import { fetchMapPoints } from "@/lib/fetchMapPoints";
import { MapPoint } from "@/types/general";
import Image from "next/image";
import { useEffect, useState } from "react";
import { iconRegistry } from "./Icons";
import MapDetailPanel from "./MapDetailPanel"; // ← you must have this

export default function MapSection() {
  const [points, setPoints] = useState<MapPoint[]>([]);
  const [selected, setSelected] = useState<MapPoint | null>(null);

  useEffect(() => {
    fetchMapPoints().then(setPoints).catch(console.error);
  }, []);

  return (
    <section className="relative w-full bg-beige py-20 px-4">
      {/* Title + Tag */}
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
              onClick={() => setSelected(point)}
            >
              <div className="relative flex items-center">
                <div className="text-gold w-8 h-8 p-2 bg-beige rounded-full shadow-sm z-10">
                  <IconComponent className="w-full h-full" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 ml-0 transition-opacity duration-200 text-gold bg-beige px-3 py-1 rounded-full text-sm whitespace-nowrap shadow">
                  {point.label}
                </div>
              </div>
            </div>
          );
        })}

        {/* Fixed Panel (desktop only, absolute inside map area) */}
        {selected && (
          <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[60%] h-[65%] max-w-5xl shadow-xl rounded-lg bg-beige overflow-hidden">
            <MapDetailPanel
              point={selected}
              onClose={() => setSelected(null)}
            />
          </div>
        )}
      </div>

      {/* Mobile Overlay (full screen) */}
      {selected && (
        <div className="lg:hidden fixed inset-0 bg-beige z-50">
          <MapDetailPanel point={selected} onClose={() => setSelected(null)} />
        </div>
      )}
    </section>
  );
}

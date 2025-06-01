"use client";

import { fetchFadeImages } from "@/lib/fetchFadeImages";
import { useEffect, useState } from "react";
import ImageFadeItem from "./ImageFadeItem";

type FadeImage = {
  id: string;
  images: string[];
  interval: number;
};

export default function ImageFadeSection() {
  const [items, setItems] = useState<FadeImage[]>([]);

  useEffect(() => {
    fetchFadeImages().then(setItems).catch(console.error);
  }, []);
  if (items.length < 6) return null;
  return (
    <section className="bg-beige py-20 px-4">
      <div className="grid grid-cols-3 gap-4 auto-rows-[250px]">
        {/* 1 - Tall image */}
        <div className="row-span-2">
          <ImageFadeItem
            images={items[0].images}
            interval={items[0].interval}
          />
        </div>

        {/* 2 - Two stacked images */}
        <div>
          <ImageFadeItem
            images={items[1].images}
            interval={items[1].interval}
          />
        </div>
        {/* 3 - Wide image */}
        <div className=" row-span-2">
          <ImageFadeItem
            images={items[3].images}
            interval={items[3].interval}
          />
        </div>

        {/* 4 - Normal image */}
        <div className="row-span-2">
          <ImageFadeItem
            images={items[4].images}
            interval={items[4].interval}
          />
        </div>

        {/* 5 - Normal image */}
        <div>
          <ImageFadeItem
            images={items[5].images}
            interval={items[5].interval}
          />
        </div>
        <div>
          <ImageFadeItem
            images={items[2].images}
            interval={items[2].interval}
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { fetchFadeImages } from "@/lib/fetchFadeImages";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageFadeItem from "./ImageFadeItem";
import Spinner from "./Spinner";

type FadeImage = {
  id: string;
  images: string[];
  interval: number;
};

export default function ImageFadeSection() {
  const [items, setItems] = useState<FadeImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFadeImages()
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className=" py-20 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[100px] md:auto-rows-[250px]">
        {/* 1 - Tall image */}
        <div className="row-span-3 md:row-span-2">
          <ImageFadeItem
            images={items[0].images}
            interval={items[0].interval}
          />
        </div>

        {/* 2 - Two stacked images */}
        <div className="row-span-2 md:row-span-1">
          <ImageFadeItem
            images={items[1].images}
            interval={items[1].interval}
          />
        </div>
        {/* 3 - Wide image */}
        <div className=" row-span-3 md:row-span-2">
          <ImageFadeItem
            images={items[3].images}
            interval={items[3].interval}
          />
        </div>

        {/* 4 - Normal image */}
        <div className=" row-span-3 md:row-span-2">
          <ImageFadeItem
            images={items[4].images}
            interval={items[4].interval}
          />
        </div>

        {/* 5 - Normal image */}
        <div className=" row-span-3 md:row-span-1">
          <ImageFadeItem
            images={items[5].images}
            interval={items[5].interval}
          />
        </div>
        <div className="row-span-2 md:row-span-1">
          <ImageFadeItem
            images={items[2].images}
            interval={items[2].interval}
          />
        </div>
      </div>
      <div className="flex w-full">
        <Link href="#" className="mx-auto mt-4">
          <Link
            href="#"
            className="inline-block text-sm text-gold font-medium border-b border-gold transition-all duration-300 hover:border-transparent pb-[2px]"
          >
            Discover All Experiences
          </Link>
        </Link>
      </div>
    </section>
  );
}

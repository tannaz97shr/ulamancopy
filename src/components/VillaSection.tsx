"use client";

import { fetchVillas } from "@/lib/fetchVillas";
import { useEffect, useState } from "react";
import VillaCard from "./VillaCard";

interface Villa {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export default function VillasSection() {
  const [villas, setVillas] = useState<Villa[]>([]);

  useEffect(() => {
    fetchVillas().then(setVillas).catch(console.error);
  }, []);

  return (
    <section className="bg-beige text-gold px-6 py-16">
      <h2 className="text-center text-2xl font-serif max-w-xl mx-auto mb-12">
        Discover cozy elegance, where tranquility meets Bali’s serene beauty.
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {villas.map((villa) => (
          <VillaCard key={villa.id} villa={villa} />
        ))}
      </div>
    </section>
  );
}

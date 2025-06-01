"use client";

import { fetchPackagesMarquee } from "@/lib/fetchPackagesMarquee";
import { useEffect, useState } from "react";

type PackageItem = {
  title: string;
  duration: string;
};

export default function PackagesMarquee() {
  const [items, setItems] = useState<PackageItem[]>([]);

  useEffect(() => {
    fetchPackagesMarquee().then(setItems).catch(console.error);
  }, []);

  return (
    <div className="overflow-hidden bg-beige text-green-dark text-sm py-4">
      <div className="whitespace-nowrap animate-marquee text-dark-emphasis">
        {items.map((item, i) => (
          <span key={i} className="inline-block mx-4">
            {item.title} | {item.duration}
            <span className="mx-3 text-3xl ml-4">•</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

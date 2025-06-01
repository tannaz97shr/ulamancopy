"use client";

import { fetchPackagesMarquee } from "@/lib/fetchPackagesMarquee";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

type PackageItem = {
  title: string;
  duration: string;
};

export default function PackagesMarquee() {
  const [items, setItems] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPackagesMarquee()
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

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

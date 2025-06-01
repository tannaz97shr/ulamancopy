"use client";

import Image from "next/image";

const awardLogos = [
  "/images/award-1.avif",
  "/images/award-2.avif",
  "/images/award-3.avif",
  "/images/award-4.avif",
  "/images/award-5.avif",
  "/images/award-6.avif",
  "/images/award-7.avif",
];

export default function FooterAwardsMarquee() {
  return (
    <div className=" overflow-hidden py-6 w-full">
      <div className="relative w-full">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {awardLogos.concat(awardLogos).map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-12 relative">
              <Image
                src={src}
                alt={`Award ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
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

"use client";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  "Home",
  "Villas",
  "Packages",
  "Spa",
  "Retreats",
  "Dine",
  "Experiences",
  "Facilities",
  "Blog",
  "Reviews",
  "About",
  "Contact",
  "The Map",
];

export default function MenuPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col justify-between h-screen bg-beige text-gold w-full px-4 pt-6 pb-0 z-40">
      {/* Top: Nav and Social */}
      <div className="flex flex-col items-center">
        <nav className="flex flex-wrap justify-start gap-x-2 gap-y-3 text-[22px] font-light text-center max-w-screen-md mt-12 mb-10 leading-relaxed">
          {menuItems.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              {i !== 0 && <span>/</span>}
              <Link
                href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={onClose}
                className="hover:underline"
              >
                {label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="w-full flex justify-between items-start px-4 mb-6 text-gold text-sm">
          {/* Social links */}
          <div className="flex flex-col gap-2">
            <p>
              Whatsapp <span className="mx-1">/</span> Directions
            </p>
            <p>
              / TripAdvisor <span className="mx-1">/</span> Instagram
            </p>
            <p>/ Facebook</p>
          </div>

          {/* Tripadvisor logo */}
          <Image
            src="/tripadvisor-logo.svg"
            alt="Tripadvisor Travelers' Choice Awards 2024"
            width={90}
            height={90}
            className="flex-shrink-0"
          />
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-t-full h-[300px]">
        <Image
          src="/images/menu-hotel.avif"
          alt="Ulaman Resort"
          width={800}
          height={1000}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

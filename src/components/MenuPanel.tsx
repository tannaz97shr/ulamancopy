"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const leftMenuItems = menuItems.slice(0, 7);
  const rightMenuItems = menuItems.slice(7);

  const renderLinks = (items: string[]) =>
    items.map((label, i) => {
      const href = `/${label.toLowerCase().replace(/\s+/g, "-")}`;
      const isActive =
        pathname === href || (pathname === "/" && label === "Home");

      return (
        <div key={label} className="flex items-center gap-2">
          {i !== 0 && <span>/</span>}
          <Link
            href={href}
            onClick={onClose}
            className={`hover:underline ${
              isActive ? "opacity-50 font-medium" : ""
            }`}
          >
            {label}
          </Link>
        </div>
      );
    });

  return (
    <div className="bg-beige text-gold w-full h-screen px-4 pt-6 pb-0 z-40 flex flex-col justify-between">
      {/* Mobile layout */}
      <div className="flex flex-col items-center lg:hidden">
        <nav className="flex flex-wrap justify-start gap-x-2 gap-y-3 text-[22px] font-light text-center max-w-screen-md mt-12 mb-10 leading-relaxed">
          {menuItems.map((label, i) => {
            const href = `/${label.toLowerCase().replace(/\s+/g, "-")}`;
            const isActive =
              pathname === href || (pathname === "/" && label === "Home");

            return (
              <div key={label} className="flex items-center gap-2">
                {i !== 0 && <span>/</span>}
                <Link
                  href={href}
                  onClick={onClose}
                  className={`hover:underline ${
                    isActive ? "opacity-50 font-medium" : ""
                  }`}
                >
                  {label}
                </Link>
              </div>
            );
          })}
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

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-1 flex-col justify-between h-full">
        <div className="flex-1 flex justify-between items-center">
          <nav className="flex flex-col gap-2 text-[22px] font-light items-end text-right">
            {renderLinks(leftMenuItems)}
          </nav>

          <div className="w-[300px] h-[500px] overflow-hidden rounded-b-full rounded-t-full">
            <Image
              src="/images/menu-hotel.avif"
              alt="Ulaman Resort"
              width={600}
              height={800}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <nav className="flex flex-col gap-2 text-[22px] font-light items-start text-left">
            {renderLinks(rightMenuItems)}
          </nav>
        </div>

        <div className="flex items-start justify-between mt-6 text-sm px-4">
          <div className="flex flex-col gap-2">
            <p>
              Whatsapp <span className="mx-1">/</span> Directions
            </p>
            <p>
              / TripAdvisor <span className="mx-1">/</span> Instagram
            </p>
            <p>/ Facebook</p>
          </div>

          <Image
            src="/tripadvisor-logo.svg"
            alt="Tripadvisor Travelers' Choice Awards 2024"
            width={90}
            height={90}
          />
        </div>
      </div>

      <div className="lg:hidden w-full overflow-hidden rounded-t-full h-[300px]">
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

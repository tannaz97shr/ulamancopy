"use client";

import { menuItems } from "@/constants/menuitems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <div className="bg-beige text-gold w-full min-h-screen px-4 pt-6 pb-0 z-40 flex flex-col justify-between">
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
            className="flex-shrink-0"
          />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-col flex-grow justify-between min-h-screen pt-16 pb-10 px-12">
        <div className="flex flex-1 items-start justify-between">
          {/* Left menu + socials */}
          <div className="flex flex-col gap-6 items-end text-right">
            <nav className="flex flex-col gap-3 text-[22px] font-light">
              {renderLinks(leftMenuItems)}
            </nav>
            <div className="text-sm text-gold flex flex-col gap-1">
              <p>
                Whatsapp <span className="mx-1">/</span> Directions
              </p>
              <p>
                / TripAdvisor <span className="mx-1">/</span> Instagram
              </p>
              <p>/ Facebook</p>
            </div>
          </div>

          {/* Center image */}
          <div className="w-[300px] h-[500px] overflow-hidden rounded-full">
            <Image
              src="/images/menu-hotel.avif"
              alt="Ulaman Resort"
              width={600}
              height={800}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right menu + tripadvisor logo */}
          <div className="flex flex-col gap-6 items-start text-left">
            <nav className="flex flex-col gap-3 text-[22px] font-light">
              {renderLinks(rightMenuItems)}
            </nav>
            <Image
              src="/tripadvisor-logo.svg"
              alt="Tripadvisor Travelers' Choice Awards 2024"
              width={90}
              height={90}
            />
          </div>
        </div>
      </div>

      {/* Mobile image */}
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

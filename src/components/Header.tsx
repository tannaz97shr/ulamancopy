"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuPanel from "./MenuPanel";

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Header */}
      <motion.header
        animate={{
          backgroundColor:
            menuOpen || isScrolled ? "#f0ebe2" : "rgba(0, 0, 0, 0)",
          borderBottom: isScrolled
            ? "1px solid rgba(0,0,0,0.1)"
            : "1px solid rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center font-sans"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex justify-between items-center"
        >
          {/* Left: Hamburger + Nav */}
          <div className="flex items-center gap-8">
            {/* Always Visible Menu Icon */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              className="relative group w-16 h-5 flex items-center justify-center focus:outline-none"
            >
              <span className="sr-only">
                {menuOpen ? "Close Menu" : "Open Menu"}
              </span>

              {/* Top line - short and grows on hover */}
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 0 : -6,
                  width: menuOpen ? "88%" : "66%",
                  left: menuOpen ? "6%" : "0%", // move back to center on open
                  backgroundColor:
                    isScrolled || menuOpen ? "#ad7c33" : "#ffffff",
                }}
                whileHover={{
                  width: menuOpen ? "88%" : "88%", // no extra growth when open
                }}
                transition={{ duration: 0.3 }}
                className="absolute h-[1px] origin-center"
              />

              {/* Bottom Line */}
              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? 0 : 6,
                  width: "88%",
                  backgroundColor:
                    isScrolled || menuOpen ? "#ad7c33" : "#ffffff",
                }}
                transition={{ duration: 0.3 }}
                className="absolute h-[1px] origin-center"
              />
            </button>

            {/* Nav Links (Desktop only) */}
            <nav className="hidden md:flex gap-6 text-sm">
              {["Villas", "Spa", "Dine", "Retreats"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`transition-all duration-300 ${
                    isScrolled || menuOpen ? "text-gold" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: Logo */}
          <motion.div
            animate={{ scale: isScrolled ? 0.75 : 1.5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            <Image
              src="/ulaman-logo.svg"
              alt="Ulaman Logo"
              width={60}
              height={60}
              priority
            />
          </motion.div>

          {/* Right: Book Button */}
          <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/book"
              className={`px-5 py-2 border text-sm font-medium transition-all duration-300 rounded-tl-xl rounded-br-xl hidden lg:flex hover:bg-gold hover:text-white hover:border-gold ${
                isScrolled || menuOpen
                  ? "text-gold border-gold"
                  : "text-white border-white"
              }`}
            >
              Stay With Us
            </Link>
            <Link
              href="/book"
              className={`px-5 py-2 border text-sm font-medium transition-all duration-300 rounded-tl-xl rounded-br-xl flex lg:hidden ${
                isScrolled || menuOpen
                  ? "text-gold border-gold"
                  : "text-white border-white"
              }`}
            >
              Book
            </Link>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="pt-[78px] w-full fixed top-0 left-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MenuPanel onClose={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

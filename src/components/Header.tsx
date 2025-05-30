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
          backgroundColor: isScrolled ? "#f0ebe2" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 px-4 py-3 flex justify-between items-center"
      >
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          className="relative group w-16 h-5 flex items-center justify-center focus:outline-none"
        >
          {/* Hidden accessible text */}
          <span className="sr-only">
            {menuOpen ? "Close Menu" : "Open Menu"}
          </span>

          {/* Top Line */}
          <motion.span
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 0 : -6,
              backgroundColor: isScrolled || menuOpen ? "#ad7c33" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-11/12 h-[1px] origin-center"
          />

          {/* Bottom Line */}
          <motion.span
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? 0 : 6,
              backgroundColor: isScrolled || menuOpen ? "#ad7c33" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-11/12 h-[1px] origin-center"
          />
        </button>

        {/* Animated Logo */}
        <motion.div
          animate={{ scale: isScrolled ? 0.75 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/ulaman-logo.svg"
            alt="Ulaman Logo"
            width={60}
            height={60}
            priority
          />
        </motion.div>

        {/* Book Button */}
        <motion.div
          animate={{
            scale: isScrolled ? 0.9 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/book"
            className={`px-5 py-2 border text-sm font-medium transition-all duration-300 
      ${isScrolled ? "text-gold border-gold" : "text-white border-white"}
      rounded-tl-xl rounded-br-xl`}
          >
            Book
          </Link>
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

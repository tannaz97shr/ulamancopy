import Header from "@/components/Header";
import type { ReactNode } from "react";
import "./globals.css";

import Footer from "@/components/Footer";
import PackagesMarquee from "@/components/PackagesMarquee";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Ulaman Clone",
  description: "A clone of Ulaman Bali using Next.js App Router",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="bg-beige">
        <Header />
        {children}
        <Footer />
        <PackagesMarquee />
      </body>
    </html>
  );
}

import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Ulaman Clone",
  description: "A clone of Ulaman Bali using Next.js App Router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

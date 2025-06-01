"use client";

import { useState } from "react";

export default function FooterAdultSelector() {
  const [adults, setAdults] = useState(2);
  return (
    <div className="flex items-center gap-2">
      <span>Adult</span>
      <button
        onClick={() => setAdults((a) => Math.max(1, a - 1))}
        className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg"
      >
        −
      </button>
      <span>{adults}</span>
      <button
        onClick={() => setAdults((a) => a + 1)}
        className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg text-white opacity-60"
      >
        +
      </button>
    </div>
  );
}

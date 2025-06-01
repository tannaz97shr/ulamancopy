"use client";

import { useState } from "react";

export default function FooterSubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", { name, email });
  };

  return (
    <div className="py-16 px-6 text-left md:w-1/3">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-white text-3xl md:text-2xl font-serif mb-10">
          Get Notified On Our Offers
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name */}
          <div>
            <label className="block text-white text-xl md:text-base mb-1">
              Your Name*
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-white text-white text-lg outline-none py-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-xl md:text-base mb-1">
              Your Email*
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white text-white text-lg outline-none py-1"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="text-lg text-white opacity-60 border-b border-white hover:opacity-100 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

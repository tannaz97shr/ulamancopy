import ExperienceSlider from "@/components/ExperienceSlider";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section className="bg-beige text-gold px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <ExperienceSlider />

        <div className="space-y-6 px-2">
          {/* Heading */}
          <h2 className="text-2xl leading-relaxed font-serif text-gold">
            <span className="block">
              An award-winning eco-luxury resort offering
            </span>
            <span className="block">a unique hideaway experience.</span>
            <span className="block">
              Embrace authenticity, balance, and harmony with
            </span>
            <span className="block">
              nature in a healing, luxurious environment.
            </span>
          </h2>

          {/* Body Text */}
          <p className="text-base text-gray-800 font-sans leading-7">
            We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
            offers{" "}
            <em className="italic text-black">
              a secluded, lush haven with luxurious amenities and impeccable
              service
            </em>
            . Immerse yourself in traditional Balinese culture and leave feeling
            renewed, all while minimizing your ecological footprint. Recharge
            your mind, body, and soul in this unique holistic retreat.
          </p>

          {/* Link */}
          <Link
            href="/about"
            className="text-gold font-medium underline underline-offset-4 hover:opacity-80"
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
}

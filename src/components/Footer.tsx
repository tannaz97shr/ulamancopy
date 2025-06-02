import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import FooterAdultSelector from "./FooterAdultSelector";
import FooterAwardsMarquee from "./FooterAwardsMarquee";
import FooterConnectSection from "./FooterConnectSection";
import FooterExploreMenu from "./FooterExploreMenu";
import FooterInfo from "./FooterInfo";
import FooterSubscribeForm from "./FooterSubscribeForm";

export default function Footer() {
  return (
    <div className="bg-dark-emphasis text-white py-12 text-sm flex flex-col items-center gap-10 px-[8rem]">
      {/* Review Stars */}
      <div className="space-y-1 text-center">
        <p className="flex justify-center items-center gap-2">
          <span className="font-semibold text-white">4.8</span>
          <StarIcon className="w-4 h-4 text-white" />
          <span className="text-gray-300">/ 552 Google Reviews</span>
        </p>
        <p className="flex justify-center items-center gap-2">
          <span className="font-semibold text-white">5.0</span>
          <StarIcon className="w-4 h-4 text-white" />
          <span className="text-gray-300">/ 242 TripAdvisor Reviews</span>
        </p>
      </div>

      {/* Booking Form */}
      <div className="w-full flex flex-col gap-10 md:flex-row max-w-3xl">
        <div className="flex flex-wrap justify-around items-between w-full items-center gap-4 text-white lg:border-r lg:border-white">
          <span className="mb-1">Check In</span>

          <span className="w-8 border-b border-white"></span>

          <span className="mb-1">Check Out</span>

          {/* Adults selector */}
        </div>
        <div className="flex items-center justify-between w-full">
          <FooterAdultSelector />

          {/* Search Button */}
          <button className=" cursor-pointer border border-white px-8 py-2 rounded-tl-lg rounded-br-lg text-white hover:bg-white hover:text-dark-emphasis transition">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full gap-8  md:flex-row-reverse md:mt-10">
        <div className="w-full aspect-square relative">
          <Image
            src={"/images/footer-map.avif"}
            alt={"footer map"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full gap-6 md:justify-center">
          <h2 className="font-semibold text-2xl font-serif">
            Tucked Within Majestic Balinese Nature.
          </h2>
          <p>
            Strategically located near popular areas like Canggu and Ubud,
            experience tranquil nature and luxury. With endless activities,
            you&apos;ll never want to leave Ulaman.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row md:gap-10 md:items-baseline">
        <FooterSubscribeForm />
        <FooterExploreMenu />
        <FooterConnectSection />
      </div>
      <FooterAwardsMarquee />
      <FooterInfo />
    </div>
  );
}

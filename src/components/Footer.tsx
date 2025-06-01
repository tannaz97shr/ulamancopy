import { StarIcon } from "@heroicons/react/24/solid"; // or your own icon
import FooterAdultSelector from "./FooterAdultSelector";

export default function Footer() {
  return (
    <div className="bg-dark-emphasis text-white py-12 px-6 text-sm flex flex-col items-center gap-10">
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
      <div className="w-full flex flex-col gap-10 md:flex-row max-w-[948px]">
        <div className="flex flex-wrap justify-around items-between w-full items-center gap-4 text-white lg:border-r lg:border-white">
          <span className="mb-1">Check In</span>

          <span className="w-8 border-b border-white"></span>

          <span className="mb-1">Check Out</span>

          {/* Adults selector */}
        </div>
        <div className="flex items-center justify-between w-full">
          <FooterAdultSelector />

          {/* Search Button */}
          <button className="border border-white px-8 py-2 rounded-tl-lg rounded-br-lg text-white hover:bg-white hover:text-dark-emphasis transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

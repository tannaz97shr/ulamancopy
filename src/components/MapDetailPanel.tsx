"use client";

import MapImageSlider from "./MapImageSlider";

type MapDetailPanelProps = {
  point: {
    id: string;
    label: string;
    icon: string;
    category: string;
    description: string;
    images: string[];
  };
  onClose: () => void;
};

export default function MapDetailPanel({
  point,
  onClose,
}: MapDetailPanelProps) {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row">
      {/* Image Slider */}
      <div className="w-full lg:w-1/2 aspect-[3/4] lg:h-full">
        <MapImageSlider images={point.images} />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-600">{point.category}</p>
          <h3 className="text-gold text-2xl font-serif mb-4">{point.label}</h3>
          <p className="text-gray-700 text-sm">{point.description}</p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gold hover:text-black transition z-20 bg-beige w-10 h-10 rounded-full"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

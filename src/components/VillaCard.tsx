import { Villa } from "@/types/villa";
import ImageSlider from "./ImageSlider";

export default function VillaCard({ villa }: { villa: Villa }) {
  return (
    <div className="bg-beige text-gold p-4">
      <div className="rounded-xl overflow-hidden">
        <ImageSlider images={villa.images} />
      </div>
      <h3 className="text-xl font-serif mt-4">{villa.title}</h3>
      <p className="text-[15px] text-neutral-700 italic mt-2">
        {villa.description}
      </p>
      <a
        href="#"
        className="text-xs font-medium text-gold mt-3 inline-block underline underline-offset-4"
      >
        DISCOVER
      </a>
    </div>
  );
}

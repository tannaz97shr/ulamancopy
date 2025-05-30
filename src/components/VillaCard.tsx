import VillaSlider from "./VillaSlider";

interface Villa {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export default function VillaCard({ villa }: { villa: Villa }) {
  return (
    <div className="w-full max-w-md flex flex-col gap-4">
      <VillaSlider images={villa.images} />

      <h3 className="text-xl font-serif text-gold">{villa.title}</h3>
      <p className="text-sm italic text-gray-700">{villa.description}</p>

      <a
        href="#"
        className="text-gold underline underline-offset-4 text-sm mt-2"
      >
        DISCOVER
      </a>
    </div>
  );
}

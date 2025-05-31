import Image from "next/image";

type PackageProps = {
  image: string;
  title: string;
  duration: string;
};

export default function PackageCard({ image, title, duration }: PackageProps) {
  return (
    <div className="bg-beige rounded-2xl p-4 relative">
      <div className=" bg-gold w-4/5 h-1/2 absolute top-0 left-0 rounded-2xl opacity-50"></div>
      <div className="overflow-hidden rounded-2xl aspect-[4/5] z-10 relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="object-cover object-center w-full h-[400px] rounded-2xl"
        />
      </div>

      <div className="mt-4">
        <span className="inline-block  px-4 py-1 rounded-full mb-3 bg-light-emphasis text-xs">
          {duration}
        </span>
        <h3 className="text-gold font-serif text-2xl mb-2">{title}</h3>
        <a href="#" className="text-gold underline underline-offset-4 text-sm">
          DISCOVER
        </a>
      </div>
    </div>
  );
}

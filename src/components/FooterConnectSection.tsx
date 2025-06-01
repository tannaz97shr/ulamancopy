import Link from "next/link";

const linksLeft = [
  { label: "Whatsapp", href: "#" },
  { label: "TripAdvisor", href: "#" },
  { label: "Facebook", href: "#" },
];

const linksRight = [
  { label: "Directions", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function FooterConnectSection() {
  return (
    <div className="text-white w-full md:px-12 py-12 md:w-1/3">
      <h3 className="text-2xl font-serif mb-8">Connect</h3>
      <div className="grid grid-cols-2 gap-8 max-w-screen-md">
        <div className="flex flex-col gap-6">
          {linksLeft.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-lg leading-relaxed hover:underline md:text-sm"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {linksRight.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-lg leading-relaxed hover:underline md:text-sm"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

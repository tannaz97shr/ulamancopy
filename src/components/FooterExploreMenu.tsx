import { menuItems } from "@/constants/menuitems";
import Link from "next/link";

export default function FooterExploreMenu() {
  const leftMenuItems = menuItems.slice(0, 6);
  const rightMenuItems = menuItems.slice(6, 12); // adjust as needed

  const renderLinks = (items: string[]) =>
    items.map((label) => {
      const href = `/${label.toLowerCase().replace(/\s+/g, "-")}`;
      return (
        <Link
          key={label}
          href={href}
          className="text-white font-light text-lg leading-relaxed hover:underline md:text-sm"
        >
          {label}
        </Link>
      );
    });

  return (
    <div className="text-white w-full md:w-1/3 md:px-12 py-12">
      <h3 className="text-white text-2xl font-serif mb-8">Explore</h3>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-screen-md">
        <div className="flex flex-col gap-4">{renderLinks(leftMenuItems)}</div>
        <div className="flex flex-col gap-4">{renderLinks(rightMenuItems)}</div>
      </div>
    </div>
  );
}

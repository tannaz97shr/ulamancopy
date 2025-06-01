import Link from "next/link";

export default function CalloutSection() {
  return (
    <section className="text-center py-24 px-4 text-gold">
      <h2 className="text-2xl md:text-3xl font-serif leading-relaxed mb-6">
        Reconnect With Yourself In <br className="md:hidden" />
        Luxurious Comfort.
      </h2>

      <Link
        href="/contact"
        className="text-gold text-sm underline underline-offset-4 hover:text-gold/80 transition-colors duration-200"
      >
        BOOK YOUR STAY
      </Link>

      <p className="mt-16 text-sm text-gold">@ulamanbali</p>
    </section>
  );
}

import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TextIntro from "@/components/TextIntro";
import { fetchSiteData } from "@/lib/api";

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  let data;

  try {
    data = await fetchSiteData(baseUrl);
  } catch {
    return (
      <div className="p-8 text-center text-red-600">
        Failed to load data. Please try again later.
      </div>
    );
  }

  return (
    <>
      <Hero {...data.hero} />
      <TextIntro />
      <About {...data.about} />
      <Features items={data.features} />
      <Testimonials items={data.testimonials} />
    </>
  );
}

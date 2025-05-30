import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import TextIntro from "@/components/TextIntro";

export default async function HomePage() {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // let data;

  // try {
  //   data = await fetchSiteData(baseUrl);
  // } catch {
  //   return (
  //     <div className="p-8 text-center text-red-600">
  //       Failed to load data. Please try again later.
  //     </div>
  //   );
  // }

  return (
    <>
      <Hero />
      <TextIntro />
      <ExperienceSection />
    </>
  );
}

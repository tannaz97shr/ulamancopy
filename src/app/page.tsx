import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import NatureSection from "@/components/NatureSection";
import PackageSection from "@/components/PackagesSection";
import RetreatSection from "@/components/RetreatSection";
import TextIntro from "@/components/TextIntro";
import VillaSection from "@/components/VillaSection";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <TextIntro />
      <ExperienceSection />
      <VillaSection />
      <NatureSection />
      <PackageSection />
      <RetreatSection />
    </>
  );
}

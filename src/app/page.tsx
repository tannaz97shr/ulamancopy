import { default as DineSection } from "@/components/DineSection";
import DiscoverSection from "@/components/DiscoverSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import NatureSection from "@/components/NatureSection";
import PackageSection from "@/components/PackagesSection";
import RelaxationSection from "@/components/RelaxationSection";
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
      <RelaxationSection />
      <DineSection />
      <DiscoverSection />
    </>
  );
}

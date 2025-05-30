import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import TextIntro from "@/components/TextIntro";
import VillasSection from "@/components/VillaSection";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <TextIntro />
      <ExperienceSection />
      <VillasSection />
    </>
  );
}

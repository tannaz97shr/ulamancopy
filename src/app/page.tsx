import DineSection from "@/components/DineSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ImageFadeSection from "@/components/ImageFadeSection";
import MapSection from "@/components/MapSection";
import NatureSection from "@/components/NatureSection";
import PackageSection from "@/components/PackagesSection";
import RelaxationSection from "@/components/RelaxationSection";
import RetreatSection from "@/components/RetreatSection";
import ScheduleSection from "@/components/ScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <MapSection />
      <TestimonialsSection />
      <ImageFadeSection />
      <ScheduleSection />
    </>
  );
}

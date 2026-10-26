"use client";

import { usePublicWebsiteData } from "@/hooks/usePublicWebsiteData";
import { HeroSection } from "./HeroSection";
import { GallerySection } from "./GallerySection";
import { PlansSection } from "./PlansSection";
import { ScheduleSection } from "./ScheduleSection";
import { PerformanceSection } from "./PerformanceSection";
import { TrainingSection } from "./TrainingSection";
import { FaqSection } from "./FaqSection";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function LandingPage() {
  const { data } = usePublicWebsiteData();
  return (
    <>
      <Navbar />
      <main id="contenido">
        <HeroSection />
        <GallerySection items={data?.gallery} />
        <PlansSection
          plans={data?.plans}
          campaign={data?.activeCampaign}
          headingLevel={2}
        />
        <ScheduleSection
          classItems={data?.classSchedule}
          student={data?.studentSchedule}
          weeklySchedules={data?.weeklySchedules}
        />
        <PerformanceSection />
        <TrainingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

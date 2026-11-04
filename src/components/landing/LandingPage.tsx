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
import { LocalIdentitySection } from "./LocalIdentitySection";
import { CoachesSection } from "./CoachesSection";
import { CoachEducationSection } from "./CoachEducationSection";
import { TransformationsSection } from "./TransformationsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ExperienceSection } from "./ExperienceSection";
import { SocialVideosSection } from "./SocialVideosSection";

export function LandingPage() {
  const { data } = usePublicWebsiteData();
  return (
    <>
      <Navbar />
      <main id="contenido">
        <HeroSection />
        <LocalIdentitySection />
        <PerformanceSection />
        <ExperienceSection />
        <GallerySection items={data?.gallery} />
        <PlansSection
          overview
          plans={data?.plans}
          campaign={data?.activeCampaign}
          headingLevel={2}
        />
        <ScheduleSection
          overview
          plans={data?.plans}
          classItems={data?.classSchedule}
          student={data?.studentSchedule}
          weeklySchedules={data?.weeklySchedules}
        />
        <TrainingSection />
        <SocialVideosSection />
        <CoachesSection />
        <CoachEducationSection />
        <TransformationsSection items={data?.results} />
        <TestimonialsSection items={data?.testimonials} />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

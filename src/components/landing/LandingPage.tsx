'use client';

import { usePublicWebsiteData } from '@/hooks/usePublicWebsiteData';
import { CoachesSection } from './CoachesSection';
import { CoachEducationSection } from './CoachEducationSection';
import { ExperienceSection } from './ExperienceSection';
import { FaqSection } from './FaqSection';
import { FinalCtaSection } from './FinalCtaSection';
import { FitnessTipsSection } from './FitnessTipsSection';
import { Footer } from './Footer';
import { GallerySection } from './GallerySection';
import { HeroSection } from './HeroSection';
import { LocalIdentitySection } from './LocalIdentitySection';
import { Navbar } from './Navbar';
import { PerformanceSection } from './PerformanceSection';
import { ProgramsSection } from './ProgramsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { TrainingSection } from './TrainingSection';
import { TransformationsSection } from './TransformationsSection';

export function LandingPage() {
  const { data } = usePublicWebsiteData();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrainingSection />
        <ExperienceSection />
        <ProgramsSection />
        <PerformanceSection />
        <CoachesSection />
        <CoachEducationSection />
        <TransformationsSection items={data?.results} />
        <FitnessTipsSection />
        <GallerySection items={data?.gallery} />
        <LocalIdentitySection />
        <TestimonialsSection items={data?.testimonials} />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

import { CoachesSection } from './CoachesSection';
import { CoachEducationSection } from './CoachEducationSection';
import { DigitalSoonSection } from './DigitalSoonSection';
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
        <TransformationsSection />
        <FitnessTipsSection />
        <GallerySection />
        <LocalIdentitySection />
        <DigitalSoonSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

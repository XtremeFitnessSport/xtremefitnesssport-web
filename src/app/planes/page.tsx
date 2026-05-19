import type { Metadata } from 'next';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { Footer } from '@/components/landing/Footer';
import { MothersDayPromoBanner } from '@/components/landing/MothersDayPromoBanner';
import { MothersDayPromoDialog } from '@/components/landing/MothersDayPromoDialog';
import { Navbar } from '@/components/landing/Navbar';
import { PlansSection } from '@/components/landing/PlansSection';
import { ScheduleSection } from '@/components/landing/ScheduleSection';

export const metadata: Metadata = {
  title: 'Planes y horarios',
  description:
    'Conoce los planes Strong y Súper Strong de Xtreme Fitness Tarapoto, precios, beneficios y horarios de entrenamiento.',
  alternates: {
    canonical: '/planes/',
  },
  openGraph: {
    title: 'Planes y horarios | Xtreme Fitness Tarapoto',
    description:
      'Planes de entrenamiento semipersonalizado en Tarapoto con horarios puntuales y guía profesional.',
    url: '/planes/',
  },
};

export default function PlanesPage() {
  return (
    <>
      <Navbar />
      <MothersDayPromoDialog />
      <main className="bg-x-black pt-16 min-[601px]:pt-32 xl:pt-20">
        <MothersDayPromoBanner />
        <PlansSection />
        <ScheduleSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { Footer } from '@/components/landing/Footer';
import { LocationsSection } from '@/components/landing/LocationsSection';
import { Navbar } from '@/components/landing/Navbar';

export const metadata: Metadata = {
  title: 'Sedes y ubicación',
  description:
    'Encuentra las sedes de Xtreme Fitness en Tarapoto y Pucallpa. Consulta dirección, contacto, horarios y rutas en Google Maps.',
  alternates: {
    canonical: '/sedes/',
  },
  openGraph: {
    title: 'Sedes y ubicación | Xtreme Fitness',
    description:
      'Cómo llegar a Xtreme Fitness Tarapoto y a la nueva sede de Pucallpa.',
    url: '/sedes/',
  },
};

export default function SedesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black page-content">
        <LocationsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { Footer } from '@/components/landing/Footer';
import { LocationsSection } from '@/components/landing/LocationsSection';
import { Navbar } from '@/components/landing/Navbar';

export const metadata: Metadata = {
  title: 'Sedes y ubicación',
  description:
    'Encuentra la sede de Xtreme Fitness Tarapoto en Las Dalias 140, Urb. Los Jardines. Teléfono, correo y ruta por Google Maps.',
  alternates: {
    canonical: '/sedes/',
  },
  openGraph: {
    title: 'Sedes y ubicación | Xtreme Fitness Tarapoto',
    description:
      'Cómo llegar a Xtreme Fitness Tarapoto: dirección, teléfono, correo y ruta por Google Maps.',
    url: '/sedes/',
  },
};

export default function SedesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black pt-16 sm:pt-20">
        <LocationsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

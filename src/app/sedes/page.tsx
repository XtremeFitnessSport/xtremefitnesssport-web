import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { LocationsSection } from "@/components/landing/LocationsSection";

export const metadata: Metadata = {
  title: "Sedes: gimnasio en Tarapoto y Pucallpa",
  description:
    "Elige tu sede Xtreme Fitness en Tarapoto, San Martín, o Pucallpa, Ucayali. Dirección, horarios y entrenamiento en la selva del Perú.",
  alternates: { canonical: "/sedes/" },
  openGraph: {
    title: "Sedes Xtreme Fitness | Tarapoto y Pucallpa",
    url: "/sedes/",
    images: [{ url: "/opengraph-image?v=logo", width: 1200, height: 630 }],
  },
};
export default function SedesPage() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="page-content">
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}

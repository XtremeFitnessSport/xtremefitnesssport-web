import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { PlanesPageContent } from "@/components/landing/PlanesPageContent";

export const metadata: Metadata = {
  title: "Planes, precios y horarios en Tarapoto y Pucallpa",
  description:
    "Conoce los planes, beneficios y horarios de Xtreme Fitness en Tarapoto y Pucallpa.",
  alternates: {
    canonical: "/planes/",
  },
  openGraph: {
    title: "Planes y horarios | Xtreme Fitness",
    description:
      "Planes y agenda de entrenamiento semipersonalizado para las sedes de Tarapoto y Pucallpa.",
    url: "/planes/",
    images: [
      {
        url: "/opengraph-image?v=logo",
        width: 1200,
        height: 630,
        alt: "Planes y horarios Xtreme Fitness en Tarapoto y Pucallpa",
      },
    ],
  },
};

export default function PlanesPage() {
  return (
    <>
      <Navbar />
      <PlanesPageContent />
      <Footer />
    </>
  );
}

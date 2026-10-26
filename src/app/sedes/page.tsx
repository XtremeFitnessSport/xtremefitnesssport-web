import type { Metadata } from "next";
import Link from "next/link";
import { locationContent } from "@/data/locationContent";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Sedes: gimnasio en Tarapoto y Pucallpa",
  description:
    "Elige tu sede Xtreme Fitness en Tarapoto, San Martín, o Pucallpa, Ucayali. Dirección, horarios y entrenamiento en la selva del Perú.",
  alternates: { canonical: "/sedes/" },
  openGraph: {
    title: "Sedes Xtreme Fitness | Tarapoto y Pucallpa",
    url: "/sedes/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};
export default function SedesPage() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="page-content">
        <section className="gym-section">
          <div className="gym-shell">
            <p className="eyebrow">DOS SEDES. UNA MISMA ENERGÍA.</p>
            <h1 className="gym-title">
              ENCUENTRA TU
              <br />
              <span className="text-x-neon">LUGAR XTREME.</span>
            </h1>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {Object.values(locationContent).map((location) => (
                <article
                  className="border border-white/20 bg-white/[.03] p-7 sm:p-10"
                  key={location.id}
                  data-reveal
                >
                  <p className="eyebrow">{location.region} / PERÚ</p>
                  <h2 className="font-sport text-5xl font-bold uppercase">
                    {location.city}
                  </h2>
                  <p className="mt-5 min-h-14 text-sm leading-7 text-gray-300">
                    {location.address}
                  </p>
                  <p className="mt-5 min-h-24 text-sm leading-7 text-gray-400">
                    {location.hours.map((hour) => (
                      <span className="block" key={hour}>
                        {hour}
                      </span>
                    ))}
                  </p>
                  <Link
                    className="mt-5 gym-button gym-button-primary"
                    href={`/sedes/${location.id}/`}
                  >
                    CONOCER SEDE <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

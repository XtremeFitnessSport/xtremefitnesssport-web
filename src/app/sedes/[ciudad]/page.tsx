import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locationContent } from "@/data/locationContent";
import { trainingLevels } from "@/data/training";
import { images } from "@/assets/images";
import { siteUrl } from "@/lib/site";
import { whatsappHref } from "@/lib/whatsapp";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { GallerySection } from "@/components/landing/GallerySection";
import { LocationMap } from "@/components/landing/LocationMap";

type City = keyof typeof locationContent;
type Props = { params: Promise<{ ciudad: string }> };
export function generateStaticParams() {
  return [{ ciudad: "tarapoto" }, { ciudad: "pucallpa" }];
}
export const dynamicParams = false;
function getCity(ciudad: string): City {
  if (ciudad !== "tarapoto" && ciudad !== "pucallpa") notFound();
  return ciudad;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCity((await params).ciudad);
  const location = locationContent[city];
  const title = `Gimnasio en ${location.city}, ${location.region} | Planes y horarios`;
  const description = `Conoce Xtreme Fitness ${location.city}, Perú: entrenamiento semipersonalizado, fuerza y funcional para principiantes, intermedios, avanzados y alto rendimiento.`;
  return {
    title,
    description,
    alternates: { canonical: `/sedes/${city}/` },
    openGraph: {
      title,
      description,
      url: `/sedes/${city}/`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const city = getCity((await params).ciudad);
  const location = locationContent[city];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl + "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sedes",
        item: siteUrl + "/sedes/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.city,
        item: siteUrl + "/sedes/" + city + "/",
      },
    ],
  };
  return (
    <>
      <Navbar />
      <main id="contenido" className="page-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <section className="gym-section">
          <div className="gym-shell local-hero">
            <div className="local-copy" data-reveal>
              <p className="eyebrow">
                GIMNASIO / {location.region.toUpperCase()} / PERÚ
              </p>
              <h1 className="gym-title">
                XTREME FITNESS
                <br />
                <span className="text-x-neon">
                  {location.city.toUpperCase()}.
                </span>
              </h1>
              <p className="mt-6">
                {city === "tarapoto"
                  ? "Entrena en nuestra sede de Los Jardines, Tarapoto. Máquinas de fuerza, pesas y espacio para entrenamiento funcional, con guía según tu nivel."
                  : "Entrenamiento semipersonalizado en Pucallpa, Ucayali. Un plan para tu experiencia, sesiones con guía y la energía de la comunidad Xtreme en la selva peruana."}
              </p>
              <div className="local-info">
                <h2 className="font-sport font-bold text-card-title">
                  UBICACIÓN Y HORARIOS
                </h2>
                <p className="mt-3 text-copy text-body">
                  {location.address}
                  <br />
                  {location.cityLine}
                </p>
                <ul className="mt-4 space-y-2 text-small text-copy">
                  {location.hours.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
                <LocationMap city={location.city} coordinates={location.mapCoordinates} mapUrl={location.mapUrl} />
              </div>
              <Link href="/planes/" className="gym-button gym-button-primary">
                VER PLANES Y PRECIOS <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <figure className="m-0" data-reveal>
              <div className="local-photo">
                <Image
                  src={city === "pucallpa" ? images.locations.pucallpa.facade : images.gallery.altaIntensidad[5]}
                  alt={city === "pucallpa" ? "Fachada de Xtreme Fitness Pucallpa" : "Equipamiento y zona funcional de Xtreme Fitness en Tarapoto"}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="section-note mt-3">
                {city === "pucallpa" ? "Nuestra sede Pucallpa." : "Instalaciones de Tarapoto."}
              </figcaption>
            </figure>
          </div>
        </section>
        {city === "pucallpa" && <GallerySection />}
        <section className="gym-section border-t border-white/10">
          <div className="gym-shell">
            <p className="eyebrow">ENTRENAMIENTO PARA TODOS LOS NIVELES</p>
            <h2 className="gym-title">
              TU PUNTO DE PARTIDA.
              <br />
              <span className="text-x-neon">TU PROPIO PROGRESO.</span>
            </h2>
            <div className="levels-grid mt-8">
              {trainingLevels.map((level) => (
                <article key={level.name}>
                  <h3 className="font-sport">{level.name}</h3>
                  <p>{level.description}</p>
                </article>
              ))}
            </div>
            <p className="section-note mt-5">
              ¿Buscas fuerza, hipertrofia, resistencia, movilidad o preparación
              deportiva en {location.city}? Consulta el enfoque y los turnos con
              el coach.
            </p>
            <a
              className="mt-5 inline-flex min-h-11 items-center gap-3 text-x-neon underline underline-offset-4"
              href={whatsappHref(city, [
                "Quiero información de entrenamiento en " + location.city + ".",
                "Mi objetivo y nivel: por definir con el coach.",
              ])}
            >
              Consultar a la sede {location.city} ↗
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

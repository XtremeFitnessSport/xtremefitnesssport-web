"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/assets/images";
import { useGymLocation, type GymLocationId } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";

const gymPhotos = [
  {
    title: "MÁQUINAS Y FUERZA",
    image: images.locations.pucallpa.machines,
    alt: "Máquinas y equipos de fuerza dentro de Xtreme Fitness Pucallpa",
    className: "gym-tour-photo gym-tour-featured",
  },
  {
    title: "ESPACIOS DE LA SEDE",
    image: images.locations.pucallpa.reception,
    alt: "Espacio interior de Xtreme Fitness Pucallpa",
    className: "gym-tour-photo gym-tour-equipment",
  },
  {
    title: "ASÍ NOS ENCUENTRAS",
    image: images.locations.pucallpa.facade,
    alt: "Fachada y entrada principal de Xtreme Fitness Pucallpa",
    className: "gym-tour-photo",
  },
  {
    title: "NUESTRA FACHADA",
    image: images.locations.pucallpa.facadeDay,
    alt: "Otra vista de la fachada de Xtreme Fitness Pucallpa",
    className: "gym-tour-photo",
  },
  {
    title: "MÁS ESPACIOS",
    image: images.locations.pucallpa.dining,
    alt: "Otro espacio interior de Xtreme Fitness Pucallpa",
    className: "gym-tour-photo",
  },
];

const photosByLocation: Partial<Record<GymLocationId, typeof gymPhotos>> = { pucallpa: gymPhotos };

export function TrainingSection() {
  const { locationId } = useGymLocation();
  // Tarapoto uses the available Pucallpa photos until its own photos are supplied.
  const photoLocationId = photosByLocation[locationId] ? locationId : "pucallpa";
  const locationPhotos = photosByLocation[photoLocationId] ?? gymPhotos;
  const photoLocation = getLocationContent(photoLocationId);
  return (
    <section className="gym-section coaching-section" id="entrenamiento" aria-labelledby="coaching-title">
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="font-playful section-handwriting">El diferencial Xtreme</p>
            <h2 className="gym-title" id="coaching-title">
              CONOCE TU GYM.<br /><span className="text-x-neon">CONOCE NUESTRA GUÍA.</span>
            </h2>
          </div>
          <p className="section-description">Conoce los espacios y las máquinas de nuestra sede en {photoLocation.city}.</p>
        </div>
        <div className="gym-tour">
          {locationPhotos.map((photo, index) => (
            <figure className={photo.className} key={photo.title} data-reveal>
              <Image src={photo.image} alt={photo.alt} fill sizes={index === 0 ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 40vw, 100vw"} className="object-cover" />
              <figcaption>
                <h3 className="font-sport">{photo.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="gym-tour-bottom">
          <p className="section-note">Sede {photoLocation.city}.</p>
          <Link href={`/sedes/${locationId}/`} className="gym-button gym-tour-visit">QUIERO CONOCER EL LOCAL <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

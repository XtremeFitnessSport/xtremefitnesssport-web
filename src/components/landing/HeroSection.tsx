"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/assets/images";
import { useGymLocation } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";

export function HeroSection() {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  return (
    <header id="inicio" className="gym-hero">
      <div className="gym-shell hero-layout">
        <div className="gym-hero-copy">
          <p className="hero-location" data-hero-line>
            <span className="status-dot" />
            XTREME {location.city.toUpperCase()}
          </p>
          <p className="font-playful hero-handwriting" data-hero-line>
            Tu siguiente nivel empieza aquí
          </p>
          <h1 className="gym-hero-title font-sport">
            <span data-hero-line>CONSTRUYE</span>
            <span data-hero-line>FUERZA.</span>
            <span className="text-x-neon" data-hero-line>
              GANA MÚSCULO.
            </span>
          </h1>
          <p className="gym-hero-description" data-hero-line>
            Tu rutina. Tu nivel. Un coach contigo.
            <br />
            Desde tu primer día hasta el alto rendimiento.
          </p>
          <Link
            href="#planes"
            className="gym-button gym-button-primary hero-cta"
            data-hero-line
          >
            <span>VER PLANES Y PRECIOS</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-photo-frame">
            <Image
              src={images.heroLocal}
              alt="Un coach acompaña la técnica durante un entrenamiento de fuerza"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="hero-photo-shade" aria-hidden="true" />
            <div className="hero-photo-caption">
              <span className="font-playful">Aquí entrenas con guía</span>
              <p className="font-sport">
                TU ESFUERZO.
                <br />
                NUESTRA GUÍA.
              </p>
            </div>
          </div>
          <div className="hero-photo-label font-sport">
            ENTRENAMIENTO SEMIPERSONALIZADO <span aria-hidden="true">↗</span>
          </div>
          <span className="hero-vertical-label" aria-hidden="true">
            FUERZA AMAZÓNICA / XTREME FITNESS
          </span>
        </div>
      </div>
      <div className="gym-shell hero-benefits">
        <div>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="12" cy="7" r="3" />
            <path d="M5 21v-4a7 7 0 0 1 14 0v4M8 17h8" />
          </svg>
          <span>
            <strong className="font-sport">COACH CONTIGO</strong>
            <small>Guía y corrección técnica.</small>
          </span>
        </div>
        <div>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="m4 14 6-6 6 6M10 8v13M16 3h5v5M21 3l-7 7" />
          </svg>
          <span>
            <strong className="font-sport">A TU NIVEL</strong>
            <small>Una rutina para tu objetivo.</small>
          </span>
        </div>
        <div>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>
            <strong className="font-sport">TU HORA DE ENTRENAR</strong>
            <small>Encuentra el turno para ti.</small>
          </span>
        </div>
      </div>
    </header>
  );
}

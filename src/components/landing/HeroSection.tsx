"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/assets/images";
import { useGymLocation } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";
import styles from "./HeroSection.module.css";

function Arrow({ down = false }: { down?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 19 19 5M5 5h14v14"} /></svg>;
}

export function HeroSection() {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);

  return (
    <header id="inicio" className={styles.hero}>
      <div className={styles.scene} aria-hidden="true">
        <Image src={images.heroLocal} alt="" fill priority sizes="(min-width: 768px) 80vw, 100vw" className={styles.photo} />
        <div className={styles.shade} />
      </div>
      <svg className={styles.brandX} viewBox="0 0 400 500" fill="none" aria-hidden="true">
        <path d="M16 12h104l80 150 80-150h104L254 250l130 238H280l-80-150-80 150H16l130-238Z" />
      </svg>
      <div className={`gym-shell ${styles.stage}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            <span>CONSTRUYE</span>
            <span className={styles.force}>FUERZA<span className={styles.period}>.</span></span>
            <span className={styles.muscle}>GANA MÚSCULO.</span>
          </h1>
          <p className={styles.description}>Tu rutina. Tu nivel. Un coach contigo.<br />Desde tu primer día hasta el alto rendimiento.</p>
          <div className={styles.actions}>
            <Link href="/planes/" className={styles.cta}><span>VER PLANES Y PRECIOS</span><Arrow /></Link>
            <Link href="#rendimientos" className={styles.secondary}>Encuentra tu punto de partida <Arrow /></Link>
          </div>
        </div>
        <div className={styles.photoNote}>
          <span className="font-playful">Aquí se entrena con guía.</span>
          <p>TU ESFUERZO.<br /><strong>NUESTRA GUÍA.</strong></p>
        </div>
        <div className={styles.location}>
          <span className={styles.locationDot} />
          <span>XTREME FITNESS / <strong>{location.city.toUpperCase()}</strong></span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`gym-shell ${styles.footerInner}`}>
          <p className={styles.mantra}>TÉCNICA<span aria-hidden="true">/</span>FUERZA<span aria-hidden="true">/</span>CONSTANCIA</p>
          <Link href="#energia" className={styles.explore}>Siente la energía Xtreme <Arrow down /></Link>
        </div>
      </div>
    </header>
  );
}

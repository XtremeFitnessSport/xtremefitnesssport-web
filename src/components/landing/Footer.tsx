"use client";

import Link from "next/link";
import { socialLinks, portalUrl } from "@/data/landing";
import { useGymLocation } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";
import { whatsappHref } from "@/lib/whatsapp";
import { SocialIcon } from "./SocialIcon";
import { Logo } from "./Logo";
import { WhatsappIcon } from "./ContactActions";

export function Footer() {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  return (
    <footer id="contacto" className="gym-footer">
      <div className="gym-shell">
        <div className="footer-top">
          <div>
            <p className="eyebrow">TARAPOTO + PUCALLPA / PERÚ</p>
            <h2 className="font-sport">
              LA FUERZA
              <br />
              DE LA <span className="text-x-neon">SELVA.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-sm text-gray-300">
              ¿Tienes dudas antes de elegir? Cuéntanos qué buscas y te
              orientamos.
            </p>
            <a
              className="gym-button gym-button-primary mt-5"
              href={whatsappHref(locationId, [
                "Quisiera orientación para elegir un plan.",
                "¿Qué opción me recomiendan según mi nivel y disponibilidad?",
              ])}
            >
              <WhatsappIcon /> HABLAR CON EL EQUIPO{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <Logo size="small" />
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Gimnasio y entrenamiento semipersonalizado en la Amazonía peruana.
              Todos los niveles. Una misma energía.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  className="social-link"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name + " de Xtreme Fitness (otra pestaña)"}
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3>SEDES</h3>
            <Link href="/sedes/tarapoto/">Gimnasio en Tarapoto ↗</Link>
            <Link href="/sedes/pucallpa/">Gimnasio en Pucallpa ↗</Link>
            <p className="mt-4 text-sm text-gray-400">
              Viendo {location.city}
              <br />
              {location.address}
            </p>
            <a
              className="mt-2"
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ubicación ↗
            </a>
          </div>
          <div>
            <h3>CONTACTO</h3>
            <a href={`tel:+${location.whatsapp}`}>{location.phone}</a>
            <a className="break-all" href={`mailto:${location.email}`}>
              {location.email}
            </a>
            <a
              className="mt-5"
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal de socios ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Xtreme Fitness Sport. Perú.</span>
          <span>Fuerza. Técnica. Comunidad.</span>
        </div>
      </div>
    </footer>
  );
}

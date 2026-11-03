"use client";

import Link from "next/link";
import { socialLinks, portalUrl } from "@/data/landing";
import { useGymLocation } from "@/context/GymLocationContext";
import { getLocationContent, locationContent } from "@/data/locationContent";
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
            <h2 className="font-sport">
              LA FUERZA
              <br />
              DE LA <span className="text-x-neon">SELVA.</span>
            </h2>
          </div>
          <div className="footer-invitation">
            <p>
              ¿Tienes dudas antes de elegir? Cuéntanos qué buscas y te
              orientamos.
            </p>
            <a
              className="gym-button gym-button-primary footer-contact-cta"
              href={whatsappHref(locationId, [
                "Quisiera orientación para elegir un plan.",
                "¿Qué opción me recomiendan según mi nivel y disponibilidad?",
              ])}
            >
              <WhatsappIcon /> HABLAR CON EL EQUIPO{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <span className="footer-contact-label">Equipo Xtreme · {location.city}</span>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo size="small" />
            <p>
              Gimnasio y entrenamiento semipersonalizado en la Amazonía peruana.
              Todos los niveles. Una misma energía.
            </p>
            <div className="footer-socials">
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
          <nav aria-label="Explorar Xtreme" className="footer-links">
            <h3 className="font-sport">EXPLORA</h3>
            <Link href="/planes/">Planes y precios</Link>
            <Link href="/planes/#horarios-clases">Horarios</Link>
            <Link href="/#rendimientos">Tu nivel de entrenamiento</Link>
            <Link href="/#coaches">Nuestros coaches</Link>
          </nav>
          <div className="footer-locations">
            <h3 className="font-sport">SEDES</h3>
            {Object.values(locationContent).map((branch) => (
              <div className="footer-location" key={branch.id}>
                <Link href={`/sedes/${branch.id}/`} className="footer-location-name">{branch.city} <span aria-hidden="true">↗</span></Link>
                <p>{branch.cityLine}</p>
                <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="footer-map-link" aria-label={`Cómo llegar a Xtreme Fitness ${branch.city} en Google Maps (otra pestaña)`}>Cómo llegar <span aria-hidden="true">↗</span></a>
              </div>
            ))}
          </div>
          <div className="footer-links footer-contact">
            <h3 className="font-sport">CONTACTO</h3>
            <a href={`tel:+${location.whatsapp}`}>{location.phone}</a>
            <a href={`mailto:${location.email}`}>
              {location.email}
            </a>
            <a
              className="footer-portal"
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
          <a href="#contenido" className="footer-back-top">Volver arriba <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 20V4m-6 6 6-6 6 6" /></svg></a>
        </div>
      </div>
    </footer>
  );
}

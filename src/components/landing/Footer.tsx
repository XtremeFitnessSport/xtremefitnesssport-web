import { contactInfo, socialLinks } from "@/data/landing";
import { ContactIcon } from "./ContactIcon";
import { Logo } from "./Logo";

function SocialIcon({ label }: { label: string }) {
  if (label === "FB") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  if (label === "IG") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          height="16"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          width="16"
          x="4"
          y="4"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" fill="currentColor" r="1.2" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16.7 5.3c-.92-.6-1.52-1.58-1.66-2.7h-3.02v12.06c0 1.7-1.35 3.08-3.02 3.08a3.05 3.05 0 0 1-3.02-3.08A3.05 3.05 0 0 1 9 11.58c.32 0 .64.05.94.15V8.64A6.27 6.27 0 0 0 9 8.57c-3.34 0-6.05 2.73-6.05 6.09s2.71 6.09 6.05 6.09 6.05-2.73 6.05-6.09V8.61a7.05 7.05 0 0 0 4.13 1.34V6.9a4.08 4.08 0 0 1-2.48-1.6Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-black px-4 py-16 text-white sm:px-6 sm:py-20"
      id="horarios"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-6">
            <Logo size="small" />
          </div>
          <p className="mb-8 max-w-sm text-gray-400">
            La mejor experiencia de entrenamiento de alta intensidad en
            Tarapoto. Rompe tus límites con nosotros.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 font-sport font-black text-x-neon transition hover:bg-x-neon hover:text-black"
                href={link.href}
                aria-label={link.label}
                key={link.label}
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="mb-6 font-sport text-xl font-black tracking-widest text-x-neon">
            UBICACION
          </h5>
          <p className="leading-relaxed text-gray-400">
            {contactInfo.address}
            <br />
            {contactInfo.city}
            <br />
            {contactInfo.region}
          </p>
        </div>

        <div>
          <h5 className="mb-6 font-sport text-xl font-black tracking-widest text-x-neon">
            CONTACTO
          </h5>
          <div className="space-y-3 text-gray-400">
            <a
              className="flex items-center gap-3 transition hover:text-x-neon"
              href={`tel:+51${contactInfo.phone.replaceAll(" ", "")}`}
            >
              <ContactIcon type="phone" />
              {contactInfo.phone}
            </a>
            <a
              className="flex items-center gap-3 break-all transition hover:text-x-neon"
              href={`mailto:${contactInfo.email}`}
            >
              <ContactIcon type="email" />
              {contactInfo.email}
            </a>
            <p className="leading-relaxed">
              Lun - Vie: 5:00 AM - 10:00 PM
              <br />
              Sábados: 6:00 AM - 2:00 PM
              <br />
              Domingos: Descanso Xtreme
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-gray-600 md:flex-row">
        <span>
          © 2026 XTREME FITNESS TARAPOTO. TODOS LOS DERECHOS RESERVADOS.
        </span>
        <span className="font-playful text-x-neon/60">
          Entrena fuerte, sin excusas.
        </span>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import { xtremePlans } from '@/data/landing';
import type { PublicPlan } from '@/services/publicWebsite';

export function QuickInfoSection({ plans }: { plans?: PublicPlan[] }) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const featuredPlan = plans?.length ? plans[0] : xtremePlans[0];

  return (
    <section aria-label={`Precios, horarios y ubicación en ${location.city}`} className="border-b border-white/10 bg-black px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 font-playful text-x-neon">Vamos a lo tuyo · {location.city}</p>
        <div className="grid gap-3 md:grid-cols-3">
          <Link className="quick-info-card" href="/planes">
            <span className="quick-info-label">01 / Precios y planes <span aria-hidden="true">↗</span></span>
            <span className="quick-info-value text-x-neon">{featuredPlan.price} <small className="text-xl">{featuredPlan.priceLabel}</small></span>
            <span className="text-small text-copy">Plan {featuredPlan.name}. Compara todas las membresías.</span>
            {locationId === 'pucallpa' ? <span className="text-caption text-copy">Consulta disponibilidad en esta sede.</span> : null}
          </Link>
          <Link className="quick-info-card" href="/planes#horarios-clases">
            <span className="quick-info-label">02 / Horarios <span aria-hidden="true">↗</span></span>
            <span className="quick-info-value">Tu hora de entrenar</span>
            <span className="text-small text-copy">{locationId === 'tarapoto' ? location.hours[0] : 'Consulta los horarios disponibles para Pucallpa.'}</span>
            <span className="text-small text-copy">Ver agenda y clases →</span>
          </Link>
          <Link className="quick-info-card" href="/sedes">
            <span className="quick-info-label">03 / Cómo llegar <span aria-hidden="true">↗</span></span>
            <span className="quick-info-value">Xtreme {location.city}</span>
            <span className="text-small text-copy">{location.address}</span>
            <span className="text-small text-copy">Ver ubicación y contacto →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

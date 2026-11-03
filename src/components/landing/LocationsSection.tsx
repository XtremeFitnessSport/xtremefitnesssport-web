'use client';

import { useGymLocation, type GymLocationId } from '@/context/GymLocationContext';
import { getLocationContent, locationContent } from '@/data/locationContent';
import { ContactIcon } from './ContactIcon';
import { LocationMap } from './LocationMap';
import Link from 'next/link';

export function LocationsSection() {
  const { locationId, setLocationId } = useGymLocation();
  const activeLocation = getLocationContent(locationId);
  const locations = Object.values(locationContent);
  const steps = locationId === 'pucallpa'
    ? ['Abre el pin oficial de Xtreme Fitness Pucallpa.', 'Activa la ruta desde tu ubicación actual.', 'Escríbenos por WhatsApp si necesitas una referencia adicional.']
    : ['Dirígete a la Urb. Los Jardines en Tarapoto.', 'Ubica Las Dalias 140, cuadra 2 Los Olivos.', 'Busca el local de Xtreme Fitness y consulta por tu plan.'];

  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-28" id="sedes">
      <div className="amazon-pattern absolute inset-0 opacity-[0.03]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playful text-x-neon">Cómo llegar</span>
            <h1 className="font-sport font-extrabold uppercase gym-title">
              NUESTRAS <span className="text-x-neon">SEDES</span>
            </h1>
          </div>
          <p className="max-w-xl border-l-2 border-x-neon pl-6 text-copy text-body">
            Elige una sede para ver dirección, referencia, horarios y pasos rápidos para llegar al gimnasio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {locations.map((location) => {
              const isActive = location.id === locationId;

              return (
                <button
                  aria-pressed={isActive}
                  className={`w-full border p-5 text-left transition-all duration-500 sm:p-6 ${
                    isActive
                      ? 'relative z-20 scale-100 border-x-neon bg-white/10 opacity-100 shadow-[0_0_28px_rgba(24,240,0,0.16)] blur-0'
                      : 'relative border-white/20 bg-white/[0.03] hover:border-white/50 hover:bg-white/[0.06]'
                  }`}
                  key={location.id}
                  onClick={() => setLocationId(location.id as GymLocationId)}
                  type="button"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-playful text-x-neon">{location.region}</p>
                    <span className="rounded-full border border-x-neon/30 px-2 py-1 text-caption font-bold tracking-wide text-x-neon">{location.status}</span>
                  </div>
                  <h3 className="font-sport font-extrabold text-white text-card-title">XTREME {location.city.toUpperCase()}</h3>
                  <p className="mt-2 text-copy text-body">{location.cityLine}</p>
                </button>
              );
            })}
          </div>

          <article className="relative overflow-hidden border border-x-neon/40 bg-white/[0.04] p-5 sm:p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-x-neon/10 blur-3xl" />
            <div className="relative">
              <div className="mb-8">
                <p className="font-playful text-x-neon">{activeLocation.region}</p>
                <h3 className="break-words font-sport font-extrabold text-white text-card-title">
                  XTREME {activeLocation.city.toUpperCase()}
                </h3>
                {activeLocation.openingLabel ? <p className="mt-4 inline-block bg-x-neon px-3 py-2 font-sport font-black text-black text-control">{activeLocation.openingLabel}</p> : null}
              </div>

              <div className="mb-8 grid gap-4 md:grid-cols-2">
                <div className="border-l-2 border-x-neon pl-5">
                  <p className="mb-1 font-sport font-extrabold text-white text-control">DIRECCIÓN</p>
                  <p className="text-copy text-body">{activeLocation.address}</p>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="mb-1 font-sport font-extrabold text-white text-control">HORARIO</p>
                  <p className="text-copy text-body">{activeLocation.hours.join(' / ')}</p>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="mb-1 font-sport font-extrabold text-white text-control">TELÉFONO</p>
                  <a
                    className="flex items-center gap-3 text-copy transition hover:text-x-neon"
                    href={`tel:+51${activeLocation.phone.replaceAll(' ', '')}`}
                  >
                    <ContactIcon type="phone" />
                    {activeLocation.phone}
                  </a>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="mb-1 font-sport font-extrabold text-white text-control">CORREO</p>
                  <a className="flex items-center gap-3 break-all text-copy transition hover:text-x-neon" href={`mailto:${activeLocation.email}`}>
                    <ContactIcon type="email" />
                    {activeLocation.email}
                  </a>
                </div>
              </div>

              <div className="mb-10">
                <p className="mb-4 font-sport font-extrabold text-x-neon text-control">RUTA RÁPIDA</p>
                <ol className="space-y-3">
                  {steps.map((step, index) => (
                    <li className="flex gap-3 text-copy" key={step}>
                      <span className="font-sport font-extrabold text-x-neon text-control">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <LocationMap city={activeLocation.city} coordinates={activeLocation.mapCoordinates} mapUrl={activeLocation.mapUrl} />
              <Link href={`/sedes/${activeLocation.id}/`} className="btn-xtreme mt-4 flex w-full justify-center bg-x-neon px-4 py-3 text-center font-sport font-extrabold text-black sm:inline-flex sm:w-auto sm:px-10 text-control">
                CONOCER SEDE
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

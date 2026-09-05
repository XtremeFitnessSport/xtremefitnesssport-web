'use client';

import { useGymLocation, type GymLocationId } from '@/context/GymLocationContext';
import { getLocationContent, locationContent } from '@/data/locationContent';
import { ContactIcon } from './ContactIcon';

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
            <span className="font-playful text-xl text-x-neon sm:text-2xl">Cómo llegar</span>
            <h1 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
              NUESTRAS <span className="text-x-neon">SEDES</span>
            </h1>
          </div>
          <p className="max-w-xl border-l-2 border-x-neon pl-6 text-lg text-gray-400">
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
                    <p className="font-playful text-xl text-x-neon">{location.region}</p>
                    <span className="rounded-full border border-x-neon/30 px-2 py-1 text-[10px] font-black tracking-widest text-x-neon">{location.status}</span>
                  </div>
                  <h3 className="font-sport text-3xl font-extrabold text-white sm:text-4xl">XTREME {location.city.toUpperCase()}</h3>
                  <p className="mt-2 text-sm text-gray-400">{location.cityLine}</p>
                </button>
              );
            })}
          </div>

          <article className="relative overflow-hidden border border-x-neon/40 bg-white/[0.04] p-5 sm:p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-x-neon/10 blur-3xl" />
            <div className="relative">
              <div className="mb-8">
                <p className="font-playful text-xl text-x-neon sm:text-2xl">{activeLocation.region}</p>
                <h3 className="break-words font-sport text-3xl font-extrabold leading-none text-white sm:text-4xl md:text-5xl">
                  XTREME {activeLocation.city.toUpperCase()}
                </h3>
                {activeLocation.openingLabel ? <p className="mt-4 inline-block bg-x-neon px-3 py-2 font-sport text-xl font-black text-black">{activeLocation.openingLabel}</p> : null}
              </div>

              <div className="mb-8 grid gap-4 md:grid-cols-2">
                <div className="border-l-2 border-x-neon pl-5">
                  <p className="mb-1 font-sport text-xl font-extrabold text-white sm:text-2xl">DIRECCIÓN</p>
                  <p className="text-gray-400">{activeLocation.address}</p>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="mb-1 font-sport text-xl font-extrabold text-white sm:text-2xl">HORARIO</p>
                  <p className="text-gray-400">{activeLocation.hours.join(' / ')}</p>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="mb-1 font-sport text-xl font-extrabold text-white sm:text-2xl">TELÉFONO</p>
                  <a
                    className="flex items-center gap-3 text-gray-400 transition hover:text-x-neon"
                    href={`tel:+51${activeLocation.phone.replaceAll(' ', '')}`}
                  >
                    <ContactIcon type="phone" />
                    {activeLocation.phone}
                  </a>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="mb-1 font-sport text-xl font-extrabold text-white sm:text-2xl">CORREO</p>
                  <a className="flex items-center gap-3 break-all text-gray-400 transition hover:text-x-neon" href={`mailto:${activeLocation.email}`}>
                    <ContactIcon type="email" />
                    {activeLocation.email}
                  </a>
                </div>
              </div>

              <div className="mb-10">
                <p className="mb-4 font-sport text-xl font-extrabold text-x-neon sm:text-2xl">RUTA RÁPIDA</p>
                <ol className="space-y-3">
                  {steps.map((step, index) => (
                    <li className="flex gap-3 text-gray-300" key={step}>
                      <span className="font-sport text-xl font-extrabold text-x-neon">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <a
                className="btn-xtreme flex w-full justify-center bg-x-neon px-4 py-3 text-center font-sport text-lg font-extrabold text-black sm:inline-flex sm:w-auto sm:px-10 sm:py-4 sm:text-2xl"
                href={activeLocation.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                ABRIR EN GOOGLE MAPS
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

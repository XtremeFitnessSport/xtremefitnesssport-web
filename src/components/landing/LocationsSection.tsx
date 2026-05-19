'use client';

import { gymLocations } from '@/data/landing';
import { useState } from 'react';
import { ContactIcon } from './ContactIcon';

export function LocationsSection() {
  const [activeLocationId, setActiveLocationId] = useState(gymLocations[0].id);
  const activeLocation = gymLocations.find((location) => location.id === activeLocationId) ?? gymLocations[0];

  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-28" id="sedes">
      <div className="amazon-pattern absolute inset-0 opacity-[0.03]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playful text-xl text-x-neon sm:text-2xl">Cómo llegar</span>
            <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
              NUESTRAS <span className="text-x-neon">SEDES</span>
            </h2>
          </div>
          <p className="max-w-xl border-l-2 border-x-neon pl-6 text-lg text-gray-400">
            Elige una sede para ver dirección, referencia, horarios y pasos rápidos para llegar al gimnasio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {gymLocations.map((location) => {
              const isActive = location.id === activeLocationId;

              return (
                <button
                  aria-pressed={isActive}
                  className={`w-full border p-5 text-left transition-all duration-500 sm:p-6 ${
                    isActive
                      ? 'relative z-20 scale-100 border-x-neon bg-white/10 opacity-100 shadow-[0_0_28px_rgba(24,240,0,0.16)] blur-0'
                      : 'relative z-0 scale-[0.96] border-white/10 bg-white/[0.03] opacity-45 blur-[1px] hover:opacity-80 hover:blur-0'
                  }`}
                  key={location.id}
                  onClick={() => setActiveLocationId(location.id)}
                  type="button"
                >
                  <p className="font-playful text-xl text-x-neon">{location.district}</p>
                  <h3 className="font-sport text-3xl font-extrabold text-white sm:text-4xl">{location.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{location.reference}</p>
                </button>
              );
            })}
          </div>

          <article className="relative overflow-hidden border border-x-neon/40 bg-white/[0.04] p-5 sm:p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-x-neon/10 blur-3xl" />
            <div className="relative">
              <div className="mb-8">
                <p className="font-playful text-xl text-x-neon sm:text-2xl">{activeLocation.district}</p>
                <h3 className="font-sport text-4xl font-extrabold leading-none text-white sm:text-5xl md:text-7xl">
                  {activeLocation.name}
                </h3>
              </div>

              <div className="mb-8 grid gap-4 md:grid-cols-2">
                <div className="border-l-2 border-x-neon pl-5">
                  <p className="mb-1 font-sport text-xl font-extrabold text-white sm:text-2xl">DIRECCIÓN</p>
                  <p className="text-gray-400">{activeLocation.address}</p>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="mb-1 font-sport text-xl font-extrabold text-white sm:text-2xl">HORARIO</p>
                  <p className="text-gray-400">{activeLocation.schedule}</p>
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
                  {activeLocation.steps.map((step, index) => (
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
                className="btn-xtreme inline-flex bg-x-neon px-7 py-3 font-sport text-xl font-extrabold text-black sm:px-10 sm:py-4 sm:text-2xl"
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

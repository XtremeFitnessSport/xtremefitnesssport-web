'use client';

import Link from 'next/link';

import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import { LocationSwitcher } from './LocationSwitcher';

export function FinalCtaSection() {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28 lg:py-32" id="contacto">
      <div className="absolute inset-x-0 top-0 h-2 bg-x-neon" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="mb-8 flex justify-center"><LocationSwitcher /></div>
        <p className="mb-4 font-playful text-xl text-x-neon sm:text-2xl">Contacto · {location.city}</p>
        <h2 className="mb-8 break-words font-sport text-4xl font-black leading-none text-white min-[390px]:text-5xl sm:text-7xl md:text-8xl xl:text-9xl">
          {locationId === 'pucallpa' ? 'PUCALLPA, ES' : 'ACTIVA TU'}
          <br />
          <span className="text-neon">{locationId === 'pucallpa' ? 'TU MOMENTO' : 'MODO XTREME'}</span>
        </h2>
        <p className="mb-10 font-sport text-xl font-black tracking-widest text-gray-400 sm:mb-12 sm:text-2xl">
          {locationId === 'pucallpa' ? 'APERTURA · SÁBADO 1 DE AGOSTO DE 2026' : 'SEMIPERSONALIZADO. INTENSO. HECHO PARA AVANZAR.'}
        </p>

        <div className="mx-auto mb-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.04] p-4">
            <span className="block text-xs font-black uppercase tracking-[0.18em] text-x-neon">Sede elegida</span>
            <span className="mt-1 block font-sport text-2xl font-black">{location.city}, {location.region}</span>
          </div>
          <a className="border border-white/10 bg-white/[0.04] p-4 transition hover:border-x-neon" href={location.mapUrl} rel="noreferrer" target="_blank">
            <span className="block text-xs font-black uppercase tracking-[0.18em] text-x-neon">Cómo llegar</span>
            <span className="mt-1 block font-sport text-2xl font-black">ABRIR GOOGLE MAPS →</span>
          </a>
        </div>

        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <a
            className="btn-skew mx-auto w-[calc(100%-1rem)] border-4 border-x-neon bg-x-neon px-5 py-4 font-sport text-xl font-black text-black shadow-2xl transition hover:scale-105 active:scale-95 sm:mx-0 sm:w-auto sm:px-12 sm:py-6 sm:text-3xl"
            href={`https://wa.me/${location.whatsapp}?text=${encodeURIComponent(`Hola, quiero información sobre Xtreme Fitness ${location.city}.`)}`}
          >
            <span>WHATSAPP DIRECTO</span>
          </a>
          <Link
            className="btn-skew mx-auto w-[calc(100%-1rem)] border-4 border-white px-5 py-4 font-sport text-xl font-black text-white transition hover:bg-white hover:text-black sm:mx-0 sm:w-auto sm:px-12 sm:py-6 sm:text-3xl"
            href="/planes#horarios-clases"
          >
            <span>VER HORARIOS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

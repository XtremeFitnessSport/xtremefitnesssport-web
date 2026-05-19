'use client';

import { useEffect, useState } from 'react';
import { contactInfo } from '@/data/landing';

const promoFeatures = [
  '5 días de entrenamiento semi-personalizado',
  'Asesoría nutricional',
  '2 invitados al mes',
  'Sábados libres de entrenamiento',
];

export function MothersDayPromoDialog() {
  const [isOpen, setIsOpen] = useState(true);
  const whatsappMessage = `Hola Xtreme Fitness, quiero informacion del Plan Premium del mes de mama.

Plan: Premium
Precio: S/200
Incluye:
- 5 dias de entrenamiento semi-personalizado
- Asesoria nutricional
- 2 invitados al mes
- Sabados libres de entrenamiento

Mensaje enviado desde la web.`;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        aria-labelledby="mothers-day-promo-title"
        aria-modal="true"
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto border-2 border-pink-300/80 bg-pink-950 text-white shadow-[0_0_60px_rgba(244,114,182,0.45)]"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Cerrar promoción"
          className="sticky top-3 z-30 ml-auto mr-3 flex h-10 w-10 items-center justify-center border border-white/40 bg-black/80 font-sport text-2xl font-black text-white transition hover:border-pink-300 hover:bg-pink-500 hover:text-black"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>

        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-55 grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/85 via-rose-950/80 to-black/95" />
          <div className="absolute inset-x-0 top-0 h-3 bg-pink-300" />
        </div>

        <div className="relative z-10 grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_0.8fr] md:p-10 lg:p-12">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <span className="mb-4 inline-block bg-white px-4 py-1 font-sport text-sm font-black uppercase tracking-[0.24em] text-pink-700 sm:text-base">
                Mes de mamá
              </span>
              <h2
                className="font-sport text-4xl font-black uppercase leading-[0.9] text-white sm:text-5xl md:text-6xl"
                id="mothers-day-promo-title"
              >
                Entrena diferente.
                <span className="block text-pink-200">Entrena con resultados.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg font-bold leading-tight text-pink-50 sm:text-xl">
                Este mes de mamá aprovecha el{' '}
                <span className="font-sport text-2xl font-black text-white sm:text-3xl">PLAN PREMIUM</span> a solo{' '}
                <span className="font-sport text-4xl font-black text-pink-200 sm:text-5xl">S/200</span>
              </p>
            </div>

            <a
              className="btn-skew w-full border-2 border-white bg-white px-6 py-4 text-center font-sport text-xl font-black uppercase text-pink-700 transition hover:bg-pink-200 hover:text-black sm:w-fit sm:px-9 sm:text-2xl"
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              rel="noreferrer"
              target="_blank"
            >
              <span>Quiero el plan premium</span>
            </a>
          </div>

          <div className="border border-pink-200/50 bg-black/55 p-5 shadow-2xl sm:p-6">
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-pink-300/40 pb-4">
              <div>
                <p className="font-sport text-sm font-black uppercase tracking-[0.24em] text-pink-200">Incluye</p>
                <h3 className="font-sport text-3xl font-black uppercase text-white sm:text-4xl">Premium</h3>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-200">Antes S/250</p>
                <p className="font-sport text-4xl font-black text-pink-300">S/200</p>
              </div>
            </div>

            <ul className="space-y-3">
              {promoFeatures.map((feature) => (
                <li className="flex gap-3 text-base font-bold leading-snug text-white sm:text-lg" key={feature}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-300 font-sport text-sm font-black text-black">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 border-t border-pink-300/40 pt-5">
              <p className="font-sport text-xl font-black uppercase text-white">Xtreme Fitness</p>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-200">
                Cupos limitados. Empieza hoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

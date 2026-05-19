'use client';

import { images } from '@/assets/images';
import { contactInfo } from '@/data/landing';
import Image from 'next/image';
import { useState } from 'react';

const motherPacks = [
  {
    name: '1 mes de gimnasio + creatina',
    price: 'S/200',
  },
  {
    name: '1 mes de gym + 16 batidos de proteína',
    price: 'S/250',
  },
  {
    name: '1 mes de gimnasio + proteína (6.6 lb)',
    price: 'S/330',
  },
];

const motherBenefits = [
  { label: 'Membresías', icon: 'membership' },
  { label: 'Creatina', icon: 'creatine' },
  { label: 'Proteína', icon: 'protein' },
] as const;

type MotherBenefitIcon = (typeof motherBenefits)[number]['icon'];

function BenefitIcon({ icon }: { icon: MotherBenefitIcon }) {
  if (icon === 'membership') {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path d="M4 7.5h16v9H4z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 11h4M8 14h8" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  if (icon === 'creatine') {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path d="M8 6h8l1 3v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 3h6v3H9zM9.5 13h5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M9 3h6l1 4-2 2v11h-4V9L8 7z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 14h4M10 17h4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function buildMotherPackWhatsappHref(pack: (typeof motherPacks)[number]) {
  const message = `🔥 Hola Xtreme Fitness, quiero información del PACK MAMÁ SUPER STRONG.

🎁 Pack elegido: ${pack.name}
💰 Precio: ${pack.price}

Ellas eligen:
✔️ Membresías
✔️ Creatina
✔️ Proteína

⚡ Quiero regalar algo que sí suma a su progreso.
Mensaje enviado desde la web.`;

  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function MothersDayPromoBanner() {
  const [selectedPackName, setSelectedPackName] = useState(motherPacks[0].name);
  const selectedPack = motherPacks.find((pack) => pack.name === selectedPackName) ?? motherPacks[0];
  const whatsappHref = buildMotherPackWhatsappHref(selectedPack);

  return (
    <section className="relative overflow-hidden bg-black pb-5 sm:pb-7" id="promo-mama">
      <div className="w-full">
        <div className="relative overflow-hidden border-y border-pink-300/70 bg-rose-950 shadow-[0_0_42px_rgba(244,114,182,0.28)]">
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center opacity-35 grayscale"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1800&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-rose-800/85 to-pink-600/75" />
            <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/65 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl gap-5 p-4 sm:p-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:p-6">
            <div className="flex flex-col justify-between gap-4">
              <div>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="skew-title bg-pink-200 px-4 py-1 font-sport text-xs font-black uppercase tracking-[0.22em] text-rose-800 sm:text-sm">
                    Mes de mamá
                  </span>
                  <div className="relative h-12 w-12 shrink-0 sm:h-16 sm:w-16">
                    <Image alt="Xtreme Fitness" className="object-contain" fill src={images.logoXtreme} />
                  </div>
                </div>

                <h2 className="font-sport text-3xl font-black uppercase leading-[0.9] text-white min-[390px]:text-4xl sm:text-5xl lg:text-6xl">
                  La mamá fit
                  <span className="block">no quiere flores...</span>
                  <span className="block text-pink-200">quiere resultados</span>
                </h2>

                <div className="mt-4 flex flex-wrap gap-2 text-sm font-black text-white sm:text-base">
                  {motherBenefits.map((item) => (
                    <span
                      className="inline-flex items-center gap-2 border border-pink-200/50 bg-black/25 px-3 py-2 text-pink-50"
                      key={item.label}
                    >
                      <span className="text-pink-200">
                        <BenefitIcon icon={item.icon} />
                      </span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-pink-200/40 bg-black/35 p-3 backdrop-blur-sm sm:p-4">
              <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-sport text-2xl font-black uppercase text-pink-200 sm:text-3xl">
                    Pack mamá super strong
                  </p>
                  <p className="font-sport text-lg font-black italic text-white sm:text-xl">
                    Regálale algo que sí suma a su progreso
                  </p>
                </div>
                <a
                  className="btn-xtreme inline-flex w-full justify-center bg-pink-200 px-5 py-3 text-center font-sport text-base font-black uppercase text-rose-900 sm:w-auto sm:text-lg"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Quiero este pack
                </a>
              </div>

              <div className="grid gap-2 lg:grid-cols-3">
                {motherPacks.map((pack) => {
                  const isSelected = pack.name === selectedPack.name;

                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`flex w-full flex-col items-start justify-between gap-2 border p-3 text-left transition ${
                        isSelected
                          ? 'border-pink-100 bg-pink-200 text-rose-900'
                          : 'border-white/10 bg-black/35 text-white hover:border-pink-200/80 hover:bg-black/55'
                      }`}
                      key={pack.name}
                      onClick={() => setSelectedPackName(pack.name)}
                      type="button"
                    >
                      <span className="text-sm font-black italic leading-tight sm:text-base">{pack.name}</span>
                      <span
                        className={`shrink-0 font-sport text-3xl font-black ${
                          isSelected ? 'text-rose-900' : 'text-pink-200'
                        }`}
                      >
                        {pack.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

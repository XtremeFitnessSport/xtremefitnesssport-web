'use client';

import { images } from '@/assets/images';
import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import { highlights } from '@/data/landing';
import Image from 'next/image';

export function HeroSection() {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const isPucallpa = locationId === 'pucallpa';
  const marquee = ['FUERZA + MÚSCULO', 'SEMIPERSONALIZADO', `XTREME ${location.city.toUpperCase()}`, location.status];

  return (
    <header
      className={`hero-gradient relative overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 lg:flex lg:min-h-[760px] lg:items-center lg:py-28 ${
        isPucallpa ? 'hero-pucallpa' : ''
      }`}
      id="inicio"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${images.heroTexture})` }} />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div aria-hidden="true" className="hero-city-mark">{location.city}</div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="font-playful text-lg text-neon sm:text-xl">{location.eyebrow}</span>
            <span className="rounded-full border border-x-neon/40 bg-x-neon/10 px-3 py-1 font-sport text-[11px] font-black tracking-[0.18em] text-x-neon">
              {location.status}
            </span>
          </div>

          <h1 className="hero-title mb-5 font-sport font-black uppercase leading-[0.82]">
            <span className="block text-white">{location.heroTitle}</span>
            <span className="block text-neon">{location.heroAccent}</span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
            {location.heroDescription}
          </p>

          {isPucallpa ? (
            <div className="hero-opening mx-auto mt-6 grid max-w-xl grid-cols-[76px_minmax(0,1fr)] items-stretch overflow-hidden border-2 border-x-neon bg-black/80 text-left backdrop-blur min-[390px]:grid-cols-[86px_minmax(0,1fr)] sm:grid-cols-[92px_minmax(0,1fr)] lg:mx-0">
              <div className="hero-opening-date flex flex-col items-center justify-center bg-x-neon px-3 py-3 text-black">
                <span className="font-sport text-4xl font-black leading-[0.72] sm:text-5xl">01</span>
                <span className="mt-2 text-xs font-black tracking-[0.28em]">AGO</span>
              </div>
              <div className="relative flex min-w-0 flex-col justify-center overflow-hidden px-3 py-3 min-[390px]:px-4 sm:px-5">
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.16em] text-x-neon min-[390px]:text-xs sm:tracking-[0.24em]">Gran apertura · 2026</span>
                <span className="relative z-10 mt-1 font-sport text-xl font-black leading-none text-white min-[390px]:text-2xl sm:text-4xl">SÁBADO · PUCALLPA</span>
                <span aria-hidden="true" className="absolute -bottom-5 -right-2 font-sport text-6xl font-black text-white/[0.035]">XTREME</span>
              </div>
            </div>
          ) : null}

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a className="btn-skew mx-auto w-[calc(100%-1rem)] bg-neon px-5 py-3.5 font-sport text-lg font-black text-black shadow-[0_0_30px_rgba(24,240,0,0.3)] transition hover:brightness-110 sm:mx-0 sm:w-auto sm:px-9 sm:text-xl" href="#contacto">
              <span>{isPucallpa ? 'QUIERO ESTAR AHÍ' : 'EMPEZAR AHORA'}</span>
            </a>
            <a className="btn-skew mx-auto w-[calc(100%-1rem)] border-2 border-white px-5 py-3.5 font-sport text-lg font-black text-white transition hover:bg-white hover:text-black sm:mx-0 sm:w-auto sm:px-9 sm:text-xl" href={isPucallpa ? '/planes#horarios-clases' : '#programas'}>
              <span>{isPucallpa ? 'VER AGENDA' : 'VER PROGRAMAS'}</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
            {highlights.map((item) => (
              <div className="flex items-center gap-2" key={item}>
                <div className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_#18f000]" />
                <span className="font-sport text-xs tracking-[0.12em] text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-[540px]">
          <div className="tropical-accent absolute -inset-8 opacity-50" />
          <div className="hero-frame relative p-2 sm:p-3">
            <div className="relative h-[230px] w-full overflow-hidden min-[390px]:h-[260px] sm:h-[360px] lg:h-[440px]">
              <Image
                alt={`Entrenamiento Xtreme Fitness ${location.city}`}
                className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                src={images.heroLocal}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-3 right-2 bg-x-neon px-5 py-3 text-black sm:-right-4 sm:px-7 sm:py-4">
              <span className="whitespace-pre-line font-sport text-2xl font-black leading-[0.85] sm:text-3xl">
                {isPucallpa ? 'NUEVA\nSEDE' : 'MODO\nXTREME'}
              </span>
            </div>
            {isPucallpa ? (
              <a className="absolute left-5 top-5 border border-white/20 bg-black/75 px-4 py-2 font-sport text-sm font-black text-white backdrop-blur transition hover:border-x-neon hover:text-x-neon" href={location.mapUrl} rel="noreferrer" target="_blank">
                PIN OFICIAL ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-neon py-2.5 sm:py-3">
        <div className="flex w-max animate-marquee font-sport text-lg font-black text-black sm:text-xl">
          {[...marquee, ...marquee, ...marquee].map((item, index) => (
            <span className="mx-7" key={`${item}-${index}`}>{item}<span className="mx-7">•</span></span>
          ))}
        </div>
      </div>
    </header>
  );
}

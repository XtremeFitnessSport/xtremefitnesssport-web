import { highlights, marqueeItems } from '@/data/landing';
import { images } from '@/assets/images';
import Image from 'next/image';

export function HeroSection() {
  return (
    <header className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden pt-20 sm:pt-24" id="inicio">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${images.heroTexture})` }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 text-center sm:px-6 lg:grid-cols-2 lg:text-left">
        <div>
          <span className="mb-4 block animate-bounce font-playful text-xl text-neon sm:text-2xl">Tarapoto Power</span>
          <h1 className="mb-6 font-sport text-5xl font-black leading-[0.88] sm:text-7xl md:text-8xl xl:text-9xl">
            CONSTRUYE <span className="text-neon">FUERZA.</span>
            <br />
            GANA <span className="text-white">MUSCULO.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl lg:mx-0">
            Entrenamiento semipersonalizado, horarios puntuales y trabajo adaptado a tu perfil. Desde personas
            cotidianas hasta atletas de alto rendimiento.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              className="btn-skew bg-neon px-7 py-4 font-sport text-xl font-black text-black shadow-[0_0_30px_rgba(24,240,0,0.3)] transition hover:brightness-110 sm:px-10 sm:py-5 sm:text-2xl"
              href="#contacto"
            >
              <span>EMPEZAR AHORA</span>
            </a>
            <a
              className="btn-skew border-2 border-white px-7 py-4 font-sport text-xl font-black text-white transition hover:bg-white hover:text-black sm:px-10 sm:py-5 sm:text-2xl"
              href="#programas"
            >
              <span>VER PROGRAMAS</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start">
            {highlights.map((item) => (
              <div className="flex items-center gap-2" key={item}>
                <div className="h-2 w-2 animate-pulse rounded-full bg-neon" />
                <span className="font-sport text-sm tracking-widest text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:block">
          <div className="tropical-accent absolute -inset-10 opacity-30" />
          <div className="relative border-[6px] border-neon/20 p-3 sm:border-[10px] sm:p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                alt="Entrenamiento Xtreme Fitness"
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={images.heroLocal}
              />
            </div>
            <div className="btn-skew absolute -bottom-5 right-2 bg-neon p-4 text-black sm:-right-6 sm:p-6">
              <span className="font-sport text-2xl font-black leading-none sm:text-4xl">
                MODO
                <br />
                XTREME
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-neon py-3 sm:py-4">
        <div className="flex w-max animate-marquee font-sport text-xl font-black text-black sm:text-2xl">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="mx-8" key={`${item}-${index}`}>
              {item}
              <span className="mx-8">•</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

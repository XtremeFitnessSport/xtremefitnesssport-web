import { contactInfo } from '@/data/landing';

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28 lg:py-32" id="contacto">
      <div className="absolute inset-x-0 top-0 h-2 bg-x-neon" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="mb-8 font-sport text-5xl font-black leading-none text-white sm:text-7xl md:text-8xl xl:text-9xl">
          ACTIVA TU
          <br />
          <span className="text-neon">MODO XTREME</span>
        </h2>
        <p className="mb-10 font-sport text-xl font-black tracking-widest text-gray-400 sm:mb-12 sm:text-2xl">
          SEMIPERSONALIZADO. INTENSO. HECHO PARA AVANZAR.
        </p>

        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <a
            className="btn-skew border-4 border-x-neon bg-x-neon px-8 py-4 font-sport text-2xl font-black text-black shadow-2xl transition hover:scale-105 active:scale-95 sm:px-12 sm:py-6 sm:text-3xl"
            href={`https://wa.me/${contactInfo.whatsapp}`}
          >
            <span>WHATSAPP DIRECTO</span>
          </a>
          <a
            className="btn-skew border-4 border-white px-8 py-4 font-sport text-2xl font-black text-white transition hover:bg-white hover:text-black sm:px-12 sm:py-6 sm:text-3xl"
            href="/planes#horarios-clases"
          >
            <span>VER HORARIOS</span>
          </a>
        </div>
      </div>
    </section>
  );
}

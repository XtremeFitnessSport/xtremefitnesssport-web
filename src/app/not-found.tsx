import type { Metadata } from 'next';
import Link from 'next/link';
import { contactInfo } from '@/data/landing';
import { Logo } from '@/components/landing/Logo';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe. Vuelve a Xtreme Fitness Tarapoto.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-24 text-white sm:px-6">
      <div className="absolute inset-x-0 top-0 h-2 bg-x-neon" />
      <div className="amazon-pattern absolute inset-0 opacity-[0.04]" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-x-neon/10 blur-3xl" />

      <section className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-16">
          <Logo />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-playful text-2xl text-x-neon">Ruta fuera de zona</p>
            <h1 className="mt-4 font-sport text-8xl font-black leading-none text-white sm:text-9xl md:text-[11rem]">
              404
            </h1>
          </div>

          <div className="border-l-2 border-x-neon pl-6">
            <h2 className="mb-6 font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl">
              Esta página no está en el circuito.
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              El enlace puede haber cambiado o la ruta no existe. Regresa al inicio para seguir explorando planes,
              horarios, sedes y contacto de Xtreme Fitness Tarapoto.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="btn-skew bg-x-neon px-8 py-4 text-center font-sport text-2xl font-black text-black transition hover:scale-105"
                href="/"
              >
                <span>VOLVER AL INICIO</span>
              </Link>
              <a
                className="btn-skew border-2 border-white px-8 py-4 text-center font-sport text-2xl font-black text-white transition hover:bg-white hover:text-black"
                href={`https://wa.me/${contactInfo.whatsapp}`}
              >
                <span>CONTACTAR</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

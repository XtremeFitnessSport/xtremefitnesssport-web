import { programs } from '@/data/landing';
import Image from 'next/image';

export function ProgramsSection() {
  return (
    <section className="bg-x-black py-20 sm:py-28 lg:py-32" id="programas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-20">
          <h2 className="font-sport text-4xl font-extrabold uppercase sm:text-5xl md:text-7xl">
            ELIGE TU FORMA DE <span className="text-x-neon">BATALLAR</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <article className="group relative h-[360px] overflow-hidden sm:h-[440px] lg:h-[500px]" key={program.title}>
              <Image
                alt={program.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                src={program.image}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t to-transparent ${
                  index % 2 === 0 ? 'from-x-black opacity-80' : 'from-x-dark-green/90'
                }`}
              />
              <div className="absolute bottom-0 p-6 sm:p-8">
                <h4 className="mb-2 font-sport text-2xl font-extrabold sm:text-3xl">{program.title}</h4>
                <p className="mb-4 text-sm text-x-gray">{program.description}</p>
                <a
                  className="border-b border-x-neon font-sport text-lg uppercase tracking-widest text-x-neon transition hover:text-white"
                  href="#contacto"
                >
                  Saber más
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

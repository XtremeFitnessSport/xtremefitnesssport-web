import { coaches } from '@/data/landing';
import Image from 'next/image';

export function CoachesSection() {
  return (
    <section className="bg-x-black px-4 py-20 sm:px-6 sm:py-28" id="coaches">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="font-playful text-x-neon">Guía real</span>
          <h2 className="font-sport font-extrabold uppercase gym-title">
            COACHES <span className="text-x-neon">XTREME</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {coaches.map((coach) => (
            <article className="group relative overflow-hidden border border-white/10 bg-white/[0.03]" key={coach.name}>
              <div className="relative h-[340px] sm:h-[420px]">
                <Image
                  alt={coach.name}
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={coach.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6 sm:p-8">
                <p className="font-playful text-x-neon">{coach.specialty}</p>
                <h3 className="mb-3 font-sport font-extrabold text-white text-image-title">{coach.name}</h3>
                <p className="text-image-copy text-white">{coach.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

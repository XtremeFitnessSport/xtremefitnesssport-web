import { images } from '@/assets/images';
import Image from 'next/image';

const experienceCards = [
  {
    title: 'SIN EXCUSAS',
    image: images.experienceCards.sinExcusas,
    className: 'h-64',
    titleClassName: 'text-4xl text-white',
  },
  {
    title: 'MÁS DISCIPLINA',
    image: images.experienceCards.masDisciplina,
    className: 'h-48',
    titleClassName: 'text-2xl text-white',
  },
  {
    title: 'REAL PROCESS',
    image: images.experienceCards.realProcess,
    className: 'h-48',
    titleClassName: 'text-2xl text-x-neon',
  },
  {
    title: 'ENFOQUE',
    image: images.experienceCards.enfoque,
    className: 'h-64',
    titleClassName: 'text-4xl text-white',
  },
];

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Atleta entrenando en Xtreme Fitness"
          className="h-full w-full object-cover opacity-30 grayscale"
          fill
          sizes="100vw"
          src={images.heroAthlete}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div className="space-y-6">
          <span className="font-playful text-xl text-x-neon sm:text-2xl">Tarapoto Power</span>
          <h2 className="font-sport text-4xl font-extrabold uppercase leading-[0.85] sm:text-6xl md:text-7xl xl:text-8xl">
            ASÍ SE SIENTE
            <br />
            <span className="text-white">ENTRENAR</span>
            <br />
            <span className="text-x-neon">AQUÍ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4 sm:pt-12">
            {experienceCards.slice(0, 2).map((card) => (
              <article className={`group relative overflow-hidden border border-white/20 ${card.className}`} key={card.title}>
                <Image
                  alt={card.title}
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  src={card.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <span className={`font-sport font-extrabold uppercase ${card.titleClassName}`}>{card.title}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="space-y-4">
            {experienceCards.slice(2).map((card) => (
              <article className={`group relative overflow-hidden border border-x-neon/60 ${card.className}`} key={card.title}>
                <Image
                  alt={card.title}
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  src={card.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <span className={`font-sport font-extrabold uppercase ${card.titleClassName}`}>{card.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { fitnessTips } from '@/data/landing';

export function FitnessTipsSection() {
  return (
    <section className="bg-x-black px-4 py-20 sm:px-6 sm:py-28" id="consejos">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playful text-xl text-x-neon sm:text-2xl">Noticias y consejos</span>
            <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
              FITNESS <span className="text-x-neon">XTREME</span>
            </h2>
          </div>
          <p className="max-w-lg border-l-2 border-x-neon pl-6 text-lg text-gray-400">
            Información práctica para entrenar con más criterio, cuidar tu progreso y llegar mejor preparado a cada
            sesión.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {fitnessTips.map((tip) => (
            <article className="border border-white/10 bg-white/[0.03] p-6 transition hover:border-x-neon/60 sm:p-8" key={tip.title}>
              <span className="mb-6 inline-block bg-x-neon px-3 py-1 font-sport text-sm font-black uppercase text-black">
                {tip.tag}
              </span>
              <h3 className="mb-4 font-sport text-2xl font-extrabold uppercase text-white sm:text-3xl">{tip.title}</h3>
              <p className="leading-relaxed text-gray-400">{tip.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { fitnessTips } from '@/data/landing';

export function FitnessTipsSection() {
  return (
    <section className="bg-x-black px-4 py-20 sm:px-6 sm:py-28" id="consejos">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playful text-x-neon">Noticias y consejos</span>
            <h2 className="font-sport font-extrabold uppercase gym-title">
              FITNESS <span className="text-x-neon">XTREME</span>
            </h2>
          </div>
          <p className="max-w-lg border-l-2 border-x-neon pl-6 text-copy text-body">
            Información práctica para entrenar con más criterio, cuidar tu progreso y llegar mejor preparado a cada
            sesión.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {fitnessTips.map((tip) => (
            <article className="border border-white/10 bg-white/[0.03] p-6 transition hover:border-x-neon/60 sm:p-8" key={tip.title}>
              <span className="mb-6 inline-block bg-x-neon px-3 py-1 font-sport text-small font-black uppercase text-black">
                {tip.tag}
              </span>
              <h3 className="mb-4 font-sport font-extrabold uppercase text-white text-card-title">{tip.title}</h3>
              <p className="text-copy text-body">{tip.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

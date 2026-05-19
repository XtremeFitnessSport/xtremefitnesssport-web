import { performancePrograms } from '@/data/landing';

export function PerformanceSection() {
  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="rendimiento">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="font-playful text-xl text-x-neon sm:text-2xl">Perfil individual</span>
          <h2 className="mt-3 font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl">
            ENTRENAMOS SEGUN <span className="text-x-neon">TU NIVEL</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            No todos llegan con el mismo cuerpo, la misma experiencia ni el mismo objetivo. En Xtreme se ajusta la
            carga, el ritmo y el acompañamiento para que el proceso tenga sentido para cada persona.
          </p>
        </div>

        <div className="grid gap-4">
          {performancePrograms.map((program, index) => (
            <article className="neon-border-glow border border-white/10 bg-white/[0.03] p-6 sm:p-8" key={program.title}>
              <div className="mb-4 flex items-center gap-4">
                <span className="font-sport text-5xl font-black text-x-neon/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-sport text-2xl font-extrabold uppercase text-white sm:text-3xl">{program.title}</h3>
              </div>
              <p className="leading-relaxed text-gray-400">{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

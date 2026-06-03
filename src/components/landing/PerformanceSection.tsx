import { performanceAdjustments, performancePrograms } from '@/data/landing';

export function PerformanceSection() {
  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="rendimiento">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="font-playful text-xl text-x-neon sm:text-2xl">Perfil individual</span>
          <h2 className="mt-3 font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl">
            ENTRENAMOS SEGÚN <span className="text-x-neon">TU NIVEL</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            No todos llegan con el mismo cuerpo, experiencia u objetivo. En Xtreme el entrenamiento se adapta a tu
            punto de partida para que avances con técnica, control y un plan que tenga sentido para ti.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-xl">
            {performanceAdjustments.map((item) => (
              <div className="border border-x-neon/30 bg-x-neon/10 p-4" key={item}>
                <span className="mb-2 block h-1 w-10 bg-x-neon" />
                <p className="font-sport text-lg font-extrabold uppercase text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {performancePrograms.map((program, index) => (
            <article
              className="neon-border-glow group relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 transition sm:p-8"
              key={program.title}
            >
              <span className="absolute -right-4 -top-6 font-sport text-8xl font-black text-white/[0.03] transition group-hover:text-x-neon/10 sm:text-9xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative mb-4 flex items-center gap-4">
                <span className="font-sport text-5xl font-black text-x-neon/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-sport text-2xl font-extrabold uppercase text-white sm:text-3xl">{program.title}</h3>
              </div>
              <p className="relative leading-relaxed text-gray-400">{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

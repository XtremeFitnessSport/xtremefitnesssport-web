import { transformations } from '@/data/landing';

export function TransformationsSection() {
  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="resultados">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="font-playful text-xl text-x-neon sm:text-2xl">Antes y después</span>
          <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
            CAMBIOS <span className="text-x-neon">REALES</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {transformations.map((item) => (
            <article className="neon-border-glow overflow-hidden border border-white/10 bg-white/[0.03]" key={item.title}>
              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="bg-white/[0.04] p-5">
                  <p className="mb-3 font-sport text-xl font-extrabold uppercase text-white">Antes</p>
                  <p className="text-sm leading-relaxed text-gray-400">{item.before}</p>
                </div>
                <div className="bg-x-neon p-5 text-black">
                  <p className="mb-3 font-sport text-xl font-extrabold uppercase">Después</p>
                  <p className="text-sm leading-relaxed font-semibold">{item.after}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-sport text-2xl font-extrabold uppercase text-white sm:text-3xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { trainingFeatures } from '@/data/landing';

export function TrainingSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24" id="entrenamiento">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h3 className="mb-2 font-playful text-xl text-neon sm:text-2xl">No es solo un gym</h3>
          <h2 className="font-sport text-4xl font-black leading-none sm:text-6xl md:text-7xl xl:text-8xl">
            NO VIENES SOLO A ENTRENAR.
            <br />
            <span className="text-neon/50">VIENES A SUPERARTE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {trainingFeatures.map((feature, index) => (
            <article
              className={`neon-border-glow group relative overflow-hidden border-l-2 bg-white/5 p-6 transition-all sm:p-10 ${
                index === 1 ? 'border-x-neon' : 'border-x-neon/30'
              }`}
              key={feature.title}
            >
              <div className="absolute -right-4 -top-4 font-sport text-9xl italic text-white/5 transition-colors group-hover:text-x-neon/10">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3
                className={`mb-4 font-sport text-2xl font-extrabold uppercase sm:text-3xl ${
                  index === 1 ? 'text-x-neon' : ''
                }`}
              >
                {feature.title}
              </h3>
              <p className="leading-relaxed text-x-gray">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

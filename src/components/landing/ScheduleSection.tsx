import { classSchedule } from '@/data/landing';

export function ScheduleSection() {
  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="horarios-clases">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playful text-xl text-x-neon sm:text-2xl">Agenda Xtreme</span>
            <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
              HORARIOS Y <span className="text-x-neon">CLASES</span>
            </h2>
          </div>
          <p className="max-w-xl border-l-2 border-x-neon pl-6 text-lg text-gray-400">
            Entrena según tu semana. Cada día tiene un enfoque distinto para trabajar fuerza, cardio, core y resistencia.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {classSchedule.map((item) => (
            <article className="neon-border-glow border border-white/10 bg-white/[0.03] p-6 transition-all" key={item.day}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-sport text-3xl font-extrabold text-white sm:text-4xl">{item.day}</h3>
                <span className="skew-title bg-x-neon px-3 py-1 font-sport text-base font-extrabold text-black sm:px-4 sm:text-lg">
                  {item.intensity}
                </span>
              </div>
              <p className="mb-2 font-sport text-xl font-extrabold text-x-neon sm:text-2xl">{item.focus}</p>
              <p className="text-gray-400">{item.time}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { classSchedule, studentSchedule, weeklyPlanSchedules } from '@/data/landing';

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

        <div className="grid gap-3 md:grid-cols-3">
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

        <div className="mt-4 border border-x-neon/40 bg-x-neon/10 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="skew-title inline-block bg-x-neon px-3 py-1 font-sport text-sm font-black uppercase tracking-[0.2em] text-black">
                {studentSchedule.label}
              </span>
              <h3 className="mt-4 font-sport text-3xl font-extrabold uppercase text-white sm:text-4xl">
                {studentSchedule.title}
              </h3>
              <p className="mt-1 text-gray-400">{studentSchedule.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {studentSchedule.hours.map((hour) => (
                <span
                  className="border border-x-neon/50 bg-black px-4 py-3 text-center font-sport text-xl font-extrabold text-x-neon"
                  key={hour}
                >
                  {hour}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6">
            <span className="font-playful text-xl text-x-neon sm:text-2xl">Distribución semanal</span>
            <h3 className="font-sport text-3xl font-extrabold uppercase text-white sm:text-5xl">
              Enfoque por <span className="text-x-neon">plan</span>
            </h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {weeklyPlanSchedules.map((schedule) => (
              <article className="border border-white/10 bg-white/[0.03] p-5 sm:p-6" key={`${schedule.group}-${schedule.plan}`}>
                <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-sport text-2xl font-extrabold uppercase text-x-neon">{schedule.group}</p>
                    <h4 className="font-sport text-3xl font-extrabold uppercase text-white">{schedule.plan}</h4>
                  </div>
                </div>

                <div className="grid gap-2">
                  {schedule.days.map((item) => {
                    const isRest = item.focus.toLowerCase() === 'descanso';

                    return (
                      <div
                        className={`grid grid-cols-[105px_1fr] items-center gap-3 border px-4 py-3 ${
                          isRest ? 'border-white/10 bg-white/[0.02] text-gray-500' : 'border-x-neon/25 bg-black/35'
                        }`}
                        key={`${schedule.group}-${schedule.plan}-${item.day}`}
                      >
                        <span className="font-sport text-lg font-extrabold uppercase text-white">{item.day}</span>
                        <span className={`font-bold ${isRest ? 'text-gray-500' : 'text-gray-300'}`}>{item.focus}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

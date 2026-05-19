import { coachEducation } from '@/data/landing';

export function CoachEducationSection() {
  return (
    <section className="bg-x-black px-4 py-20 sm:px-6 sm:py-28" id="capacitaciones">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <span className="font-playful text-xl text-x-neon sm:text-2xl">Formación Xtreme</span>
          <h2 className="mt-3 font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl">
            CAPACITACION DE <span className="text-x-neon">COACHES</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Fernando dirige la formación interna para que el equipo sostenga una misma línea de entrenamiento,
            corrección técnica y acompañamiento al alumno.
          </p>
        </div>

        <div className="border-l-2 border-x-neon pl-6 sm:pl-10">
          {coachEducation.map((item) => (
            <div className="border-b border-white/10 py-6 last:border-b-0" key={item}>
              <p className="font-sport text-2xl font-extrabold uppercase text-white sm:text-3xl">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { classSchedule, studentSchedule, weeklyPlanSchedules } from '@/data/landing';
import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import type {
  ClassScheduleItem,
  StudentSchedule,
  WeeklyPlanSchedule,
} from '@/services/publicWebsite';
import { LocationSwitcher } from './LocationSwitcher';

type ScheduleSectionProps = {
  classItems?: ClassScheduleItem[];
  student?: StudentSchedule;
  weeklySchedules?: WeeklyPlanSchedule[];
};

export function ScheduleSection({ classItems, student, weeklySchedules }: ScheduleSectionProps) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const pucallpaLaunchSchedule = [
    { id: 'opening', day: 'SÁB 01 AGO', focus: 'Gran apertura Pucallpa', time: 'Confirma la hora por WhatsApp', intensity: 'APERTURA' },
    { id: 'weekday', day: 'LUN – VIE', focus: 'Horario regular', time: 'Programación disponible en la sede', intensity: 'PRÓXIMO' },
    { id: 'saturday', day: 'SÁBADOS', focus: 'Entrenamiento Xtreme', time: 'Agenda sujeta a confirmación', intensity: 'PRÓXIMO' },
  ];
  const availableClassSchedule = locationId === 'pucallpa'
    ? pucallpaLaunchSchedule
    : (classItems && classItems.length > 0 ? classItems : classSchedule);
  const availableStudentSchedule = student ?? studentSchedule;
  const availableWeeklySchedules = weeklySchedules && weeklySchedules.length > 0 ? weeklySchedules : weeklyPlanSchedules;

  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="horarios-clases">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playful text-xl text-x-neon sm:text-2xl">Agenda Xtreme · {location.city}</span>
            <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
              HORARIOS Y <span className="text-x-neon">CLASES</span>
            </h2>
          </div>
          <div className="flex max-w-xl flex-col items-start gap-5">
            <p className="border-l-2 border-x-neon pl-6 text-lg text-gray-400">
              {locationId === 'pucallpa'
                ? 'La agenda de la nueva sede se está activando. Te mostramos la información confirmada y actualizaremos los bloques regulares aquí.'
                : 'Entrena según tu semana. Cada día tiene un enfoque distinto para desarrollar fuerza, músculo y resistencia.'}
            </p>
            <LocationSwitcher />
          </div>
        </div>

        <div className="mb-8 grid gap-4 border border-x-neon/40 bg-x-neon/5 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="font-sport text-2xl font-black text-x-neon">Horario de atención · {location.city}</h3>
            {locationId === 'tarapoto' ? (
              <ul className="mt-3 space-y-2 text-base text-white">
                {location.hours.map((hour) => <li key={hour}>{hour}</li>)}
              </ul>
            ) : <p className="mt-3 text-gray-300">Los horarios regulares de Pucallpa están pendientes de confirmación. Consulta antes de tu visita.</p>}
          </div>
          <a className="btn-skew bg-x-neon px-5 py-3 font-sport text-lg font-black text-black" href={`https://wa.me/${location.whatsapp}?text=${encodeURIComponent(`Hola, quiero confirmar los horarios de Xtreme Fitness ${location.city}.`)}`}>
            <span>Consultar horario ↗</span>
          </a>
        </div>

        {location.openingLabel ? (
          <div className="mb-8 overflow-hidden border border-x-neon bg-x-neon text-black">
            <div className="grid items-center gap-4 px-5 py-5 sm:grid-cols-[1fr_auto] sm:px-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.22em]">Nueva sede Xtreme Fitness</span>
                <p className="break-words font-sport text-2xl font-black uppercase leading-none min-[390px]:text-3xl sm:text-5xl">{location.openingLabel}</p>
              </div>
              <a className="w-full bg-black px-4 py-3 text-center font-sport text-lg font-black text-white transition hover:scale-105 sm:w-auto sm:px-6 sm:text-xl" href={location.mapUrl} rel="noreferrer" target="_blank">VER UBICACIÓN →</a>
            </div>
          </div>
        ) : null}

        <div className="grid gap-3 md:grid-cols-3">
          {availableClassSchedule.map((item) => (
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

        {locationId === 'tarapoto' ? <div className="mt-4 border border-x-neon/40 bg-x-neon/10 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="skew-title inline-block bg-x-neon px-3 py-1 font-sport text-sm font-black uppercase tracking-[0.2em] text-black">
                {availableStudentSchedule.label}
              </span>
              <h3 className="mt-4 font-sport text-3xl font-extrabold uppercase text-white sm:text-4xl">
                {availableStudentSchedule.title}
              </h3>
              <p className="mt-1 text-gray-400">{availableStudentSchedule.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {availableStudentSchedule.hours.map((hour) => (
                <span
                  className="border border-x-neon/50 bg-black px-4 py-3 text-center font-sport text-xl font-extrabold text-x-neon"
                  key={hour}
                >
                  {hour}
                </span>
              ))}
            </div>
          </div>
        </div> : (
          <div className="mt-4 grid gap-5 border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1fr_auto] md:items-center sm:p-8">
            <div>
              <p className="font-sport text-3xl font-black uppercase text-white sm:text-4xl">¿Quieres recibir el horario apenas se publique?</p>
              <p className="mt-2 max-w-2xl text-gray-400">Escríbenos indicando “Pucallpa” y te enviaremos los bloques, planes y disponibilidad de la nueva sede.</p>
            </div>
            <a className="btn-skew bg-x-neon px-7 py-4 text-center font-sport text-xl font-black text-black" href={`https://wa.me/${location.whatsapp}?text=${encodeURIComponent('Hola, quiero recibir los horarios de Xtreme Fitness Pucallpa.')}`}><span>PEDIR HORARIOS</span></a>
          </div>
        )}

        {locationId === 'tarapoto' ? <div className="mt-12">
          <div className="mb-6">
            <span className="font-playful text-xl text-x-neon sm:text-2xl">Distribución semanal</span>
            <h3 className="font-sport text-3xl font-extrabold uppercase text-white sm:text-5xl">
              Enfoque por <span className="text-x-neon">plan</span>
            </h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {availableWeeklySchedules.map((schedule) => (
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
                        className={`grid grid-cols-[82px_minmax(0,1fr)] items-center gap-3 border px-3 py-3 min-[390px]:grid-cols-[105px_minmax(0,1fr)] min-[390px]:px-4 ${
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
        </div> : null}
      </div>
    </section>
  );
}

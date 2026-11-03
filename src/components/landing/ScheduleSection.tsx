"use client";

import Link from "next/link";
import { studentSchedule, weeklyPlanSchedules, classSchedule, xtremePlans } from "@/data/landing";
import type { PlanSelection } from "@/data/training";
import { useGymLocation } from "@/context/GymLocationContext";
import { whatsappHref } from "@/lib/whatsapp";
import type { ClassScheduleItem, StudentSchedule, WeeklyPlanSchedule, PublicPlan } from "@/services/publicWebsite";
import { WhatsappIcon } from "./ContactActions";
import { WeeklySchedule } from "./WeeklySchedule";

type Props = {
  classItems?: ClassScheduleItem[];
  student?: StudentSchedule | null;
  weeklySchedules?: WeeklyPlanSchedule[];
  overview?: boolean;
  plans?: PublicPlan[];
  selection?: PlanSelection;
  onSelectionChange?: (selection: PlanSelection) => void;
};

export function ScheduleSection({ classItems, student, weeklySchedules, overview = false, plans, selection, onSelectionChange }: Props) {
  const { locationId } = useGymLocation();
  const students = student ?? studentSchedule;
  const weekly = weeklySchedules?.length ? weeklySchedules : weeklyPlanSchedules;
  const schedule = classItems?.length ? classItems : classSchedule;
  const message = whatsappHref(locationId, [
    "Quiero confirmar un horario para entrenar.",
    "Mi nivel y objetivo: por definir con el coach.",
    "¿Qué turnos tienen disponibles y cómo se organiza la asistencia según el plan?",
  ]);

  return (
    <section id="horarios-clases" className="gym-section schedule-section" aria-labelledby="schedule-title">
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="font-playful section-handwriting">Entrena cuando va contigo</p>
            <h2 id="schedule-title" className="gym-title">TU HORA DE <span className="text-x-neon">ENTRENAR.</span></h2>
          </div>
          <p className="section-description">Tu plan, tu día y tu entrenamiento. Ubica tu bloque y conoce el enfoque de cada sesión.</p>
        </div>
        {overview ? (
          <div className="border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <p className="mb-4 text-copy text-body">Horario de atención de referencia · Tarapoto</p>
            <dl className="grid gap-4 sm:grid-cols-2">
              {schedule.slice(0, 2).map((item) => (
                <div key={item.day} className="border-l-2 border-x-neon pl-4">
                  <dt className="text-small text-copy">{item.day}</dt>
                  <dd className="mt-1 font-sport text-xl text-white sm:text-2xl">{item.time}</dd>
                </div>
              ))}
            </dl>
            <div className="schedule-overview-bottom">
              <p className="section-note">Descubre la distribución semanal y los bloques para estudiantes.</p>
              <Link href="/planes/#horarios-clases" className="gym-button schedule-cta">VER HORARIO COMPLETO <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        ) : (
          <>
            <WeeklySchedule items={weekly} locationId={locationId} openingHours={schedule} studentHours={students.hours} plans={plans?.length ? plans : xtremePlans} selection={selection} onSelectionChange={onSelectionChange} />
            <div className="schedule-full-details">
              <a className="gym-button schedule-cta mt-5" href={message}><WhatsappIcon /> CONSULTAR MI TURNO <span aria-hidden="true">↗</span></a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

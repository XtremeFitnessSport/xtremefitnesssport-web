"use client";

import {
  studentSchedule,
  weeklyPlanSchedules,
  classSchedule,
} from "@/data/landing";
import { useGymLocation } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";
import { whatsappHref } from "@/lib/whatsapp";
import type {
  ClassScheduleItem,
  StudentSchedule,
  WeeklyPlanSchedule,
} from "@/services/publicWebsite";
import { WhatsappIcon } from "./ContactActions";

type Props = {
  classItems?: ClassScheduleItem[];
  student?: StudentSchedule;
  weeklySchedules?: WeeklyPlanSchedule[];
};

export function ScheduleSection({
  classItems,
  student,
  weeklySchedules,
}: Props) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const students = student ?? studentSchedule;
  const weekly = weeklySchedules?.length
    ? weeklySchedules
    : weeklyPlanSchedules;
  const schedule = classItems?.length ? classItems : classSchedule;
  const message = whatsappHref(locationId, [
    "Quiero confirmar un horario para entrenar.",
    "Mi nivel y objetivo: por definir con el coach.",
    "¿Qué turnos tienen disponibles y cómo se organiza la asistencia según el plan?",
  ]);
  return (
    <section
      id="horarios-clases"
      className="gym-section schedule-section"
      aria-labelledby="schedule-title"
    >
      <div className="gym-shell schedule-layout">
        <div data-reveal>
          <p className="font-playful section-handwriting">
            Entrena cuando va contigo
          </p>
          <h2 id="schedule-title" className="gym-title">
            TU HORA DE <span className="text-x-neon">ENTRENAR.</span>
          </h2>
          <p className="section-description mt-5">
            Horarios de {location.city}. Confirma tu turno con el equipo.
          </p>
        </div>
        <div className="schedule-board" data-reveal>
          <div className="schedule-board-header">
            <h3 className="font-sport">HORARIOS / {location.city}</h3>
            <span className="status-dot" aria-hidden="true" />
          </div>
          {locationId === "tarapoto" ? (
            <dl className="hours-list">
              {schedule.map((item) => (
                <div key={item.day}>
                  <dt>{item.day}</dt>
                  <dd>{item.time}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="hours-pending">
              <p className="font-sport">ENCUENTRA TU TURNO.</p>
              <p>
                Consulta los horarios disponibles de Pucallpa con nuestro
                equipo.
              </p>
            </div>
          )}
          <a className="gym-button schedule-cta" href={message}>
            <WhatsappIcon /> CONSULTAR MI TURNO{" "}
            <span aria-hidden="true">↗</span>
          </a>
          {locationId === "tarapoto" && (
            <details className="schedule-details">
              <summary>
                Estudiantes y distribución semanal{" "}
                <span aria-hidden="true">+</span>
              </summary>
              <div>
                <h4>{students.title}</h4>
                <p>{students.description}</p>
                <p className="mt-2">{students.hours.join(" · ")}</p>
                {weekly.map((item) => (
                  <div className="weekly-row" key={item.group + item.plan}>
                    <h4>
                      {item.group} / {item.plan}
                    </h4>
                    <p>
                      {item.days
                        .map((day) => day.day + ": " + day.focus)
                        .join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </div>
    </section>
  );
}

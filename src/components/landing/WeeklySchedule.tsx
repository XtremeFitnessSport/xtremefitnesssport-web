"use client";

import { useState } from "react";
import type { ClassScheduleItem, WeeklyPlanSchedule, TrainingPlan } from "@/services/publicWebsite";
import type { PlanSelection } from "@/data/training";
import type { GymLocationId } from "@/context/GymLocationContext";

type Schedule = Pick<WeeklyPlanSchedule, "group" | "plan" | "days">;
type Props = {
  items: Schedule[];
  locationId: GymLocationId;
  openingHours: Pick<ClassScheduleItem, "day" | "time">[];
  studentHours: string[];
  plans: Pick<TrainingPlan, "id" | "name" | "frequency" | "days">[];
  selection?: PlanSelection;
  onSelectionChange?: (selection: PlanSelection) => void;
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

export function WeeklySchedule({ items, locationId, openingHours, studentHours, plans, selection, onSelectionChange }: Props) {
  const [selectedPlanId, setSelectedPlanId] = useState(plans[0]?.id);
  const activePlan = plans.find((plan) => plan.id === (selection?.planId ?? selectedPlanId)) ?? plans[0];
  const rows = activePlan ? items.filter((item) => normalize(item.plan).replace(/^plan\s+/, "").split(/\s+y\s+/).includes(normalize(activePlan.name))) : [];
  const days = [...new Map(rows.flatMap((item) => item.days.map((day) => [normalize(day.day), day.day] as const))).entries()];
  const hasFreeSaturday = activePlan && normalize(activePlan.days).includes("sabado");
  if (hasFreeSaturday && !days.some(([key]) => key === "sabado")) days.push(["sabado", "Sábado"]);

  return (
    <div className="weekly-schedule" aria-label="Agenda semanal de entrenamiento">
      <div className="weekly-schedule-header">
        <div>
          <h3 className="font-sport">TU SEMANA, DE UN VISTAZO.</h3>
          <p>Elige tu plan y encuentra qué te toca entrenar. Hombres y mujeres pueden coincidir en el mismo horario.</p>
        </div>
        <ul className="weekly-legend" aria-label="Colores de la agenda">
          <li className="weekly-women">Mujeres</li>
          <li className="weekly-men">Hombres</li>
          <li className="weekly-rest-legend">Descanso</li>
        </ul>
      </div>

      {activePlan ? (
        <>
          <div className="weekly-plan-selector" role="group" aria-label="Plan de la agenda semanal">
            {plans.map((plan) => (
              <button key={plan.id} type="button" className="font-sport" aria-pressed={plan.id === activePlan.id} aria-controls="weekly-calendar" onClick={() => {
                setSelectedPlanId(plan.id);
                onSelectionChange?.({ planId: plan.id, membershipPeriod: selection?.planId === plan.id ? selection.membershipPeriod : undefined });
              }}>{plan.name}</button>
            ))}
          </div>
          <div className="weekly-selection-summary" aria-live="polite">
            <strong className="font-sport">{activePlan.name}</strong>
            <span>{activePlan.frequency}</span>
            <span>Membresía: {selection?.planId === activePlan.id && selection.membershipPeriod ? selection.membershipPeriod : "Mensual"}</span>
          </div>
          <div className="weekly-hours">
            <div>
              <h4 className="font-sport">HORAS DE ATENCIÓN · TARAPOTO</h4>
              <dl>{openingHours.map((item) => <div key={item.day}><dt>{item.day}</dt><dd>{item.time}</dd></div>)}</dl>
            </div>
            <div>
              <h4 className="font-sport">BLOQUES DE ESTUDIANTES · TARAPOTO</h4>
              <ul>{studentHours.map((hour) => <li key={hour}>{hour}</li>)}</ul>
            </div>
          </div>
          <p className="weekly-location-note">
            {locationId === "pucallpa" ? "Distribución y horas de referencia de Tarapoto. Confirma la programación de Pucallpa con el equipo." : "Distribución semanal de Tarapoto. Los colores distinguen grupos de entrenamiento; no separan las horas de asistencia."}
          </p>
          <div id="weekly-calendar" role="region" aria-label={`Entrenamientos de ${activePlan.name}`}>
            <p className="sr-only" role="status">Mostrando la programación de {activePlan.name}.</p>
            <ol className="weekly-days">
              {days.map(([dayKey, dayLabel]) => {
                return <li className="weekly-day" key={dayKey}>
                  <div className="weekly-day-heading">
                    <h4 className="weekly-day-label font-sport">{dayLabel}</h4>
                  </div>
                  {rows.map((row) => {
                    const day = row.days.find((item) => normalize(item.day) === dayKey) ?? (dayKey === "sabado" && hasFreeSaturday ? { day: dayLabel, focus: "Asistencia libre" } : undefined);
                    const focus = normalize(day?.focus ?? "");
                    const tone = normalize(row.group).includes("mujer") ? "weekly-women" : normalize(row.group).includes("hombre") ? "weekly-men" : "weekly-neutral";
                    const isRest = focus === "descanso";
                    return (
                      <article className={`weekly-session ${tone}${isRest ? " weekly-session-rest" : ""}`} key={row.group}>
                        <p className="weekly-session-group">{row.group}</p>
                        <div className="weekly-session-focus">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                            <path d={isRest ? "M20 14a8 8 0 0 1-10-10 9 9 0 1 0 10 10Z" : "M7 5v14m10-14v14M4 8v8m16-8v8M7 12h10"} />
                          </svg>
                          <h5 className="font-sport">{day?.focus ?? "Por confirmar"}</h5>
                        </div>
                      </article>
                    );
                  })}
                </li>;
              })}
            </ol>
            {rows.length === 0 && <p className="section-note">La distribución de este plan se confirma con el equipo.</p>}
          </div>
        </>
      ) : <p className="section-description">Consulta la distribución de tus sesiones con el equipo.</p>}
      <p className="weekly-schedule-note">El horario general y los bloques de estudiantes son compartidos. La duración de la membresía mantiene la frecuencia del plan. El coach adapta ejercicios, cargas e intensidad a tu nivel.</p>
    </div>
  );
}

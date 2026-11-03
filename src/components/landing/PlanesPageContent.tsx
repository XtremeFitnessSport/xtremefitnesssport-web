"use client";

import Link from "next/link";
import { useState } from "react";
import type { PlanSelection } from "@/data/training";
import { usePublicWebsiteData } from "@/hooks/usePublicWebsiteData";
import { PlansSection } from "./PlansSection";
import { ScheduleSection } from "./ScheduleSection";

export function PlanesPageContent() {
  const { data } = usePublicWebsiteData();
  const [selection, setSelection] = useState<PlanSelection>();
  return (
    <main id="contenido" className="page-content">
      <nav aria-label="Accesos a precios y horarios" className="gym-shell plans-page-nav">
        <Link href="#planes"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5h16v14H4V5Zm0 5h16m-11 4h6" /></svg><span className="font-sport">Precios y planes</span><span aria-hidden="true">↓</span></Link>
        <Link href="#horarios-clases"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></svg><span className="font-sport">Horarios</span><span aria-hidden="true">↓</span></Link>
        <Link href="/sedes/"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></svg><span className="font-sport">Cómo llegar</span><span aria-hidden="true">↗</span></Link>
      </nav>
      <PlansSection plans={data?.plans} campaign={data?.activeCampaign} selection={selection} onSelectionChange={setSelection} />
      <ScheduleSection
        classItems={data?.classSchedule}
        student={data?.studentSchedule}
        weeklySchedules={data?.weeklySchedules}
        plans={data?.plans}
        selection={selection}
        onSelectionChange={setSelection}
      />
    </main>
  );
}

"use client";

import { usePublicWebsiteData } from "@/hooks/usePublicWebsiteData";
import { PlansSection } from "./PlansSection";
import { ScheduleSection } from "./ScheduleSection";

export function PlanesPageContent() {
  const { data } = usePublicWebsiteData();
  return (
    <main id="contenido" className="page-content">
      <PlansSection plans={data?.plans} campaign={data?.activeCampaign} />
      <ScheduleSection
        classItems={data?.classSchedule}
        student={data?.studentSchedule}
        weeklySchedules={data?.weeklySchedules}
      />
    </main>
  );
}

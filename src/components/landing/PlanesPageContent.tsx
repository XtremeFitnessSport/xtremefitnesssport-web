'use client';

import Link from 'next/link';
import { usePublicWebsiteData } from '@/hooks/usePublicWebsiteData';
import { FinalCtaSection } from './FinalCtaSection';
import { PlansSection } from './PlansSection';
import { ScheduleSection } from './ScheduleSection';
import { PromoCampaignBanner } from './PromoCampaignBanner';

export function PlanesPageContent() {
  const { data } = usePublicWebsiteData();

  return (
    <>
      <main className="bg-x-black page-content">
        <nav aria-label="Accesos a precios y horarios" className="mx-auto flex max-w-7xl flex-wrap gap-x-6 border-b border-white/10 px-4 py-3 sm:px-6">
          <Link className="quick-text-link" href="#planes">01 · Precios y planes ↓</Link>
          <Link className="quick-text-link" href="#horarios-clases">02 · Horarios ↓</Link>
          <Link className="quick-text-link" href="/sedes">03 · Cómo llegar ↗</Link>
        </nav>
        {data?.activeCampaign?.active ? (
          <PromoCampaignBanner campaign={data.activeCampaign} packs={data.promoPacks} />
        ) : null}
        <PlansSection campaign={data?.activeCampaign} plans={data?.plans} />
        <ScheduleSection
          classItems={data?.classSchedule}
          student={data?.studentSchedule}
          weeklySchedules={data?.weeklySchedules}
        />
        <FinalCtaSection />
      </main>
    </>
  );
}

'use client';

import { usePublicWebsiteData } from '@/hooks/usePublicWebsiteData';
import { FinalCtaSection } from './FinalCtaSection';
import { PlansSection } from './PlansSection';
import { ScheduleSection } from './ScheduleSection';
import { PromoCampaignBanner } from './PromoCampaignBanner';

export function PlanesPageContent() {
  const { data } = usePublicWebsiteData();

  return (
    <>
      <main className="bg-x-black pt-16 sm:pt-20">
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

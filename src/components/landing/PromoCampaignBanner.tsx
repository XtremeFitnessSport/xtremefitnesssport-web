'use client';

import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import type { PromoCampaign, PromoPack } from '@/services/publicWebsite';

type PromoCampaignBannerProps = {
  campaign: PromoCampaign;
  packs: PromoPack[];
};

export function PromoCampaignBanner({ campaign, packs }: PromoCampaignBannerProps) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);

  if (!campaign.active) return null;

  const campaignPacks = packs.filter((pack) => pack.campaignId === campaign.id && pack.visible);
  const whatsappText = `Hola, quiero información sobre la promoción “${campaign.title}” en la sede de ${location.city}.`;

  return (
    <section className="relative overflow-hidden border-y border-x-neon/50 bg-x-neon/[0.07] px-4 py-10 sm:px-6" id="promocion-activa">
      <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-x-neon/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="inline-flex bg-x-neon px-4 py-1 font-sport text-sm font-black uppercase tracking-[0.2em] text-black">
            Promoción activa
          </span>
          <h2 className="mt-4 font-sport text-4xl font-black uppercase leading-none text-white sm:text-6xl">
            {campaign.title}
          </h2>
          <p className="mt-2 font-sport text-2xl font-black text-x-neon sm:text-3xl">{campaign.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">{campaign.description}</p>
        </div>
        <a
          className="btn-skew mx-auto inline-flex w-[calc(100%-1rem)] justify-center bg-x-neon px-5 py-4 text-center font-sport text-lg font-black text-black sm:mx-0 sm:w-auto sm:px-8 sm:text-2xl"
          href={`https://wa.me/${location.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
          rel="noreferrer"
          target="_blank"
        >
          <span>{campaign.cta || 'QUIERO LA PROMOCIÓN'}</span>
        </a>
      </div>

      {campaignPacks.length > 0 ? (
        <div className="relative mx-auto mt-7 grid max-w-7xl gap-3 md:grid-cols-3">
          {campaignPacks.map((pack) => (
            <article className="border border-white/10 bg-black/55 p-5" key={pack.id}>
              <p className="font-sport text-2xl font-black uppercase text-white">{pack.name}</p>
              <p className="mt-2 text-sm text-gray-400">{pack.description}</p>
              <p className="mt-4 font-sport text-4xl font-black text-x-neon">{pack.price}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

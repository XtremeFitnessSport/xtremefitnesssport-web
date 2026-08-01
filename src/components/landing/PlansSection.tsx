'use client';

import { contactInfo, xtremePlans } from '@/data/landing';
import type { MembershipOption as PublicMembershipOption, PromoCampaign, PublicPlan } from '@/services/publicWebsite';
import { useRef, useState } from 'react';

type XtremePlan = (typeof xtremePlans)[number];
type LocalMembershipOption = {
  period: string;
  price: string;
  isBase?: boolean;
};
type Plan = XtremePlan | PublicPlan;
type MembershipOption = LocalMembershipOption | (PublicMembershipOption & { isBase?: boolean });

function getPlanFeatures(plan: Plan) {
  return 'benefits' in plan ? plan.benefits : plan.features;
}

function getPlanPromotions(plan: Plan): MembershipOption[] {
  return 'membershipOptions' in plan ? plan.membershipOptions : plan.promotions;
}

function getPromotionLabel(membership: MembershipOption) {
  return 'kind' in membership && membership.kind === 'beneficio' ? 'Beneficio' : membership.isBase ? 'Mensualidad' : 'Promoción';
}

function getMembershipOptions(plan: Plan): MembershipOption[] {
  if ('membershipOptions' in plan && plan.membershipOptions.length > 0) {
    return plan.membershipOptions.map((membership) => ({
      ...membership,
      isBase: membership.kind === 'mensualidad',
    }));
  }

  const promoMemberships = 'promotions' in plan ? plan.promotions.filter((promotion) => promotion.price.startsWith('S/')) : [];

  return [{ period: '1 mes', price: `${plan.price} ${plan.priceLabel}`, isBase: true }, ...promoMemberships];
}

function buildPlanWhatsappHref(plan: Plan, membership: MembershipOption, showCampaignPrice: boolean) {
  const features = getPlanFeatures(plan)
    .map((feature) => `✔️ ${feature}`)
    .join('\n');
  const promotions = getPlanPromotions(plan)
    .map((promotion) => `• ${promotion.period}: ${promotion.price}`)
    .join('\n');
  const previousPrice = showCampaignPrice && plan.previousPrice ? `\n💥 Antes: ${plan.previousPrice}` : '';
  const promotionsTitle = 'promotionsTitle' in plan ? plan.promotionsTitle : 'Opciones de membresía';
  const message = `🔥 Hola Xtreme Fitness, quiero información del PLAN ${plan.name}.

📌 Plan elegido: ${plan.name}
💰 Precio: ${plan.price} ${plan.priceLabel}${previousPrice}
🎟️ Membresía elegida: ${membership.period} - ${membership.price}
🗓️ Frecuencia: ${plan.frequency}
📍 Días: ${plan.days}

Incluye:
${features}

${promotionsTitle}:
${promotions}

⚡ Quiero empezar con este plan.
Mensaje enviado desde la web.`;

  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

type PlansSectionProps = {
  plans?: PublicPlan[];
  campaign?: PromoCampaign;
};

export function PlansSection({ plans, campaign }: PlansSectionProps) {
  const hasActiveCampaign = campaign?.active === true;
  const availablePlans: Plan[] = plans && plans.length > 0 ? plans : xtremePlans;
  const [selectedPlanId, setSelectedPlanId] = useState(availablePlans[0].id);
  const [selectedMemberships, setSelectedMemberships] = useState<Record<string, string>>({});
  const detailRef = useRef<HTMLElement>(null);
  const activePlanId = availablePlans.some((plan) => plan.id === selectedPlanId) ? selectedPlanId : availablePlans[0].id;
  const activePlan = availablePlans.find((plan) => plan.id === activePlanId) ?? availablePlans[0];
  const isWhiteBar = activePlan.id === 'super-strong';
  const membershipOptions = getMembershipOptions(activePlan);
  const selectedMembershipPeriod = selectedMemberships[activePlan.id] ?? membershipOptions[0].period;
  const selectedMembership =
    membershipOptions.find((membership) => membership.period === selectedMembershipPeriod) ?? membershipOptions[0];
  const planWhatsappHref = buildPlanWhatsappHref(activePlan, selectedMembership, hasActiveCampaign);

  function handlePlanSelect(planId: string) {
    setSelectedPlanId(planId);

    if (window.matchMedia('(max-width: 1023px)').matches) {
      window.setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }

  return (
    <section className="relative overflow-hidden bg-x-black py-16 sm:py-24 lg:py-28 xl:py-32" id="planes">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-x-black via-x-black/80 to-x-black" />
      <div className="amazon-pattern absolute inset-0 opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-9 text-center sm:mb-12 lg:mb-16">
          <p className="font-playful text-lg text-x-neon sm:text-2xl">Este mes no hay excusas</p>
          <h2 className="font-sport text-4xl font-extrabold leading-none text-white min-[390px]:text-5xl sm:text-7xl md:text-8xl">
            PLANES DE ENTRENAMIENTO
          </h2>
          <div className="mx-auto mt-2 flex max-w-xl items-center justify-center gap-2 sm:gap-3">
            <div className="h-5 flex-1 skew-title bg-x-neon sm:h-8" />
            <span className="skew-title bg-x-neon px-5 py-1 font-sport text-2xl font-extrabold text-black sm:px-8 sm:text-4xl">
              XTREME
            </span>
            <div className="h-5 flex-1 skew-title bg-x-neon sm:h-8" />
          </div>
        </div>

        <div className="grid items-start gap-8">
          <aside aria-label="Selecciona un plan" className="grid gap-3 min-[520px]:grid-cols-3 lg:gap-4">
            {availablePlans.map((plan) => {
              const isActive = plan.id === activePlanId;
              const isPremium = plan.id === 'premium';

              return (
                <button
                  aria-pressed={isActive}
                  className={`group relative w-full overflow-hidden border text-left transition-all duration-500 ${
                    isActive
                      ? 'relative z-20 scale-100 border-x-neon bg-white/10 opacity-100 shadow-[0_0_35px_rgba(24,240,0,0.2)]'
                      : 'relative z-0 scale-[0.98] border-white/10 bg-white/[0.03] opacity-55 hover:border-x-neon/40 hover:opacity-90'
                  }`}
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan.id)}
                  type="button"
                >
                  {isPremium && hasActiveCampaign ? (
                    <div className="absolute right-4 top-4 z-10 skew-title bg-x-neon px-3 py-1 font-sport text-xs font-black text-black">
                      PROMO
                    </div>
                  ) : null}
                  <div className={`h-2 ${isActive ? 'bg-x-neon' : 'bg-white/10'}`} />
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="mb-4 lg:mb-5">
                      <div>
                        <span className="font-sport text-2xl font-extrabold leading-none text-x-neon sm:text-3xl lg:text-5xl">
                          PLAN
                        </span>
                        <h3 className="font-sport text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
                          {plan.name}
                        </h3>
                      </div>
                    </div>
                    <div className="grid gap-3 lg:gap-4">
                      <div className="border-l-2 border-x-neon pl-3">
                        <p className="font-sport text-base font-extrabold leading-tight text-white sm:text-lg lg:text-xl">
                          {plan.frequency}
                        </p>
                        <p className="text-sm text-gray-400">{plan.days}</p>
                      </div>
                      <div>
                        {hasActiveCampaign && plan.previousPrice ? (
                          <p className="font-sport text-lg font-extrabold text-white/80 line-through">
                            Antes {plan.previousPrice}
                          </p>
                        ) : null}
                        <p className="font-sport text-4xl font-extrabold text-x-neon lg:text-5xl">{plan.price}</p>
                        <p className="font-playful text-base text-gray-300">{plan.priceLabel}</p>
                      </div>
                    </div>
                    <span className="mt-4 inline-flex border border-x-neon/40 px-3 py-1 font-sport text-xs font-black uppercase tracking-[0.18em] text-x-neon">
                      Ver detalle
                    </span>
                  </div>
                </button>
              );
            })}
          </aside>

          <article
            className="relative scroll-mt-24 overflow-hidden border border-x-neon/40 bg-black/80 shadow-2xl backdrop-blur-sm"
            ref={detailRef}
          >
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-x-neon/20 blur-3xl" />
            <div className={`h-5 ${isWhiteBar ? 'bg-white' : 'bg-x-neon'}`} />
            <div className="relative">
              <div className="border-b border-white/10 p-5 sm:p-8 md:p-10">
                <p className="font-playful text-lg text-x-neon sm:text-2xl">Plan de entrenamiento</p>
                <div className="mt-4 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                  <h3 className="font-sport text-4xl font-extrabold leading-none text-white min-[390px]:text-5xl sm:text-6xl md:text-7xl">
                    PLAN <span className="text-x-neon">{activePlan.name}</span>
                  </h3>
                  <div className="skew-title inline-flex w-fit bg-x-neon px-6 py-3 text-black">
                    <span className="font-sport text-3xl font-extrabold sm:text-4xl">
                      {activePlan.price} <span className="text-xl sm:text-2xl">{activePlan.priceLabel}</span>
                    </span>
                  </div>
                </div>
                {hasActiveCampaign && activePlan.previousPrice ? (
                  <p className="mt-3 font-sport text-xl font-extrabold text-white/80 line-through">
                    Antes {activePlan.previousPrice}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-white/10 p-5 sm:p-8 xl:border-b-0 xl:border-r">
                  <div className="mb-6 space-y-2 sm:mb-8">
                    <p className="text-xl font-bold text-white sm:text-3xl">{activePlan.frequency}</p>
                    <p className="text-lg text-gray-300 sm:text-2xl">({activePlan.days})</p>
                    <div className="pt-2 text-sm text-gray-500 sm:text-base">
                      <p>Política de empresa:</p>
                      <p>{activePlan.policy}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {getPlanFeatures(activePlan).map((feature) => (
                      <li className="flex items-start gap-3 text-sm font-semibold text-gray-200 sm:text-base md:text-lg" key={feature}>
                        <span className="mt-0.5 text-2xl leading-none text-x-neon">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/[0.03] p-5 sm:p-8">
                  <h4 className="mb-5 font-sport text-2xl font-extrabold uppercase text-white sm:mb-6 sm:text-4xl">
                    Elige tu membresía
                  </h4>
                  <div className="space-y-3">
                    {membershipOptions.map((membership) => {
                      const isSelected = membership.period === selectedMembership.period;

                      return (
                        <button
                          aria-pressed={isSelected}
                          className={`flex w-full items-center justify-between gap-3 border p-3 text-left transition sm:gap-4 sm:p-4 ${
                            isSelected
                              ? 'border-x-neon bg-x-neon text-black shadow-[0_0_25px_rgba(24,240,0,0.25)]'
                              : 'border-white/10 bg-black/30 text-white hover:border-x-neon/60 hover:bg-white/5'
                          }`}
                          key={membership.period}
                          onClick={() =>
                            setSelectedMemberships((current) => ({
                              ...current,
                              [activePlan.id]: membership.period,
                            }))
                          }
                          type="button"
                        >
                          <span>
                            <span
                              className={`block text-xs font-black uppercase tracking-[0.2em] ${
                                isSelected ? 'text-black/70' : 'text-gray-500'
                              }`}
                            >
                              {getPromotionLabel(membership)}
                            </span>
                            <span className="text-base font-bold sm:text-2xl">{membership.period}</span>
                          </span>
                          <span
                            className={`font-sport text-2xl font-extrabold sm:text-4xl ${
                              isSelected ? 'text-black' : 'text-x-neon'
                            }`}
                          >
                            {membership.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 border border-x-neon/30 bg-black/40 p-4">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500">Selección actual</p>
                    <p className="mt-1 font-sport text-xl font-extrabold text-white sm:text-2xl">
                      {selectedMembership.period} / <span className="text-x-neon">{selectedMembership.price}</span>
                    </p>
                  </div>

                  <a
                    className="btn-xtreme mt-8 inline-flex w-full justify-center bg-x-neon px-7 py-3 text-center font-sport text-lg font-extrabold text-black sm:w-auto sm:px-10 sm:py-4 sm:text-2xl"
                    href={planWhatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    QUIERO ESTA MEMBRESÍA
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { xtremePlans } from "@/data/landing";
import { useGymLocation } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";
import type { PromoCampaign, PublicPlan } from "@/services/publicWebsite";
import { DetailedPlansSection } from "./DetailedPlansSection";
import type { PlanSelection } from "@/data/training";

type Props = {
  plans?: PublicPlan[];
  campaign?: PromoCampaign;
  headingLevel?: 1 | 2;
  overview?: boolean;
  selection?: PlanSelection;
  onSelectionChange?: (selection: PlanSelection) => void;
};

export function PlansSection({ plans, campaign, headingLevel = 1, overview = false, selection, onSelectionChange }: Props) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const availablePlans = plans?.length ? plans : xtremePlans;
  const Heading = headingLevel === 1 ? "h1" : "h2";

  if (!overview) return <DetailedPlansSection plans={plans} campaign={campaign} selection={selection} onSelectionChange={onSelectionChange} />;

  return (
    <section id="planes" className="gym-section pricing-section pricing-overview" aria-labelledby="pricing-title">
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="font-playful section-handwriting">Elige cómo quieres entrenar</p>
            <Heading id="pricing-title" className="gym-title">PLANES <span className="text-x-neon">XTREME.</span></Heading>
          </div>
          <p className="section-description">Conoce qué incluye cada plan · {location.city}</p>
        </div>
        {locationId === "pucallpa" && (
          <p className="pricing-notice">Conoce el catálogo Xtreme. La disponibilidad de planes y beneficios en Pucallpa se confirma antes de la inscripción.</p>
        )}
        <div className="pricing-grid">
          {availablePlans.map((plan, index) => {
            const features = "benefits" in plan ? plan.benefits : plan.features;
            return (
              <article id={`plan-${plan.id}`} className={`price-poster ${index === 1 ? "price-poster-accent" : ""}`} key={plan.id} data-reveal>
                <div className="poster-header">
                  <p className="poster-kicker font-sport">PLAN</p>
                  <h3 className="font-sport">{plan.name}</h3>
                  <p className="poster-frequency">{plan.frequency}</p>
                </div>
                <ul className="poster-benefits">
                  {features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
                </ul>
                <div className="poster-bottom">
                  <Link href={`/planes/#plan-${plan.id}`} className="gym-button poster-cta" aria-label={`Ver precios y detalle del plan ${plan.name}`}>
                    CONOCER EL PLAN <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <p className="section-note mt-4">Consulta precios, duraciones, condiciones y horarios en la página de planes.</p>
      </div>
    </section>
  );
}

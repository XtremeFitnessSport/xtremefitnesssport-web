"use client";

import { xtremePlans } from "@/data/landing";
import { useGymLocation } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";
import { whatsappHref } from "@/lib/whatsapp";
import type { PromoCampaign, PublicPlan } from "@/services/publicWebsite";
import { WhatsappIcon } from "./ContactActions";

type Plan = (typeof xtremePlans)[number] | PublicPlan;
type Props = {
  plans?: PublicPlan[];
  campaign?: PromoCampaign;
  headingLevel?: 1 | 2;
};

export function PlansSection({ plans, headingLevel = 1 }: Props) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const availablePlans: Plan[] = plans?.length ? plans : xtremePlans;
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section
      id="planes"
      className="gym-section pricing-section"
      aria-labelledby="pricing-title"
    >
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="font-playful section-handwriting">
              Elige cómo quieres entrenar
            </p>
            <Heading id="pricing-title" className="gym-title">
              PLANES <span className="text-x-neon">XTREME.</span>
            </Heading>
          </div>
          <p className="section-description">
            Membresías mensuales · {location.city}
          </p>
        </div>
        {locationId === "pucallpa" && (
          <p className="pricing-notice">
            Precios del catálogo Xtreme. La disponibilidad de planes y
            beneficios en Pucallpa se confirma antes de la inscripción.
          </p>
        )}
        <div className="pricing-grid">
          {availablePlans.map((plan, index) => {
            const features = "benefits" in plan ? plan.benefits : plan.features;
            const memberships =
              "membershipOptions" in plan
                ? plan.membershipOptions
                : plan.promotions;
            const longerTerms = memberships.filter(
              (item) =>
                item.price.startsWith("S/") &&
                !("kind" in item && item.kind === "mensualidad"),
            );
            const message = whatsappHref(locationId, [
              `Plan: ${plan.name}`,
              `Precio publicado: ${plan.price} ${plan.priceLabel}.`,
              `Frecuencia: ${plan.frequency}.`,
              `Días: ${plan.days}.`,
              "Incluye: " + features.join("; ") + ".",
              `Condiciones publicadas: ${plan.policy}.`,
              "",
              "Me interesa la membresía mensual. Quisiera conocer los turnos disponibles y si existe algún cobro adicional.",
            ]);
            return (
              <article
                className={`price-poster ${index === 1 ? "price-poster-accent" : ""}`}
                key={plan.id}
                data-reveal
              >
                <div className="poster-header">
                  <p className="poster-kicker">MEMBRESÍA MENSUAL</p>
                  <h3 className="font-sport">{plan.name}</h3>
                  <p className="poster-frequency">{plan.frequency}</p>
                </div>
                <div className="poster-price">
                  <strong className="font-sport">{plan.price}</strong>
                  <span>
                    / {plan.priceLabel === "mensual" ? "mes" : plan.priceLabel}
                  </span>
                </div>
                <p className="poster-days">{plan.days}</p>
                <ul className="poster-benefits">
                  {features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="poster-bottom">
                  <p className="poster-policy">{plan.policy}</p>
                  {longerTerms.length > 0 && (
                    <details className="poster-promotions">
                      <summary>
                        Otras duraciones <span aria-hidden="true">+</span>
                      </summary>
                      <dl>
                        {longerTerms.map((option) => (
                          <div key={option.period}>
                            <dt>{option.period}</dt>
                            <dd>
                              {option.price} <small>total</small>
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <p>Consulta vigencia y condiciones antes de pagar.</p>
                    </details>
                  )}
                  <a href={message} className="gym-button poster-cta">
                    <WhatsappIcon />
                    <span>ELEGIR {plan.name}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="section-note mt-4">
          Elige tu plan y coordina tu inscripción por WhatsApp. Sin pagos en
          esta web.
        </p>
      </div>
    </section>
  );
}

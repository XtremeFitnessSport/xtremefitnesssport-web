"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { trainingLevels, trainingGoals } from "@/data/training";
import { useGymLocation } from "@/context/GymLocationContext";
import { whatsappHref } from "@/lib/whatsapp";
import { WhatsappIcon } from "./ContactActions";

const experienceProfiles = [
  { level: 0, label: "Empiezo de cero", cue: "Aprender y ganar confianza", image: images.experienceCards.realProcess, steps: 1 },
  { level: 2, label: "Ya entreno", cue: "Dar estructura a mi progreso", image: images.experienceCards.masDisciplina, steps: 2 },
  { level: 3, label: "Quiero ir más allá", cue: "Afinar técnica y objetivos", image: images.experienceCards.enfoque, steps: 3 },
];

const specificProfiles = [
  { level: 1, label: "Estoy retomando", cue: "Volver a mi ritmo", image: "https://images.unsplash.com/photo-1633354129320-163fb10dd288?auto=format&fit=crop&w=400&q=80" },
  { level: 4, label: "Entreno para competir", cue: "Preparación deportiva", image: "https://images.unsplash.com/photo-1750565188080-9b21101336d6?auto=format&fit=crop&w=400&q=80" },
  { level: 5, label: "Necesito adaptaciones", cue: "Un plan según mi condición", image: "https://images.unsplash.com/photo-1652363723208-65141968e727?auto=format&fit=crop&w=400&q=80" },
];

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

export function PerformanceSection() {
  const [selected, setSelected] = useState(0);
  const { locationId } = useGymLocation();
  const level = trainingLevels[selected];

  return (
    <section id="rendimientos" className="gym-section levels-section" aria-labelledby="levels-title">
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Perfil individual</p>
            <h2 id="levels-title" className="gym-title">
              ENTRENAMOS<br /><span className="text-x-neon">SEGÚN TU NIVEL</span>
            </h2>
          </div>
          <p className="section-description">
            No necesitas llegar en forma. Necesitas un punto de partida.
            Encuentra el tuyo; el coach te ayuda a dar el siguiente paso.
          </p>
        </div>

        <div className="level-question" data-reveal>
          <h3 className="font-sport">¿Cuál de estas frases va contigo?</h3>
          <p>Elige una y descubre cómo empezaríamos contigo.</p>
        </div>
        <div className="level-choices" role="group" aria-label="Tu experiencia entrenando" data-reveal>
          {experienceProfiles.map((profile) => (
            <button className="level-choice" type="button" key={profile.level} aria-pressed={selected === profile.level} aria-controls="level-guidance" onClick={() => setSelected(profile.level)}>
              <Image src={profile.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="level-choice-image" />
              <span className="level-choice-top">
                <span className="level-progression" aria-label={`Experiencia: ${profile.steps} de 3`}>
                  {[1, 2, 3].map((step) => <span key={step} className={step <= profile.steps ? "is-filled" : ""} />)}
                </span>
                <span className="level-selected-mark"><CheckIcon /><span className="sr-only">{selected === profile.level ? "Seleccionado" : ""}</span></span>
              </span>
              <span className="level-choice-copy">
                <span className="level-choice-name">{trainingLevels[profile.level].name}</span>
                <span className="level-choice-title font-sport">{profile.label}</span>
                <span className="level-choice-cue">{profile.cue}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="level-situations" data-reveal>
          <h3 className="font-sport">¿Tu punto de partida es otro?</h3>
          <p>Retomar, competir o necesitar ajustes también tiene su propio camino.</p>
          <div className="level-situation-choices" role="group" aria-label="Otras necesidades de entrenamiento">
            {specificProfiles.map((profile) => (
              <button type="button" className="level-choice" key={profile.level} aria-pressed={selected === profile.level} aria-controls="level-guidance" onClick={() => setSelected(profile.level)}>
                <Image src={profile.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="level-choice-image" />
                <span className="level-choice-top">
                  <span />
                  <span className="level-selected-mark"><CheckIcon /><span className="sr-only">{selected === profile.level ? "Seleccionado" : ""}</span></span>
                </span>
                <span className="level-choice-copy">
                  <span className="level-choice-name">{trainingLevels[profile.level].name}</span>
                  <span className="level-choice-title font-sport">{profile.label}</span>
                  <span className="level-choice-cue">{profile.cue}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="level-guidance" id="level-guidance">
          <div className="level-guidance-copy" aria-live="polite" aria-atomic="true">
            <div key={selected} className="level-guidance-content">
              <p className="level-guidance-label">ASÍ TE ACOMPAÑAMOS</p>
              <h3 className="font-sport">{level.name}</h3>
              <p>{level.description}</p>
            </div>
          </div>
          <a className="gym-button gym-button-primary" href={whatsappHref(locationId, [`Mi punto de partida: ${level.name.toLocaleLowerCase("es")}.`, "Quisiera orientación del coach para comenzar."])}>
            <WhatsappIcon /> CONSULTAR MI ENTRENAMIENTO
          </a>
        </div>
        <p className="level-reassurance">¿Dudas entre dos opciones? Es normal. El coach te orienta antes de comenzar.</p>

        
      </div>
    </section>
  );
}

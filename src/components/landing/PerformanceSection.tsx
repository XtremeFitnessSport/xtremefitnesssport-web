import { trainingLevels, trainingGoals } from "@/data/training";

export function PerformanceSection() {
  return (
    <section
      id="rendimientos"
      className="gym-section levels-section"
      aria-labelledby="levels-title"
    >
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">04 / TU PUNTO DE PARTIDA CUENTA</p>
            <h2 id="levels-title" className="gym-title">
              NO TIENES QUE LLEGAR FUERTE.
              <br />
              <span className="text-x-neon">PARA ESO ESTAMOS.</span>
            </h2>
          </div>
          <p className="section-description">
            Entrenamiento para todos los niveles. El coach adapta la carga, la
            técnica y el ritmo a tu experiencia y objetivo.
          </p>
        </div>
        <div className="levels-grid">
          {trainingLevels.map((level, index) => (
            <article key={level.name} data-reveal>
              <span className="level-number font-sport">0{index + 1}</span>
              <h3 className="font-sport">{level.name}</h3>
              <p>{level.description}</p>
            </article>
          ))}
        </div>
        <div className="training-goals" data-reveal>
          <p className="eyebrow">¿QUÉ QUIERES TRABAJAR?</p>
          <ul>
            {trainingGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

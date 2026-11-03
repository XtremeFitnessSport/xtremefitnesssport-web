const questions = [
  {
    question: "¿Puedo entrenar si nunca he ido a un gimnasio?",
    answer:
      "Sí. El entrenamiento se adapta a tu punto de partida. El coach te guía con la técnica, las cargas y el ritmo de cada sesión.",
  },
  {
    question: "¿Qué significa entrenamiento semipersonalizado?",
    answer:
      "Tienes una rutina según tu objetivo y acompañamiento del coach durante la sesión. Consulta con la sede cómo se organizan los grupos y los turnos.",
  },
  {
    question: "¿Cómo me inscribo y cuánto tengo que pagar?",
    answer:
      "Elige un plan y abre su botón de WhatsApp. El mensaje ya incluye precio, frecuencia y beneficios. El equipo confirma el total, las condiciones, tu turno y los pasos de inscripción antes de cualquier pago.",
  },
  {
    question: "¿Entrenan personas de nivel avanzado y atletas?",
    answer:
      "Sí. Además de principiantes e intermedios, trabajamos con personas avanzadas y atletas de alto rendimiento, incluidos peleadores y futbolistas. Los bloques y objetivos se coordinan con el equipo.",
  },
  {
    question: "¿Puedo conocer el local antes de inscribirme?",
    answer:
      "Sí. Consulta con la sede cuándo puedes visitarla y conoce sus máquinas, espacios y forma de entrenar antes de elegir una membresía.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="gym-section border-t border-white/10">
      <div className="gym-shell grid gap-10 md:grid-cols-[.8fr_1.2fr]">
        <div data-reveal>
          <p className="eyebrow">ANTES DE EMPEZAR</p>
          <h2 className="gym-title">
            DUDAS CORTAS.
            <br />
            <span className="text-x-neon">RESPUESTAS CLARAS.</span>
          </h2>
        </div>
        <div>
          {questions.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-white/15 py-5"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-base font-medium">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="text-x-neon transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-xl text-copy text-body">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

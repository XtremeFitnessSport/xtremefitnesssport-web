import Image from "next/image";
import { images } from "@/assets/images";

export function TrainingSection() {
  return (
    <section
      className="gym-section coaching-section"
      id="entrenamiento"
      aria-labelledby="coaching-title"
    >
      <div className="gym-shell coaching-layout">
        <div className="coaching-photo" data-reveal>
          <Image
            src={images.heroLocal}
            alt="Acompañamiento del coach para corregir la técnica durante un ejercicio de fuerza"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="coaching-copy" data-reveal>
          <p className="eyebrow">EL DIFERENCIAL XTREME</p>
          <h2 className="gym-title" id="coaching-title">
            TU ESFUERZO.
            <br />
            <span className="text-x-neon">NUESTRA GUÍA.</span>
          </h2>
          <p className="section-description mt-6">
            Entrenamiento semipersonalizado: una rutina para tu objetivo y un
            coach que acompaña tu técnica durante la sesión.
          </p>
          <ol className="coaching-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Conocemos tu punto de partida.</h3>
                <p>
                  Tu experiencia, tu disponibilidad y lo que quieres lograr.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Entrenas con dirección.</h3>
                <p>Ejercicios, cargas y correcciones según tu nivel.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Construyes constancia.</h3>
                <p>Un horario y una comunidad que acompañan tu proceso.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

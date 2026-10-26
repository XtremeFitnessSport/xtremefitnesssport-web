"use client";

import { useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { images } from "@/assets/images";
import type { GalleryItem } from "@/services/publicWebsite";

const facilities = [
  { title: "MÁQUINAS Y FUERZA", image: images.gallery.altaIntensidad[3] },
  { title: "ENTRENAMIENTO FUNCIONAL", image: images.gallery.altaIntensidad[5] },
  { title: "COMUNIDAD XTREME", image: images.gallery.altaIntensidad[0] },
];
type Picture = { title: string; image: ImageProps["src"] };

export function GallerySection({ items }: { items?: GalleryItem[] }) {
  const pictures: Picture[] = items?.length
    ? items
        .slice(0, 7)
        .map((item) => ({ title: item.title, image: item.image }))
    : facilities;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const open = (index: number, button: HTMLButtonElement) => {
    setActive(index);
    openerRef.current = button;
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  return (
    <section
      id="galeria"
      className="gym-section facilities-section"
      aria-labelledby="facilities-title"
    >
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="font-playful section-handwriting">
              Conoce tu próximo gimnasio
            </p>
            <h2 id="facilities-title" className="gym-title">
              ESTO ES <span className="text-x-neon">XTREME.</span>
            </h2>
          </div>
          <p className="section-description">
            Máquinas, pesas y espacio para darlo todo.
            <br />
            Fotos reales de nuestra sede Tarapoto.
          </p>
        </div>
        <div className="facilities-grid">
          {pictures.slice(0, 3).map((item, index) => (
            <button
              type="button"
              className="facility-photo"
              key={item.title}
              aria-label={"Ampliar foto: " + item.title}
              onClick={(event) => open(index, event.currentTarget)}
              data-reveal
            >
              <Image
                src={item.image}
                alt={item.title + ". Xtreme Fitness Tarapoto"}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="facility-caption">
                <span className="font-sport">{item.title}</span>
                <span className="photo-expand" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
                  </svg>
                </span>
              </span>
            </button>
          ))}
        </div>
        <p className="section-note mt-4">
          Fotos de Tarapoto · Toca una imagen para ampliarla.
        </p>
      </div>
      <dialog
        ref={dialogRef}
        className="photo-dialog"
        aria-label="Fotos de Xtreme Fitness Tarapoto"
        onClose={() => openerRef.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            setActive((value) => (value + 1) % pictures.length);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setActive(
              (value) => (value + pictures.length - 1) % pictures.length,
            );
          }
        }}
      >
        <div className="photo-dialog-inner">
          <div className="photo-dialog-toolbar">
            <span>
              {active + 1} / {pictures.length} · Tarapoto
            </span>
            <button
              type="button"
              autoFocus
              onClick={close}
              aria-label="Cerrar fotos"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m6 6 12 12M6 18 18 6" />
              </svg>
            </button>
          </div>
          <div className="photo-dialog-image" key={active}>
            <Image
              src={pictures[active].image}
              alt={pictures[active].title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <div className="photo-dialog-toolbar">
            <button
              type="button"
              onClick={() =>
                setActive(
                  (value) => (value + pictures.length - 1) % pictures.length,
                )
              }
              aria-label="Foto anterior"
            >
              ←
            </button>
            <span className="font-sport">{pictures[active].title}</span>
            <button
              type="button"
              onClick={() =>
                setActive((value) => (value + 1) % pictures.length)
              }
              aria-label="Foto siguiente"
            >
              →
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}

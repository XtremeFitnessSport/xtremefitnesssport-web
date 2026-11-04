"use client";

import { useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { getLocationContent } from "@/data/locationContent";
import { useGymLocation } from "@/context/GymLocationContext";
import type { GalleryItem } from "@/services/publicWebsite";

type Picture = { title: string; image: ImageProps["src"] };

export function GallerySection({ items }: { items?: GalleryItem[] }) {
  const { locationId, setLocationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const pictures: Picture[] = locationId === "tarapoto" && items?.length
    ? items
        .slice(0, 7)
        .map((item) => ({ title: item.title, image: item.image }))
    : location.gallery;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const activeIndex = active % pictures.length;
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
      className="gym-section facilities-section reference-gallery"
      aria-labelledby="facilities-title"
    >
      <div className="gym-shell">
        <div className="section-heading" data-reveal>
          <div>
            <h2 id="facilities-title" className="gym-title">
              GALERÍA <span className="text-x-neon">{location.city.toUpperCase()}</span>
            </h2>
          </div>
          <div className="gallery-location-switcher" role="group" aria-label="Seleccionar sede de la galería">
            {(["tarapoto", "pucallpa"] as const).map((id) => (
              <button key={id} type="button" aria-pressed={locationId === id} onClick={() => {
                setActive(0);
                setLocationId(id);
              }} className="font-sport">
                {getLocationContent(id).city}
              </button>
            ))}
          </div>
        </div>
        <div className="facilities-grid">
          {pictures.map((item, index) => (
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
                alt={item.title + ". Xtreme Fitness " + location.city}
                fill
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className="object-cover"
              />
              <span className="gallery-location-tag font-sport">{location.city}</span>
              <span className="facility-caption">
                <span className="font-sport">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
        <p className="section-note mt-4">
          Fotos de {location.city} · Toca una imagen para ampliarla.
        </p>
      </div>
      <dialog
        ref={dialogRef}
        className="photo-dialog"
        aria-label={"Fotos de Xtreme Fitness " + location.city}
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
              {activeIndex + 1} / {pictures.length} · {location.city}
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
          <div className="photo-dialog-image" key={activeIndex}>
            <Image
              src={pictures[activeIndex].image}
              alt={pictures[activeIndex].title}
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
            <span className="font-sport">{pictures[activeIndex].title}</span>
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

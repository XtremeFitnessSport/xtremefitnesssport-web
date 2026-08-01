'use client';

import { getLocationContent } from '@/data/locationContent';
import { useGymLocation } from '@/context/GymLocationContext';
import Image, { type ImageProps } from 'next/image';
import type { GalleryItem } from '@/services/publicWebsite';
import { LocationSwitcher } from './LocationSwitcher';

type GalleryViewItem = {
  id?: string;
  title: string;
  category?: string;
  tag?: string;
  image: ImageProps['src'];
  featured?: boolean;
};

type GallerySectionProps = {
  items?: GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const availableItems: GalleryViewItem[] =
    locationId === 'tarapoto' && items && items.length > 0
      ? items.map((item) => ({ ...item, category: item.tag }))
      : location.gallery;

  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="galeria">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block font-playful text-xl text-x-neon">Dos sedes. Una misma energía.</span>
            <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
              GALERÍA <span className="text-x-neon">{location.city}</span>
            </h2>
          </div>
          <div className="flex max-w-md flex-col items-start gap-4">
            <p className="text-gray-400">
              {locationId === 'pucallpa'
                ? 'La experiencia Xtreme que inspira nuestra llegada a Pucallpa. Las fotos oficiales de la nueva sede se sumarán después de la apertura.'
                : 'Momentos reales de entrenamiento, disciplina y comunidad en nuestra sede de Tarapoto.'}
            </p>
            <LocationSwitcher />
          </div>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 md:grid-cols-4">
          {availableItems.map((item) => (
            <article
              className={`group relative min-h-[220px] overflow-hidden border border-white/10 ${
                item.featured ? 'min-h-[300px] sm:col-span-2 sm:row-span-2 sm:min-h-[360px] md:min-h-0' : ''
              }`}
              key={item.id ?? item.title}
            >
              {typeof item.image === 'string' ? (
                // API images can come from any public CDN, outside next.config remotePatterns.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  src={item.image}
                />
              ) : (
                <Image
                  alt={item.title}
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  src={item.image}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
              {item.category ? (
                <div className="absolute left-4 top-4 skew-title bg-x-neon px-3 py-1 font-sport text-xs font-black uppercase tracking-[0.18em] text-black">
                  {item.category}
                </div>
              ) : null}
              <div className="absolute bottom-0 p-5">
                <h3
                  className={`font-sport font-extrabold text-white ${
                    item.featured ? 'text-4xl sm:text-5xl' : 'text-2xl'
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

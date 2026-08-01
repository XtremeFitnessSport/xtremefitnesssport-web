'use client';

import Image, { type ImageProps } from 'next/image';
import type { Testimonial } from '@/services/publicWebsite';
import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import { LocationSwitcher } from './LocationSwitcher';

type TestimonialViewItem = {
  id?: string;
  quote: string;
  author?: string;
  authorLabel?: string;
  image?: ImageProps['src'];
  imageName?: string;
  accent: 'neon' | 'green' | 'white' | 'muted';
};

type TestimonialsSectionProps = {
  items?: Testimonial[];
};

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const availableItems: TestimonialViewItem[] = locationId === 'tarapoto'
    ? (items && items.length > 0 ? items : location.testimonials)
    : location.testimonials;

  return (
    <section className="bg-asphalt py-20 sm:py-28 lg:py-32" id="testimonios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playful text-xl text-x-neon">Voces de la comunidad</span>
            <h2 className="mt-2 text-center font-sport text-4xl font-extrabold uppercase sm:text-5xl md:text-left">
              {locationId === 'pucallpa' ? 'TU HISTORIA EMPIEZA' : 'LA GENTE SIENTE EL'}{' '}
              <span className="text-x-neon underline">{locationId === 'pucallpa' ? 'AHORA' : 'CAMBIO'}</span>
            </h2>
          </div>
          <LocationSwitcher />
        </div>

        {availableItems.length > 0 ? <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {availableItems.map((testimonial) => {
            const isNeon = testimonial.accent === 'neon' || testimonial.accent === 'green';
            const author = testimonial.authorLabel ?? testimonial.author ?? 'CLIENTE XTREME';

            return (
              <article
                className={`bg-x-black p-8 shadow-2xl ${isNeon ? 'border-t-4 border-x-neon' : 'border-t-4 border-white'}`}
                key={testimonial.id ?? author}
              >
                <div className={`mb-4 font-serif text-5xl ${isNeon ? 'text-x-neon' : 'text-white'}`}>“</div>
                <p className="mb-6 text-base italic sm:text-lg">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full ${
                      isNeon ? 'bg-x-dark-green' : 'bg-x-gray'
                    }`}
                  >
                    {testimonial.image ? (
                      typeof testimonial.image === 'string' ? (
                        // API images can come from any public CDN, outside next.config remotePatterns.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          alt={testimonial.imageName ?? author}
                          className="h-full w-full object-cover"
                          src={testimonial.image}
                        />
                      ) : (
                        <Image
                          alt={testimonial.imageName ?? author}
                          className="object-cover"
                          fill
                          sizes="48px"
                          src={testimonial.image}
                        />
                      )
                    ) : null}
                  </div>
                  <span className={`font-sport text-xl font-extrabold uppercase ${isNeon ? 'text-x-neon' : ''}`}>
                    {author}
                  </span>
                </div>
              </article>
            );
          })}
        </div> : (
          <div className="relative overflow-hidden border border-x-neon/40 bg-x-neon/[0.06] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="absolute inset-y-0 left-0 w-1 bg-x-neon" />
            <p className="font-sport text-3xl font-black uppercase text-white sm:text-5xl">Los primeros testimonios serán los de Pucallpa.</p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">Abrimos el sábado 1 de agosto. Ven a entrenar, vive la experiencia y forma parte del inicio de esta comunidad.</p>
            <a className="btn-skew mt-8 inline-flex w-[calc(100%-1rem)] justify-center bg-x-neon px-5 py-4 font-sport text-lg font-black text-black sm:w-auto sm:px-8 sm:text-xl" href={`https://wa.me/${location.whatsapp}`}><span>QUIERO SER PARTE</span></a>
          </div>
        )}
      </div>
    </section>
  );
}

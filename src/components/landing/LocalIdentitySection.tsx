'use client';

import { images } from '@/assets/images';
import { useGymLocation, type GymLocationId } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import Image from 'next/image';

export function LocalIdentitySection({ locationId: featuredLocationId }: { locationId?: GymLocationId }) {
  const { locationId } = useGymLocation();
  const location = getLocationContent(featuredLocationId ?? locationId);

  return (
    <section id="energia" className="relative overflow-hidden bg-x-black py-20 sm:py-28 lg:py-32">
      <Image src={images.heroAthlete} alt="" fill sizes="100vw" className="object-cover object-center opacity-25 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 md:flex-row lg:gap-16">
        <div className="w-full md:w-1/2">
          <div className="mb-6 inline-block bg-white/10 px-4 py-1 font-playful text-x-neon">
            #AmazoníaXtreme · {location.region}
          </div>
          <h2 className="mb-8 font-sport font-extrabold uppercase gym-title">
            {location.identityTitle}
            <br />
            <span className="text-x-neon underline">{location.identityCity}</span>
          </h2>
          <p className="mb-8 border-l-2 border-x-neon pl-5 text-x-gray sm:pl-6 text-body">
            {location.identityDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            {location.identityTags.map((tag) => (
              <span
                className="skew-title border border-x-neon/40 px-4 py-2 font-sport text-lg uppercase sm:px-6 sm:text-xl"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 h-[300px] w-full rotate-3 border-4 border-x-neon sm:h-[400px]" />
          <div className="relative z-10 h-[300px] w-full sm:h-[400px]">
            <Image
              alt={`Entrenamiento en Xtreme Fitness ${location.city}`}
              className="object-cover grayscale brightness-75"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src={images.identitySection}
            />
          </div>
          <div className="absolute -bottom-4 left-2 z-20 max-w-[calc(100%-1rem)] bg-x-neon p-3 font-sport text-control font-extrabold uppercase tracking-normal text-black sm:-bottom-5 sm:-left-6 sm:max-w-none sm:p-6">
            {location.identityStamp}
          </div>
        </div>
      </div>
    </section>
  );
}

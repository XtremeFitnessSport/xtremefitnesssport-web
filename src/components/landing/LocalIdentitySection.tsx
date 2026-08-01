'use client';

import { images } from '@/assets/images';
import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import Image from 'next/image';

export function LocalIdentitySection() {
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);

  return (
    <section className="relative overflow-hidden bg-x-black py-20 sm:py-28 lg:py-32">
      <div className="amazon-pattern absolute right-0 top-0 h-full w-1/3 opacity-10" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 md:flex-row lg:gap-16">
        <div className="w-full md:w-1/2">
          <div className="mb-6 inline-block bg-white/10 px-4 py-1 font-playful text-x-neon">
            #AmazoníaXtreme · {location.region}
          </div>
          <h2 className="mb-8 font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
            {location.identityTitle}
            <br />
            <span className="text-x-neon underline">{location.identityCity}</span>
          </h2>
          <p className="mb-8 border-l-2 border-x-neon pl-5 text-base text-x-gray sm:pl-6 sm:text-xl">
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
          <div className="absolute -bottom-4 left-2 z-20 max-w-[calc(100%-1rem)] bg-x-neon p-3 font-sport text-xl font-extrabold uppercase leading-none tracking-normal text-black sm:-bottom-5 sm:-left-6 sm:max-w-none sm:p-6 sm:text-3xl">
            {location.identityStamp}
          </div>
        </div>
      </div>
    </section>
  );
}

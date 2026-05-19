import { galleryImages } from '@/data/landing';
import Image from 'next/image';

export function GallerySection() {
  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="galeria">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-sport text-4xl font-extrabold uppercase leading-none sm:text-6xl md:text-7xl xl:text-8xl">
            GALERÍA <span className="text-x-neon">XTREME</span>
          </h2>
          <p className="max-w-md text-gray-400">
            Espacios, intensidad y energía visual para que sepas cómo se siente entrenar aquí antes de llegar.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 md:grid-cols-4">
          {galleryImages.map((item, index) => (
            <article
              className={`group relative overflow-hidden border border-white/10 ${
                item.featured ? 'min-h-[360px] sm:col-span-2 sm:row-span-2 md:min-h-0' : ''
              }`}
              key={item.title}
            >
              <Image
                alt={item.title}
                className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                src={item.image}
              />
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

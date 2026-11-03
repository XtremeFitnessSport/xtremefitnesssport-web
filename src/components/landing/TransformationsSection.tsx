import { transformations } from '@/data/landing';
import Image, { type ImageProps } from 'next/image';
import type { ResultStory } from '@/services/publicWebsite';

type TransformationViewItem = {
  id?: string;
  title: string;
  before: string;
  after: string;
  image?: ImageProps['src'];
  imageName?: string;
};

type TransformationsSectionProps = {
  items?: ResultStory[];
};

export function TransformationsSection({ items }: TransformationsSectionProps) {
  const availableItems: TransformationViewItem[] = items && items.length > 0 ? items : transformations;

  return (
    <section className="bg-black px-4 py-20 sm:px-6 sm:py-28" id="resultados">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="font-playful text-x-neon">Antes y después</span>
          <h2 className="font-sport font-extrabold uppercase gym-title">
            CAMBIOS <span className="text-x-neon">REALES</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {availableItems.map((item) => (
            <article
              className="neon-border-glow overflow-hidden border border-white/10 bg-white/[0.03]"
              key={item.id ?? item.title}
            >
              {item.image ? (
                <div className="relative h-64 border-b border-white/10 bg-white/[0.04]">
                  {typeof item.image === 'string' ? (
                    // API images can come from any public CDN, outside next.config remotePatterns.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={item.imageName ?? item.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale"
                      src={item.image}
                    />
                  ) : (
                    <Image
                      alt={item.imageName ?? item.title}
                      className="object-cover grayscale"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      src={item.image}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ) : null}
              <div className="grid grid-cols-1 border-b border-white/10 min-[390px]:grid-cols-2">
                <div className="border-b border-white/10 bg-white/[0.04] p-4 min-[390px]:border-b-0 sm:p-5">
                  <p className="mb-3 font-sport text-xl font-extrabold uppercase text-white">Antes</p>
                  <p className="text-copy text-body">{item.before}</p>
                </div>
                <div className="bg-x-neon p-4 text-black sm:p-5">
                  <p className="mb-3 font-sport text-xl font-extrabold uppercase">Después</p>
                  <p className="font-semibold text-small">{item.after}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-sport font-extrabold uppercase text-white text-card-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

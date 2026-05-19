import { images } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  size?: 'default' | 'small';
};

export function Logo({ size = 'default' }: LogoProps) {
  const imageSize = size === 'small' ? 'h-9 w-9 sm:h-10 sm:w-10' : 'h-10 w-10 sm:h-12 sm:w-12';
  const titleSize = size === 'small' ? 'text-xl sm:text-2xl' : 'text-xl sm:text-2xl';

  return (
    <Link aria-label="Volver al inicio de Xtreme Fitness" className="flex min-w-0 items-center gap-2 sm:gap-3" href="/#inicio">
      <div className={`relative shrink-0 ${imageSize}`}>
        <Image alt="Xtreme Fitness" className="object-contain object-left" fill priority src={images.logoXtreme} />
      </div>
      <span className={`hidden font-sport ${titleSize} font-black tracking-normal text-white min-[420px]:inline`}>
        XTREME <span className="text-neon">FITNESS</span>
      </span>
    </Link>
  );
}

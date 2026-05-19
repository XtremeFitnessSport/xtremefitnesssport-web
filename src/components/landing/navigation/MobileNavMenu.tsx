import { navLinks } from '@/data/landing';
import Link from 'next/link';

type MobileNavMenuProps = {
  onNavigate: () => void;
};

export function MobileNavMenu({ onNavigate }: MobileNavMenuProps) {
  return (
    <div className="border-t border-white/10 bg-black/95 px-4 py-5 xl:hidden">
      <div className="grid gap-3 font-sport text-xl font-black text-white">
        {navLinks.map((link) => (
          <div className="border-b border-white/10 py-2" key={link.label}>
            <a
              className={`block transition hover:text-x-neon ${
                link.href === '/planes' || link.href === '/sedes'
                  ? 'border border-x-neon/50 bg-x-neon/10 px-4 py-3 text-x-neon'
                  : ''
              }`}
              href={link.href}
              onClick={onNavigate}
            >
              {link.label}
            </a>
            {'children' in link && link.children?.length ? (
              <div className="mt-2 border-l-2 border-x-neon/60 pl-4 text-base text-gray-300">
                {link.children.map((child) => (
                  <a
                    className="block py-1 transition hover:text-x-neon"
                    href={child.href}
                    key={child.label}
                    onClick={onNavigate}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        <Link className="btn-skew mt-2 bg-x-neon px-5 py-3 text-center text-black" href="/#contacto" onClick={onNavigate}>
          <span>QUIERO ENTRENAR</span>
        </Link>
      </div>
    </div>
  );
}

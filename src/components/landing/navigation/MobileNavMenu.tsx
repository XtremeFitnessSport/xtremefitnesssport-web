import { exploreLinks, navLinks, portalUrl } from '@/data/landing';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MobileNavMenuProps = { onNavigate: () => void };

export function MobileNavMenu({ onNavigate }: MobileNavMenuProps) {
  const pathname = usePathname();

  return (
    <div id="mobile-navigation" className="max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-white/10 bg-black px-4 py-4 shadow-2xl sm:px-6 xl:hidden">
      <Link className="nav-link flex" href="/#inicio" onClick={onNavigate}>Inicio</Link>
      {navLinks.map((link) => {
        const isActive = !link.href.includes('#') && pathname.replace(/\/$/, '') === link.href;
        return (
          <Link aria-current={isActive ? 'page' : undefined} className={`nav-link flex ${isActive ? 'nav-link-active' : ''}`} href={link.href} key={link.label} onClick={onNavigate}>
            {link.label}
          </Link>
        );
      })}
      <details className="my-2 border-y border-white/10 py-2">
        <summary className="min-h-11 cursor-pointer px-3 py-3 text-sm font-semibold text-gray-300">Más sobre Xtreme</summary>
        {exploreLinks.map((link) => <Link className="nav-link flex" href={link.href} key={link.label} onClick={onNavigate}>{link.label}</Link>)}
      </details>
      <a className="nav-link flex" href={portalUrl} onClick={onNavigate} rel="noreferrer" target="_blank">
        Portal de socios ↗<span className="sr-only"> (abre en otra pestaña)</span>
      </a>
    </div>
  );
}

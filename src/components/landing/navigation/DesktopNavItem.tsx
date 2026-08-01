import type { NavLink } from './types';

type DesktopNavItemProps = {
  link: NavLink;
};

export function DesktopNavItem({ link }: DesktopNavItemProps) {
  const isRouteLink = link.href === '/planes' || link.href === '/sedes';
  const routeLinkClass =
    'border border-x-neon/50 bg-x-neon/10 px-3 py-2 text-x-neon shadow-[0_0_14px_rgba(24,240,0,0.12)] hover:border-x-neon hover:bg-x-neon hover:text-black';

  if (!('children' in link) || !link.children?.length) {
    return (
      <a className={`${isRouteLink ? routeLinkClass : ''} font-sport font-extrabold italic transition hover:text-neon`} href={link.href}>
        {link.label}
      </a>
    );
  }

  return (
    <div className="group relative">
      <a
        className={`inline-flex items-center gap-1 font-sport font-extrabold italic transition ${
          isRouteLink ? routeLinkClass : 'hover:text-neon'
        }`}
        href={link.href}
      >
        {link.label}
        <svg aria-hidden="true" className="h-3 w-3 shrink-0 text-x-neon transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 12 12">
          <path d="m2.5 4.25 3.5 3.5 3.5-3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      </a>
      <div className="invisible absolute left-0 top-full min-w-40 translate-y-2 border border-white/10 bg-black/95 p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {link.children.map((child) => (
          <a
            className="block px-3 py-2 font-sport text-sm font-bold italic text-gray-300 transition hover:bg-white/5 hover:text-x-neon"
            href={child.href}
            key={child.label}
          >
            {child.label}
          </a>
        ))}
      </div>
    </div>
  );
}

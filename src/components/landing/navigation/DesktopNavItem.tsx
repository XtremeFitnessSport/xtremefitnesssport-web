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
      <a className={`${isRouteLink ? routeLinkClass : ''} transition hover:text-neon`} href={link.href}>
        {link.label}
      </a>
    );
  }

  return (
    <div className="group relative">
      <a
        className={`inline-flex items-center gap-1 transition ${
          isRouteLink ? routeLinkClass : 'hover:text-neon'
        }`}
        href={link.href}
      >
        {link.label}
        <span className="text-x-neon">▾</span>
      </a>
      <div className="invisible absolute left-0 top-full min-w-40 translate-y-2 border border-white/10 bg-black/95 p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {link.children.map((child) => (
          <a
            className="block px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-x-neon"
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

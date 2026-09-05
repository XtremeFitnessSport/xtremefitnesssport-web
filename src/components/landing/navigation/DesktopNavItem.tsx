'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from './types';

export function DesktopNavItem({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const isActive = !link.href.includes('#') && pathname.replace(/\/$/, '') === link.href;

  return (
    <Link aria-current={isActive ? 'page' : undefined} className={`nav-link ${isActive ? 'nav-link-active' : ''}`} href={link.href}>
      {link.label}
    </Link>
  );
}

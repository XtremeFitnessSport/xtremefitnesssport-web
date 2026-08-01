'use client';

import { navLinks, portalUrl } from '@/data/landing';
import { useState } from 'react';
import { Logo } from './Logo';
import { DesktopNavItem } from './navigation/DesktopNavItem';
import { DumbbellIcon } from './navigation/DumbbellIcon';
import { MobileNavMenu } from './navigation/MobileNavMenu';
import { LocationSwitcher } from './LocationSwitcher';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-navbar fixed z-[100] w-full border-b border-white/5 bg-black/80 font-sport backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 min-[390px]:gap-3 min-[390px]:px-4 sm:h-20 sm:px-6">
        <Logo />

        <div className="ml-auto xl:ml-2">
          <LocationSwitcher compact />
        </div>

        <div className="hidden items-center gap-3 text-sm font-extrabold tracking-wide text-gray-300 xl:flex">
          {navLinks.map((link) => (
            <DesktopNavItem key={link.label} link={link} />
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            className="border border-white/25 bg-white/5 px-4 py-2 font-sport text-sm font-black uppercase tracking-widest text-white transition hover:border-x-neon hover:bg-x-neon hover:text-black"
            href={portalUrl}
            rel="noreferrer"
            target="_blank"
          >
            LOGIN PORTAL
          </a>
          <a
            className="btn-skew bg-neon px-3 py-2 font-sport text-sm font-black text-black transition hover:scale-105 active:scale-95 sm:px-6 sm:text-lg"
            href="#contacto"
          >
            <span>QUIERO ENTRENAR</span>
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Abrir navegación"
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-x-neon/70 bg-white/5 text-x-neon transition hover:bg-x-neon hover:text-black min-[390px]:h-11 min-[390px]:w-11 xl:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <DumbbellIcon />
        </button>
      </div>
      {isOpen ? <MobileNavMenu onNavigate={() => setIsOpen(false)} /> : null}
    </nav>
  );
}

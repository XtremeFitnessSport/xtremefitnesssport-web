'use client';

import { navLinks, portalUrl } from '@/data/landing';
import { useEffect, useRef, useState } from 'react';
import { useGymLocation } from '@/context/GymLocationContext';
import { getLocationContent } from '@/data/locationContent';
import { Logo } from './Logo';
import { DesktopNavItem } from './navigation/DesktopNavItem';
import { MobileNavMenu } from './navigation/MobileNavMenu';
import { LocationSwitcher } from './LocationSwitcher';
import { DumbbellIcon } from './navigation/DumbbellIcon';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { locationId } = useGymLocation();
  const location = getLocationContent(locationId);
  const whatsappUrl = `https://wa.me/${location.whatsapp}?text=${encodeURIComponent(`Hola, quiero información sobre los planes de Xtreme Fitness ${location.city}.`)}`;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <nav aria-label="Navegación principal" className="site-navbar fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-black/95 backdrop-blur-md" ref={navRef}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 xl:h-20">
        <Logo />
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => <DesktopNavItem key={link.label} link={link} />)}
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-0">
          <a className="nav-primary btn-skew" href={whatsappUrl} aria-label={`Consultar por WhatsApp a la sede ${location.city}`}>
            <span>WhatsApp ↗</span>
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="flex min-h-11 items-center justify-center gap-2 border border-x-neon/50 bg-x-neon/5 px-3 text-sm font-semibold text-x-neon transition hover:bg-white/10 xl:hidden"
            onClick={() => setIsOpen((current) => !current)}
            ref={toggleRef}
            type="button"
          >
            {isOpen ? (
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M6 18 18 6" />
              </svg>
            ) : <DumbbellIcon />}
            <span className="hidden sm:inline">{isOpen ? 'Cerrar' : 'Menú'}</span>
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-playful text-xs text-x-neon sm:text-sm">Tu sede</span>
            <LocationSwitcher compact />
          </div>
          <span aria-live="polite" className="sr-only">Sede seleccionada: {location.city}</span>
          <a className="nav-secondary hidden min-h-11 items-center gap-2 text-sm text-gray-300 transition hover:text-white sm:inline-flex" href={portalUrl} rel="noreferrer" target="_blank">
            Portal de socios <span aria-hidden="true">↗</span><span className="sr-only"> (abre en otra pestaña)</span>
          </a>
        </div>
      </div>
      {isOpen ? <MobileNavMenu onNavigate={() => setIsOpen(false)} /> : null}
    </nav>
  );
}

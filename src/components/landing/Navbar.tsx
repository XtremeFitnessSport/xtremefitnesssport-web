"use client";

import { navLinks } from "@/data/landing";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { DesktopNavItem } from "./navigation/DesktopNavItem";
import { MobileNavMenu } from "./navigation/MobileNavMenu";
import { LocationSwitcher } from "./LocationSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);
  return (
    <nav aria-label="Navegación principal" className="site-navbar" ref={navRef}>
      <div className="gym-shell navbar-row">
        <Logo />
        <div className="desktop-links">
          {navLinks.map((link) => (
            <DesktopNavItem key={link.label} link={link} />
          ))}
        </div>
        <div className="navbar-controls">
          <span className="location-caption">Tu sede</span>
          <LocationSwitcher compact />
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={
              isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
            onClick={() => setIsOpen((value) => !value)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="m6 6 12 12M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen ? <MobileNavMenu onNavigate={() => setIsOpen(false)} /> : null}
    </nav>
  );
}

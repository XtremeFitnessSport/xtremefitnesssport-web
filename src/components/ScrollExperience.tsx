'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useGymLocation } from '@/context/GymLocationContext';

export function ScrollExperience() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  const { locationId } = useGymLocation();

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section'));
    const cards = Array.from(document.querySelectorAll<HTMLElement>('main section article'));
    const observedElements = [...sections, ...cards];

    sections.forEach((section) => section.classList.add('scroll-section'));
    cards.forEach((card, index) => {
      card.classList.add('scroll-item');
      card.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    });
    root.classList.add('scroll-motion');

    const revealObserver = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { rootMargin: '80px 0px 40px 0px', threshold: 0.01 },
        )
      : null;

    observedElements.forEach((element) => {
      if (revealObserver) revealObserver.observe(element);
      else element.classList.add('is-visible');
    });



    let frame = 0;
    const updateScrollEffects = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(scrollTop / scrollable, 1);

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      root.style.setProperty('--parallax-y', `${Math.min(scrollTop * 0.1, 90)}px`);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollEffects);
    };

    updateScrollEffects();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      revealObserver?.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      observedElements.forEach((element) => element.classList.remove('scroll-section', 'scroll-item', 'is-visible'));
      root.classList.remove('scroll-motion');
      root.style.removeProperty('--parallax-y');
    };
  }, [locationId, pathname]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const main = document.querySelector('main');
    const entrance = main?.animate(
      [{ opacity: 0.65, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 380, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    );
    return () => entrance?.cancel();
  }, [pathname]);

  return <div aria-hidden="true" className="scroll-progress" ref={progressRef} />;
}

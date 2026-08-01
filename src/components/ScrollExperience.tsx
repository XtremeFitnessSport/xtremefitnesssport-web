'use client';

import { useEffect, useRef } from 'react';
import { useGymLocation } from '@/context/GymLocationContext';

export function ScrollExperience() {
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

    // Safety net: visual effects must never be able to leave real content hidden.
    const visibilityFallback = window.setTimeout(() => {
      observedElements.forEach((element) => element.classList.add('is-visible'));
    }, 900);

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
      window.clearTimeout(visibilityFallback);
      observedElements.forEach((element) => element.classList.remove('scroll-section', 'scroll-item', 'is-visible'));
      root.classList.remove('scroll-motion');
      root.style.removeProperty('--parallax-y');
    };
  }, [locationId]);

  return <div aria-hidden="true" className="scroll-progress" ref={progressRef} />;
}

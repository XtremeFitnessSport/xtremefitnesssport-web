"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { animate, inView, stagger } from "motion";
import { useGymLocation } from "@/context/GymLocationContext";

export function ScrollExperience() {
  const pathname = usePathname();
  const { locationId } = useGymLocation();
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (media.matches) return;
      const animations: ReturnType<typeof animate>[] = [];
      const stops: (() => void)[] = [];
      // Content stays visible in SSR and when JavaScript or animations are unavailable.
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          stops.push(
            inView(
              element,
              () => {
                animations.push(
                  animate(
                    element,
                    {
                      opacity: [0.35, 1],
                      transform: ["translateY(22px)", "translateY(0)"],
                    },
                    { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                  ),
                );
              },
              { margin: "0px 0px -35px 0px" },
            ),
          );
        });
      const hero = document.querySelectorAll<HTMLElement>("[data-hero-line]");
      if (hero.length)
        animations.push(
          animate(
            hero,
            {
              opacity: [0.5, 1],
              transform: ["translateY(28px)", "translateY(0)"],
            },
            { duration: 0.8, delay: stagger(0.09), ease: [0.22, 1, 0.36, 1] },
          ),
        );
      cleanup = () => {
        stops.forEach((stop) => stop());
        animations.forEach((animation) => animation.stop());
        document
          .querySelectorAll<HTMLElement>("[data-reveal], [data-hero-line]")
          .forEach((element) => {
            element.style.removeProperty("opacity");
            element.style.removeProperty("transform");
          });
      };
    };
    setup();
    media.addEventListener("change", setup);
    const update = () => {
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${window.scrollY / Math.max(document.documentElement.scrollHeight - innerHeight, 1)})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      cleanup();
      media.removeEventListener("change", setup);
      window.removeEventListener("scroll", update);
    };
  }, [pathname, locationId]);
  return (
    <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
  );
}

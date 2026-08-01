'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type GymLocationId = 'tarapoto' | 'pucallpa';

type GymLocationContextValue = {
  locationId: GymLocationId;
  setLocationId: (locationId: GymLocationId) => void;
};

const GymLocationContext = createContext<GymLocationContextValue | null>(null);
const STORAGE_KEY = 'xtreme-fitness-location-v2';

export function GymLocationProvider({ children }: { children: ReactNode }) {
  const [locationId, setLocationIdState] = useState<GymLocationId>('pucallpa');

  useEffect(() => {
    const savedLocation = window.localStorage.getItem(STORAGE_KEY);
    const restoreLocation = window.setTimeout(() => {
      if (savedLocation === 'tarapoto' || savedLocation === 'pucallpa') {
        setLocationIdState(savedLocation);
      }
    }, 0);

    return () => window.clearTimeout(restoreLocation);
  }, []);

  const value = useMemo(
    () => ({
      locationId,
      setLocationId: (nextLocation: GymLocationId) => {
        if (nextLocation === locationId) return;
        document.body.classList.remove('location-is-changing');
        void document.body.offsetWidth;
        document.body.classList.add('location-is-changing');
        setLocationIdState(nextLocation);
        window.localStorage.setItem(STORAGE_KEY, nextLocation);
        window.setTimeout(() => document.body.classList.remove('location-is-changing'), 550);
      },
    }),
    [locationId],
  );

  return <GymLocationContext.Provider value={value}>{children}</GymLocationContext.Provider>;
}

export function useGymLocation() {
  const context = useContext(GymLocationContext);

  if (!context) {
    throw new Error('useGymLocation debe usarse dentro de GymLocationProvider.');
  }

  return context;
}

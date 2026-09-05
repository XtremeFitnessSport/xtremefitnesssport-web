'use client';

import { useGymLocation, type GymLocationId } from '@/context/GymLocationContext';

const locations: { id: GymLocationId; label: string }[] = [
  { id: 'tarapoto', label: 'Tarapoto' },
  { id: 'pucallpa', label: 'Pucallpa' },
];

export function LocationSwitcher({ compact = false }: { compact?: boolean }) {
  const { locationId, setLocationId } = useGymLocation();

  return (
    <div
      aria-label="Seleccionar sede"
      className={`location-switcher inline-flex max-w-full items-center border border-white/15 bg-black/40 ${compact ? 'p-0.5' : 'p-1'}`}
      role="group"
    >
      {locations.map((location) => {
        const isActive = location.id === locationId;
        return (
          <button
            aria-pressed={isActive}
            className={`min-h-11 min-w-0 px-3 text-sm font-semibold transition-colors sm:px-4 ${
              isActive ? 'bg-x-neon text-black' : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
            key={location.id}
            onClick={() => setLocationId(location.id)}
            type="button"
          >
            {location.label}
          </button>
        );
      })}
    </div>
  );
}

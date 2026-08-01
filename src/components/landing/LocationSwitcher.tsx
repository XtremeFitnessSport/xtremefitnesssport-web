'use client';

import { useGymLocation, type GymLocationId } from '@/context/GymLocationContext';

const locations: { id: GymLocationId; label: string; shortLabel: string }[] = [
  { id: 'tarapoto', label: 'Tarapoto', shortLabel: 'TAR' },
  { id: 'pucallpa', label: 'Pucallpa', shortLabel: 'PUC' },
];

export function LocationSwitcher({ compact = false }: { compact?: boolean }) {
  const { locationId, setLocationId } = useGymLocation();

  return (
    <div
      aria-label="Seleccionar sede"
      className="location-switcher flex max-w-full items-center rounded-full border border-white/15 bg-black/70 p-1 shadow-[0_0_30px_rgba(0,0,0,.5)]"
      role="group"
    >
      {locations.map((location) => {
        const isActive = location.id === locationId;
        return (
          <button
            aria-pressed={isActive}
            className={`min-w-0 rounded-full px-2.5 py-2 font-sport text-[10px] font-black uppercase tracking-[0.08em] transition-all min-[390px]:px-3 min-[390px]:text-xs sm:px-4 sm:tracking-[0.12em] ${
              isActive ? 'bg-x-neon text-black shadow-[0_0_18px_rgba(24,240,0,.35)]' : 'text-gray-400 hover:text-white'
            }`}
            key={location.id}
            onClick={() => setLocationId(location.id)}
            type="button"
          >
            <span className={compact ? 'hidden 2xl:inline' : ''}>{location.label}</span>
            {compact ? <span className="2xl:hidden">{location.shortLabel}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

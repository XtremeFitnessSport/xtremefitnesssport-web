type Props = {
  city: string;
  coordinates: string;
  mapUrl: string;
};

export function LocationMap({ city, coordinates, mapUrl }: Props) {
  return (
    <div className="mt-6">
      <iframe
        title={`Mapa de Xtreme Fitness ${city}`}
        src={`https://maps.google.com/maps?q=${encodeURIComponent(coordinates)}&z=16&output=embed`}
        className="h-56 w-full border-0 sm:h-64"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <a className="mt-3 inline-flex min-h-11 items-center text-small text-x-neon underline underline-offset-4" href={mapUrl} target="_blank" rel="noopener noreferrer">
        Abrir en Google Maps ↗
      </a>
    </div>
  );
}

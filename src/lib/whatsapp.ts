import type { GymLocationId } from "@/context/GymLocationContext";
import { getLocationContent } from "@/data/locationContent";

export function whatsappHref(locationId: GymLocationId, lines: string[]) {
  const location = getLocationContent(locationId);
  return `https://wa.me/${location.whatsapp}?text=${encodeURIComponent(
    [
      `Hola Xtreme Fitness. Me interesa entrenar en la sede ${location.city}.`,
      "",
      ...lines,
      "",
      "¿Me confirman la disponibilidad, el importe total a pagar y los pasos para inscribirme?",
      "Consulta desde xtremefitnesssport.com",
    ].join("\n"),
  )}`;
}

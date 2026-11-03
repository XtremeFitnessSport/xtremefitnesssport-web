import { images } from '@/assets/images';
import type { GymLocationId } from '@/context/GymLocationContext';

export const locationContent = {
  tarapoto: {
    id: 'tarapoto',
    city: 'Tarapoto',
    region: 'San Martín',
    eyebrow: 'Tarapoto Power',
    heroTitle: 'CONSTRUYE FUERZA.',
    heroAccent: 'GANA MÚSCULO.',
    heroDescription:
      'Entrenamiento semipersonalizado, horarios puntuales y trabajo adaptado a tu perfil. Desde personas cotidianas hasta atletas de alto rendimiento.',
    status: 'SEDE ACTIVA',
    openingLabel: null,
    identityTitle: 'ENERGÍA DE',
    identityCity: 'TARAPOTO',
    identityDescription:
      'Nacimos para los que no temen al calor ni al esfuerzo. Disciplina amazónica, técnica y alto rendimiento en cada sesión.',
    identityTags: ['Fuerza amazónica', 'Modo Xtreme', 'Calor y poder'],
    identityStamp: 'HECHO EN LA SELVA',
    address: 'Las Dalias 140, cuadra 2 Los Olivos, Urb. Los Jardines',
    cityLine: 'Tarapoto, Perú, 22200',
    mapUrl: 'https://maps.app.goo.gl/RLBKeGjDaJMQtAjs7',
    mapCoordinates: '-6.4941741,-76.3704364',
    phone: '932 471 911',
    whatsapp: '51932471911',
    email: 'fernandoledesma76@gmail.com',
    hours: ['Lun – Vie: 5:00 AM – 10:00 PM', 'Sábados: 6:00 AM – 2:00 PM', 'Domingos: descanso'],
    gallery: [
      { title: 'Alta intensidad', category: 'Tarapoto', image: images.gallery.altaIntensidad[0], featured: true },
      { title: 'Circuito explosivo', category: 'Tarapoto', image: images.gallery.altaIntensidad[1] },
      { title: 'Potencia Xtreme', category: 'Tarapoto', image: images.gallery.altaIntensidad[2] },
      { title: 'Ritmo fuerte', category: 'Tarapoto', image: images.gallery.altaIntensidad[3] },
      { title: 'Resistencia', category: 'Tarapoto', image: images.gallery.altaIntensidad[4] },
      { title: 'Modo intenso', category: 'Tarapoto', image: images.gallery.altaIntensidad[5] },
      { title: 'Cierre de circuito', category: 'Tarapoto', image: images.gallery.altaIntensidad[6] },
    ],
    testimonials: [
      {
        quote: 'Lo que más me gusta es que no te dejan entrenar por entrenar. Hay guía, exigencia y avance real cada semana.',
        author: 'CLIENTE XTREME · TARAPOTO',
        accent: 'neon' as const,
      },
      {
        quote: 'El ambiente tiene otra vibra. Es intenso, ordenado y te motiva a dar más de lo que creías que podías.',
        author: 'USUARIO FRECUENTE · TARAPOTO',
        accent: 'white' as const,
      },
      {
        quote: 'No es el típico gimnasio. Se siente enfocado, dinámico y con mucha energía de nuestra selva.',
        author: 'ALUMNO XTREME · TARAPOTO',
        accent: 'neon' as const,
      },
    ],
  },
  pucallpa: {
    id: 'pucallpa',
    city: 'Pucallpa',
    region: 'Ucayali',
    eyebrow: 'Pucallpa Power',
    heroTitle: 'PUCALLPA ENTRA',
    heroAccent: 'EN MODO XTREME.',
    heroDescription:
      'Entrena con guía, técnica y una rutina para tu nivel. Activa tu modo Xtreme en Pucallpa.',
    status: 'SEDE ACTIVA',
    openingLabel: null,
    identityTitle: 'ENERGÍA DE',
    identityCity: 'PUCALLPA',
    identityDescription:
      'Entrenamiento con propósito, acompañamiento real y la potencia de la Amazonía. Somos Xtreme en Ucayali.',
    identityTags: ['Potencia ucayalina', 'Comunidad Xtreme', 'Modo Xtreme'],
    identityStamp: 'PUCALLPA SE ACTIVA',
    address: 'Ubicación oficial disponible en Google Maps',
    cityLine: 'Pucallpa, Ucayali, Perú',
    mapUrl: 'https://maps.app.goo.gl/2STfQBQBxn9HNTtP9',
    mapCoordinates: '-8.3728072,-74.5637434',
    phone: '932 471 911',
    whatsapp: '51932471911',
    email: 'fernandoledesma76@gmail.com',
    hours: ['Horarios y disponibilidad: consulta por WhatsApp', 'Agenda sujeta a programación de sede'],
    gallery: [
      { title: 'Así es Xtreme Pucallpa', category: 'Pucallpa', image: images.locations.pucallpa.facade, featured: true },
      { title: 'Máquinas y fuerza', category: 'Pucallpa', image: images.locations.pucallpa.machines },
      { title: 'Nuestra fachada', category: 'Pucallpa', image: images.locations.pucallpa.facadeDay },
      { title: 'Recepción y espacios', category: 'Pucallpa', image: images.locations.pucallpa.reception },
      { title: 'Zona de comedor', category: 'Pucallpa', image: images.locations.pucallpa.dining },
    ],
    testimonials: [],
  },
} satisfies Record<GymLocationId, Record<string, unknown>>;

export function getLocationContent(locationId: GymLocationId) {
  return locationContent[locationId];
}

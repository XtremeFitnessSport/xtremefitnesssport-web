import { images } from '@/assets/images';

export const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL ?? 'https://xtremefitnesssport.web.app';

export const navLinks = [
  { label: 'Precios y planes', href: '/planes' },
  { label: 'Horarios', href: '/planes#horarios-clases' },
  { label: 'Sedes y ubicación', href: '/sedes' },
  { label: 'Entrenamiento', href: '/#programas' },
  { label: 'Resultados', href: '/#resultados' },
];

export const exploreLinks = [
  { label: 'Testimonios', href: '/#testimonios' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Consejos fitness', href: '/#consejos' },
  { label: 'Educación del coach', href: '/#capacitaciones' },
  { label: 'Contacto', href: '/#contacto' },
];

export const highlights = ['FUERZA MUSCULAR', 'SEMIPERSONALIZADO', 'PERFIL INDIVIDUAL'];

export const marqueeItems = ['FUERZA + MUSCULO', 'HORARIOS PUNTUALES', 'ATLETAS XTREME', 'XTREME TARAPOTO'];

export const trainingFeatures = [
  {
    title: 'FUERZA Y MUSCULO',
    description:
      'Entrenamientos enfocados en fuerza, construcción muscular y técnica correcta para progresar con seguridad.',
  },
  {
    title: 'SEMIPERSONALIZADO',
    description:
      'Trabajamos con entrenadores, clientes y horarios puntuales para guiar cada sesión según tu objetivo.',
  },
  {
    title: 'PERFIL DE PERSONA',
    description:
      'Adaptamos el entrenamiento a personas cotidianas, principiantes, alumnos con complejidades y atletas avanzados.',
  },
];

export const experienceSteps = [
  'AQUI NO SE IMPROVISA.',
  'CADA CIRCUITO CUENTA.',
  'TU PROGRESO SE TRABAJA.',
];

export const programs = [
  {
    title: 'FUERZA Y MUSCULO',
    description: 'Base técnica para ganar fuerza, masa muscular y control del movimiento.',
    image: images.gallery.altaIntensidad[0],
  },
  {
    title: 'SEMIPERSONALIZADO',
    description: 'Entrenamiento guiado con correcciones, asistencia y seguimiento por coach.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'ALTO RENDIMIENTO',
    description: 'Horarios apartados para peleadores, futbolistas y atletas competitivos.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'ADAPTADO A TU PERFIL',
    description: 'Trabajo progresivo para personas cotidianas y alumnos con necesidades específicas.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
  },
];

export const xtremePlans = [
  {
    id: 'strong',
    name: 'STRONG',
    frequency: '4 días a la semana',
    days: 'Lunes, Martes, Jueves, Viernes',
    price: 'S/150',
    priceLabel: 'mensual',
    accent: 'white',
    policy: 'No aplica congelamiento',
    promotionsTitle: 'Promociones Plan Strong',
    promotions: [
      { period: '2 meses', price: 'S/250' },
      { period: '3 meses', price: 'S/360' },
      { period: '4 meses', price: 'S/450' },
      { period: '6 meses', price: 'S/600' },
      { period: 'Año (13 meses)', price: 'S/1000' },
    ],
    features: [
      'Entrenamiento de fuerza y construcción muscular',
      'Rutinas adaptadas al perfil de cada persona',
      'Entrenamiento semipersonalizado',
      'Coaches formados por Fernando',
    ],
  },
  {
    id: 'super-strong',
    name: 'SÚPER STRONG',
    frequency: '5 días a la semana',
    days: 'Lunes a Viernes',
    price: 'S/180',
    priceLabel: 'mensual',
    accent: 'gold',
    policy: 'No aplica congelamiento',
    promotionsTitle: 'Promociones Plan Súper Strong',
    promotions: [
      { period: '2 meses', price: 'S/300' },
      { period: '3 meses', price: 'S/420' },
      { period: '4 meses', price: 'S/540' },
      { period: '6 meses', price: 'S/720' },
      { period: 'Año (13 meses)', price: 'S/1200' },
    ],
    features: [
      'Mayor frecuencia y seguimiento semanal',
      'Control de asistencia y progreso',
      'Circuitos Xtreme según programación',
      'Enfoque técnico para cambios visibles',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    frequency: '5 días de entrenamiento semi-personalizado',
    days: 'Asistencia libre todos los sábados',
    price: 'S/200',
    priceLabel: 'mensual',
    accent: 'premium',
    policy: 'Beneficios sujetos a disponibilidad y condiciones del plan.',
    previousPrice: 'S/250',
    promotionsTitle: 'Beneficios Plan Premium',
    promotions: [
      { period: 'Asesoría nutricional', price: 'Incluida' },
      { period: '2 invitados al mes', price: 'Incluido' },
      { period: 'Sábados libres', price: 'Incluido' },
    ],
    features: [
      '5 días de entrenamiento semi-personalizado',
      'Asesoría nutricional',
      'Puedes traer 2 invitados al mes',
      'Asistencia libre todos los sábados',
    ],
  },
];

export const classSchedule = [
  {
    day: 'LUN - VIE',
    focus: 'Horario general',
    time: '5:00 AM - 10:00 PM',
    intensity: 'Todos',
  },
  {
    day: 'SÁBADOS',
    focus: 'Entrenamiento y evaluaciones',
    time: '6:00 AM - 2:00 PM',
    intensity: 'Programado',
  },
  {
    day: 'DOMINGOS',
    focus: 'Descanso Xtreme',
    time: 'Sin atención',
    intensity: 'Descanso',
  },
];

export const studentSchedule = {
  title: 'Horario estudiantes',
  label: 'Desde junio',
  description: 'Bloques de entrenamiento a menor precio para estudiantes.',
  hours: ['10:00 AM', '11:00 AM', '12:00 M', '1:00 PM', '2:00 PM'],
};

export const weeklyPlanSchedules = [
  {
    group: 'Mujeres',
    plan: 'Plan Strong',
    days: [
      { day: 'Lunes', focus: 'Tren superior' },
      { day: 'Martes', focus: 'Tren inferior' },
      { day: 'Miércoles', focus: 'Descanso' },
      { day: 'Jueves', focus: 'Full body e intensidad' },
      { day: 'Viernes', focus: 'Tren inferior' },
    ],
  },
  {
    group: 'Mujeres',
    plan: 'Súper Strong y Premium',
    days: [
      { day: 'Lunes', focus: 'Tren inferior' },
      { day: 'Martes', focus: 'Tren superior' },
      { day: 'Miércoles', focus: 'Tren inferior' },
      { day: 'Jueves', focus: 'Full body e intensidad' },
      { day: 'Viernes', focus: 'Tren inferior' },
    ],
  },
  {
    group: 'Hombres',
    plan: 'Plan Strong',
    days: [
      { day: 'Lunes', focus: 'Tren superior' },
      { day: 'Martes', focus: 'Tren inferior y abs' },
      { day: 'Miércoles', focus: 'Descanso' },
      { day: 'Jueves', focus: 'Tren superior' },
      { day: 'Viernes', focus: 'Tren inferior y abs' },
    ],
  },
  {
    group: 'Hombres',
    plan: 'Súper Strong y Premium',
    days: [
      { day: 'Lunes', focus: 'Tren superior' },
      { day: 'Martes', focus: 'Tren inferior y abs' },
      { day: 'Miércoles', focus: 'Intensidad' },
      { day: 'Jueves', focus: 'Tren superior' },
      { day: 'Viernes', focus: 'Tren inferior y abs' },
    ],
  },
];

export const coaches = [
  {
    name: 'Coach de Fuerza',
    specialty: 'Fuerza y construcción muscular',
    description: 'Corrige postura, carga y ejecución para desarrollar músculo con una técnica sostenible.',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Coach Semipersonalizado',
    specialty: 'Adaptación por perfil',
    description: 'Acompaña a personas cotidianas, principiantes y alumnos con complejidades durante su proceso.',
    image: 'https://images.unsplash.com/photo-1609899464726-209befaac5bc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Coach Alto Rendimiento',
    specialty: 'Atletas competitivos',
    description: 'Prepara sesiones apartadas para peleadores, futbolistas y atletas que requieren exigencia específica.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
  },
];

export const performancePrograms = [
  {
    title: 'Personas cotidianas',
    description:
      'Entrenamiento progresivo para quienes quieren verse mejor, sentirse más fuertes y construir disciplina sin improvisar.',
  },
  {
    title: 'Personas con complejidades',
    description:
      'Ajustamos cargas, ejercicios, descansos y ritmo según condición, experiencia, técnica y respuesta del alumno.',
  },
  {
    title: 'Atletas de alto rendimiento',
    description:
      'Bloques personalizados en horarios apartados para peleadores, futbolistas y deportistas que necesitan exigencia específica.',
  },
];

export const performanceAdjustments = ['Carga correcta', 'Ritmo medido', 'Acompañamiento real'];

export const fitnessTips = [
  {
    title: 'Prioriza la técnica antes que el peso',
    description: 'Una repetición limpia vale más que cargar pesado sin control. La técnica sostiene el progreso.',
    tag: 'Fuerza',
  },
  {
    title: 'Confirma tu asistencia y respeta tu horario',
    description: 'Los horarios puntuales permiten que coaches y alumnos trabajen con orden y mejor seguimiento.',
    tag: 'Organización',
  },
  {
    title: 'Combina entrenamiento, descanso y alimentación',
    description: 'El cambio físico no depende solo del gym. Dormir, comer bien y sostener el plan marca la diferencia.',
    tag: 'Fitness',
  },
];

export const transformations = [
  {
    title: 'Fuerza visible',
    before: 'Inicio con poca base técnica',
    after: 'Más control, postura y cargas progresivas',
  },
  {
    title: 'Construcción muscular',
    before: 'Rutinas sin estructura',
    after: 'Plan enfocado en músculo y asistencia constante',
  },
  {
    title: 'Disciplina semanal',
    before: 'Entrenamiento irregular',
    after: 'Horarios puntuales y seguimiento semipersonalizado',
  },
];

export const coachEducation = [
  'Capacitaciones para coaches lideradas por Fernando.',
  'Formación en técnica, corrección, seguimiento y trato al alumno.',
  'Coaches capacitados con capacidad de formación internacional.',
];

export const galleryImages = [
  {
    title: 'Alta intensidad',
    category: 'Alta intensidad',
    image: images.gallery.altaIntensidad[0],
    featured: true,
  },
  {
    title: 'Circuito explosivo',
    category: 'Alta intensidad',
    image: images.gallery.altaIntensidad[1],
  },
  {
    title: 'Potencia Xtreme',
    category: 'Alta intensidad',
    image: images.gallery.altaIntensidad[2],
  },
  {
    title: 'Ritmo fuerte',
    category: 'Alta intensidad',
    image: images.gallery.altaIntensidad[3],
  },
  {
    title: 'Resistencia',
    category: 'Alta intensidad',
    image: images.gallery.altaIntensidad[4],
  },
  {
    title: 'Modo intenso',
    category: 'Alta intensidad',
    image: images.gallery.altaIntensidad[5],
  },
  {
    title: 'Cierre de circuito',
    category: 'Alta intensidad',
    image: images.gallery.altaIntensidad[6],
  },
];

export const faqs = [
  {
    question: '¿Necesito experiencia previa para entrenar?',
    answer: 'No. Adaptamos el trabajo a tu nivel y corregimos la técnica para que avances con seguridad.',
  },
  {
    question: '¿Qué incluye el entrenamiento semipersonalizado?',
    answer:
      'Incluye guía del coach, correcciones durante la sesión, estructura por objetivos y adaptación al perfil de cada persona.',
  },
  {
    question: '¿Tienen trabajo para atletas?',
    answer:
      'Sí. Los atletas de alto rendimiento, como peleadores y futbolistas, trabajan en horarios apartados con enfoque personalizado.',
  },
  {
    question: '¿Cómo se organizan los circuitos?',
    answer:
      'Los circuitos se programan una vez por semana para hombres y dos veces por semana para mujeres, con confirmación de asistencia.',
  },
];

export const gymLocations = [
  {
    id: 'los-jardines',
    name: 'Xtreme Fitness Los Jardines',
    district: 'Tarapoto',
    address: 'Las Dalias 140, cuadra 2 Los Olivos, Urb. Los Jardines, Tarapoto, Peru, 22200',
    reference: 'Urb. Los Jardines, Tarapoto, San Martin, Peru',
    schedule: 'Lun - Vie: 5:00 AM - 10:00 PM / Sáb: 6:00 AM - 2:00 PM',
    phone: '932 471 911',
    email: 'fernandoledesma76@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/RLBKeGjDaJMQtAjs7',
    steps: [
      'Dirígete a la Urb. Los Jardines en Tarapoto.',
      'Ubica Las Dalias 140, cuadra 2 Los Olivos.',
      'Busca el local de Xtreme Fitness y consulta por tu plan.',
    ],
  },
];

export const contactInfo = {
  phone: '932 471 911',
  whatsapp: '51932471911',
  email: 'fernandoledesma76@gmail.com',
  address: 'Las Dalias 140, cuadra 2 Los Olivos, Urb. Los Jardines',
  city: 'Tarapoto, Peru, 22200',
  region: 'San Martin, Peru',
};

export const hashtags = ['#TarapotoPower', '#FuerzaAmazonica'];

export const socialLinks = [
  { label: 'FB', href: '#' },
  { label: 'IG', href: '#' },
  { label: 'TK', href: '#' },
];

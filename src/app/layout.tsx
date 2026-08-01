import type { Metadata } from 'next';
import { Barlow_Condensed, Inter, Permanent_Marker } from 'next/font/google';
import { locationContent } from '@/data/locationContent';
import { siteName, siteUrl } from '@/lib/site';
import { GymLocationProvider } from '@/context/GymLocationContext';
import { ScrollExperience } from '@/components/ScrollExperience';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sport',
});

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playful',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'Xtreme Fitness | Gimnasios en Tarapoto y Pucallpa',
    template: '%s | Xtreme Fitness',
  },
  description:
    'Entrenamiento de fuerza y construcción muscular en Tarapoto y Pucallpa. Entrena de forma semipersonalizada con la energía Xtreme.',
  keywords: [
    'gimnasio Tarapoto',
    'Xtreme Fitness',
    'Xtreme Fitness Tarapoto',
    'entrenamiento semipersonalizado Tarapoto',
    'fuerza Tarapoto',
    'construccion muscular Tarapoto',
    'atletas alto rendimiento Tarapoto',
    'fitness Tarapoto',
    'gym Tarapoto',
    'planes de gimnasio Tarapoto',
    'entrenamiento funcional Tarapoto',
    'Urb. Los Jardines Tarapoto',
    'gimnasio Pucallpa',
    'Xtreme Fitness Pucallpa',
    'entrenamiento semipersonalizado Pucallpa',
  ],
  authors: [{ name: 'Xtreme Fitness' }],
  creator: 'Xtreme Fitness',
  publisher: 'Xtreme Fitness',
  category: 'Fitness',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: '/',
    siteName,
    title: 'Xtreme Fitness | Tarapoto y Pucallpa',
    description:
      'Entrena fuerza y construcción muscular en nuestras sedes de Tarapoto y Pucallpa.',
    images: [
      {
        url: '/icon.png',
        width: 720,
        height: 720,
        alt: 'Logo de Xtreme Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xtreme Fitness | Tarapoto y Pucallpa',
    description:
      'Gimnasios en Tarapoto y Pucallpa con fuerza, músculo y entrenamiento semipersonalizado.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HealthClub',
      name: 'Xtreme Fitness Tarapoto',
      image: `${siteUrl}/icon.png`,
      url: siteUrl,
      telephone: `+51 ${locationContent.tarapoto.phone}`,
      email: locationContent.tarapoto.email,
      priceRange: 'S/150 - S/200',
      address: {
        '@type': 'PostalAddress',
        streetAddress: locationContent.tarapoto.address,
        addressLocality: 'Tarapoto',
        addressRegion: 'San Martín',
        postalCode: '22200',
        addressCountry: 'PE',
      },
      openingHours: ['Mo-Fr 05:00-22:00', 'Sa 06:00-14:00'],
      hasMap: locationContent.tarapoto.mapUrl,
      geo: { '@type': 'GeoCoordinates', latitude: -6.4941741, longitude: -76.3704364 },
    },
    {
      '@type': 'HealthClub',
      name: 'Xtreme Fitness Pucallpa',
      image: `${siteUrl}/icon.png`,
      url: locationContent.pucallpa.mapUrl,
      telephone: `+51 ${locationContent.pucallpa.phone}`,
      email: locationContent.pucallpa.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pucallpa',
        addressRegion: 'Ucayali',
        addressCountry: 'PE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: -8.3728072, longitude: -74.5637434 },
      hasMap: locationContent.pucallpa.mapUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          type="application/ld+json"
        />
      </head>
      <body className={`${inter.variable} ${barlowCondensed.variable} ${permanentMarker.variable} antialiased`}>
        <GymLocationProvider>
          <ScrollExperience />
          {children}
        </GymLocationProvider>
      </body>
    </html>
  );
}

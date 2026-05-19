import type { Metadata } from 'next';
import { Barlow_Condensed, Inter, Permanent_Marker } from 'next/font/google';
import { contactInfo } from '@/data/landing';
import { siteName, siteUrl } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['700', '900'],
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
    default: 'Xtreme Fitness Tarapoto | Fuerza, Músculo y Entrenamiento Semipersonalizado',
    template: '%s | Xtreme Fitness Tarapoto',
  },
  description:
    'Gimnasio en Tarapoto con entrenamiento de fuerza, construcción muscular, semipersonalizado y trabajo para atletas de alto rendimiento.',
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
  ],
  authors: [{ name: 'Xtreme Fitness Tarapoto' }],
  creator: 'Xtreme Fitness Tarapoto',
  publisher: 'Xtreme Fitness Tarapoto',
  category: 'Fitness',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: '/',
    siteName,
    title: 'Xtreme Fitness Tarapoto | Fuerza, Músculo y Entrenamiento Semipersonalizado',
    description:
      'Entrena fuerza y construcción muscular en Tarapoto con guía semipersonalizada y horarios puntuales.',
    images: [
      {
        url: '/icon.png',
        width: 720,
        height: 720,
        alt: 'Logo de Xtreme Fitness Tarapoto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xtreme Fitness Tarapoto',
    description:
      'Gimnasio en Tarapoto con fuerza, construcción muscular, semipersonalizado y alto rendimiento.',
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
  '@type': 'HealthClub',
  name: 'Xtreme Fitness Tarapoto',
  image: `${siteUrl}/icon.png`,
  url: siteUrl,
  telephone: `+51 ${contactInfo.phone}`,
  email: contactInfo.email,
  priceRange: 'S/150 - S/180',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactInfo.address,
    addressLocality: 'Tarapoto',
    addressRegion: 'San Martin',
    postalCode: '22200',
    addressCountry: 'PE',
  },
  openingHours: ['Mo-Fr 05:00-22:00', 'Sa 06:00-14:00'],
  areaServed: ['Tarapoto', 'San Martin', 'Peru'],
  sameAs: [],
  description:
    'Gimnasio en Tarapoto con entrenamiento de fuerza, construcción muscular, semipersonalizado y preparación para atletas.',
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
        {children}
      </body>
    </html>
  );
}

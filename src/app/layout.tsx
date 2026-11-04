import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Permanent_Marker } from "next/font/google";
import { locationContent } from "@/data/locationContent";
import { images } from "@/assets/images";
import { socialLinks } from "@/data/landing";
import { trainingGoals, trainingLevels } from "@/data/training";
import { siteName, siteUrl } from "@/lib/site";
import { GymLocationProvider } from "@/context/GymLocationContext";
import { ScrollExperience } from "@/components/ScrollExperience";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sport",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playful",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Gimnasio en Tarapoto y Pucallpa, Perú | Xtreme Fitness",
    template: "%s | Xtreme Fitness",
  },
  description:
    "Conoce Xtreme Fitness en Tarapoto y Pucallpa, selva del Perú. Máquinas, planes, precios y horarios. Entrenamiento desde principiantes hasta alto rendimiento.",
  keywords: [
    "gimnasio Tarapoto",
    "Xtreme Fitness",
    "Xtreme Fitness Tarapoto",
    "entrenamiento semipersonalizado Tarapoto",
    "fuerza Tarapoto",
    "construccion muscular Tarapoto",
    "atletas alto rendimiento Tarapoto",
    "fitness Tarapoto",
    "gym Tarapoto",
    "planes de gimnasio Tarapoto",
    "entrenamiento funcional Tarapoto",
    "Urb. Los Jardines Tarapoto",
    "gimnasio Pucallpa",
    "Xtreme Fitness Pucallpa",
    "entrenamiento semipersonalizado Pucallpa",
    "gimnasio selva peruana",
    "gimnasio San Martín",
    "gimnasio Ucayali",
    "gimnasio para principiantes",
    "entrenamiento intermedio y avanzado",
    "reacondicionamiento físico",
    "entrenamiento adaptado",
    "preparación física deportiva",
    ...trainingGoals,
    ...trainingLevels.map((level) => level.name.toLocaleLowerCase("es")),
  ],
  authors: [{ name: "Xtreme Fitness" }],
  creator: "Xtreme Fitness",
  publisher: "Xtreme Fitness",
  category: "Fitness",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName,
    title: "Xtreme Fitness | Tu gimnasio en Tarapoto y Pucallpa",
    description:
      "Máquinas, precios claros y entrenamiento con guía para todos los niveles. Conoce nuestras sedes en la Amazonía peruana.",
    images: [
      {
        url: "/opengraph-image?v=logo",
        width: 1200,
        height: 630,
        alt: "Xtreme Fitness: gimnasio y entrenamiento para todos los niveles en Tarapoto y Pucallpa, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtreme Fitness | Tarapoto y Pucallpa",
    description:
      "Gimnasios en Tarapoto y Pucallpa con fuerza, músculo y entrenamiento semipersonalizado.",
    images: ["/opengraph-image?v=logo"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      sameAs: socialLinks.map((link) => link.href),
      areaServed: ["Tarapoto, San Martín, Perú", "Pucallpa, Ucayali, Perú"],
      knowsAbout: [
        ...trainingGoals,
        ...trainingLevels.map((level) => level.name),
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "es-PE",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "HealthClub",
      "@id": `${siteUrl}/sedes/tarapoto/#gym`,
      name: "Xtreme Fitness Tarapoto",
      image: `${siteUrl}${images.gallery.altaIntensidad[5].src}`,
      url: `${siteUrl}/sedes/tarapoto/`,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      description:
        "Gimnasio en Tarapoto con máquinas, entrenamiento de fuerza, funcional y semipersonalizado. Principiantes, intermedios, avanzados y alto rendimiento.",
      telephone: `+51 ${locationContent.tarapoto.phone}`,
      email: locationContent.tarapoto.email,
      priceRange: "S/150 - S/200",
      address: {
        "@type": "PostalAddress",
        streetAddress: locationContent.tarapoto.address,
        addressLocality: "Tarapoto",
        addressRegion: "San Martín",
        postalCode: "22200",
        addressCountry: "PE",
      },
      openingHours: ["Mo-Fr 05:00-22:00", "Sa 06:00-14:00"],
      hasMap: locationContent.tarapoto.mapUrl,
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.4941741,
        longitude: -76.3704364,
      },
    },
    {
      "@type": "HealthClub",
      "@id": `${siteUrl}/sedes/pucallpa/#gym`,
      name: "Xtreme Fitness Pucallpa",
      image: `${siteUrl}/icon.png`,
      url: `${siteUrl}/sedes/pucallpa/`,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      description:
        "Gimnasio en Pucallpa con entrenamiento semipersonalizado para principiantes, intermedios, avanzados y atletas de alto rendimiento.",
      telephone: `+51 ${locationContent.pucallpa.phone}`,
      email: locationContent.pucallpa.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pucallpa",
        addressRegion: "Ucayali",
        addressCountry: "PE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.3728072,
        longitude: -74.5637434,
      },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          type="application/ld+json"
        />
      </head>
      <body
        className={`${inter.variable} ${barlowCondensed.variable} ${permanentMarker.variable} antialiased`}
      >
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <GymLocationProvider>
          <ScrollExperience />
          {children}
        </GymLocationProvider>
      </body>
    </html>
  );
}

# Tipografía XTREME

La identidad usa Barlow Condensed para títulos y acciones, Inter para lectura y
Permanent Marker para acentos breves. Los archivos y pesos se cargan mediante
`next/font` en `src/app/layout.tsx`.

## Escala compartida

Los tokens viven en `src/app/globals.css`. Las utilidades semánticas se exponen
en `tailwind.config.ts`. Los tamaños usan rem y un componente fluido de viewport;
no se deben sustituir por tamaños distintos en cada dispositivo.

| Función | Token | Intervalo con raíz de 16 px |
| --- | --- | --- |
| Hero | `--type-hero` | 52–96 px |
| Título de sección | `--type-section` / `.gym-title` | 36–72 px |
| Título de tarjeta | `--type-card` / `text-card-title` | 22–32 px |
| Título sobre imagen | `--type-image-title` / `text-image-title` | 22–32 px |
| Descripción | `--type-body` / `text-body` | 16–18 px |
| Texto secundario y sobre imágenes | `--type-small` / `text-small`, `text-image-copy` | 14–15 px |
| Etiqueta breve | `--type-caption` / `text-caption` | 12–13 px |
| Acento manuscrito | `--type-accent` / `.font-playful` | 16–20 px |
| Acción o control | `--type-control` / `text-control` | 18–22 px |
| Precio destacado | `--type-price` / `text-price` | 44–72 px |

Las descripciones usan interlineado 1.65; los textos secundarios, 1.55;
los títulos de tarjetas e imágenes, aproximadamente 1.1. Los títulos principales
pueden usar líneas más compactas. Las descripciones extensas deben mantener
un ancho de lectura de hasta 65–75 caracteres.

## Color por función

| Función | Token | Color |
| --- | --- | --- |
| Título y lectura principal | `--text-primary` | `#f6f8f3` |
| Descripciones | `--text-body` / `text-copy` | `#d8ded3` |
| Notas y metadatos | `--text-secondary` / `text-secondary` | `#b8c3af` |
| Texto sobre fotografía | `--text-on-image` | `#ffffff` |
| Énfasis y acciones | `--neon-green` | `#18f000` |

Sobre paneles verdes, el texto debe ser oscuro. Sobre fotografías, usar blanco
y una base oscura detrás del texto; el color de la foto no garantiza contraste.
El verde se reserva para énfasis, estados y acciones.

## Adaptación

La escala tipográfica es continua; los cambios de distribución responden al
espacio disponible. Mantener tamaños en rem, ajuste de líneas y zoom del navegador.
Las tarjetas con texto sobre imágenes deben poder crecer cuando el texto ocupa
más líneas. Revisar especialmente anchos de 320, 360, 375, 390, 430, 768, 820,
1024, 1280, 1440 y 1920 px, orientación horizontal y zoom de 200 %.

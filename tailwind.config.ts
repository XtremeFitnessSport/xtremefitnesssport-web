import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neon: '#18F000',
        'x-neon': '#18F000',
        'x-gray': '#9CA3AF',
        'x-black': '#050505',
        'x-dark-green': '#06210A',
        'deep-black': '#050505',
        'dark-gray': '#0A0A0A',
      },
      fontFamily: {
        sport: ['var(--font-sport)', 'sans-serif'],
        playful: ['var(--font-playful)', 'cursive'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neon: '#18F000',
        'x-neon': '#18F000',
        'x-gray': 'var(--text-body)',
        copy: 'var(--text-body)',
        secondary: 'var(--text-secondary)',
        ink: 'var(--text-primary)',
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
      fontSize: {
        body: ['var(--type-body)', { lineHeight: '1.65' }],
        small: ['var(--type-small)', { lineHeight: '1.55' }],
        caption: ['var(--type-caption)', { lineHeight: '1.45' }],
        'card-title': ['var(--type-card)', { lineHeight: '1.1' }],
        'image-title': ['var(--type-image-title)', { lineHeight: '1.1' }],
        'image-copy': ['var(--type-small)', { lineHeight: '1.55' }],
        control: ['var(--type-control)', { lineHeight: '1.2' }],
        price: ['var(--type-price)', { lineHeight: '1' }],
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

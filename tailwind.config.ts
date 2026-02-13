import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crust: '#11111b',
        mantle: '#181825',
        base: '#1e1e2e',
        surface0: '#313244',
        surface1: '#45475a',
        surface2: '#585b70',
        overlay0: '#6c7086',
        overlay1: '#7f849c',
        subtext0: '#a6adc8',
        subtext1: '#bac2de',
        text: '#cdd6f4',
        mauve: '#cba6f7',
        blue: '#89b4fa',
        green: '#a6e3a1',
      },
      boxShadow: {
        glow: '0 0 40px rgba(203, 166, 247, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;

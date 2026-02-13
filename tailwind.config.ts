import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "midnight": "#0b1220",
        "aurora": "#7c5cff",
        "skyline": "#4cc9f0",
        "mist": "#eaf2ff"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 92, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

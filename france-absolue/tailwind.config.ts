import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#050e1c',
        ink:     '#030c1a',
        blue:    '#1f4ed8',
        'blue-light': '#4a7ef5',
        gold:    '#c8a84b',
        'gold-dim': 'rgba(200,168,75,0.15)',

        arsenal:      '#d54a36',
        statecraft:   '#3159a7',
        territories:  '#0787a7',
        sport:        '#1f55d5',
        epochs:       '#a44735',
        aesthetics:   '#a63f72',
        science:      '#2d7a4f',
        economy:      '#8b6914',
        francophonie: '#6b3fa0',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        display: ['clamp(3.5rem,6vw,7rem)', { lineHeight: '0.88', letterSpacing: '-0.07em' }],
        hero:    ['clamp(2.5rem,4.5vw,5.5rem)', { lineHeight: '0.90', letterSpacing: '-0.06em' }],
        section: ['clamp(1.8rem,3vw,3.5rem)', { lineHeight: '0.94', letterSpacing: '-0.05em' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg,#050e1c 0%,#0a1830 35%,#0d2040 60%,#071426 100%)',
        'grid-gold': `
          linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
        'scroll-line': 'scrollLine 2.5s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        ripple: {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        scrollLine: {
          '0%':   { width: '0%' },
          '50%':  { width: '100%' },
          '100%': { width: '0%' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%':  { transform: 'translate(-5%,-10%)' },
          '20%':  { transform: 'translate(-15%,5%)' },
          '30%':  { transform: 'translate(7%,-25%)' },
          '40%':  { transform: 'translate(-5%,25%)' },
          '50%':  { transform: 'translate(-15%,10%)' },
          '60%':  { transform: 'translate(15%,0%)' },
          '70%':  { transform: 'translate(0%,15%)' },
          '80%':  { transform: 'translate(3%,35%)' },
          '90%':  { transform: 'translate(-10%,10%)' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(200,168,75,0.3)',
        'gold-sm': '0 0 10px rgba(200,168,75,0.2)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
}

export default config

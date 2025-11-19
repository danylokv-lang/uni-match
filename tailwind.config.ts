import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          900: '#0b1533',
          800: '#0f1d4a',
          700: '#12225a'
        },
        neon: {
          blue: '#39C6FF',
          gold: '#FFD479'
        }
      },
      boxShadow: {
        neon: '0 0 10px rgba(57, 198, 255, 0.7), 0 0 20px rgba(57, 198, 255, 0.4)',
        gold: '0 0 10px rgba(255, 212, 121, 0.7), 0 0 20px rgba(255, 212, 121, 0.4)'
      },
      backgroundImage: {
        'snow-night': 'radial-gradient(ellipse at top, #0b1533 0%, #0f1d4a 50%, #0b1533 100%)'
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(110%)' }
        }
      },
      animation: {
        snow: 'snow 12s linear infinite'
      }
    }
  },
  plugins: [],
}
export default config

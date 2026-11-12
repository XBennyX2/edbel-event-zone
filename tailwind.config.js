/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060709',
          900: '#0B0D11',
          850: '#11141A',
          800: '#171B23',
          700: '#222733',
        },
        gold: {
          50: '#FDFCF7',
          100: '#F8F4E8',
          200: '#F0E5C9',
          300: '#E4CF9A',
          400: '#D5B56A',
          500: '#C59C3E', // signature luminous gold
          600: '#A9812A',
          700: '#87641B',
          800: '#644812',
          900: '#422F0A',
        },
        champagne: {
          50: '#FAF8F4',
          100: '#F5F0E8',
          200: '#EBE2D4',
          300: '#DECFC0',
          400: '#C7B49E',
        },
        rosewood: {
          900: '#2A0808',
          800: '#421010',
          500: '#A82B38',
        },
        emerald: {
          950: '#031C16',
          900: '#052E24',
          800: '#0A4234',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        amharic: ['"Noto Serif Ethiopic"', '"Nyala"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F8F4E8 0%, #D5B56A 50%, #A9812A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #F0E5C9 0%, #E4CF9A 25%, #FFF6DB 50%, #C59C3E 75%, #F0E5C9 100%)',
        'candlelight-radial': 'radial-gradient(circle at center, rgba(197, 156, 62, 0.18) 0%, rgba(11, 13, 17, 0) 70%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer-slow': 'shimmer 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

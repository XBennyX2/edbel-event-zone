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
          950: '#07080A',
          900: '#0C0E12',
          850: '#12151B',
          800: '#181C24',
          700: '#232834',
          600: '#343B4C',
        },
        brass: {
          300: '#E4CA7E',
          400: '#D4B35E',
          500: '#C29B38', // signature antique brass
          600: '#A47F24',
          700: '#836316',
        },
        ivory: {
          50: '#FAF9F5',
          100: '#F4F1EA',
          200: '#E8E3D7',
          300: '#D6CFC1',
          400: '#B8B0A0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        amharic: ['"Noto Serif Ethiopic"', '"Nyala"', 'serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        paper: '#FFFFFF',
        mist: '#F4F6F2',
        line: '#DDE2DB',
        // Text
        ink: '#18231D',
        body: '#48554D',
        muted: '#66726A',
        // Accent: the deep green of the velvet drapes and turf in Edbel's own setups
        leaf: {
          DEFAULT: '#1E4A38',
          dark: '#153628',
          soft: '#E7EEE9',
        },
        // The olive gold of the logo flower (decorative only; too light for text on white)
        gold: {
          DEFAULT: '#B9AA74',
          deep: '#7D6D35',
        },
        whatsapp: '#1FA855',
      },
      fontFamily: {
        sans: ['Jost', '"Noto Sans Ethiopic"', 'system-ui', 'sans-serif'],
        amharic: ['"Noto Sans Ethiopic"', 'Nyala', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

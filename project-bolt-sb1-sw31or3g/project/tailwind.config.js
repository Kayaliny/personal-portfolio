/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0E3159',
        'bg-deep': '#0B1420',
        'bg-secondary': '#101F30',
        teal: '#0F9388',
        'teal-light': '#35C9B7',
        'text-main': '#F7FAFC',
        secondary: '#A8B6C7',
        border: '#26384B',
        'bg-light': '#F5F8FC',
      },
      fontFamily: {
        heading: ['Manrope', 'Inter', 'sans-serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

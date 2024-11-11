/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        taviraj: ['Taviraj', 'serif'],
        prompt: ['"Prompt"', 'sans-serif']
      },
      colors: {
        'red': '#8E3635',
        'purple': '#B9BDFD',
        'grey': '#1d1d1f',
        'blue': '#479DFF',
      },
      spacing: {
        '5px': '5px',
        '-10px': '-10px',
        '50px': '50px',
        '25px': '25px',
      },
      inset: {
        '342px': '342px',
        '330px': '330px'
      },
      margin: {
        '350px' : '350px',
      }
    },
  },
  plugins: [],
}
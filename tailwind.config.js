/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.{js,ts,jsx,tsx}",
    "./extensions/**/*.{liquid,html}",
    "./extensions/**/**/*.{liquid,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-'
}


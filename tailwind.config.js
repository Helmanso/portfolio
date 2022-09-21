/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kali : {
          100: '#253749',
          200: '#22252E',
          300: '#1895CF'
        }}
    },
  },
  plugins: [],
}
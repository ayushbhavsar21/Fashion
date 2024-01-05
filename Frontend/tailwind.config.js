/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAF5FF",   //lavender white - website background
        secondary: "#3AA39F",  // buttons
        tertiary: "#F0EADC",   // landing page cards
        quaternary: "#9E8367",  //footer
        imperialred: "#70002B"
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
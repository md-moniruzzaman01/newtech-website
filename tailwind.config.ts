<<<<<<< HEAD
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0DADE0",
        secondary: "#101250",
        disable: "#707070",
        gray: "#707070",
        dark: "#353535",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
=======
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0DADE0',
        secondary: '#101250',
        disable: '#707070',
        gray: '#707070',
        dark: '#353535',
        lightgray: '#F5F5F5',
        btngray: '#15377D80',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
>>>>>>> 0ca3b1baf3b942d49ea9b5ffbb79c6967b464a7b
      },
      backgroundImage: {
        hero_image: "url('/computer repair.jpg')",
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
  darkMode: "class",
=======
  darkMode: 'class',
>>>>>>> 0ca3b1baf3b942d49ea9b5ffbb79c6967b464a7b
};
export default config;

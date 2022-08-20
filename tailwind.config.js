/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
      boxShadow: {
        sp1: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      colors: {
        'post-card': 'rgba( 255, 255, 255, 0.87 )',
        'featured-card': 'rgba( 223, 80, 181, 0.5 )',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

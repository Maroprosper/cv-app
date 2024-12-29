/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "index.html", // Paths to your React files
  ],
  theme: {
    extend: {}, // Extend default theme if needed
  },
  plugins: [], // Add plugins like forms or typography here
};

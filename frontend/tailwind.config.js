/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bleuClair: "#C9FFFF",
      // cafe: "#6F323A",
      noir: "#000",
      blanc: "#fff",
      rouge: "#B60000",
      // bleue: "#0D08FF"
    }
  },
  extend: {
    backgroundImage: {
      'banner1': "url('/assets/img/banner1.png')",
      'fond_noir': "url('/assets/img/fond_noir.png')",
    }
  },
  plugins: [],
}

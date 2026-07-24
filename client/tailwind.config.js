/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basalte: "#151210",
        braise: "#C4491D",
        rouille: "#8B3A2B",
        cendre: "#E8E1D3",
        toxique: "#8FA31E",
      },
    },
  },
  plugins: [],
};

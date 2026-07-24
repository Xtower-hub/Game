/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

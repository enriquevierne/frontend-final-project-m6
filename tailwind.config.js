/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand1: "#4529E6",
        brand2: "#5126ea",
        brand3: "#b0a6f0",
        brand4: "#edeafd",
        grey0: "#fdfdfd",
        grey1: "#f8f9fa",
        grey2: "#f1f3f5",
        grey3: "#e9ecef",
        grey4: "#dee2e6",
        grey5: "#ced4da",
        grey6: "#adb5bd",
        grey7: "#868e96",
        grey8: "#495057",
        grey9: "#212529",
        grey10: "#080d0d",
        alert1: "#cd2b31",
        alert2: "#fdd8d8",
        alert3: "#ffe5e5",
        success1: "#18794e",
        success2: "#ccebd7",
        success3: "#ddf3e4",
        random1: "#e34d8c",
        random2: "#c04277",
        random3: "#7d2a4d",
        random4: "#7000ff",
        random5: "#6200e3",
        random6: "#36007d",
        random7: "#349974",
        random8: "#2a7d5f",
        random9: "#153d2e",
        random10: "#6100ff",
        random11: "#5700e3",
        random12: "#30007d",
      },
    },
  },
  plugins: [],
};

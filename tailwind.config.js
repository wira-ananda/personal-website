/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        latarTugas : "#ddd",
        backgroundColor: "#0b1414",
        backgroundColor2: "#0D2B29",
        backgroundColor3: "#0C1A1A",
        mainColor: "#2a9d8f",
        tabelColor: "#2a9d8f33",
        fontColor: "linear-gradient(92.11deg, #2A9D8F 0.79%, #FFFFFF 99.64%)",
      },
      // screens: {
      //   "2xl": "1320px",
      // },
    },
  },
  plugins: [],
};

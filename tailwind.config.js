module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        batik: "url('/bg.png')",
      },
    },
    minHeight: {
      0: "0",
      1: "25vh",
      2: "50vh",
      3: "75vh",
      4: "100vh",
      5: "150vh",
    },
    minWidth: {
      0: "0",
      1: "25vw",
      2: "50vw",
      3: "75vw",
      4: "100vw",
      5: "150vw",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

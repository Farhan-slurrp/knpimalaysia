module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "3xs": ".40rem",
      "2xs": ".50rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
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

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      0: "0",
      1: "25vh",
      2: "50vh",
      3: "75vh",
      4: "100vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fbfcfd",
          "200": "#212731",
          "300": "rgba(0, 0, 0, 0)",
        },
        silver: "#b6bdc4",
        lightgray: "#d1d6da",
        dodgerblue: "#1b88f4",
        cornflowerblue: "#36a1ff",
        dimgray: {
          "100": "#5c6874",
          "200": "#4b5665",
        },
        crimson: "#ef4c5d",
        darkgray: "#9fa9b3",
        slategray: {
          "100": "#727d87",
          "200": "#626e79",
        },
        whitesmoke: "#f2f4f7",
        gainsboro: {
          "100": "#e1e4e6",
          "200": "#d9dbde",
          "300": "rgba(225, 228, 230, 0)",
        },
        darkslateblue: "#074786",
        darkslategray: "#2c384a",
        aliceblue: "#f3f9ff",
        darkorange: "#ff7724",
        chocolate: "#e65e0a",
        seashell: "#fff4ed",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      sm: "14px",
      smi: "13px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      mini: "15px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#0C5387",
        "blue-secondary": "#0F70B7",
        "blue-accent": "#2DAAE1",
        "yellow-primary": "#FFC400",
        "gray-primary": "#444444",
        "gray-secondary": "#B6B7BB",
        "gray-accent": "#D9D9D9",
        "black-primary": "#1E1E1E",
      },
      height: {
        h38: "38px",
        h40: "40px",
        h50: "50px",
        h30: "30px",
        h100: "100px",
      },
      fontFamily: {
        Consolas: "Consolas",
        Intan: "Intan",
 
      },

      borderStyle: { "long-short-dashed": "6px 2px" },
      backgroundImage: {
        lineImage: "url(images/homePage/verticalLine.png) ",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["white", "emerald"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

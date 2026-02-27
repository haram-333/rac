import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rac: {
          orange: "#F95108",
          black: "#000000",
          teal: "#61B59C",
          blue: "#386C87",
          darkGrey: "#47474A",
          lightGrey: "#F9F9F9",
          borderGrey: "#DBDBDB",
        },
      },
      fontFamily: {
        rac: ["FrederickSimms", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

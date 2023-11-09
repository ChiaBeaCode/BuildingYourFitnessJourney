import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      peace: {
        300: "#85B4C6",
        500: "#1c7293",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;

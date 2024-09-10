import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        sblack: '#0D0D0D',
        sorange: '#F25C16',
        swhite: '#FFFFFF',
        sgrey: '#EDEFF0',
        sgreen: '#1CC984',
        sred: '#F21905',
      },
    },
  },
  plugins: [],
};
export default config;

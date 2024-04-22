import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,astro}",
  ],
  plugins: [],
};
export default config;

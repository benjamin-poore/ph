import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-red-500",
    "bg-green-500",
    "text-white",
    "text-lg",
    "font-bold",
    "text-white",
    "p-2",
    "mb-4",
    "rounded",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    // },
  },
  plugins: [],
};
export default config;

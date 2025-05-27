import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  safelist: [
    "bg-black",
    "bg-gray-500",
    "bg-blue-700",
    "bg-white",
    "bg-yellow-100",
    "bg-amber-700",
    "bg-pink-300",
    "bg-red-700",
    "bg-blue-900",
    "bg-neutral-700",
    "bg-purple-400",
    "bg-green-500",
    "bg-rose-200",
    "bg-violet-300",
    "bg-sky-300",
    "bg-white"
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;

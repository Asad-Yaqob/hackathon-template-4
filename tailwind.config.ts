import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
  
        'brand-primary': '#E5E0FC', 
        'brand-secondary': '#603EFF', 
        'brand-text': '#7E81A2', 
      },
      
       fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

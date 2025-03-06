/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A66C2", // LinkedIn primary blue (updated to exact LinkedIn blue)
        secondary: "#0073B1", // LinkedIn secondary blue
        accent: "#057642", // LinkedIn green accent for CTAs
        dark: "#191919", // LinkedIn dark text
        light: "#F3F2EF", // LinkedIn light background
        linkedinBg: "#F3F2EF", // LinkedIn background color
        linkedinText: "#191919", // LinkedIn text color
        linkedinBorder: "#E0E0E0", // LinkedIn border color
        linkedinHover: "#EBEBEB", // LinkedIn hover state
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 
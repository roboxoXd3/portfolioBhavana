/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          'primary-foreground': "var(--primary-foreground)",
          secondary: "var(--secondary)",
          'secondary-foreground': "var(--secondary-foreground)",
          accent: "var(--accent)",
          'accent-foreground': "var(--accent-foreground)",
          muted: "var(--muted)",
          'muted-foreground': "var(--muted-foreground)",
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
          destructive: "var(--destructive)",
          card: "var(--card)",
          'card-foreground': "var(--card-foreground)",
          popover: "var(--popover)",
          'popover-foreground': "var(--popover-foreground)",
        },
        text: {
          DEFAULT: "var(--text-default)",
        },
        borderRadius: {
          sm: "var(--radius-sm)",
          md: "var(--radius-md)",
          lg: "var(--radius-lg)",
          xl: "var(--radius-xl)",
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
    ],
  }
  
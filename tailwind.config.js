/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        ring: "#999999",
        primary: "#18181b",
        background: "#ffffff",
        input: "#e4e4e7",
        "primary-foreground": "#fafafa",
        "text-foreground": "#7d7d7d",
      },
      fontFamily: {
        "sans": ["Geist"],
        "GeistSans": ["Geist"]
      }
    },
  },
  plugins: [],
}


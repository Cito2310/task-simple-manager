/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        ring: "#999999",
        primary: "#18181b",
        background: "#ffffff"
      },
      fontFamily: {
        "sans": ["Geist"],
        "GeistSans": ["Geist"]
      }
    },
  },
  plugins: [],
}


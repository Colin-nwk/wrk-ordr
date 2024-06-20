/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A78A6",
        secondary: "#495154",
        tertiary: "#777777",
        paragraph: "#666666",
      },
    },
  },
  plugins: [],
};

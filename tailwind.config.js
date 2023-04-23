/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
        spin: "spin",
        ping: "ping",
        pulse: "pulse",
        bounce: "bounce",
      },
    },
  },
  plugins: [],
};

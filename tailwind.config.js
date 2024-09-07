/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "70%": { width: "100%" },
          "100%": { width: "100%" },
        },
        pause: {
          "0%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
      animation: {
        typing:
          "typing 4s steps(20, end) 1s forwards, pause 3s step-end 5s infinite, blink .75s step-end infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro"],
  },
};

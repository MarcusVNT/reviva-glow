import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
        "orange-one": "#ea6848",
        "orange-two": "#eda78e",
      },
      keyframes: {
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },
        "bounce-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25%)" },
        },
        "bounce-diagonal-right": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(25%, 25%)" },
        },
        "bounce-diagonal-left": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-25%, 25%)" },
        },
      },
      animation: {
        "bounce-right": "bounce-right 1s infinite",
        "bounce-left": "bounce-left 1s infinite",
        "bounce-diagonal-right": "bounce-diagonal-right 1s infinite",
        "bounce-diagonal-left": "bounce-diagonal-left 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}) satisfies Config;

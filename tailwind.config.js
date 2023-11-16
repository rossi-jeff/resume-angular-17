import { createThemes } from "tw-colors";
import { palette } from "./src/lib/palette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [createThemes(palette)],
};

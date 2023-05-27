/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E1E1E",

          secondary: "#152747",

          accent: "#513448",

          neutral: "#171618",

          "base-100": "#09090B",

          info: "#66C6FF",

          success: "#87D039",

          warning: "#E2D562",

          error: "#FF6F6F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

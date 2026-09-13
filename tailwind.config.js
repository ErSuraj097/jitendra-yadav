// tailwind.config.js
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
        samajwadiRed: "#FE0000",
        deepGreen: "#018B00",
        "samajwadi-red": "#FE0000",
        "samajwadi-green": "#018B00",
        "deep-green": "#018B00",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/images/hero.jpg')",
      },
      colors: {
        primary: "var(--color-primary)",
        body: "var(--color-body)",
      },
      fontFamily: {
        outfit: "var(--font-outfit)",
        playfairDisplay: "var(--font-playfair-display)",
      },
      fontSize: {
        heading: "clamp(1.5rem, 6vw, 4rem)",
        subheading: "clamp(1rem, 3vw, 1.5rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

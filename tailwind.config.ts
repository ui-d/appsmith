import { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "100%", // Default to full width
          sm: "100%",
          md: "100%",
          lg: "calc(1180px + 2rem)",
          xl: "calc(1180px + 2rem)",
          "2xl": "calc(1180px + 2rem)",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #7441F6 0%, #501FCD 100%)",
        "cta-texture": "url('/background.webp')",
      },
      colors: {
        brand: "#7441F6",
        primary: "#190F36",
        secondary: "#190f36b3",
        textDarkGray: "#111928",
        textGray: "#5E5772",
        lightGray: "#DDDBEF",
        bgGray: "#F0F3FB",
        accent: "#FF6D2D",
        white: "#fff",
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2.15rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.5rem", "1.2em"],
        "5xl": ["3rem", "1"],
        "6xl": ["4rem", "1.2em"],
      },
      fontFamily: {
        heading: ["var(--font-red-hat-display)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
      maxWidth: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        full: "100%",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;

export default config;

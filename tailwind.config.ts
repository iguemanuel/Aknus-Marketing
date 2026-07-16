import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // escala clara: tons de branco p/ diferenciar seções (lilac = tinta lilás)
        canvas: { DEFAULT: "#F0F0F0", 2: "#E6E6E6", lilac: "#ECE9F7" },
        ink: { DEFAULT: "#1A1A1A", strong: "#0A0A0A" },
        "purple-black": "#180828",
        // escala escura: pretos com tintas diferentes (2 = roxeado, 3 = azulado)
        night: { DEFAULT: "#0E0E13", 2: "#151022", 3: "#0D1119", card: "#17171F" },
        brand: {
          purple: "#5028E0",
          blue: "#215FFE",
          violet: "#8058F8",
          // variante clara do violeta p/ texto pequeno em fundo escuro (contraste WCAG AA)
          "violet-light": "#A78BFA",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": [
          "clamp(2.75rem, 6.5vw, 4.75rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "900" },
        ],
        "display-2": [
          "clamp(2.1rem, 4.5vw, 3.4rem)",
          { lineHeight: "1.06", letterSpacing: "-0.025em", fontWeight: "900" },
        ],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(120deg, #5028E0, #215FFE)",
        "gradient-whatsapp": "linear-gradient(120deg, #25D366, #128C7E)",
        "gradient-dark": "linear-gradient(120deg, #8058F8, #215FFE)",
        "gradient-night": "linear-gradient(135deg, #0A0A0A 0%, #180828 100%)",
        "glow-light":
          "radial-gradient(720px circle at 50% 0%, rgba(80, 40, 224, 0.16), transparent 70%)",
        "glow-dark":
          "radial-gradient(760px circle at 65% 25%, rgba(128, 88, 248, 0.2), transparent 70%)",
      },
      boxShadow: {
        cta: "0 10px 32px rgba(80, 40, 224, 0.4)",
        "cta-hover": "0 14px 40px rgba(80, 40, 224, 0.5)",
        "cta-whatsapp": "0 10px 32px rgba(37, 211, 102, 0.35)",
        "cta-whatsapp-hover": "0 14px 40px rgba(37, 211, 102, 0.45)",
        card: "0 24px 60px rgba(24, 8, 40, 0.14)",
      },
      keyframes: {
        "ak-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "ak-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
        "ak-slide": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
      },
      animation: {
        float: "ak-float 4s ease-in-out infinite",
        "pulse-soft": "ak-pulse 2s ease-in-out infinite",
        "slide-x": "ak-slide 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

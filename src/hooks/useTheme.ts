import { useCallback, useState } from "react";

type Theme = "light" | "dark";

/**
 * Tema claro/escuro. O estado inicial vem da classe `dark` no <html>,
 * aplicada pelo script inline do index.html (escolha salva > sistema).
 * O toggle persiste a escolha em localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return { theme, toggle };
}

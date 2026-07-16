import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-brand-purple hover:text-brand-purple",
        "dark:border-white/15 dark:text-white/70 dark:hover:border-brand-violet dark:hover:text-brand-violet-light",
        className,
      )}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

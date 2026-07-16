import { cn } from "@/lib/utils";

interface LogoProps {
  /** Variante para fundos escuros (wordmark branco, quadrado invertido). */
  inverse?: boolean;
}

export function Logo({ inverse = false }: LogoProps) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Aknus Marketing — voltar ao topo">
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-black",
          inverse
            ? "bg-white text-ink-strong"
            : "bg-ink-strong text-white dark:bg-white dark:text-ink-strong",
        )}
      >
        A<span className="text-brand-purple">K</span>
      </span>
      <span
        className={cn(
          "text-xl font-black tracking-tight",
          inverse ? "text-white" : "text-ink-strong dark:text-white",
        )}
      >
        Aknus<span className="text-brand-purple">.</span>
      </span>
    </a>
  );
}

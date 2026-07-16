import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  /** Usa o gradiente violeta→azul das seções escuras. */
  dark?: boolean;
  className?: string;
}

/** Palavra de destaque em título: itálico + gradiente via background-clip. */
export function GradientText({ children, dark = false, className }: GradientTextProps) {
  return (
    <em
      className={cn(
        "bg-clip-text italic text-transparent",
        dark ? "bg-gradient-dark" : "bg-gradient-primary",
        className,
      )}
    >
      {children}
    </em>
  );
}

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { waLink } from "@/data/site-config";

const avatarStyles = [
  "bg-gradient-primary",
  "bg-brand-violet",
  "bg-ink-strong",
  "bg-gradient-dark",
  "bg-brand-blue",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-gradient-to-b from-canvas to-white snap-start dark:from-night dark:to-night-2"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-glow-light" />

      <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center md:px-12">
        <Badge className="border border-ink/10 bg-white text-ink/80 shadow-sm dark:border-white/10 dark:bg-night-card dark:text-white/80">
          <span aria-hidden className="h-2 w-2 rounded-full bg-brand-purple animate-pulse-soft" />
          Agência de marketing orientada a resultado
        </Badge>

        <h1 className="mt-7 max-w-3xl text-display-1 text-ink-strong dark:text-white">
          Confiança não se cria.
          <br />
          <GradientText>Se transmite.</GradientText>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65 dark:text-white/65">
          A Aknus une estratégia, criativo e dados para transformar a percepção da sua
          marca em crescimento real — clientes chegando todos os dias.
        </p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
            aria-label="Quero transmitir confiança — falar com a Aknus no WhatsApp"
          >
            Quero transmitir confiança
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
          <a href="#case" className={buttonVariants({ variant: "outline-light" })}>
            Ver resultados
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div aria-hidden className="flex -space-x-3">
            {avatarStyles.map((style, i) => (
              <span
                key={i}
                className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold text-white ring-[3px] ring-white dark:ring-night-2 ${style}`}
              >
                {i === avatarStyles.length - 1 ? "+" : String.fromCharCode(65 + i * 3)}
              </span>
            ))}
          </div>
          <p className="text-sm font-semibold text-ink/60 dark:text-white/60">
            <span className="text-ink-strong dark:text-white">+40 marcas</span> que confiam na
            Aknus
          </p>
        </div>
      </Reveal>
    </section>
  );
}

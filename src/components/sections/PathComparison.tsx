import { Check, X } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";

const commonPath = [
  "Posts soltos, sem estratégia por trás",
  "Verba queimada em impulsionamento",
  "Marca que parece menor do que é",
  "Resultados imprevisíveis, mês bom e mês ruim",
];

const aknusPath = [
  "Estratégia antes de qualquer post",
  "Tráfego com meta, teste e ROI acompanhado",
  "Marca com cara de líder de mercado",
  "Crescimento previsível, mês após mês",
];

export function PathComparison() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas to-canvas-lilac dark:from-purple-black dark:to-night">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-12 md:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center text-display-2 text-ink-strong dark:text-white">
            Todo negócio chega nesta <GradientText>placa de sinalização.</GradientText>
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border-2 border-dashed border-ink/20 bg-white/50 p-8 dark:border-white/15 dark:bg-white/5">
              <h3 className="text-xl font-bold text-ink/65 dark:text-white/55">Caminho comum</h3>
              <ul className="mt-6 space-y-4">
                {commonPath.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink/65 dark:text-white/55"
                  >
                    <X aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ink/35 dark:text-white/35" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl border border-brand-purple/60 bg-gradient-night p-8 shadow-card">
              <span className="absolute -top-3.5 left-8 rounded-full bg-gradient-primary px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-white shadow-cta">
                recomendado
              </span>
              <h3 className="text-xl font-bold text-white">Caminho Aknus</h3>
              <ul className="mt-6 space-y-4">
                {aknusPath.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-violet" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <span className="inline-flex rounded-full bg-gradient-primary px-8 py-4 text-lg font-extrabold text-white shadow-cta">
            Clientes todos os dias.
          </span>
        </Reveal>
      </div>
    </section>
  );
}

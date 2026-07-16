import { ImageIcon, MoveRight } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { portfolio } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section id="cases" className="bg-canvas-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-12 md:py-32">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-md text-display-2 text-ink-strong">
            Trabalho que <GradientText>fala por si.</GradientText>
          </h2>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
            arraste pro lado
            <MoveRight aria-hidden className="h-4 w-4 animate-slide-x text-brand-purple" />
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="region"
            aria-label="Cases do portfólio — role horizontalmente para ver todos"
            tabIndex={0}
            className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
          >
            {portfolio.map((item, i) => (
              <article
                key={item.title}
                className="w-[330px] shrink-0 snap-start rounded-3xl bg-white p-4 shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.result}`}
                    className="h-56 w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="relative grid h-56 place-items-center overflow-hidden rounded-2xl bg-gradient-night">
                    <span aria-hidden className="absolute inset-0 bg-dot-grid-light" />
                    <ImageIcon aria-hidden className="h-8 w-8 text-white/25" />
                    <span
                      aria-hidden
                      className="absolute bottom-2 right-4 font-mono text-5xl font-medium text-white/10"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                <div className="px-2 pb-2 pt-5">
                  <span className="inline-flex rounded-full bg-brand-purple/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-brand-purple">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold tracking-tight text-ink-strong">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ImageIcon, MoveRight } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** largura do card (330px) + gap (20px) — passo de rolagem das setas */
const CARD_STEP = 350;

/** folga em px antes de considerar que o scroll chegou numa das pontas */
const EDGE_TOLERANCE = 8;

const arrowButtonClass =
  "grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white/70 text-ink-strong transition-colors hover:border-brand-purple hover:text-brand-purple disabled:pointer-events-none disabled:opacity-30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-brand-violet-light dark:hover:text-brand-violet-light";

export function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [dragging, setDragging] = useState(false);
  // estado do arrasto fora do React: atualiza a cada pointermove, sem re-render
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });
  const reduceMotion = useReducedMotion();

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > EDGE_TOLERANCE);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - EDGE_TOLERANCE);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: direction * CARD_STEP,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  // touch/trackpad usam o scroll nativo; o arrasto manual é só para mouse
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { active: true, moved: false, startX: e.clientX, startScroll: el.scrollLeft };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6 && !drag.current.moved) {
      drag.current.moved = true;
      el.setPointerCapture(e.pointerId);
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startScroll - dx;
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  // se o gesto foi arrasto, engole o click para não disparar links dos cards
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!drag.current.moved) return;
    drag.current.moved = false;
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section
      id="cases"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-gradient-to-b from-canvas-lilac to-canvas-blue snap-start dark:from-night dark:to-night-2"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-glow-light dark:bg-glow-dark"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:px-12">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-md text-display-2 text-ink-strong dark:text-white">
            Trabalho que <GradientText>fala por si.</GradientText>
          </h2>
          <div className="flex items-center justify-between gap-5 sm:justify-end">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/65 dark:text-white/50">
              arraste pro lado
              <MoveRight
                aria-hidden
                className="h-4 w-4 animate-slide-x text-brand-purple dark:text-brand-violet-light"
              />
            </p>
            <div className="flex gap-2.5">
              <button
                type="button"
                aria-label="Case anterior"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className={arrowButtonClass}
              >
                <ArrowLeft aria-hidden className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Próximo case"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className={arrowButtonClass}
              >
                <ArrowRight aria-hidden className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* sangra até a borda do container (-mx) e esmaece as pontas com mask
            para o corte dos cards acompanhar o degradê do fundo */}
        <Reveal delay={0.1} className="-mx-5 md:-mx-12">
          <div
            ref={trackRef}
            role="region"
            aria-label="Cases do portfólio — role horizontalmente para ver todos"
            tabIndex={0}
            onScroll={updateArrows}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
            onClickCapture={onClickCapture}
            className={cn(
              "no-scrollbar mt-12 flex gap-5 overflow-x-auto px-5 pb-6 pt-2 md:px-12",
              "scroll-px-5 md:scroll-px-12",
              dragging
                ? "cursor-grabbing select-none snap-none"
                : "cursor-grab snap-x snap-mandatory",
              canPrev && canNext
                ? "[mask-image:linear-gradient(to_right,transparent,black_56px,black_calc(100%-56px),transparent)]"
                : canNext
                  ? "[mask-image:linear-gradient(to_right,black_calc(100%-56px),transparent)]"
                  : canPrev
                    ? "[mask-image:linear-gradient(to_right,transparent,black_56px)]"
                    : undefined,
            )}
          >
            {portfolio.map((item, i) => (
              <article
                key={item.title}
                className="w-[330px] shrink-0 snap-start rounded-3xl bg-white p-4 shadow-card transition-transform duration-300 hover:-translate-y-1 dark:bg-night-card"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.result}`}
                    draggable={false}
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
                  <span className="inline-flex rounded-full bg-brand-purple/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-brand-purple dark:bg-brand-violet/15 dark:text-brand-violet-light">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold tracking-tight text-ink-strong dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60 dark:text-white/60">{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

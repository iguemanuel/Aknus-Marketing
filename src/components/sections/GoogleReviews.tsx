import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { googleReviews } from "@/data/reviews";
import { cn } from "@/lib/utils";

/**
 * Avaliações do Google (prova social adicional) — carrossel com autoplay,
 * exibindo até 3 avaliações por vez (1 no mobile).
 *
 * Renderizado apenas quando `siteConfig.showGoogleReviews` for `true` (ver
 * App.tsx). O conteúdo vem de `data/reviews.ts` (curadoria manual). Se um dia
 * a integração com a Google Places API entrar, basta alimentar aquele arquivo
 * (ou trocar por fetch em build time) — o layout não muda.
 */

const AUTOPLAY_MS = 5000;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-0.5" role="img" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${
            i < rating
              ? "fill-brand-purple text-brand-purple dark:fill-brand-violet dark:text-brand-violet-light"
              : "text-ink/20 dark:text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

/** Quantas avaliações por página: 3 no desktop (≥ md), 1 no mobile. */
function usePerPage() {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerPage(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return perPage;
}

export function GoogleReviews() {
  const { rating, total, reviews } = googleReviews;
  const reduceMotion = useReducedMotion();
  const perPage = usePerPage();
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const pageCount = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    if (page >= pageCount) setPage(0);
  }, [page, pageCount]);

  useEffect(() => {
    if (paused || reduceMotion || pageCount < 2) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pageCount), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, pageCount]);

  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="avaliacoes" className="bg-canvas dark:bg-night">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-12 md:py-32">
        <Reveal className="flex flex-col items-center text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-purple dark:text-brand-violet-light">
            {"// Avaliações no Google"}
          </p>
          <h2 className="mt-4 text-display-2 text-ink-strong dark:text-white">
            Quem contrata, <GradientText>recomenda.</GradientText>
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <p className="text-4xl font-black text-ink-strong dark:text-white">
              {rating.toFixed(1)}
            </p>
            <div className="text-left">
              <Stars rating={Math.round(rating)} />
              <p className="mt-1 text-sm text-ink/65 dark:text-white/55">
                {total} avaliações no Google
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label="Avaliações de clientes no Google"
            className="mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="min-h-[240px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${page}-${perPage}`}
                  initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid items-stretch gap-5 md:grid-cols-3"
                >
                  {visible.map((review) => (
                    <article
                      key={review.name}
                      className="flex flex-col items-center rounded-3xl bg-white p-7 text-center shadow-card dark:bg-night-card"
                    >
                      <Stars rating={review.rating} />
                      <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-white/70">
                        “{review.text}”
                      </p>
                      <p className="mt-auto pt-5 text-sm font-bold text-ink-strong dark:text-white">
                        {review.name}
                      </p>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-center gap-2.5">
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ver página ${i + 1} de ${pageCount} das avaliações`}
                  aria-current={i === page}
                  onClick={() => setPage(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    i === page
                      ? "w-7 bg-gradient-primary"
                      : "w-2.5 bg-ink/20 hover:bg-ink/35 dark:bg-white/20 dark:hover:bg-white/35",
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

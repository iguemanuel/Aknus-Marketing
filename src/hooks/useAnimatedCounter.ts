import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { siteConfig } from "@/data/site-config";

/**
 * Anima um número de `start` até `end` (easing cúbico de saída) quando o
 * elemento referenciado entra na viewport. Respeita a flag `animateCounter`
 * do site-config e `prefers-reduced-motion` (pula direto para o valor final).
 */
export function useAnimatedCounter(start: number, end: number, duration = 1600) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!siteConfig.animateCounter || reduceMotion) {
      setValue(end);
      return;
    }

    let raf: number;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + (end - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, start, end, duration]);

  return { ref, value };
}

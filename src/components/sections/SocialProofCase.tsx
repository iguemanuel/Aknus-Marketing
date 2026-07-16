import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const stats = [
  { value: "+201%", label: "crescimento em clientes" },
  { value: "60", label: "dias para o resultado" },
];

const bars = [
  { month: "mai", height: "38%", gradient: false },
  { month: "jun", height: "62%", gradient: true },
  { month: "jul", height: "100%", gradient: true },
];

export function SocialProofCase() {
  const { ref, value } = useAnimatedCounter(160, 483);

  return (
    <section id="case" className="bg-canvas-2 dark:bg-night">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-12 md:py-32">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-purple dark:text-brand-violet-light">
            {"// Case real"}
          </p>
          <h2 className="mt-4 text-display-2 text-ink-strong dark:text-white">
            De 160 para <GradientText>483 clientes</GradientText> em 2 meses.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65 dark:text-white/65">
            Uma clínica chegou até a Aknus estagnada em 160 clientes por mês. Com tráfego
            pago, funil e criativos certos, fechou o segundo mês com 483 — e o número
            continua subindo.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6">
                <p className="font-mono text-3xl font-medium text-brand-purple dark:text-brand-violet-light">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-ink/60 dark:text-white/60">{stat.label}</p>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <Card className="relative p-8">
            <div ref={ref}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink/65 dark:text-white/50">
                clientes ativos
              </p>
              <p className="mt-2 text-6xl font-black tracking-tight text-ink-strong dark:text-white">
                {value}
              </p>

              <div
                role="img"
                aria-label="Gráfico de barras: crescimento de clientes de maio a julho"
                className="mt-8 flex h-40 items-end gap-5"
              >
                {bars.map((bar) => (
                  <div key={bar.month} className="flex h-full flex-1 flex-col justify-end gap-2">
                    <div
                      className={`w-full rounded-t-lg ${
                        bar.gradient ? "bg-gradient-primary" : "bg-ink/10 dark:bg-white/10"
                      }`}
                      style={{ height: bar.height }}
                    />
                    <p className="text-center font-mono text-xs uppercase tracking-widest text-ink/65 dark:text-white/50">
                      {bar.month}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="absolute -top-5 right-6 animate-float rounded-full bg-white px-4 py-2.5 shadow-card dark:bg-night-card">
            <p className="flex items-center gap-2 text-xs font-semibold text-ink-strong dark:text-white">
              <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
              Novos leads chegando
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

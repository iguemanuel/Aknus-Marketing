import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";

const tags = ["Estratégia antes da mídia", "Criativo que converte", "Dados, não achismo"];

export function PositioningDark() {
  return (
    <section className="relative overflow-hidden bg-gradient-night">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-dark" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-12 md:py-32">
        <Reveal>
          <h2 className="text-display-2 text-white">
            Não jogue o mesmo jogo.
            <br />
            <GradientText dark>Vença o tabuleiro.</GradientText>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
            Enquanto a maioria disputa atenção com mais do mesmo, a Aknus muda as regras:
            posicionamento primeiro, execução impecável depois — e cada decisão validada
            por dados, não por opinião.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="border border-brand-violet/30 bg-white/5 text-brand-violet"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Placeholder do futuro render 3D de peça de xadrez */}
          <div className="mx-auto w-full max-w-sm animate-float">
            <div className="grid aspect-square place-items-center rounded-[28px] border border-brand-violet/20 bg-white/5 backdrop-blur">
              <span aria-hidden className="bg-gradient-dark bg-clip-text text-[120px] leading-none text-transparent">
                ♟
              </span>
            </div>
            <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              {"// render 3D em breve"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import picGustavo from "@/assets/pic-gustavo.png";
import picThiago from "@/assets/pic-thiago.png";

const numbers = [
  { value: "+40", label: "marcas atendidas" },
  { value: "5", label: "frentes integradas" },
  { value: "1", label: "objetivo: crescer" },
];

const partners = [
  { name: "Gustavo", role: "CEO", photo: picGustavo, offset: "" },
  { name: "Thiago", role: "sócio", photo: picThiago, offset: "mt-12" },
];

export function About() {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-12 md:py-32">
        <Reveal>
          <div className="grid grid-cols-2 gap-5">
            {partners.map((partner) => (
              <div key={partner.name} className={partner.offset}>
                <img
                  src={partner.photo}
                  alt={`${partner.name}, ${partner.role} da Aknus Marketing`}
                  className="aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
                />
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                  {`// ${partner.name} — ${partner.role}`}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-purple">
            {"// Sobre a Aknus"}
          </p>
          <h2 className="mt-4 text-display-2 text-ink-strong">
            Gente obcecada por <GradientText>resultado.</GradientText>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
            A Aknus nasceu para tirar marcas do piloto automático. Somos um time que trata
            o marketing de cada cliente como negócio próprio: cada real investido precisa
            voltar em crescimento. Sem métrica de vaidade, sem promessa vazia — estratégia,
            execução e resultado na mesa.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {numbers.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-black tracking-tight text-ink-strong">{item.value}</p>
                <p className="mt-1 text-sm text-ink/55">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

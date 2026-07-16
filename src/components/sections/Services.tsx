import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";
import { waLink } from "@/data/site-config";

export function Services() {
  return (
    <section id="servicos" className="bg-purple-black">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-12 md:py-32">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-violet-light">
              {"// Serviços"}
            </p>
            <h2 className="mt-4 max-w-xl text-display-2 text-white">
              Cinco frentes. <GradientText dark>Um único objetivo:</GradientText> crescer.
            </h2>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ className: "shrink-0 self-start md:self-auto" })}
            aria-label="Montar meu plano — falar com a Aknus no WhatsApp"
          >
            Montar meu plano
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-brand-violet/20 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-violet/50 hover:bg-white/10">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-white">
                    <service.icon aria-hidden className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-white/55">{service.num}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/65">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { igLink, siteConfig, waLink } from "@/data/site-config";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-gradient-night snap-start">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-dark" />

      <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center md:px-12">
        <h2 className="max-w-2xl text-display-2 text-white">
          Seu negócio pode ser o <GradientText dark>próximo case.</GradientText>
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65">
          Conta pra gente onde seu negócio está — e a gente mostra o caminho até onde ele
          pode chegar.
        </p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "whatsapp" })}
            aria-label="Chamar a Aknus no WhatsApp"
          >
            Chamar no WhatsApp
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
          <a
            href={igLink}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline-dark" })}
            aria-label="Perfil da Aknus no Instagram"
          >
            <InstagramIcon className="h-4 w-4" />@{siteConfig.instagram}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

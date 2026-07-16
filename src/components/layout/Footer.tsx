import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/brand-icons";
import { igLink, siteConfig, waLink } from "@/data/site-config";

const footerNav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  ...(siteConfig.showGoogleReviews ? [{ label: "Avaliações", href: "#avaliacoes" }] : []),
  { label: "Sobre", href: "#sobre" },
];

const socials = [
  { label: "Instagram da Aknus", href: igLink, Icon: InstagramIcon },
  { label: "WhatsApp da Aknus", href: waLink, Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="bg-ink-strong text-white">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Agência de marketing orientada a resultado. Estratégia, criativo e dados
              para o seu negócio crescer todos os dias.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-violet hover:text-brand-violet"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/55">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/55">
              Contato
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-whatsapp" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={igLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-brand-violet" />@
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
          <p className="text-center text-sm text-white/55 md:text-left">
            © 2026 Aknus Marketing — Confiança não se cria.{" "}
            <em className="font-semibold text-white/65">Se transmite.</em>
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-brand-violet"
          >
            Voltar ao topo
            <ArrowUp aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

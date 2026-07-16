import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { siteConfig, waLink } from "@/data/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  ...(siteConfig.showGoogleReviews ? [{ label: "Avaliações", href: "#avaliacoes" }] : []),
  { label: "Sobre", href: "#sobre" },
];

/** Destaca o link da seção atualmente visível na viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "top" ? null : entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ["top", ...navLinks.map((l) => l.href.slice(1))]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-ink/10 bg-canvas/90 shadow-[0_8px_30px_rgba(24,8,40,0.08)]"
          : "border-transparent bg-canvas/80",
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-12"
        aria-label="Navegação principal"
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className={cn(
                  "relative py-1 text-sm font-semibold transition-colors duration-200",
                  "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-primary after:transition-transform after:duration-300",
                  "hover:text-brand-purple hover:after:scale-x-100",
                  active === link.href.slice(1)
                    ? "text-brand-purple after:scale-x-100"
                    : "text-ink/70",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
            aria-label="Fale com a gente no WhatsApp"
          >
            Fale com a gente
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-strong transition-colors hover:bg-ink/5 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-ink/10 bg-canvas md:hidden"
          >
            <div className="px-5 pb-6 pt-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-base font-semibold transition-colors",
                        active === link.href.slice(1)
                          ? "bg-brand-purple/10 text-brand-purple"
                          : "text-ink/80 hover:bg-ink/5",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "sm" }), "mt-5 w-full")}
                aria-label="Fale com a gente no WhatsApp"
              >
                Fale com a gente
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

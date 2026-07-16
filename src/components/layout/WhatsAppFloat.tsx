import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { waLink } from "@/data/site-config";

/** Botão flutuante de WhatsApp, fixo no canto inferior direito. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Aknus no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-cta-whatsapp transition-transform duration-200 hover:-translate-y-1 hover:scale-105 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

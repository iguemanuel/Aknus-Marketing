export const siteConfig = {
  whatsapp: "554284320785", // usado nos links wa.me
  whatsappDisplay: "+55 42 8432-0785", // como o número aparece escrito no site
  instagram: "aknusmarketing",
  animateCounter: true,
  showGoogleReviews: true,
} as const;

export const waLink = `https://wa.me/${siteConfig.whatsapp}`;
export const igLink = `https://instagram.com/${siteConfig.instagram}`;

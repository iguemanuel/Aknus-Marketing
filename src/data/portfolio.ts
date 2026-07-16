export interface PortfolioItem {
  tag: string;
  title: string;
  result: string;
  /** URL da imagem real do case — enquanto ausente, o card usa o placeholder texturizado. */
  image?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    tag: "Tráfego pago",
    title: "Clínica: captação de pacientes",
    result: "de 160 para 483 clientes em 60 dias",
  },
  {
    tag: "Identidade visual",
    title: "Rebranding: marca de estética",
    result: "reposicionamento premium completo",
  },
  {
    tag: "Vídeo",
    title: "Campanha em reels: varejo",
    result: "+1,2M de visualizações orgânicas",
  },
  {
    tag: "Social media",
    title: "Perfil: food service",
    result: "engajamento 4x em 90 dias",
  },
  {
    tag: "Estratégia",
    title: "Funil completo: infoproduto",
    result: "ROAS 5,8 no lançamento",
  },
];

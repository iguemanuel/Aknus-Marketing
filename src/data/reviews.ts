export interface GoogleReview {
  name: string;
  text: string;
  rating: number;
}

/**
 * Avaliações reais do perfil do Google (curadoria manual).
 * Para atualizar: copiar novas avaliações do perfil e ajustar `total`/`rating`.
 */
export const googleReviews = {
  rating: 5.0,
  total: 9, // total de avaliações no perfil do Google
  reviews: [
    {
      name: "Biel Soffiati",
      text: "Excelente profissional, o mais capacitado possível, sempre atento ao que nós precisamos e entregando não só um logo, mais uma marca! Agradeço a paciência e ao excelente trabalho!!",
      rating: 5,
    },
    {
      name: "Kézya Zanoni",
      text: "Gustavo é um ótimo profissional, atencioso e dedicado! Entrega as artes todas no prazo e com excelência. Recomendo seu trabalho 👏🏻🙏🏻",
      rating: 5,
    },
    {
      name: "Dosmp",
      text: "Muito boa a qualidade do serviço, divulgo sempre que posso! Pode confiar!",
      rating: 5,
    },
    {
      name: "Isabella Rodrigues Gonzalez",
      text: "Trabalho muito bom! Super criativo",
      rating: 5,
    },
    {
      name: "Elisangela Ferreira",
      text: "Excelente atendimento. Artes muito linda.",
      rating: 5,
    },
    {
      name: "Otávio Padovam",
      text: "O melhor da cidade, pode confiar 🙏🏻",
      rating: 5,
    },
    {
      name: "Ana - dosmp",
      text: "Melhor design de Guarapuava.",
      rating: 5,
    },
    {
      name: "Fernando Siqueira",
      text: "Gustavão, excelente profissional, fera!!!!",
      rating: 5,
    },
    {
      name: "Igor Nascimento",
      text: "Ótimo profissional",
      rating: 5,
    },
  ] satisfies GoogleReview[],
};

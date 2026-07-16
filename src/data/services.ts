import {
  Clapperboard,
  Crown,
  Diamond,
  MessageCircle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  num: string;
  /** Ícone lucide — trocar aqui caso o cliente prefira o tom dos emojis (📈 💬 ◆ ▶ ♟). */
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    num: "01",
    icon: TrendingUp,
    title: "Tráfego pago",
    desc: "Campanhas em Meta e Google com metas claras, testes constantes e verba tratada como investimento — não como aposta.",
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Gestão de redes sociais",
    desc: "Linha editorial, produção e comunidade. Presença que constrói autoridade todos os dias, sem parecer robô.",
  },
  {
    num: "03",
    icon: Diamond,
    title: "Design profissional",
    desc: "Identidade, peças e layouts que fazem sua marca parecer do tamanho que ela quer ser.",
  },
  {
    num: "04",
    icon: Clapperboard,
    title: "Produção de vídeos",
    desc: "Roteiro, captação e edição de vídeos que prendem atenção — do reels ao institucional.",
  },
  {
    num: "05",
    icon: Crown,
    title: "Estratégia de marketing",
    desc: "O plano que amarra tudo: posicionamento, funil, oferta e métricas para decidir com dados.",
  },
];

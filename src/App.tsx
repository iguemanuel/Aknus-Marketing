import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { SocialProofCase } from "@/components/sections/SocialProofCase";
import { PositioningDark } from "@/components/sections/PositioningDark";
import { Services } from "@/components/sections/Services";
import { PathComparison } from "@/components/sections/PathComparison";
import { Portfolio } from "@/components/sections/Portfolio";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { siteConfig } from "@/data/site-config";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofCase />
        <PositioningDark />
        <Services />
        <PathComparison />
        <Portfolio />
        {/* Prova social adicional — ativar via siteConfig.showGoogleReviews quando a integração entrar */}
        {siteConfig.showGoogleReviews && <GoogleReviews />}
        <About />
        <FinalCTA />
        <WhatsAppFloat />
      </main>
      <Footer />
    </>
  );
}

import { DreamSection } from "../components/DreamSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DreamSection />
      <Footer />
    </div>
  );
}

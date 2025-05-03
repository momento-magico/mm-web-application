import { ContactUs } from "@/components/ContactUs";
import { DreamSection } from "../components/DreamSection";
import HeroSection from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DreamSection />
      <ContactUs />
    </div>
  );
}

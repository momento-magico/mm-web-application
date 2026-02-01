import { ContactUs } from "@/components/ContactUs";
import { DreamSection } from "../components/DreamSection";
import BannerSection from "../components/BannerSection";
import { ServicesSection } from "../components/ServicesSection";

export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <BannerSection />
      <ServicesSection />
    
      <DreamSection />
      <ContactUs />
    </div>
  );
}

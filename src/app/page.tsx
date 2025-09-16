"use client"

import { ContactUs } from "@/components/ContactUs";
import { DreamSection } from "../components/DreamSection";
import { ServicesSection } from "../components/ServicesSection";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});

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

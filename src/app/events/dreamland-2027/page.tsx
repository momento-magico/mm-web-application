"use client";

import { Hero } from "./components/Hero";
import { CTA } from "./components/CTA";
import { EventDetails } from "./components/EventDetails";
import { VideoSection } from "./components/VideoSection";
import { Header } from "@/components/Header";
import { Gallery } from "./components/Gallary";
import { ContactUs } from "@/components/ContactUs";
export default function Event() {
  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <Hero />
        <VideoSection />
        <CTA />
        <Gallery />
        <EventDetails />
         <ContactUs />
      </div>
    </div>
  );
}

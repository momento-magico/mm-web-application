import React from "react";
import { Music, Disc, Radio } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import redbull from "../../../public/assets/images/redbull.webp";
import bacadi from "../../../public/assets/images/baca.webp";
import dist from "../../../public/assets/images/dist.png";
import lion from "../../../public/assets/images/lion.png";
import sun from "../../../public/assets/images/sun.png";
import asian from "../../../public/assets/images/asian.png";
import Image from "next/image";

export const ServicesSection = () => {
  return (
    <section id="events" className="relative w-full bg-[#0A0A0A] text-white pt-4 pb-50">
      <div className="container mx-auto relative z-10">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Music Events & Festivals */}
          <div className="text-left backdrop-blur-sm rounded-lg">
            <div className=" mb-6">
              <Music size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-light mb-4">Music event & festivals</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {`We specialize in creating epic music events and festivals that
              move people literally and emotionally. From booming beats to
              flawless logistics, we fuel creativity, culture, and crowd energy
              to deliver unforgettable live experiences. Whether it's a local
              jam or a multi-day festival, we're all about turning up the volume
              on what's possible.`}
            </p>
          </div>
          {/* DJ, Electronic Music Concerts */}
          <div className="backdrop-blur-sm rounded-lg">
            <div className="mb-6">
              <Disc size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-light mb-4">
              DJ, Electronic music concerts
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {`We don't just throw events; we create moments that move you. From
              heart-pounding drops to hands in the air anthems, every beat when
              it counts to make your soul just ignite the crowd. It's a
              celebration of culture, creativity, and pure connection. Whether
              you're here for the rhythm, the lights, or the vibe - something
              bigger now.`}
            </p>
          </div>
          {/* Classical Performances */}
          <div className="backdrop-blur-sm rounded-lg">
            <div className="mb-6">
              <Radio size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-light mb-4">
              Classical performances concerts
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {`We don't just present concerts; we curate unforgettable musical
              journeys. From the delicate whisper of strings to the powerful
              swell of a full orchestra, every note tonight's designed to stir
              the soul and move the heart. We blend artistry, tradition, and
              flawless production to create experiences that resonate long after
              the final bow.`}
            </p>
          </div>
        </div>
        {/* Sponsors Row */}
        <div className="flex justify-between items-center space-x-12 opacity-70 mt-32 mb-8 mr-8">
          <div className=" h-12 w-48">
            <Image
              src={redbull}
              alt="Red Bull"
              className="h-12 object-contain"
            />
          </div>
          <div className=" h-12 w-48">
            <Image src={bacadi} alt="Bacadi" className="h-12 object-contain" />
          </div>
          <div className=" h-10 w-48">
            <Image src={dist} alt="Disti" className="h-10 object-contain" />
          </div>
          <div className=" h-24 w-48">
            <Image src={lion} alt="lion" className="h-24 object-contain" />
          </div>
          <div className=" h-36 w-48">
            <Image src={asian} alt="Asian" className="h-36 object-contain" />
          </div>
          <div className=" h-16 w-48">
            <Image src={sun} alt="Sun FM" className="h-16 object-contain" />
          </div>
        </div>
        <hr className="h-px my-16 bg-white/10 border-0" />
        {/* Countdown Timer */}
        <CountdownTimer />
        {/* Event Card */}
        <div className="absolute -bottom-42 left-1/2 -translate-x-1/2 w-[2px] h-24 bg-white/50 z-20"></div>
      </div>
    </section>
  );
};

import React from "react";
import { Music, Disc, Radio } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const ServicesSection = () => {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white pt-4 pb-50">
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
        <div className="flex justify-center items-center space-x-12 opacity-70 mt-32 mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Red_Bull_Trans.svg/1200px-Red_Bull_Trans.svg.png"
            alt="Red Bull"
            className="h-12 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bacardi_logo.svg/2560px-Bacardi_logo.svg.png"
            alt="Bacardi"
            className="h-12 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png"
            alt="Dell"
            className="h-12 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Lion_Logo.svg/2560px-Lion_Logo.svg.png"
            alt="Lion"
            className="h-12 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google-2015-logo.svg/1200px-Google-2015-logo.svg.png"
            alt="Google"
            className="h-8 object-contain"
          />
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

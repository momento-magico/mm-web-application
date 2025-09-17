"use client";

import { Header } from "./Header";
import animatedText from "../../public/assets/images/text_animation.gif";
import animatedMobilText from "../../public/assets/images/text_animation_mobile.gif";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen md:min-h-screen overflow-hidden px-8 md:px-0">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -top-20 md:top-0 z-0">
        <div className=" absolute w-screen h-195 top-0 z-1 inert:0 ml-8 hidden md:block">
          <Image
            src={animatedText}
            fill
            priority
            alt="text"
            className="w-full h-full object-cover opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className=" absolute w-screen h-40 top-80 z-1 inert:0 block md:hidden">
          <Image
            src={animatedMobilText}
            fill
            priority
            alt="text"
            className="w-full h-full object-cover opacity-75 px-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <video
          className="w-full aspect-[9/25] md:aspect-[16/9] object-cover"
          controls={false}
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
        >
          <source
            src="/assets/videos/hero_mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source
            src="/assets/videos/hero.mp4"
            type="video/mp4"
            media="(min-width: 769px)"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
export default HeroSection;

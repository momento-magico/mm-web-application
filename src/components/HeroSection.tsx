"use client";

import { Header } from "./Header";
import banner from "../../public/assets/images/banner.avif";
import animatedText from "../../public/assets/images/text_animation.gif";
import animatedMobilText from "../../public/assets/images/text_animation_mobile.gif";
import Image from "next/image";
import { motion } from "framer-motion";
const HeroSection = () => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full h-[calc(100vh-180px)] md:min-h-screen overflow-hidden px-8 md:px-0">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -top-20 md:top-0 z-0">
        <div className="absolute inset-0  bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]/100 z-10" />
        <div className=" absolute w-screen h-195 top-0 z-1 inert:0 ml-8 hidden md:block">
          <Image
            src={animatedText}
            fill
            priority
            alt="text"
            className="w-full h-full object-cover opacity-70"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className=" absolute w-screen h-40 top-48 z-1 inert:0 block md:hidden">
          <Image
            src={animatedMobilText}
            fill
            priority
            alt="text"
            className="w-full h-full object-cover opacity-75 px-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Image
          src={banner}
          fill
          priority
          alt="Concert stage with blue lights"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto h-[calc(100vh-200px)] flex flex-col justify-center items-center pt-75 md:pt-200 md:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center text-white"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-light mb-4 "
            variants={itemVariants}
          >
            Creating Magical Moments Through Music,
            <br />
            Art & Good Vibes with Great People.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-md text-gray-300 max-w-2xl mx-auto mb-8 md:mb-16"
          >
            {`From intimate gatherings to grand celebrations, we bring your vision
            to life with immersive planning, stunning design, and unforgettable
            experiences. Let's create something extraordinary together.`}
          </motion.p>
          {/* Vertical Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[2px] h-15 md:h-24 max-h-32 bg-white/50 mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;

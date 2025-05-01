"use client";

import { Header } from "./Header";
import banner from "../../public/assets/images/banner.avif";
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
    <section className="relative w-full h-[calc(100vh-80px)] md:min-h-screen overflow-hidden px-8 md:px-0">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]/100 z-10" />
        <Image
          src={banner}
          fill
          priority
          alt="Concert stage with blue lights"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Large Momento Magico Text */}
      <div className="relative z-20 pt-8 md:pt-32">
        <h1 className="text-[120px] font-light text-white/20 tracking-widest uppercase text-center leading-none">
          Momento
          <br />
          Magico
        </h1>
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto h-[calc(100vh-200px)] flex flex-col justify-center items-center md:pt-24 md:pb-16">
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
          <div className="w-[2px] h-15 md:h-24 max-h-32 bg-white/50 mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;

"use client";

import banner from "../../public/assets/images/home_banner.webp";
import animatedText from "../../public/assets/images/text_animation.gif";
import animatedMobilText from "../../public/assets/images/text_animation_mobile.gif";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "./Header";
const BannerSection = () => {
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
    <section className="relative w-full overflow-hidden px-8 md:px-0">
      {/* Background Image */}
      <Header/>
      <div className="absolute inset-0 -top-30 md:top-0 z-0">
        <div className=" absolute w-screen h-180 top-0 z-1 inert:0 ml-8 hidden md:block">
          <Image
            src={animatedText}
            fill
            priority
            alt="text"
            className="w-full h-full object-cover opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className=" absolute w-screen h-40 top-60 z-1 inert:0 block md:hidden">
          <Image
            src={animatedMobilText}
            fill
            priority
            alt="text"
            className="w-full h-full object-cover opacity-75 px-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0  bg-gradient-to-b from-[#0A0A0A]/20 to-[#0A0A0A]/100 z-10" />
        <Image
          src={banner}
          priority
          alt="Concert stage with blue lights"
          className="w-full h-full "
        />
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto h-[calc(100vh-0)] flex flex-col justify-center items-center pt-70 md:pt-160">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center text-white"
        >
          <motion.h2
            className="text-2xl md:text-6xl font-light mb-2 "
            variants={itemVariants}
          >
            Creating Magical Moments Through Music,
            <br />
            Art & Good Vibes with Great People.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-8"
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
            className="w-[2px] h-15 md:h-20 mb-16 md:mb-0 bg-white/50 mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default BannerSection;

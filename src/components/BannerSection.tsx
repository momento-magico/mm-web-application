"use client";

import banner from "../../public/assets/images/banner.avif";
import Image from "next/image";
import { motion } from "framer-motion";
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
      <div className="absolute inset-0 -top-20 md:top-0 z-0">
        <div className="absolute inset-0  bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]/100 z-10" />
        <Image
          src={banner}
          fill
          priority
          alt="Concert stage with blue lights"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto h-[calc(100vh-200px)] flex flex-col justify-center items-center pt-50 md:pt-100">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center text-white"
        >
          <motion.h2
            className="text-3xl md:text-6xl font-light mb-4 "
            variants={itemVariants}
          >
            Creating Magical Moments Through Music,
            <br />
            Art & Good Vibes with Great People.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-8"
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

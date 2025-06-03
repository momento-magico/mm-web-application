"use client";

import Image from "next/image";
import dreamlandImage from "../../../../public/assets/images/events/hero_final.webp";
import eventIconImage from "../../../../public/assets/images/events/event_icon.png";
import { motion } from "framer-motion";

export function Hero() {
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
    <section className="flex flex-col items-center justify-center pt-24 pb-4 md:pb-24 px-6">
      <div className="logo mb-2 z-50">
        {/* <img
          src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dreamland logo"
          className="h-12 object-contain opacity-80"
        /> */}
        <Image
          src={eventIconImage}
          width={80}
          height={32}
          alt="Dreamland Icon"
        />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center text-white z-50"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-center z-50"
          variants={itemVariants}
        >
          Dreamland 2025
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl mb-12 text-center z-50"
        >
          27.07.2025 — Sri Lanka
        </motion.h2>
      </motion.div>

      <div className=" z-50 max-w-2xl text-center text-sm md:text-base text-gray-300 leading-relaxed">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {`From intimate gatherings to grand celebrations, we bring your vision
          to life with seamless planning, stunning design, and unforgettable
          experiences. Let's create something extraordinary together.`}
        </motion.p>
      </div>
      <div className="mt-12 md:mt:24 h-16 md:h-24 w-px bg-white/30 z-50"></div>
      <div className="absolute inset-0 w-full h-[55vh] md:h-[70vh] z-2">
        <Image
          className="h-full w-full object-cover border-0"
          src={dreamlandImage}
          fill
          alt="Mystical garden with statue"
          priority
        />
        {/* <img src="/4711a891b4397ca7421d5dadbde9e741ddc87a3f.png" alt="Mystical garden with statue" className="w-full h-[80vh] object-cover opacity-100" /> */}
      </div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 h-[55vh] md:h-[70vh] bg-gradient-to-b from-[#0A0A0A]/20 to-[#0A0A0A]/100 z-45"
      />
    </section>
  );
}

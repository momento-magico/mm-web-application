"use client";

import { Music, Disc, Radio } from "lucide-react";
import redbull from "../../public/assets/images/redbull.webp";
import bacadi from "../../public/assets/images/baca.webp";
import dist from "../../public/assets/images/dist.png";
import lion from "../../public/assets/images/lion.png";
import notlike from "../../public/assets/images/notlike us.jpg";
import koko from "../../public/assets/images/koko.png";
import pickme from "../../public/assets/images/pickme.png";
import ctc from "../../public/assets/images/ctc.jpg";
import sun from "../../public/assets/images/sunfm.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { EventCard } from "./EventCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const ServicesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // delay between items
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <section
      id="events"
      className="relative w-full bg-[#0A0A0A] text-white pt-12 pb-36 md:pb-50 px-8 md-px-0"
    >
      <div className="container mx-auto relative z-10">
        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:mb-20"
        >
          {/* Music Events & Festivals */}
          <motion.div
            variants={item}
            className="text-left backdrop-blur-sm rounded-lg"
          >
            <div className="mb-6">
              <Music size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-light mb-4">
              Music event & festivals
            </h3>
            <p className="text-md text-gray-400 leading-relaxed">
              {`We specialize in creating epic music events and festivals that
              move people literally and emotionally. From booming beats to
              flawless logistics, we fuel creativity, culture, and crowd energy
              to deliver unforgettable live experiences. Whether it's a local
              jam or a multi-day festival, we're all about turning up the volume
              on what's possible.`}
            </p>
          </motion.div>

          {/* DJ, Electronic Music Concerts */}
          <motion.div variants={item} className="backdrop-blur-sm rounded-lg">
            <div className="mb-6">
              <Disc size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-light mb-4">
              DJ, Electronic music concerts
            </h3>
            <p className="text-md text-gray-400 leading-relaxed">
              {`We don't just throw events; we create moments that move you. From
              heart-pounding drops to hands in the air anthems, every beat when
              it counts to make your soul just ignite the crowd. It's a
              celebration of culture, creativity, and pure connection. Whether
              you're here for the rhythm, the lights, or the vibe - something
              bigger now.`}
            </p>
          </motion.div>

          {/* Classical Performances */}
          <motion.div variants={item} className="backdrop-blur-sm rounded-lg">
            <div className="mb-6">
              <Radio size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-light mb-4">
              Classical performances concerts
            </h3>
            <p className="text-md text-gray-400 leading-relaxed">
              {`We don't just present concerts; we curate unforgettable musical
              journeys. From the delicate whisper of strings to the powerful
              swell of a full orchestra, every note tonight's designed to stir
              the soul and move the heart. We blend artistry, tradition, and
              flawless production to create experiences that resonate long after
              the final bow.`}
            </p>
          </motion.div>
        </motion.div>
        {/* Sponsors Row */}
        <div className="hidden md:block">
          <Slider {...settings} slidesPerRow={4}>
            <div className=" h-16 w-48">
              <Image
                src={notlike}
                alt="notlike"
                className="h-16 object-contain"
              />
            </div>
            <div className=" h-16 w-48">
              <Image src={koko} alt="KOKO" className="h-16 object-contain" />
            </div>
            <div className=" h-16 w-48">
              <Image
                src={pickme}
                alt="Pickme"
                className="h-16 object-contain"
              />
            </div>
            <div className=" h-16 w-48">
              <Image src={sun} alt="SunFM" className="h-16 object-contain" />
            </div>
            <div className=" h-16 w-48">
              <Image src={ctc} alt="CTC" className="h-16 object-contain" />
            </div>
            <div className=" h-12 w-48">
              <Image
                src={redbull}
                alt="Red Bull"
                className="h-12 object-contain"
              />
            </div>
            <div className=" h-12 w-48">
              <Image
                src={bacadi}
                alt="Bacadi"
                className="h-12 object-contain"
              />
            </div>
            <div className=" h-16 w-48">
              <Image src={dist} alt="Disti" className="h-16 object-contain" />
            </div>
            <div className=" h-24 w-48">
              <Image src={lion} alt="lion" className="h-24 object-contain" />
            </div>
            <div className=" h-18 w-48">
              <Image src={koko} alt="KOKO" className="h-16 object-contain" />
            </div>
            <div className=" h-18 w-48">
              <Image
                src={pickme}
                alt="Pickme"
                className="h-16 object-contain"
              />
            </div>
            <div className=" h-18 w-48">
              <Image src={sun} alt="SunFM" className="h-16 object-contain" />
            </div>
          </Slider>
        </div>
        {/* Sponsors Row mobile */}
        <div className="block md:hidden mt-4">
          <Slider {...settings} slidesPerRow={2}>
            <div className=" h-16 w-48">
              <Image src={koko} alt="KOKO" className="h-16 object-contain" />
            </div>
            <div className=" h-16 w-48">
              <Image
                src={pickme}
                alt="Pickme"
                className="h-16 object-contain"
              />
            </div>
            <div className=" h-16 w-48">
              <Image src={sun} alt="SunFM" className="h-16 object-contain" />
            </div>
            <div className=" h-16 w-48">
              <Image src={ctc} alt="CTC" className="h-16 object-contain" />
            </div>
            <div className=" h-14 w-48">
              <Image
                src={redbull}
                alt="Red Bull"
                className="h-14 object-contain"
              />
            </div>
            <div className=" h-14 w-48">
              <Image
                src={bacadi}
                alt="Bacadi"
                className="h-14 object-contain"
              />
            </div>
            <div className=" h-20 w-48">
              <Image
                src={notlike}
                alt="notlike"
                className="h-18 object-contain"
              />
            </div>
            <div className=" h-20 w-48">
              <Image src={dist} alt="Disti" className="h-18 object-contain" />
            </div>
            <div className=" h-16 w-48">
              <Image src={lion} alt="lion" className="h-16 object-contain" />
            </div>
            <div className=" h-14 w-48">
              <Image
                src={bacadi}
                alt="Bacadi"
                className="h-12 object-contain"
              />
            </div>
          </Slider>
        </div>
        <hr className="h-px mb-8 md:mb-8 md:my-16 bg-white/10 border-0" />
        {/* Countdown Timer */}
        {/* <CountdownTimer /> */}
        <EventCard
          title={"DREAMLAND"}
          ticketUrl="https://www.spotseeker.lk/event/681e040594873"
          eventId="dreamland-2025"
          date={"SEPTEMBER 27, 2025"}
          heading={"Where Dreams, Drop Beats !"}
          description={
            "Get ready to lose yourself in the rhythm! Dreamland is back, bringing electrifying energy, mind-blowing visuals, and the hottest EDM acts under one sky. Whether you're a seasoned raver or a first-time dreamer, this is your invitation to an unforgettable night of music, lights, and pure euphoria"
          }
          tagline={
            "Mark your calendar. Gather your crew. Let’s make dreams happen."
          }
        />
        <div className="absolute -bottom-26 md:-bottom-42 left-1/2 -translate-x-1/2 w-[2px] h-14 md:h-24 bg-white/50 z-20"></div>
      </div>
    </section>
  );
};

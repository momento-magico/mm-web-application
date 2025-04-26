import { Header } from "./Header";
import banner from "../../../public/assets/images/banner.avif";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]/100 z-10" />
        <Image
          src={banner}
          fill
          alt="Concert stage with blue lights"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Large Momento Magico Text */}
      <div className="relative z-20 pt-32">
        <h1 className="text-[120px] font-light text-white/20 tracking-widest uppercase text-center leading-none">
          Momento
          <br />
          Magico
        </h1>
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto h-[calc(100vh-200px)] flex flex-col justify-center items-center pt-24">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-4xl font-light mb-4">
            Creating Magical Moments Through Music,
            <br />
            Art & Good Vibes with Great People.
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-16">
            {`From intimate gatherings to grand celebrations, we bring your vision
            to life with immersive planning, stunning design, and unforgettable
            experiences. Let's create something extraordinary together.`}
          </p>
          {/* Vertical Line */}
          <div className="w-[2px] h-32 bg-white/50 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

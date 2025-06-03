import Image from "next/image";
import dreamlandImage from "../../../../public/assets/images/events/hero_final.webp";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-8 md:pb-24 px-6">
      <div className="logo mb-6">
        <img
          src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dreamland logo"
          className="h-12 object-contain opacity-80"
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center z-50">
        Dreamland 2025
      </h1>
      <h2 className="text-xl md:text-2xl mb-12 text-center z-50">
        27.07.2025 — Sri Lanka
      </h2>
      <div className=" z-50 max-w-2xl text-center text-sm md:text-base text-gray-300 leading-relaxed">
        <p>
          {`From intimate gatherings to grand celebrations, we bring your vision
          to life with seamless planning, stunning design, and unforgettable
          experiences. Let's create something extraordinary together.`}
        </p>
      </div>
      <div className="mt-24 h-24 w-px bg-white/30 z-50"></div>
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
      <div className="absolute inset-0 h-[55vh] md:h-[70vh] bg-gradient-to-b from-[#0A0A0A]/20 to-[#0A0A0A]/100 z-45" />
    </section>
  );
}

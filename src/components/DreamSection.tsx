import Image from "next/image";
import dream from "../../public/assets/images/dream.avif";
export const DreamSection = () => {
  return (
    <section className="relative w-full min-h-120 md:h-screen bg-[#0A0A0A] text-white px-4 md:px-0 ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={dream}
          fill
          className="h-full w-full object-cover border-0"
          alt="Concert crowd at night with stage lights"
        />
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto pt-4 md:pt-8">
      <div className="border-t border-white/10 z-20 py-2 hidden md:flex" />
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
            The Dream Behind the Beat
          </h2>
          <p className="text-sm md:text-md text-gray-300 leading-relaxed">
            {`Dreamland isn't just an event it's a movement born from sound,
            light, and the collective heartbeat of dreamers. Founded with a
            vision to create an immersive escape where music and imagination
            collide, Dreamland brings together EDM lovers from all walks of life
            to celebrate unity, freedom, and self-expression. From pulsating
            beats to surreal visuals, every element is designed to awaken the
            senses and ignite the soul. This is where your story meets the
            sound.`}
          </p>
        </div>
      </div>
    </section>
  );
};

import Marquee from "react-fast-marquee";
import Image from "next/image";
//
import redbull from "../../../../../public/assets/images/redbull.webp";
import bacadi from "../../../../../public/assets/images/baca.webp";
import dist from "../../../../../public/assets/images/dist.png";
import lion from "../../../../../public/assets/images/lion.png";
import notlike from "../../../../../public/assets/images/notlike us.jpg";
import koko from "../../../../../public/assets/images/koko.png";
import pickme from "../../../../../public/assets/images/pickme.png";
import ctc from "../../../../../public/assets/images/ctc.png";
import sun from "../../../../../public/assets/images/sunfm.png";
//
export function EventDetails() {
  return (
    <section className="w-full bg-gradient-to-b from-transparent via-black/95 to-black py-12 md:py-24  px-2">
      <div className="max-w-7xl mx-auto">
        <div className=" flex flex-col justify-center align-middle text-center w-full">
          <h2 className="text-4xl font-bold mb-4">Where Dreams, Drop Beats!</h2>
          <p className="text-gray-300 leading-relaxed">
            {`Dreamland isn’t just an event  it’s a movement born from sound, light, and the collective heartbeat of dreamers. Founded with a vision to create an immersive escape where music and imagination collide, Dreamland brings together EDM lovers from all walks of life to celebrate unity, freedom, and self-expression. From pulsating beats to surreal visuals, every element is designed to awaken the senses and ignite the soul. This is where your story meets the sound.`}
          </p>
        </div>
        <div className="flex flex-row justify-center w-full mt-4"><div className=" h-18 w-[1px] bg-white"/></div>
        <Marquee>
          <div className=" h-16 w-48">
            <Image
              src={notlike}
              alt="notlike"
              className="h-16 object-contain"
            />
          </div>
          <div className=" h-12 w-48">
            <Image src={koko} alt="KOKO" className="h-12 object-contain" />
          </div>
          <div className=" h-15 w-48">
            <Image src={pickme} alt="Pickme" className="h-15 object-contain" />
          </div>
          <div className=" h-16 w-48">
            <Image src={sun} alt="SunFM" className="h-16 object-contain" />
          </div>
          <div className=" h-12 w-48">
            <Image src={ctc} alt="CTC" className="h-12 object-contain" />
          </div>
          <div className=" h-12 w-48">
            <Image
              src={redbull}
              alt="Red Bull"
              className="h-12 object-contain"
            />
          </div>
          <div className=" h-12 w-48">
            <Image src={bacadi} alt="Bacadi" className="h-12 object-contain" />
          </div>
          <div className=" h-16 w-48">
            <Image src={dist} alt="Disti" className="h-16 object-contain" />
          </div>
          <div className=" h-24 w-48">
            <Image src={lion} alt="lion" className="h-24 object-contain" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

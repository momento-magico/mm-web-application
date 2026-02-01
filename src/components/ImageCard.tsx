import Image from "next/image";
import gel1 from "../../public/assets/images/home_gel_1.webp";
import gel2 from "../../public/assets/images/home_gel_2.webp";
import gel3 from "../../public/assets/images/home_gel_3.webp";
import gel4 from "../../public/assets/images/home_gel_4.webp";
import gel5 from "../../public/assets/images/home_gel_5.webp";
import gel6 from "../../public/assets/images/home_gel_6.webp";

const images = [gel1, gel2, gel3, gel4, gel5, gel6];

export default function ImageCard() {
  return (
    <div
      className=" md:absolute w-full md:h-120 h-400 flex justify-center py-10 z-50 bg-gradient-to-b
  from-black/75
  from-[20%]
  to-black/40"
    >
      <div
        className="
    w-full
    flex flex-col
    gap-4
    px-6
    md:grid
    md:grid-cols-3
    md:grid-rows-2
    md:gap-6
    md:px-32
  "
      >
        {/* Left – Top */}
        <div className="relative rounded-lg ">
          <Image src={images[0]} alt="" fill className="object-cover" />
        </div>

        {/* Center – Full Height */}
        <div className="relative row-span-2 rounded-lg overflow-hidden">
          <Image src={images[2]} alt="" fill className="object-cover" />
        </div>

        {/* Right – Top */}
        <div className="relative rounded-lg overflow-hidden">
          <Image src={images[3]} alt="" fill className="object-cover" />
        </div>

        {/* Left – Bottom */}
        <div className="relative rounded-lg overflow-hidden">
          <Image src={images[1]} alt="" fill className="object-cover" />
        </div>

        {/* Right – Bottom */}
        <div className="relative rounded-lg overflow-hidden">
          <Image src={images[4]} alt="" fill className="object-cover" />
        </div>
      </div>
      {/* ================= MOBILE: Vertical Square List ================= */}
      <div className=" absolute flex flex-col gap-4 px-4 md:hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-[calc(90vw-20px)] h-45 rounded-lg z-50 bg-cover bg-center "
            style={{ backgroundImage: `url(${img.src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

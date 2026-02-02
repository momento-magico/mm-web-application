"use client";

import Image from "next/image";
import gel1 from "../../../../../public/assets/images/home_gel_1.webp";
import gel2 from "../../../../../public/assets/images/home_gel_2.webp";
import gel3 from "../../../../../public/assets/images/home_gel_3.webp";
import gel4 from "../../../../../public/assets/images/home_gel_4.webp";
import gel5 from "../../../../../public/assets/images/home_gel_5.webp";
import gel6 from "../../../../../public/assets/images/home_gel_6.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};

function ImageBox({ src }: { src: string | StaticImport; }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

export const Gallery = () => {
  return (
    <>
      {" "}
      <div className="md:grid grid-cols-1 md:grid-cols-12 gap-4 hidden md:auto-rows-[100px] px-48">
        <div className="md:col-span-4 md:row-span-2">
          <ImageBox src={gel1} />
        </div>

        <div className="md:col-span-4 md:row-span-4">
          <ImageBox src={gel3} />
        </div>

        <div className="md:col-span-2 md:row-span-2">
          <ImageBox src={gel4} />
        </div>

        <div className="md:col-span-2 md:row-span-2">
          <ImageBox src={gel5} />
        </div>

        <div className="md:col-span-4 md:row-span-2">
          <ImageBox src={gel2} />
        </div>

        <div className="md:col-span-4 md:row-span-2">
          <ImageBox src={gel6} />
        </div>

        <div className="md:col-span-4 md:row-span-2">
          <ImageBox src={gel6} />
        </div>

        <div className="md:col-span-4 md:row-span-2">
          <ImageBox src={gel1} />
        </div>

        <div className="md:col-span-4 md:row-span-4">
          <ImageBox src={gel3} />
        </div>

        <div className="md:col-span-2 md:row-span-2">
          <ImageBox src={gel4} />
        </div>

        <div className="md:col-span-2 md:row-span-2">
          <ImageBox src={gel5} />
        </div>

        <div className="md:col-span-4 md:row-span-2">
          <ImageBox src={gel2} />
        </div>
      </div>{" "}
      <div className="px-8 mt-8 block md:hidden">
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3800}
          infinite
          showDots
        >
          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel1.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel3.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel4.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel5.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel2.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel6.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel6.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel1.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel3.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel4.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel5.src})` }}
          />

          <div
            className="w-full h-70 bg-cover bg-center border border-gray-500 rounded-sm"
            style={{ backgroundImage: `url(${gel2.src})` }}
          />
        </Carousel>
      </div>
    </>
  );
};

"use client";

import YouTube from "react-youtube";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 1000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1000 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 2000, min: 1000 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
//
export function VideoSection() {
  const opts = {
    height: "390",
    width: "720",
    playerVars: {
      autoplay: 1,
    },
  };
  const optsMobile = {
    height: "390",
    width: "340",
    playerVars: {
      autoplay: 0,
    },
  };
  const youtubeIds = ["xHJCy3qKHu0", "omRLu1zHo-k"];
  return (
    <section className="w-full py-10 md:pb-20 px-2 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <Carousel responsive={responsive} swipeable draggable={false}>
          {youtubeIds.map((id) => (
            <>
              <div key={id} className="w-full md:flex justify-center hidden ">
                <YouTube videoId={id} opts={opts} />
              </div>
              <div key={id} className="w-full flex justify-center md:hidden ">
                <YouTube videoId={id} opts={optsMobile} />
              </div>
            </>
          ))}
        </Carousel>
        <div className=" w-full flex justify-center"></div>
        <h2 className="text-2xl font-medium text-center mt-12">
          The Dream Behind the Beat
        </h2>
      </div>
    </section>
  );
}

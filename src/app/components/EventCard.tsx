import React from "react";
interface EventCardProps {
  title: string;
  date: string;
  heading: string;
  description: string;
  tagline: string;
  image: string;
}
export const EventCard = ({
  title,
  date,
  heading,
  description,
  tagline,
  image,
}: EventCardProps) => {
  return (
    <div className="relative mt-8 mb-8 rounded-xl overflow-hidden">
      <h2 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-left">
        Upcoming
        <br />
        Festivals & Events
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        {/* Left - Image */}
        <div className="relative">
          <img
            src={image}
            alt="Dreamland event"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl" />
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
            <div>
              <h3 className="text-4xl font-light mb-2">{title}</h3>
              <p className="text-sm tracking-wider">{date}</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-2 border border-white/20 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
                INFO
              </button>
              <button className="px-8 py-2 border border-white/20 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
                TICKETS
              </button>
            </div>
          </div>
        </div>
        {/* Right - Content */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-4xl font-light mb-8">{heading}</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>
          <p className="text-2xl font-light">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

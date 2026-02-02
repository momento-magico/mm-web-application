"use client";

import Image from "next/image";
import event from "../../public/assets/images/event.webp";
import { useRouter } from "next/navigation";
import { EventInfo } from "./EventInfo";
import { CountdownDisplay } from "./CountdownDisplay";
interface EventCardProps {
  title: string;
  date: string;
  heading: string;
  description: string;
  tagline: string;
  eventId: string;
  ticketUrl: string;
}
export const EventCard = ({
  title,
  date,
  heading,
  description,
  tagline,
  eventId,
}: EventCardProps) => {
  const router = useRouter();
  return (
    <div className="relative mt-8 mb-8 rounded-xl ">
      <h2 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-left">
        Upcoming
        <br />
        Festivals & Events
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-6 ">
        {/* Left - Image */}
        <div className="relative border border-[#D9D9D926] rounded-lg">
          <Image
            src={event}
            alt="Dreamland event"
            className="w-full h-80 md:h-84 object-cover rounded-xl"
          />
          {/* Gradient Overlay */}
          <div className="absolute top-4 left-6 py-2 rounded-lg bg-white flex flex-col justify-center px-3">
            <span className="text-black text-sm font-bold text-center leading-none">
              AUG
            </span>
            <span className="text-black text-xl font-bold text-center leading-none">
              12
            </span>
          </div>

          <div className=" absolute bottom-16 left-4 right-0  md:hidden block">
            <h5 className="text-3xl font-light">{title}</h5>
            <p className="text-xs tracking-wider">{date}</p>
          </div>
          <div
            id="events"
            className="absolute bottom-4 md:top-auto  left-4 flex flex-col md:flex-row md:justify-between gap-5 items-center justify-center md:hidden"
          >
            <div className="flex gap-4">
              <button
                className="px-8 py-1 border border-white/20 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => router.push(`/events/${eventId}`)}
              >
                INFO
              </button>
              {/* <Link
                href={ticketUrl}
                target="_blank"
                className="px-8 py-2 border border-white/20 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                TICKETS
              </Link> */}
            </div>
          </div>
        </div>
        {/* Right - Content */}
        <div className="flex flex-col justify-center p-8">
          <div className="mb-8 scale-90 md:scale-70 origin-center"><CountdownDisplay /></div>
          
          <h2 className="text-4xl font-light mb-8">{heading}</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>
          <p className="text-2xl font-light">{tagline}</p>
        </div>
      </div>
      <EventInfo eventId={eventId} />
    </div>
  );
};

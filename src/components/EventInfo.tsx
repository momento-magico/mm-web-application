"use client"

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  eventId: string;
};
export const EventInfo = ({ eventId }: Props) => {
  const router = useRouter();
  return (
    <div className="bg-black/80 rounded-lg p-6 xl:max-w-xl lg:max-w-sm shadow-2xl absolute xl:bottom-0 bottom-20 left-16 right-24 border border-[#D9D9D926] hidden lg:block">
      <h2 className="text-white text-lg font-bold tracking-wide mb-1">
        DREAMLAND 2026
      </h2>
      <p className="text-gray-400 text-sm mb-4">Sri Lanka</p>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Get ready to lose yourself in the rhythm! Dreamland is back, bringing
        electrifying energy, mind-blowing visuals, and the hottest EDM acts
        under.
      </p>

      <button
        onClick={() => router.push(`/events/${eventId}`)}
        className="inline-flex items-center gap-2 px-4 py-1 border-2 border-white rounded-2xl text-white text-sm hover:border-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        Info
        <div className=" flex relative">
          <ChevronRight className="w-4 h-4 " />
          <ChevronRight className="w-4 h-4 absolute right-1 top-0" />
        </div>
      </button>
    </div>
  );
};

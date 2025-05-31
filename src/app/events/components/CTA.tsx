import React from "react";
import { Countdown } from "./Countdown";
import Link from "next/link";
export function CTA() {
  return (
    <div className="w-full max-w-4xl mx-auto mb-0 md:mb-24">
      <div className="mx-4 flex items-center flex-col md:flex-row gap-6 justify-between bg-black/80 backdrop-blur-sm px-8 py-6 rounded-lg">
        <Countdown targetDate="2025-07-27T00:00:00" />
        <div className="hidden lg:block text-gray-300">
          27.07.2025 — Sri Lanka
        </div>
        <Link
          href="https://www.spotseeker.lk/event/681e040594873"
          target="_blank"
          className="px-6 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-colors text-sm uppercase tracking-wider"
        >
          Buy Tickets
        </Link>
      </div>
    </div>
  );
}

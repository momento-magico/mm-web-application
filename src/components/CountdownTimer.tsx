"use client";

import { CountdownDisplay } from "./CountdownDisplay";

export const CountdownTimer = () => {
  return (
    <div className="relative w-full mx-auto px-4 md:px-0 ">
      <h2 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-left">
        Upcoming
        <br />
        Festivals & Events
      </h2>
      <CountdownDisplay />
    </div>
  );
};

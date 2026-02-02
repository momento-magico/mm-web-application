"use client";

import { useEffect, useState } from "react";
import { CountdownDisplay } from "./CountdownDisplay";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const now = new Date();
  const targetDate = new Date(process.env.NEXT_PUBLIC_START_DATE as string);
  const difference = targetDate.getTime() - now.getTime();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
};

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

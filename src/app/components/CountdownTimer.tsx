"use client";

import React, { useEffect, useState } from "react";

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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }
        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full mx-auto px-4 md:px-0 ">
      <h2 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-left">
        Upcoming
        <br />
        Festivals & Events
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-2 border-white/20 rounded-xl px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-7xl font-light mb-1 md:mb-2">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-widest">
            Days
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-7xl font-light mb-1 md:mb-2">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-widest">
            Hours
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-7xl font-light mb-1 md:mb-2">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-widest">
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-7xl font-light mb-1 md:mb-2">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-widest">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

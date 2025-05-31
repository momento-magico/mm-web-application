"use client";

import React, { useEffect, useState } from 'react';
interface CountdownProps {
  targetDate: string;
}
export function Countdown({
  targetDate
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return <div className="flex space-x-6">
      <div className="flex space-x-4 md:gap-1 gap-4">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400">Seconds</span>
        </div>
      </div>
    </div>;
}
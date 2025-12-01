"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        onComplete?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex gap-4 text-center">
      <div className="flex flex-col">
        <span className="text-4xl font-bold tabular-nums">{formatNumber(timeLeft.days)}</span>
        <span className="text-sm text-muted-foreground">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold tabular-nums">{formatNumber(timeLeft.hours)}</span>
        <span className="text-sm text-muted-foreground">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold tabular-nums">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-sm text-muted-foreground">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold tabular-nums">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-sm text-muted-foreground">Seconds</span>
      </div>
    </div>
  );
}

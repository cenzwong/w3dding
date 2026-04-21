import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="text-3xl md:text-5xl font-serif italic text-accent magic-text">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-[#A78BFA] mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center items-center py-8"
    >
      <TimeBlock value={timeLeft.days} label="Days" />
      <div className="text-2xl md:text-4xl text-accent-dim font-serif pt-1">:</div>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <div className="text-2xl md:text-4xl text-accent-dim font-serif pt-1">:</div>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <div className="text-2xl md:text-4xl text-accent-dim font-serif pt-1">:</div>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </motion.div>
  );
};

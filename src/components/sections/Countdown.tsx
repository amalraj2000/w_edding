'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { calculateCountdown, formatCountdownUnit } from '@/lib/utils';
import { CountdownTime } from '@/types';

export default function CountdownSection() {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const newCountdown = calculateCountdown(weddingConfig.weddingDate.date);
      setCountdown(newCountdown);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const counters = [
    { label: 'Days', value: countdown.days, icon: '☀️' },
    { label: 'Hours', value: countdown.hours, icon: '⏰' },
    { label: 'Minutes', value: countdown.minutes, icon: '⏱️' },
    { label: 'Seconds', value: countdown.seconds, icon: '✨' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="countdown"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Container */}
      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          variants={itemVariants}
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Save The Date
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Time Until
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Our Big Day
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            {weddingConfig.weddingDate.displayDate} • {weddingConfig.weddingDate.time}
          </p>
        </motion.div>

        {/* Countdown Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12"
          variants={containerVariants}
        >
          {counters.map((counter, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-2 border-yellow-400/30 rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-yellow-400/60 transition-colors backdrop-blur-sm shadow-lg">
                {/* Icon */}
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">{counter.icon}</div>

                {/* Value */}
                <motion.div
                  key={counter.value}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-1 sm:mb-2 font-mono tracking-tight"
                >
                  {formatCountdownUnit(counter.value)}
                </motion.div>

                {/* Label */}
                <p className="text-gray-400 text-xs sm:text-sm md:text-base uppercase tracking-wider font-semibold">
                  {counter.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-gray-300 text-base sm:text-lg md:text-xl italic">
            Every moment brings us closer to forever
          </p>

          {/* Animated Decoration */}
          <motion.div
            className="mt-6 sm:mt-8 flex justify-center gap-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl sm:text-3xl">💐</span>
            <span className="text-2xl sm:text-3xl">💍</span>
            <span className="text-2xl sm:text-3xl">💐</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

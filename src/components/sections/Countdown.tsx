'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { calculateCountdown, formatCountdownUnit } from '@/lib/utils';
import { CountdownTime } from '@/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CountdownSection() {
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => setCountdown(calculateCountdown(weddingConfig.weddingDate.date));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const counters = [
    { label: 'Days',    value: countdown.days },
    { label: 'Hours',   value: countdown.hours },
    { label: 'Minutes', value: countdown.minutes },
    { label: 'Seconds', value: countdown.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A1714 0%, #1E1B18 60%, #1A1714 100%)',
        borderTop: '1px solid rgba(201,169,110,0.1)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,169,110,0.07) 0%, transparent 70%)' }}
      />

      <motion.div
        className="relative max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <p className="section-eyebrow mb-3">Save The Date</p>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-4"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
          >
            Time Until{' '}
            <span className="block italic" style={{ color: '#C9A96E' }}>Our Big Day</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: '#9B8E83' }}>
            {weddingConfig.weddingDate.displayDate} &nbsp;·&nbsp; {weddingConfig.weddingDate.time}
          </p>
          <div className="ornament-line mt-5" />
        </motion.div>

        {/* Countdown Tiles */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-14"
          variants={containerVariants}
        >
          {counters.map((counter, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 text-center relative overflow-hidden transition-all duration-300"
                style={{
                  background: 'rgba(38,33,30,0.8)',
                  border: '1px solid rgba(201,169,110,0.2)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.45)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)')}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)' }}
                />

                {/* Number */}
                <motion.div
                  key={counter.value}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.07, 1] }}
                  transition={{ duration: 0.35 }}
                  className="font-mono font-bold mb-3"
                  style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                    color: '#C9A96E',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {formatCountdownUnit(counter.value)}
                </motion.div>

                {/* Thin divider */}
                <div
                  className="w-8 h-px mx-auto mb-3"
                  style={{ background: 'rgba(201,169,110,0.3)' }}
                />

                {/* Label */}
                <p
                  className="uppercase tracking-widest font-medium"
                  style={{
                    color: '#9B8E83',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                  }}
                >
                  {counter.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #C9A96E)' }} />
            <span style={{ color: '#C9A96E', fontSize: '1.1rem' }}>✦</span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #C9A96E)' }} />
          </div>
          <p
            className="text-xl sm:text-2xl md:text-3xl italic font-light"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C8BAB0' }}
          >
            Every moment brings us closer to forever
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

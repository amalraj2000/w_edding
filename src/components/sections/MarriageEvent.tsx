'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

export default function MarriageEventSection() {
  const { weddingDate, venue } = weddingConfig;

  const mapsUrl = venue.mapLink;
  const directionsUrl = venue.directions;

  return (
    <section
      id="event"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A1714 0%, #1E1B18 60%, #1A1714 100%)',
        borderTop: '1px solid rgba(201,169,110,0.1)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(201,169,110,0.08) 0%, transparent 70%)' }}
      />

      <motion.div
        className="max-w-3xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <p className="section-eyebrow mb-3">Wedding Ceremony</p>
          <h2
            className="text-4xl sm:text-6xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
          >
            Marriage Event Details
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#9B8E83' }}>
            We cordially invite you to share our joy as we exchange our wedding vows.
          </p>
          <div className="ornament-line mt-5" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="luxury-card rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Top glow */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)' }}
          />

          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-7 text-2xl sm:text-3xl shadow-inner"
            style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.3)' }}
          >
            💒
          </div>

          <h3
            className="text-2xl sm:text-4xl font-semibold mb-3"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
          >
            Nikah &amp; Wedding Ceremony
          </h3>
          <p className="text-sm max-w-md mx-auto mb-10" style={{ color: '#9B8E83' }}>
            The auspicious ceremony of marriage between Amal &amp; Mashoora
          </p>

          {/* Date / Time / Venue grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {/* Date */}
            <div
              className="p-5 sm:p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.15)' }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', letterSpacing: '0.15em', fontSize: '0.6rem' }}
              >
                Date
              </p>
              <p
                className="text-xl sm:text-2xl font-semibold mb-0.5"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
              >
                {weddingDate.displayDate}
              </p>
              <p className="text-xs" style={{ color: '#9B8E83' }}>{weddingDate.day}</p>
            </div>

            {/* Time */}
            <div
              className="p-5 sm:p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.15)' }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', letterSpacing: '0.15em', fontSize: '0.6rem' }}
              >
                Time
              </p>
              <p
                className="text-xl sm:text-2xl font-semibold mb-0.5"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
              >
                {weddingDate.time}
              </p>
              <p className="text-xs" style={{ color: '#9B8E83' }}>IST ({weddingDate.timezone})</p>
            </div>

            {/* Venue */}
            <div
              className="p-5 sm:p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.15)' }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', letterSpacing: '0.15em', fontSize: '0.6rem' }}
              >
                Venue
              </p>
              <p
                className="text-xl sm:text-2xl font-semibold mb-0.5"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
              >
                {venue.name}
              </p>
              <p className="text-xs" style={{ color: '#9B8E83' }}>Kerala, India</p>
            </div>
          </div>

          {/* Bottom divider line */}
          <div
            className="mb-8 h-px w-full"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.25), transparent)' }}
          />

          {/* Venue address + map buttons */}
          <div className="mb-6">
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.15em' }}
            >
              Venue Address
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-80"
              style={{ color: '#C8BAB0', fontFamily: 'var(--font-inter)' }}
            >
              {venue.address}
            </a>
          </div>

          {/* Single premium Google Maps button */}
          <div className="flex justify-center">
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold tracking-widest uppercase transition-all"
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #B8924A 100%)',
                color: '#1A1714',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                boxShadow: '0 8px 32px rgba(201,169,110,0.30), 0 2px 8px rgba(0,0,0,0.4)',
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: '0 14px 48px rgba(201,169,110,0.45), 0 2px 12px rgba(0,0,0,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Map pin icon */}
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
                style={{ background: 'rgba(26,23,20,0.25)' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              Open in Google Maps
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

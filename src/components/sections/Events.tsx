'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { formatDate, formatTime } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function EventsSection() {
  const { venue, events } = weddingConfig;

  return (
    <section
      id="events"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A1714 0%, #1E1B18 60%, #1A1714 100%)',
        borderTop: '1px solid rgba(201,169,110,0.1)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)' }}
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
          <p className="section-eyebrow mb-3">Celebration Schedule</p>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
          >
            Wedding{' '}
            <span style={{ color: '#C9A96E' }}>Events</span>
          </h2>
          <p className="text-sm sm:text-base max-w-lg mx-auto" style={{ color: '#9B8E83' }}>
            Join us for each of our special functions and ceremonies
          </p>
          <div className="ornament-line mt-5" />
        </motion.div>

        {/* Events List */}
        <motion.div className="space-y-5" variants={containerVariants}>
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <div
                className="luxury-card rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
                style={{ borderLeft: '3px solid rgba(201,169,110,0.5)' }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-48 h-full pointer-events-none"
                  style={{ background: 'linear-gradient(to left, rgba(201,169,110,0.04), transparent)' }}
                />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold"
                        style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
                      >
                        {event.name}
                      </h3>
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0"
                        style={{ background: 'rgba(201,169,110,0.2)', color: '#C9A96E' }}
                      >
                        ✓
                      </div>
                    </div>

                    <p className="text-sm mb-5" style={{ color: '#9B8E83' }}>{event.description}</p>

                    <div className="flex flex-wrap gap-3">
                      {[
                        { label: formatDate(event.date), icon: '📅' },
                        { label: formatTime(event.time), icon: '🕐' },
                        { label: event.venue, icon: '📍' },
                      ].map(({ label, icon }) => (
                        <div
                          key={label}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{
                            background: 'rgba(201,169,110,0.06)',
                            border: '1px solid rgba(201,169,110,0.15)',
                            color: '#C8BAB0',
                            fontFamily: 'var(--font-inter)',
                          }}
                        >
                          <span>{icon}</span>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <motion.a
                    href={venue.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold tracking-widest uppercase shrink-0 transition-all"
                    style={{
                      background: 'rgba(201,169,110,0.1)',
                      border: '1.5px solid rgba(201,169,110,0.35)',
                      color: '#C9A96E',
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                    }}
                    whileHover={{ background: 'rgba(201,169,110,0.18)', scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                    </svg>
                    Directions
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Venue Info Card */}
        <motion.div
          className="mt-12 sm:mt-16 luxury-card rounded-2xl p-7 sm:p-10 text-center relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Ornamental top */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)' }}
          />

          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-xl"
            style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)' }}
          >
            🏛️
          </div>

          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
          >
            {venue.name}
          </h3>

          <a
            href={venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm sm:text-base mb-8 transition-opacity hover:opacity-75"
            style={{ color: '#9B8E83' }}
          >
            {venue.address}
          </a>

          <div className="flex justify-center">
            <motion.a
              href={venue.mapLink}
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

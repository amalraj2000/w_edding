'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';

export default function GroomSection() {
  const groom = weddingConfig.groom;

  return (
    <section
      id="groom"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A1714 0%, #1E1B18 50%, #1A1714 100%)',
        borderTop: '1px solid rgba(201,169,110,0.1)',
      }}
    >
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 70%)', borderRadius: '50%' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow mb-3">Meet The Groom</p>
          <h2
            className="text-4xl sm:text-6xl font-semibold mb-5"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
          >
            The Groom
          </h2>
          <div className="ornament-line" />
        </motion.div>

        {/* Card — no photo, centered text layout */}
        <motion.div
          className="luxury-card rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.35), transparent)' }}
          />

          {/* Badge */}
          <span
            className="inline-block px-4 py-1 rounded-full mb-5"
            style={{
              background: 'rgba(201,169,110,0.1)',
              color: '#C9A96E',
              border: '1px solid rgba(201,169,110,0.25)',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Groom
          </span>

          {/* Name */}
          <h3
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
          >
            {groom.name}
          </h3>

          {/* Details */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-7"
            style={{ borderTop: '1px solid rgba(201,169,110,0.12)' }}
          >
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.1)' }}
            >
              <p className="text-xs uppercase tracking-widest mb-1.5 font-medium"
                style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', fontSize: '0.58rem', letterSpacing: '0.15em' }}>
                Son of
              </p>
              <p className="font-semibold text-base" style={{ color: '#C8BAB0' }}>{groom.father}</p>
            </div>

            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.1)' }}
            >
              <p className="text-xs uppercase tracking-widest mb-1.5 font-medium"
                style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', fontSize: '0.58rem', letterSpacing: '0.15em' }}>
                House
              </p>
              <p className="font-semibold text-base" style={{ color: '#C8BAB0' }}>{groom.house}</p>
            </div>

            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(201,169,110,0.05)', border: '1px solid rgba(201,169,110,0.12)' }}
            >
              <p className="text-xs uppercase tracking-widest mb-1.5 font-medium"
                style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', fontSize: '0.58rem', letterSpacing: '0.15em' }}>
                Native Place
              </p>
              <p className="font-semibold text-base" style={{ color: '#C9A96E' }}>{groom.place}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

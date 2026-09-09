'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { scrollToElement } from '@/lib/utils';

interface HeroProps {
  guestName?: string | null;
}

export default function Hero({ guestName }: HeroProps) {
  const [showInvitation, setShowInvitation] = useState(false);

  // Lock scroll when invitation modal is open
  useEffect(() => {
    document.body.style.overflow = showInvitation ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showInvitation]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center py-24 px-4"
      style={{ background: 'linear-gradient(160deg, #1A1714 0%, #211D1A 50%, #1E1A17 100%)' }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,169,110,0.10) 0%, transparent 70%)',
        }}
      />
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main Hero Content ─────────────────────── */}
      {!showInvitation ? (
        <motion.div
          className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Eyebrow */}
          <motion.p
            className="section-eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            The Wedding Of
          </motion.p>

          {/* Main Name Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] mb-2"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            Amal Bachu
            <span
              className="block italic font-normal my-1"
              style={{ color: '#C9A96E', fontSize: '0.55em' }}
            >
              &amp;
            </span>
            Mashoora Mansoor
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            className="flex items-center gap-4 my-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(to right, transparent, #C9A96E)' }} />
            <span className="text-[#C9A96E] text-base">✦</span>
            <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(to left, transparent, #C9A96E)' }} />
          </motion.div>

          {/* Couple Photo Frame */}
          <motion.div
            className="relative mx-auto my-4 group"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.65, type: 'spring', damping: 18 }}
          >
            {/* Glow ring */}
            <div
              className="absolute -inset-3 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
              style={{ background: 'radial-gradient(ellipse, #C9A96E 0%, transparent 70%)' }}
            />
            {/* Frame */}
            <div
              className="relative w-60 h-[350px] sm:w-72 sm:h-[420px] md:w-80 md:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl"
              style={{ border: '1.5px solid rgba(201,169,110,0.5)' }}
            >
              <img
                src="/images/couple.jpg"
                alt="Amal Bachu & Mashoora Mansoor"
                className="w-full h-full object-cover object-top transform group-hover:scale-104 transition-transform duration-700"
                style={{ transition: 'transform 0.7s ease' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.88) 0%, rgba(26,23,20,0.15) 45%, transparent 100%)' }}
              />
              {/* Caption inside frame */}
              <div className="absolute bottom-5 left-0 right-0 text-center px-4">
                <p
                  className="text-xl sm:text-2xl italic font-medium"
                  style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
                >
                  Amal &amp; Mashoora
                </p>
                <p
                  className="text-[0.65rem] tracking-widest uppercase mt-1"
                  style={{ color: '#9B8E83', fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Save The Date · {weddingConfig.weddingDate.displayDate}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Guest Greeting */}
          {guestName && (
            <motion.p
              className="text-lg sm:text-xl italic mt-4 mb-2"
              style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Dear {guestName}, we are delighted to invite you...
            </motion.p>
          )}

          {/* Couple Detail Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-6 mb-6 w-full"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* Groom */}
            <div
              className="rounded-2xl p-5 text-center luxury-card luxury-card-hover"
            >
              <p
                className="text-xl sm:text-2xl font-semibold mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
              >
                {weddingConfig.groom.name}
              </p>
              <p className="text-xs mb-0.5" style={{ color: '#9B8E83' }}>
                S/o {weddingConfig.groom.father}
              </p>
              <p className="text-xs" style={{ color: '#6B5E52' }}>
                {weddingConfig.groom.house}, {weddingConfig.groom.place}
              </p>
            </div>
            {/* Bride */}
            <div
              className="rounded-2xl p-5 text-center luxury-card luxury-card-hover"
            >
              <p
                className="text-xl sm:text-2xl font-semibold mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
              >
                {weddingConfig.bride.name}
              </p>
              <p className="text-xs mb-0.5" style={{ color: '#9B8E83' }}>
                D/o {weddingConfig.bride.father} &amp; {weddingConfig.bride.mother}
              </p>
              <p className="text-xs" style={{ color: '#6B5E52' }}>
                {weddingConfig.bride.house}, {weddingConfig.bride.place}
              </p>
            </div>
          </motion.div>

          {/* Date & Venue */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
          >
            <p
              className="text-2xl sm:text-3xl font-semibold"
              style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C9A96E' }}
            >
              {weddingConfig.weddingDate.displayDate} &nbsp;·&nbsp; {weddingConfig.weddingDate.time}
            </p>
            <p className="text-sm mt-1.5" style={{ color: '#9B8E83' }}>
              📍 {weddingConfig.venue.name}, {weddingConfig.venue.address}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.button
              onClick={() => setShowInvitation(true)}
              className="px-10 py-4 font-semibold rounded-full tracking-widest uppercase transition-all shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #A8895A 100%)',
                color: '#1A1714',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                boxShadow: '0 8px 32px rgba(201,169,110,0.25)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(201,169,110,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              Open Invitation
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 hidden sm:flex flex-col items-center gap-1.5"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span
              className="text-[0.6rem] tracking-widest uppercase"
              style={{ color: '#6B5E52', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Scroll to explore
            </span>
            <div className="w-px h-6" style={{ background: 'linear-gradient(to bottom, #C9A96E, transparent)' }} />
          </motion.div>
        </motion.div>

      ) : (
        /* ── Invitation Modal ──────────────────────── */
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
            style={{
              background: 'linear-gradient(160deg, #26211E 0%, #211D1A 100%)',
              border: '1.5px solid rgba(201,169,110,0.35)',
            }}
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93 }}
            transition={{ duration: 0.45 }}
          >
            <div className="p-7 sm:p-10 text-center">
              {/* Photo header */}
              <div
                className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden mb-6 shadow-xl"
                style={{ border: '2px solid rgba(201,169,110,0.5)' }}
              >
                <img
                  src="/images/couple.jpg"
                  alt="Amal & Mashoora"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Family names */}
              <p className="section-eyebrow mb-3">With the blessings of our families</p>
              <h2
                className="text-2xl sm:text-3xl font-semibold leading-tight mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
              >
                {weddingConfig.welcomeMessage.familyGroomSurname}
              </h2>
              <p className="italic text-2xl my-1" style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C9A96E' }}>&amp;</p>
              <h2
                className="text-2xl sm:text-3xl font-semibold leading-tight mb-5"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
              >
                {weddingConfig.welcomeMessage.familyBrideSurname}
              </h2>

              <p className="text-sm mb-6" style={{ color: '#9B8E83' }}>
                request the pleasure of your presence at the marriage of
              </p>

              {/* Couple names block */}
              <div
                className="rounded-2xl p-5 mb-6"
                style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.2)' }}
              >
                <div className="mb-3">
                  <p
                    className="text-2xl sm:text-3xl font-semibold"
                    style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
                  >
                    {weddingConfig.groom.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#9B8E83' }}>
                    S/o {weddingConfig.groom.father} · {weddingConfig.groom.house}, {weddingConfig.groom.place}
                  </p>
                </div>
                <p className="italic text-xl my-2" style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C9A96E' }}>&amp;</p>
                <div>
                  <p
                    className="text-2xl sm:text-3xl font-semibold"
                    style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}
                  >
                    {weddingConfig.bride.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#9B8E83' }}>
                    D/o {weddingConfig.bride.father} &amp; {weddingConfig.bride.mother} · {weddingConfig.bride.house}, {weddingConfig.bride.place}
                  </p>
                </div>
              </div>

              {/* Date / Time / Venue */}
              <div
                className="py-5 mb-6"
                style={{ borderTop: '1px solid rgba(201,169,110,0.2)', borderBottom: '1px solid rgba(201,169,110,0.2)' }}
              >
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#9B8E83' }}>
                  {weddingConfig.weddingDate.day}
                </p>
                <p
                  className="text-3xl sm:text-4xl font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C9A96E' }}
                >
                  {weddingConfig.weddingDate.displayDate}
                </p>
                <p className="text-lg" style={{ fontFamily: 'var(--font-cormorant), serif', color: '#DFC49A' }}>
                  {weddingConfig.weddingDate.time}
                </p>
              </div>

              <p
                className="text-xl font-semibold mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
              >
                {weddingConfig.venue.name}
              </p>
              <p className="text-xs mb-7" style={{ color: '#6B5E52' }}>{weddingConfig.venue.address}</p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => { setShowInvitation(false); setTimeout(() => scrollToElement('countdown'), 100); }}
                  className="flex-1 py-3.5 font-semibold rounded-full tracking-widest uppercase transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #C9A96E 0%, #A8895A 100%)',
                    color: '#1A1714',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Countdown
                </motion.button>
                <motion.button
                  onClick={() => setShowInvitation(false)}
                  className="flex-1 py-3.5 font-semibold rounded-full tracking-widest uppercase transition-all"
                  style={{
                    border: '1.5px solid rgba(201,169,110,0.45)',
                    color: '#C9A96E',
                    background: 'transparent',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                  }}
                  whileHover={{ background: 'rgba(201,169,110,0.08)', scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

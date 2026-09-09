'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';

export default function MarriageEventSection() {
  const { weddingDate, venue } = weddingConfig;

  return (
    <section
      id="event"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 bg-black overflow-hidden border-t border-yellow-400/10"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(234, 179, 8, 0.25) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-2 block">
            Wedding Ceremony
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-3">
            Marriage Event Details
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            We cordially invite you to share our joy as we exchange our wedding vows.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Marriage Event Details Card */}
        <motion.div
          className="bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-2xl border-2 border-yellow-400/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Header Ring Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400/10 border border-yellow-400/40 text-3xl sm:text-4xl mb-6 shadow-inner">
            💒
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-yellow-300 mb-2">
            Nikah & Wedding Ceremony
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto mb-8">
            The auspicious ceremony of marriage between Amal & Mashoora
          </p>

          {/* Time & Date Badge Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-black/60 border border-yellow-400/20 rounded-2xl p-4 sm:p-5">
              <span className="text-2xl mb-1 block">📅</span>
              <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Date</p>
              <p className="text-yellow-300 font-bold text-base sm:text-lg mt-1">
                {weddingDate.displayDate}
              </p>
              <p className="text-gray-400 text-xs">{weddingDate.day}</p>
            </div>

            <div className="bg-black/60 border border-yellow-400/20 rounded-2xl p-4 sm:p-5">
              <span className="text-2xl mb-1 block">⏰</span>
              <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Time</p>
              <p className="text-yellow-300 font-bold text-base sm:text-lg mt-1">
                {weddingDate.time}
              </p>
              <p className="text-gray-400 text-xs">IST ({weddingDate.timezone})</p>
            </div>

            <div className="bg-black/60 border border-yellow-400/20 rounded-2xl p-4 sm:p-5">
              <span className="text-2xl mb-1 block">📍</span>
              <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Venue</p>
              <p className="text-yellow-300 font-bold text-base sm:text-lg mt-1">
                {venue.name}
              </p>
              <p className="text-gray-400 text-xs">Kerala, India</p>
            </div>
          </div>

          {/* Directions / Map Link Button */}
          <div className="pt-4 border-t border-yellow-400/20 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-400/40 transition-all text-sm sm:text-base hover:scale-105"
            >
              <span>🗺️</span>
              <span>Open Venue in Google Maps</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

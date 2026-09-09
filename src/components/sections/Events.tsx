'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { formatDate, formatTime } from '@/lib/utils';

export default function EventsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="events"
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
            Celebration Schedule
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Wedding{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Events
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Join us for each of our special functions and ceremonies
          </p>
        </motion.div>

        {/* Events Timeline */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8"
          variants={containerVariants}
        >
          {weddingConfig.events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <div
                className="bg-black/70 border-l-4 border-yellow-400/80 rounded-2xl p-5 sm:p-8 backdrop-blur-md hover:border-yellow-400 transition-all shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(20, 20, 20, 0.8) 100%)',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Event Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
                        {event.name}
                      </h3>
                      <span className="text-yellow-400 text-sm sm:text-base">✓</span>
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base mb-4">{event.description}</p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-6 text-xs sm:text-sm md:text-base">
                      <div className="flex items-center gap-2 bg-yellow-400/5 px-3 py-1.5 rounded-lg border border-yellow-400/20 w-fit">
                        <span>📅</span>
                        <span className="text-gray-300 font-medium">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-yellow-400/5 px-3 py-1.5 rounded-lg border border-yellow-400/20 w-fit">
                        <span>🕐</span>
                        <span className="text-gray-300 font-medium">{formatTime(event.time)}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-yellow-400/5 px-3 py-1.5 rounded-lg border border-yellow-400/20 w-fit">
                        <span>📍</span>
                        <span className="text-gray-300 font-medium">{event.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={weddingConfig.venue.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-colors text-sm sm:text-base shrink-0"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Venue Info */}
        <motion.div
          className="mt-12 sm:mt-16 p-5 sm:p-8 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-2 border-yellow-400/30 rounded-2xl text-center backdrop-blur-md shadow-xl"
          variants={itemVariants}
        >
          <span className="text-2xl sm:text-3xl mb-2 block">🏛️</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            {weddingConfig.venue.name}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-6 max-w-xl mx-auto">{weddingConfig.venue.address}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <motion.a
              href={weddingConfig.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              📍 View Map
            </motion.a>

            <motion.a
              href={weddingConfig.venue.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              🚗 Directions
            </motion.a>

            <motion.button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Wedding Venue',
                    text: weddingConfig.venue.address,
                    url: weddingConfig.venue.mapLink,
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(weddingConfig.venue.mapLink);
                  alert('Venue link copied to clipboard!');
                }
              }}
              className="w-full px-5 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ↗️ Share Venue
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

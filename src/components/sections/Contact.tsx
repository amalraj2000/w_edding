'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';

export default function ContactSection() {
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
      id="contact"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Background */}
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
        <motion.div className="text-center mb-10 sm:mb-16" variants={itemVariants}>
          <span className="text-yellow-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Touch with Us
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            We'd love to hear from you. Contact us anytime!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12"
          variants={containerVariants}
        >
          {/* Bride's Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-2 border-pink-400/30 rounded-2xl p-5 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between"
            whileHover={{ y: -4 }}
          >
            <div>
              <div className="text-4xl sm:text-5xl mb-3">👑</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {weddingConfig.bride.name}
              </h3>
              <p className="text-pink-400 font-semibold text-sm mb-6">Bride</p>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4">
                {weddingConfig.bride.phone && (
                  <motion.a
                    href={`tel:${weddingConfig.bride.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-lg">📱</span>
                    <span>{weddingConfig.bride.phone}</span>
                  </motion.a>
                )}

                {weddingConfig.bride.email && (
                  <motion.a
                    href={`mailto:${weddingConfig.bride.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-lg">📧</span>
                    <span className="break-all">{weddingConfig.bride.email}</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6 sm:mt-8">
              <motion.a
                href={weddingConfig.bride.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors text-center text-xs sm:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp
              </motion.a>
              <motion.a
                href={`tel:${weddingConfig.bride.phone}`}
                className="flex-1 py-2.5 border-2 border-pink-400 text-pink-400 font-bold rounded-xl hover:bg-pink-400/10 transition-colors text-center text-xs sm:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Bride
              </motion.a>
            </div>
          </motion.div>

          {/* Groom's Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-400/30 rounded-2xl p-5 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between"
            whileHover={{ y: -4 }}
          >
            <div>
              <div className="text-4xl sm:text-5xl mb-3">💎</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {weddingConfig.groom.name}
              </h3>
              <p className="text-blue-400 font-semibold text-sm mb-6">Groom</p>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4">
                {weddingConfig.groom.phone && (
                  <motion.a
                    href={`tel:${weddingConfig.groom.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-lg">📱</span>
                    <span>{weddingConfig.groom.phone}</span>
                  </motion.a>
                )}

                {weddingConfig.groom.email && (
                  <motion.a
                    href={`mailto:${weddingConfig.groom.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-lg">📧</span>
                    <span className="break-all">{weddingConfig.groom.email}</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6 sm:mt-8">
              <motion.a
                href={weddingConfig.groom.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors text-center text-xs sm:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp
              </motion.a>
              <motion.a
                href={`tel:${weddingConfig.groom.phone}`}
                className="flex-1 py-2.5 border-2 border-blue-400 text-blue-400 font-bold rounded-xl hover:bg-blue-400/10 transition-colors text-center text-xs sm:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Groom
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Venue Contact */}
        <motion.div
          className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-2 border-yellow-400/30 rounded-2xl p-5 sm:p-8 text-center backdrop-blur-md shadow-xl"
          variants={itemVariants}
        >
          <span className="text-3xl mb-2 block">📍</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            {weddingConfig.venue.name}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-2">{weddingConfig.venue.address}</p>
          <p className="text-gray-400 text-xs sm:text-sm mb-6">
            For venue-related queries and directions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            <motion.a
              href={weddingConfig.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-colors text-xs sm:text-sm text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View on Map
            </motion.a>
            <motion.a
              href={weddingConfig.venue.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 transition-colors text-xs sm:text-sm text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Directions
            </motion.a>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          variants={itemVariants}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Follow Our Journey</h3>
          <div className="flex justify-center gap-4 sm:gap-6">
            <motion.a
              href={weddingConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg hover:shadow-yellow-400/50 transition-all text-xl"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              📷
            </motion.a>
            <motion.a
              href={weddingConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg hover:shadow-yellow-400/50 transition-all text-xl"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              👥
            </motion.a>
            <motion.a
              href={weddingConfig.social.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Group"
              className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg hover:shadow-yellow-400/50 transition-all text-xl"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              💬
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

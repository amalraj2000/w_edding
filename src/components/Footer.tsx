'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import Link from 'next/link';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <footer className="bg-black border-t border-yellow-400/20 py-8 sm:py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Couple Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
              {weddingConfig.groom.name} & {weddingConfig.bride.name}
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              {weddingConfig.weddingDate.displayDate}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">{weddingConfig.venue.name}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h4 className="text-base font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              <a
                href={weddingConfig.groom.whatsapp}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="#rsvp"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                RSVP
              </a>
              <a
                href={weddingConfig.venue.directions}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h4 className="text-base font-semibold text-white mb-3 sm:mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-3">
              <motion.a
                href={weddingConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-base"
              >
                📷
              </motion.a>
              <motion.a
                href={weddingConfig.social.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-base"
              >
                💬
              </motion.a>
              <motion.a
                href={weddingConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-base"
              >
                👥
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-yellow-400/20 pt-6 sm:pt-8"
          variants={itemVariants}
        >
          {/* Thank You Message */}
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-gray-400 italic text-xs sm:text-sm mb-1">
              "Love is patient, love is kind..."
            </p>
            <p className="text-xs text-gray-500">
              Thank you for being a part of our special day
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-[11px] sm:text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {weddingConfig.groom.name} &{' '}
              {weddingConfig.bride.name}. All rights reserved.
            </p>
            <p className="mt-1">
              Made with <span className="text-red-400">❤️</span> for our special day
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

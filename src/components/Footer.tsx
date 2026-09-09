'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer
      className="py-10 sm:py-14"
      style={{
        background: '#161310',
        borderTop: '1px solid rgba(201,169,110,0.15)',
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Top divider ornament */}
        <motion.div className="flex items-center gap-4 mb-10 sm:mb-12" variants={itemVariants}>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.2))' }} />
          <span style={{ color: 'rgba(201,169,110,0.5)', fontSize: '0.8rem' }}>✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(201,169,110,0.2))' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-center md:text-left">
          {/* Couple Info */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-xl sm:text-2xl font-semibold mb-3"
              style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C9A96E' }}
            >
              {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
            </h3>
            <p className="text-sm mb-1" style={{ color: '#9B8E83' }}>
              {weddingConfig.weddingDate.displayDate}
            </p>
            <p className="text-xs" style={{ color: '#6B5E52' }}>
              {weddingConfig.venue.name}, Kerala
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ color: '#9B8E83', fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.18em' }}
            >
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {[
                { label: 'WhatsApp', href: weddingConfig.groom.whatsapp, external: true },
                { label: 'Get Directions', href: weddingConfig.venue.directions, external: true },
                { label: 'View Map', href: weddingConfig.venue.mapLink, external: true },
              ].map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="text-xs transition-colors duration-200 hover:opacity-100"
                  style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#6B5E52')}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ color: '#9B8E83', fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.18em' }}
            >
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-3">
              {[
                { href: weddingConfig.social.instagram, label: 'Instagram', icon: '📷' },
                { href: weddingConfig.social.whatsappGroup, label: 'WhatsApp', icon: '💬' },
                { href: weddingConfig.social.facebook, label: 'Facebook', icon: '👥' },
              ].map(({ href, label, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all"
                  style={{
                    background: 'rgba(201,169,110,0.08)',
                    border: '1px solid rgba(201,169,110,0.2)',
                    color: '#9B8E83',
                  }}
                  whileHover={{
                    scale: 1.1,
                    background: 'rgba(201,169,110,0.18)',
                    borderColor: 'rgba(201,169,110,0.45)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-7 text-center"
          style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}
          variants={itemVariants}
        >
          <p
            className="italic mb-2 text-lg"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#6B5E52' }}
          >
            "Love is patient, love is kind..."
          </p>
          <p className="text-xs mb-3" style={{ color: '#4A4039', fontFamily: 'var(--font-inter)' }}>
            Thank you for being a part of our special day
          </p>
          <p className="text-[11px]" style={{ color: '#4A4039', fontFamily: 'var(--font-inter)' }}>
            &copy; {new Date().getFullYear()} {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
            &nbsp;·&nbsp; Made with ❤️ for our special day
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

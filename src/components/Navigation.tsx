'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { scrollToElement } from '@/lib/utils';

const navItems = [
  { label: 'Home',      id: 'home' },
  { label: 'Event',     id: 'event' },
  { label: 'Countdown', id: 'countdown' },
  { label: 'Story',     id: 'story' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock / unlock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = useCallback((id: string) => {
    setIsOpen(false);
    // Small delay so the drawer closes before jumping
    setTimeout(() => scrollToElement(id), 150);
  }, []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? 'bg-[#1A1714]/95 backdrop-blur-xl border-b border-[#C9A96E]/15 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-gradient-to-b from-[#1A1714]/80 via-[#1A1714]/30 to-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo */}
            <motion.button
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => handleNavClick('home')}
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.97 }}
            >
              <span
                className="text-[#C9A96E] font-serif italic text-2xl sm:text-3xl leading-none"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                ✦
              </span>
              <span
                className="text-base sm:text-lg font-semibold tracking-widest text-[#C9A96E] uppercase"
                style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.15em' }}
              >
                {weddingConfig.bride.nickname}
                <span className="mx-2 font-normal italic opacity-80">&</span>
                {weddingConfig.groom.nickname}
              </span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-4 py-2 text-sm font-medium tracking-widest uppercase text-[#9B8E83] hover:text-[#C9A96E] transition-colors duration-300 group"
                  style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em' }}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C9A96E] group-hover:w-4/5 transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              className="md:hidden p-2.5 rounded-lg border border-[#C9A96E]/25 text-[#C9A96E] bg-[#26211E]/60 backdrop-blur-md focus:outline-none"
              onClick={() => setIsOpen((o) => !o)}
              whileTap={{ scale: 0.93 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <motion.span
                  className="w-5 h-px bg-[#C9A96E] rounded-full block origin-center"
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="w-5 h-px bg-[#C9A96E] rounded-full block"
                  animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-5 h-px bg-[#C9A96E] rounded-full block origin-center"
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — Full-screen drawer with blur backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              className="fixed top-16 sm:top-20 left-0 right-0 z-50 md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div
                className="mx-4 rounded-2xl overflow-hidden border border-[#C9A96E]/20 shadow-2xl"
                style={{ background: 'rgba(26,23,20,0.97)', backdropFilter: 'blur(24px)' }}
              >
                {/* Ornamental Header */}
                <div className="px-6 pt-5 pb-3 border-b border-[#C9A96E]/10">
                  <p
                    className="text-[#C9A96E]/60 text-center tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em' }}
                  >
                    Navigation
                  </p>
                </div>

                {/* Nav Links */}
                <div className="px-4 py-4 space-y-1">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full text-left px-5 py-4 rounded-xl text-[#C8BAB0] hover:text-[#C9A96E] hover:bg-[#C9A96E]/8 flex items-center justify-between transition-all duration-200 border border-transparent hover:border-[#C9A96E]/15 group"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      whileTap={{ x: 4 }}
                    >
                      <span
                        style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.3rem', fontWeight: 500 }}
                      >
                        {item.label}
                      </span>
                      <span className="text-[#C9A96E]/40 group-hover:text-[#C9A96E]/70 text-xs transition-colors">
                        →
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Bottom ornament */}
                <div className="px-6 py-4 border-t border-[#C9A96E]/10 text-center">
                  <p
                    className="text-[#6B5E52] italic"
                    style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '0.9rem' }}
                  >
                    {weddingConfig.bride.nickname} & {weddingConfig.groom.nickname} · {weddingConfig.weddingDate.displayDate}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

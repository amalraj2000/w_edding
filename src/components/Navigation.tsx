'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { scrollToElement } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Groom', id: 'groom' },
    { label: 'Bride', id: 'bride' },
    { label: 'Event', id: 'event' },
    { label: 'Countdown', id: 'countdown' },
  ];

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-black/90 backdrop-blur-xl border-b border-yellow-400/20 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-2xl sm:text-3xl">💍</span>
            <span className="text-lg sm:text-xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent tracking-wide">
              {weddingConfig.bride.nickname} & {weddingConfig.groom.nickname}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-300 hover:text-yellow-400 px-3.5 py-2 rounded-full text-sm font-medium transition-all hover:bg-yellow-400/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu toggle button */}
          <motion.button
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-xl border border-yellow-400/30 text-yellow-400 bg-black/40 backdrop-blur-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <motion.span
                className="w-6 h-0.5 bg-yellow-400 rounded-full block transform origin-center transition-transform"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 9 : 0,
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-yellow-400 rounded-full block transition-opacity"
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-yellow-400 rounded-full block transform origin-center transition-transform"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -9 : 0,
                }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-yellow-400/20 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-yellow-400 hover:bg-yellow-400/10 flex items-center justify-between transition-colors border border-transparent hover:border-yellow-400/20"
                  whileTap={{ scale: 0.98, x: 6 }}
                >
                  <span>{item.label}</span>
                  <span className="text-yellow-400/50 text-xs">→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

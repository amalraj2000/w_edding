'use client';

import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';


export default function Navigation() {
  useEffect(() => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(26,23,20,0.96)';
        nav.style.backdropFilter = 'blur(16px)';
        nav.style.borderBottom = '1px solid rgba(201,169,110,0.12)';
      } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(26,23,20,0.85), rgba(26,23,20,0.3) 70%, transparent)';
        nav.style.backdropFilter = 'blur(0px)';
        nav.style.borderBottom = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((id: string) => {
    setTimeout(() => scrollToElement(id), 50);
  }, []);

  return (
    <motion.nav
      id="main-nav"
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500"
      style={{
        background: 'linear-gradient(to bottom, rgba(26,23,20,0.85), rgba(26,23,20,0.3) 70%, transparent)',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo mark */}
          <motion.button
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
            whileHover={{ opacity: 0.6 }}
            whileTap={{ scale: 0.93 }}
          >
            <span
              className="text-[#C9A96E] italic text-2xl sm:text-3xl leading-none"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              ✦
            </span>
          </motion.button>



        </div>
      </div>
    </motion.nav>
  );
}

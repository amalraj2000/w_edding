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
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Auto-play video/music if enabled
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  const handleOpenInvitation = () => {
    setShowInvitation(true);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] bg-black overflow-hidden flex items-center justify-center py-20 px-4"
    >
      {/* Background Video/Image */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/95" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(212, 175, 55, 0.25) 0%, transparent 75%)`,
          }}
        />
      </motion.div>

      {/* Content */}
      {!showInvitation ? (
        <motion.div
          className="text-center z-10 w-full max-w-4xl mx-auto px-2 sm:px-4 flex flex-col items-center justify-center my-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Main Heading */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-yellow-400 text-xs sm:text-sm uppercase tracking-widest font-semibold block mb-2">
              The Wedding Of
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Amal Bachu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 font-serif italic mx-2 sm:mx-3">
                &
              </span>
              Mashoora Mansoor
            </h1>
          </motion.div>

          {/* Couple Photo Frame */}
          <motion.div
            className="relative mx-auto my-4 sm:my-6 group"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, type: 'spring' }}
          >
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />
            
            {/* Photo Container */}
            <div className="relative w-64 h-96 sm:w-72 sm:h-[420px] md:w-80 md:h-[460px] rounded-[2rem] overflow-hidden border-2 border-yellow-400/80 shadow-2xl mx-auto">
              <img
                src="/images/couple.jpg"
                alt="Amal Bachu & Mashoora Mansoor"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
              
              <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                <p className="text-xl sm:text-2xl font-serif font-bold text-yellow-300 drop-shadow-md">
                  Amal & Mashoora
                </p>
                <p className="text-xs sm:text-sm text-gray-300 tracking-widest uppercase font-medium mt-0.5">
                  Save The Date • {weddingConfig.weddingDate.displayDate}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Guest Greeting */}
          {guestName && (
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-yellow-300 mb-6 italic px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Dear {guestName}, we are delighted to invite you...
            </motion.p>
          )}

          {/* Couple Details Summary Cards */}
          <motion.div
            className="mb-6 sm:mb-8 space-y-4 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto my-2 text-center">
              {/* Groom Summary */}
              <div className="bg-black/60 border border-yellow-400/30 rounded-2xl p-4 backdrop-blur-md">
                <p className="text-xl font-serif font-bold text-yellow-300">
                  {weddingConfig.groom.name}
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  S/o {weddingConfig.groom.father}
                </p>
                <p className="text-gray-400 text-xs">
                  {weddingConfig.groom.house}, {weddingConfig.groom.place}
                </p>
              </div>

              {/* Bride Summary */}
              <div className="bg-black/60 border border-yellow-400/30 rounded-2xl p-4 backdrop-blur-md">
                <p className="text-xl font-serif font-bold text-yellow-300">
                  {weddingConfig.bride.name}
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  D/o {weddingConfig.bride.father} & {weddingConfig.bride.mother}
                </p>
                <p className="text-gray-400 text-xs">
                  {weddingConfig.bride.house}, {weddingConfig.bride.place}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wedding Date & Venue */}
          <motion.div
            className="text-base sm:text-lg text-gray-300 mb-8 font-medium text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <p className="text-yellow-400 font-bold text-xl sm:text-2xl">
              {weddingConfig.weddingDate.displayDate} • {weddingConfig.weddingDate.time}
            </p>
            <p className="text-gray-300 text-sm mt-1">
              📍 {weddingConfig.venue.name}, {weddingConfig.venue.address}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              onClick={handleOpenInvitation}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition-all text-base hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📜 Open Invitation Card
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-10 sm:mt-12 hidden sm:flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-gray-400 text-xs tracking-widest uppercase mb-1">Scroll to explore</div>
            <div className="text-yellow-400 text-xl">↓</div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="relative z-10 w-full max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-4 py-6 max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Invitation Card */}
          <motion.div
            className="bg-black/90 backdrop-blur-2xl border-2 border-yellow-400/60 rounded-3xl p-5 sm:p-8 md:p-10 text-center shadow-2xl relative"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Modal Couple Photo Header */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-2 border-yellow-400 shadow-xl mb-4">
              <img
                src="/images/couple.jpg"
                alt="Amal & Mashoora"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {weddingConfig.welcomeMessage.familyGroomSurname}
              <br />
              <span className="text-yellow-400 font-serif italic text-2xl">&</span>
              <br />
              {weddingConfig.welcomeMessage.familyBrideSurname}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base my-4">
              request the pleasure of your presence at the marriage of
            </p>

            <div className="space-y-4 mb-6 bg-yellow-400/5 p-4 rounded-2xl border border-yellow-400/20">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-yellow-300">
                  {weddingConfig.groom.name}
                </p>
                <p className="text-gray-300 text-xs">
                  S/o {weddingConfig.groom.father}
                </p>
                <p className="text-gray-400 text-xs">
                  {weddingConfig.groom.house}, {weddingConfig.groom.place}
                </p>
              </div>

              <p className="text-yellow-400 font-serif italic text-base">&</p>

              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-yellow-300">
                  {weddingConfig.bride.name}
                </p>
                <p className="text-gray-300 text-xs">
                  D/o {weddingConfig.bride.father} & {weddingConfig.bride.mother}
                </p>
                <p className="text-gray-400 text-xs">
                  {weddingConfig.bride.house}, {weddingConfig.bride.place}
                </p>
              </div>
            </div>

            <div className="border-t border-b border-yellow-400/30 my-4 py-4">
              <p className="text-gray-300 text-sm mb-1">{weddingConfig.weddingDate.day}</p>
              <p className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                {weddingConfig.weddingDate.displayDate}
              </p>
              <p className="text-lg text-yellow-300">
                {weddingConfig.weddingDate.time}
              </p>
            </div>

            <p className="text-gray-200 font-semibold text-base mb-1">{weddingConfig.venue.name}</p>
            <p className="text-gray-400 text-xs mb-6">{weddingConfig.venue.address}</p>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                onClick={() => {
                  setShowInvitation(false);
                  scrollToElement('countdown');
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-400/50 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go to Countdown
              </motion.button>

              <motion.button
                onClick={() => setShowInvitation(false)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

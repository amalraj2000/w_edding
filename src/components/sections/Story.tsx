'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { getGuestName } from '@/lib/utils';

interface StoryProps {
  guestName?: string | null;
}

export default function StorySection({ guestName }: StoryProps) {
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
      id="story"
      className="relative w-full min-h-screen bg-black py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
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
        {/* Personal Welcome Message */}
        <motion.div
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Our Love Story
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Dear {guestName || 'Guest'}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We are delighted to invite you to celebrate the most important day
            of our lives. Your presence and blessings will make this moment even
            more special and memorable for us.
          </p>
          <p className="text-gray-400 text-sm sm:text-base mt-4 sm:mt-6 italic">
            Together with our families, we request the pleasure of your company
            to share in our joy and be a part of this beautiful journey.
          </p>
        </motion.div>

        {/* Story Timeline */}
        {weddingConfig.coupleStory && weddingConfig.coupleStory.length > 0 && (
          <motion.div className="mb-16 sm:mb-20" variants={containerVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-yellow-400 mb-8 sm:mb-12">
              Milestones of Our Love
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {weddingConfig.coupleStory.map((story) => (
                <motion.div
                  key={story.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-black/60 border border-yellow-400/30 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-md relative flex flex-col justify-between"
                >
                  <div>
                    <div className="text-4xl sm:text-5xl mb-3">{story.icon}</div>
                    <span className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full mb-3">
                      {story.year}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {story.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Couple Introduction */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Groom */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-400/30 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md flex flex-col justify-between"
            whileHover={{ y: -4 }}
          >
            <div>
              <div className="text-5xl sm:text-6xl mb-4">💎</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {weddingConfig.groom.name}
              </h3>
              <p className="text-blue-400 font-semibold mb-4 text-sm">Groom</p>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                A wonderful person who makes every moment special with love,
                laughter, and endless support.
              </p>
            </div>
            <motion.a
              href={weddingConfig.groom.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block px-6 py-2.5 bg-blue-400 text-black font-bold rounded-xl hover:bg-blue-500 transition-colors text-center text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Message Groom
            </motion.a>
          </motion.div>

          {/* Bride */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-2 border-pink-400/30 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md flex flex-col justify-between"
            whileHover={{ y: -4 }}
          >
            <div>
              <div className="text-5xl sm:text-6xl mb-4">👑</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {weddingConfig.bride.name}
              </h3>
              <p className="text-pink-400 font-semibold mb-4 text-sm">Bride</p>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                A beautiful soul who brings light, grace, and happiness to
                everyone around her.
              </p>
            </div>
            <motion.a
              href={weddingConfig.bride.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block px-6 py-2.5 bg-pink-400 text-black font-bold rounded-xl hover:bg-pink-500 transition-colors text-center text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Message Bride
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="text-center py-8 sm:py-12 border-t-2 border-b-2 border-yellow-400/30"
          variants={itemVariants}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 italic px-2">
            "Two souls, one heart, infinite love"
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-3">- {weddingConfig.groom.name} & {weddingConfig.bride.name}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

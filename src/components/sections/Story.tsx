'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';

interface StoryProps {
  guestName?: string | null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function StorySection({ guestName }: StoryProps) {
  return (
    <section
      id="story"
      className="relative w-full min-h-screen py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A1714 0%, #1E1B18 60%, #1A1714 100%)',
        borderTop: '1px solid rgba(201,169,110,0.1)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,169,110,0.07) 0%, transparent 70%)' }}
      />

      <motion.div
        className="relative max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Welcome Message */}
        <motion.div className="text-center mb-14 max-w-3xl mx-auto" variants={itemVariants}>
          <p className="section-eyebrow mb-3">Our Love Story</p>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-semibold mb-6"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
          >
            Dear {guestName || 'Guest'}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: '#C8BAB0' }}>
            We are delighted to invite you to celebrate the most important day
            of our lives. Your presence and blessings will make this moment even
            more special and memorable for us.
          </p>
          <p className="text-sm sm:text-base italic" style={{ color: '#9B8E83', fontFamily: 'var(--font-cormorant), serif', fontSize: '1.1rem' }}>
            Together with our families, we request the pleasure of your company
            to share in our joy and be a part of this beautiful journey.
          </p>
          <div className="ornament-line mt-7" />
        </motion.div>

        {/* Milestones */}
        {weddingConfig.coupleStory && weddingConfig.coupleStory.length > 0 && (
          <motion.div className="mb-20" variants={containerVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl text-center mb-10 font-semibold"
              style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C9A96E' }}
              variants={itemVariants}
            >
              Milestones of Our Love
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {weddingConfig.coupleStory.map((story, i) => (
                <motion.div
                  key={story.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="luxury-card luxury-card-hover rounded-2xl p-6 sm:p-7 text-center relative flex flex-col"
                >
                  {/* Step number */}
                  <div
                    className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(201,169,110,0.1)', color: '#C9A96E', fontFamily: 'var(--font-inter)' }}
                  >
                    {i + 1}
                  </div>

                  <div className="text-4xl sm:text-5xl mb-4">{story.icon}</div>

                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      background: 'rgba(201,169,110,0.1)',
                      border: '1px solid rgba(201,169,110,0.25)',
                      color: '#C9A96E',
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {story.year}
                  </span>

                  <h4
                    className="text-xl sm:text-2xl font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
                  >
                    {story.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#9B8E83' }}>
                    {story.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Couple Introduction Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14" variants={containerVariants}>
          {/* Groom */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="luxury-card luxury-card-hover rounded-2xl p-7 sm:p-9 text-center flex flex-col justify-between"
          >
            <div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl"
                style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.2)' }}
              >
                👤
              </div>
              <h3
                className="text-2xl sm:text-3xl font-semibold mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
              >
                {weddingConfig.groom.name}
              </h3>
              <p
                className="text-xs uppercase tracking-widest mb-5 font-medium"
                style={{ color: '#C9A96E', fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.15em' }}
              >
                Groom
              </p>
              <p className="text-sm sm:text-base mb-7 leading-relaxed" style={{ color: '#9B8E83' }}>
                A wonderful person who makes every moment special with love,
                laughter, and endless support.
              </p>
            </div>
            <motion.a
              href={weddingConfig.groom.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold tracking-widest uppercase transition-all"
              style={{
                border: '1.5px solid rgba(201,169,110,0.35)',
                color: '#C9A96E',
                background: 'transparent',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
              }}
              whileHover={{ background: 'rgba(201,169,110,0.1)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Message Groom
            </motion.a>
          </motion.div>

          {/* Bride */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="luxury-card luxury-card-hover rounded-2xl p-7 sm:p-9 text-center flex flex-col justify-between"
          >
            <div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl"
                style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.2)' }}
              >
                👤
              </div>
              <h3
                className="text-2xl sm:text-3xl font-semibold mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F5EFE6' }}
              >
                {weddingConfig.bride.name}
              </h3>
              <p
                className="text-xs uppercase tracking-widest mb-5 font-medium"
                style={{ color: '#C9A96E', fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.15em' }}
              >
                Bride
              </p>
              <p className="text-sm sm:text-base mb-7 leading-relaxed" style={{ color: '#9B8E83' }}>
                A beautiful soul who brings light, grace, and happiness to
                everyone around her.
              </p>
            </div>
            <motion.a
              href={weddingConfig.bride.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold tracking-widest uppercase transition-all"
              style={{
                border: '1.5px solid rgba(201,169,110,0.35)',
                color: '#C9A96E',
                background: 'transparent',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
              }}
              whileHover={{ background: 'rgba(201,169,110,0.1)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Message Bride
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="text-center py-10 sm:py-14 relative"
          variants={itemVariants}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)' }}
          />

          {/* Opening quote mark */}
          <div
            className="text-6xl sm:text-7xl leading-none mb-3 block"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: 'rgba(201,169,110,0.2)', lineHeight: 0.8 }}
          >
            "
          </div>
          <p
            className="text-xl sm:text-2xl md:text-3xl italic font-light leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-cormorant), serif', color: '#C8BAB0' }}
          >
            Two souls, one heart, infinite love
          </p>
          <p className="text-xs mt-4 tracking-widest uppercase" style={{ color: '#6B5E52', fontFamily: 'var(--font-inter)', fontSize: '0.6rem', letterSpacing: '0.15em' }}>
            — {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';

export default function GroomSection() {
  const groom = weddingConfig.groom;

  return (
    <section
      id="groom"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden border-t border-yellow-400/10"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-2 block">
            Meet The Groom
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-3">
            The Groom
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
        </motion.div>

        {/* Groom Details Card */}
        <motion.div
          className="bg-black/60 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-yellow-400 text-9xl font-serif select-none pointer-events-none">
            🕺
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Photo / Avatar */}
            <div className="flex-shrink-0 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-yellow-400/60 shadow-xl shadow-yellow-500/10 relative group">
              <img
                src="/images/groom.jpg"
                alt="Groom Amal Bachu"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Information */}
            <div className="flex-grow text-center md:text-left space-y-4">
              <div>
                <span className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-yellow-400/20">
                  Groom
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
                  {groom.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-yellow-400/15">
                <div className="bg-zinc-900/60 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-medium">
                    Son of
                  </p>
                  <p className="text-gray-100 font-semibold text-base sm:text-lg">
                    {groom.father}
                  </p>
                </div>

                <div className="bg-zinc-900/60 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-medium">
                    House Name
                  </p>
                  <p className="text-gray-100 font-semibold text-base sm:text-lg">
                    {groom.house}
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                    Native Place
                  </p>
                  <p className="text-yellow-400 font-semibold text-base sm:text-lg">
                    {groom.place}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

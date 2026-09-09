'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import Image from 'next/image';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? weddingConfig.gallery.images
      : weddingConfig.gallery.images.filter(
          (img) => img.category === selectedCategory
        );

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section
      id="gallery"
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
        className="relative max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
          <span className="text-yellow-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Memories
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Photo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Gallery
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Beautiful moments captured in time
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          variants={itemVariants}
        >
          {weddingConfig.gallery.categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category.name
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50'
                  : 'border border-yellow-400/40 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={imageVariants}
                exit="exit"
                onClick={() => setSelectedImage(image.id)}
                className="cursor-pointer group relative overflow-hidden rounded-2xl bg-black/60 border border-yellow-400/20 shadow-md"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] sm:aspect-square bg-gradient-to-br from-yellow-500/20 to-yellow-900/20 flex items-center justify-center relative">
                  <div className="flex flex-col items-center gap-2 text-gray-500">
                    <span className="text-4xl sm:text-6xl">📷</span>
                    <span className="text-xs text-gray-400 font-medium">{image.title}</span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4 sm:p-6 transition-opacity opacity-90 sm:opacity-0 sm:group-hover:opacity-100">
                    <div className="text-white w-full flex justify-between items-end">
                      <div>
                        <p className="font-bold text-base sm:text-lg text-yellow-300">{image.title}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{image.category}</p>
                      </div>
                      <span className="text-xs bg-yellow-400 text-black px-2.5 py-1 rounded-md font-bold">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative w-full max-w-lg sm:max-w-2xl bg-black border border-yellow-400/40 rounded-2xl overflow-hidden shadow-2xl my-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header bar with close button */}
                <div className="flex justify-between items-center px-4 py-3 border-b border-yellow-400/20 bg-black/80">
                  <span className="text-sm font-semibold text-yellow-400">Photo Details</span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-8 h-8 rounded-full bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition-colors text-lg font-bold"
                  >
                    ✕
                  </button>
                </div>

                {/* Image Container */}
                <div className="p-4 sm:p-6">
                  <div className="aspect-video sm:aspect-square bg-gradient-to-br from-yellow-500/20 to-yellow-900/20 rounded-xl flex items-center justify-center text-6xl sm:text-8xl mb-4 border border-yellow-400/10">
                    📷
                  </div>

                  {/* Image Info */}
                  {weddingConfig.gallery.images
                    .filter((img) => img.id === selectedImage)
                    .map((img) => (
                      <div key={img.id} className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {img.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Category: <span className="text-yellow-400 font-semibold">{img.category}</span>
                        </p>
                      </div>
                    ))}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 justify-between mt-6 pt-4 border-t border-yellow-400/20">
                    <motion.button
                      onClick={() => {
                        const currentIdx = filteredImages.findIndex(
                          (img) => img.id === selectedImage
                        );
                        if (currentIdx > 0) {
                          setSelectedImage(filteredImages[currentIdx - 1].id);
                        }
                      }}
                      disabled={filteredImages.findIndex((img) => img.id === selectedImage) === 0}
                      className="flex-1 py-2.5 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm text-center"
                      whileTap={{ scale: 0.96 }}
                    >
                      ← Previous
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        const currentIdx = filteredImages.findIndex(
                          (img) => img.id === selectedImage
                        );
                        if (currentIdx < filteredImages.length - 1) {
                          setSelectedImage(filteredImages[currentIdx + 1].id);
                        }
                      }}
                      disabled={
                        filteredImages.findIndex((img) => img.id === selectedImage) ===
                        filteredImages.length - 1
                      }
                      className="flex-1 py-2.5 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm text-center"
                      whileTap={{ scale: 0.96 }}
                    >
                      Next →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

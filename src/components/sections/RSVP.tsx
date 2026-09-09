'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding.config';
import { validateRSVPForm } from '@/lib/utils';
import { RSVPFormData } from '@/types';

export default function RSVPSection() {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    phone: '',
    guests: 1,
    attending: true,
    message: '',
    dietaryRestrictions: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : null;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (formData.guests < 1) newErrors.guests = 'Number of guests must be at least 1';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Here you would typically send the form data to a server
    console.log('RSVP Submitted:', formData);

    // Show success animation
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        guests: 1,
        attending: true,
        message: '',
        dietaryRestrictions: '',
        email: '',
      });
      setSubmitted(false);
    }, 3000);
  };

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
    <section
      id="rsvp"
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
        className="relative max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
          <span className="text-yellow-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Join Our Celebration
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            RSVP
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Confirm Your Presence
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Please let us know if you can join us by{' '}
            <span className="text-yellow-400 font-bold">
              {new Date(weddingConfig.rsvp.deadline).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-2 border-yellow-400/30 rounded-2xl p-5 sm:p-8 md:p-12 backdrop-blur-md shadow-2xl"
          variants={itemVariants}
        >
          {submitted ? (
            <motion.div
              className="text-center py-8 sm:py-12"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <motion.div
                className="text-5xl sm:text-6xl mb-4 text-yellow-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5 }}
              >
                ✨
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Thank You!
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Your RSVP has been received. We look forward to celebrating with
                you!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold text-sm sm:text-base mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 sm:py-3.5 bg-black/60 border border-yellow-400/40 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors text-base"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold text-sm sm:text-base mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 sm:py-3.5 bg-black/60 border border-yellow-400/40 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors text-base"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold text-sm sm:text-base mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full px-4 py-3 sm:py-3.5 bg-black/60 border border-yellow-400/40 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors text-base"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.phone}</p>
                )}
              </motion.div>

              {/* Number of Guests */}
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold text-sm sm:text-base mb-2">
                  Number of Guests (Including You) *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-3.5 bg-black/60 border border-yellow-400/40 rounded-xl text-white focus:border-yellow-400 focus:outline-none transition-colors text-base appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num} className="bg-black text-white">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                {errors.guests && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.guests}</p>
                )}
              </motion.div>

              {/* Attendance */}
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold text-sm sm:text-base mb-3">
                  Will you be attending?
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, attending: true }))}
                    className={`py-3 px-4 rounded-xl border text-center font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                      formData.attending
                        ? 'bg-green-500/20 border-green-400 text-green-400 shadow-md shadow-green-500/10'
                        : 'bg-black/40 border-yellow-400/30 text-gray-400 hover:border-yellow-400/60'
                    }`}
                  >
                    <span>✓</span> Joyfully Accepts
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, attending: false }))}
                    className={`py-3 px-4 rounded-xl border text-center font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                      !formData.attending
                        ? 'bg-red-500/20 border-red-400 text-red-400 shadow-md shadow-red-500/10'
                        : 'bg-black/40 border-yellow-400/30 text-gray-400 hover:border-yellow-400/60'
                    }`}
                  >
                    <span>✕</span> Regretfully Declines
                  </button>
                </div>
              </motion.div>

              {/* Dietary Restrictions */}
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold text-sm sm:text-base mb-2">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  placeholder="e.g., Vegetarian, Gluten-free, etc."
                  className="w-full px-4 py-3 sm:py-3.5 bg-black/60 border border-yellow-400/40 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors text-base"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold text-sm sm:text-base mb-2">
                  Message for the Couple
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your wishes and blessings..."
                  rows={4}
                  className="w-full px-4 py-3 sm:py-3.5 bg-black/60 border border-yellow-400/40 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none text-base"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all text-base sm:text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send RSVP
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div className="text-center mt-8 sm:mt-12" variants={itemVariants}>
          <p className="text-gray-400 text-xs sm:text-sm mb-4">
            Having trouble submitting the form? Reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href={`mailto:${weddingConfig.rsvp.email}`}
              className="w-full sm:w-auto px-6 py-2.5 border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 transition-colors text-sm text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ✉️ Email Us
            </motion.a>
            <motion.a
              href={weddingConfig.groom.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 transition-colors text-sm text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              💬 WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

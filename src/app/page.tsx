'use client';

import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import StorySection from '@/components/sections/Story';
import CountdownSection from '@/components/sections/Countdown';
import EventsSection from '@/components/sections/Events';
import GallerySection from '@/components/sections/Gallery';
import RSVPSection from '@/components/sections/RSVP';
import ContactSection from '@/components/sections/Contact';
import {
  AnimatedGradientBg,
  FloatingPetals,
  ScrollProgressBar,
} from '@/components/Animations';
import PageContent from '@/components/PageContent';

export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <AnimatedGradientBg />

      {/* Floating Petals Animation */}
      <FloatingPetals />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navigation />

      {/* Main Content with Suspense */}
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <PageContent />
      </Suspense>

    </>
  );
}

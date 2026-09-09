'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import GroomSection from '@/components/sections/Groom';
import BrideSection from '@/components/sections/Bride';
import MarriageEventSection from '@/components/sections/MarriageEvent';
import CountdownSection from '@/components/sections/Countdown';

export default function PageContent() {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    // Get guest name from URL parameter
    const guest = searchParams.get('guest');
    if (guest) {
      setGuestName(decodeURIComponent(guest));
    }
  }, [searchParams]);

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <Hero guestName={guestName} />

      {/* Groom Section */}
      <GroomSection />

      {/* Bride Section */}
      <BrideSection />

      {/* Marriage Event Section */}
      <MarriageEventSection />

      {/* Countdown Section */}
      <CountdownSection />
    </main>
  );
}

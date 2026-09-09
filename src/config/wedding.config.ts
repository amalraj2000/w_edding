/**
 * Wedding Configuration
 * All wedding details can be updated here without modifying UI components
 */

export const weddingConfig = {
  // Couple Information
  bride: {
    name: "Mashoora Mansoor",
    nickname: "Mashoora",
    father: "Mansoor",
    mother: "Rasiya Mansoor",
    house: "Chalakandi House",
    place: "Cheruvayoor, Edavennapara",
    phone: "+91-XXXXXXXXXX",
    email: "bride@example.com",
    whatsapp: "https://wa.me/91XXXXXXXXXX",
  },
  groom: {
    name: "Amal Bachu",
    nickname: "Amal",
    father: "Salim M.",
    house: "Mandikkayil House",
    place: "Koolimadu, Calicut",
    phone: "+91-XXXXXXXXXX",
    email: "groom@example.com",
    whatsapp: "https://wa.me/91XXXXXXXXXX",
  },

  // Wedding Date & Time
  weddingDate: {
    date: "2026-11-08T10:00:00+05:30",
    displayDate: "8th November 2026",
    day: "Sunday",
    time: "10:00 AM",
    timezone: "IST",
  },

  // Venue Details
  venue: {
    name: "Edavennapara",
    location: "Edavennapara",
    city: "Calicut / Malappuram",
    state: "Kerala",
    country: "India",
    pincode: "673645",
    address: "Edavennapara, Kerala",
    mapLink:
      "https://www.google.com/maps?q=11.259921340062698,75.9782863431758",
    directions: "https://www.google.com/maps/dir/?api=1&destination=11.259921340062698,75.9782863431758",
  },

  // Events Timeline
  events: [
    {
      id: 1,
      name: "Wedding Ceremony",
      date: "2024-11-08",
      time: "10:00 AM",
      venue: "Edavennapara",
      description: "The main wedding ceremony celebrating the union of Amal & Mashoora",
      color: "from-yellow-500 to-amber-500",
    },
  ],

  // Family Details
  groom_family: [
    {
      id: 1,
      name: "Salim M.",
      relation: "Father",
      image: "/images/family/groom-father.jpg",
    },
  ],
  bride_family: [
    {
      id: 1,
      name: "Mansoor",
      relation: "Father",
      image: "/images/family/bride-father.jpg",
    },
    {
      id: 2,
      name: "Rasiya Mansoor",
      relation: "Mother",
      image: "/images/family/bride-mother.jpg",
    },
  ],

  // Gallery
  gallery: {
    categories: [
      { id: 1, name: "All", label: "All" },
      { id: 2, name: "Engagement", label: "Engagement" },
      { id: 3, name: "Couple", label: "Couple" },
      { id: 4, name: "Moments", label: "Moments" },
    ],
    images: [
      {
        id: 1,
        src: "/images/gallery/couple-1.jpg",
        category: "Couple",
        title: "Our Special Moment",
      },
      {
        id: 2,
        src: "/images/gallery/couple-2.jpg",
        category: "Couple",
        title: "Forever Together",
      },
      {
        id: 3,
        src: "/images/gallery/engagement-1.jpg",
        category: "Engagement",
        title: "Engagement Day",
      },
      {
        id: 4,
        src: "/images/gallery/moments-1.jpg",
        category: "Moments",
        title: "Beautiful Moment",
      },
      {
        id: 5,
        src: "/images/gallery/moments-2.jpg",
        category: "Moments",
        title: "Candid Shot",
      },
    ],
  },

  // Couple Story Timeline
  coupleStory: [
    {
      id: 1,
      title: "We Met",
      description: "Our beautiful journey began with a chance encounter",
      year: "2018",
      icon: "💫",
    },
    {
      id: 2,
      title: "First Date",
      description: "Coffee, conversation, and instant connection",
      year: "2018",
      icon: "☕",
    },
    {
      id: 3,
      title: "Engagement",
      description:
        "He asked, she said yes! The beginning of forever started here",
      year: "2024",
      icon: "💍",
    },
    {
      id: 4,
      title: "Wedding",
      description: "Today, we become one. Forever starts now!",
      year: "2024",
      icon: "💒",
    },
  ],

  // Videos
  videos: [
    {
      id: 1,
      title: "Wedding Teaser",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/images/videos/teaser.jpg",
    },
    {
      id: 2,
      title: "Our Love Story",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/images/videos/love-story.jpg",
    },
  ],

  // Hotels & Accommodation
  accommodation: [
    {
      id: 1,
      name: "Hotel Grand Palace",
      distance: "2 km from venue",
      type: "5-Star",
      phone: "+91-XXXXXXXXXX",
      website: "https://example.com",
      image: "/images/hotels/hotel-1.jpg",
    },
    {
      id: 2,
      name: "Hotel Royal Inn",
      distance: "3 km from venue",
      type: "4-Star",
      phone: "+91-XXXXXXXXXX",
      website: "https://example.com",
      image: "/images/hotels/hotel-2.jpg",
    },
  ],

  // Travel Information
  travel: {
    airport: "Calicut International Airport (CCJ)",
    distance: "35 km from venue",
    taxi: "+91-XXXXXXXXXX",
    carRental: "https://example.com",
  },

  // Gift & Blessings
  gifts: {
    upiId: "mashoora.amal@upi",
    upiQrCode: "/images/qr-codes/upi.png",
    bankDetails: {
      accountHolder: "Amal Bachu & Mashoora Parvin",
      accountNumber: "XXXXXXXXXXXX",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
    },
  },

  // RSVP Settings
  rsvp: {
    enabled: true,
    deadline: "2024-11-01",
    email: "rsvp@example.com",
  },

  // Welcome Message
  welcomeMessage: {
    familyBrideSurname: "Mansoor Family",
    familyGroomSurname: "Salim Family",
    mainMessage:
      "Together with our families, we request the pleasure of your presence at the marriage of",
    customMessage:
      "Join us as we celebrate the union of two hearts and the beginning of a beautiful new chapter",
  },

  // Social Media & Contact
  social: {
    whatsappGroup: "https://chat.whatsapp.com/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  // Website Settings
  website: {
    title: "Mashoora & Amal | Wedding",
    description: "Join us for our wedding celebration",
    favicon: "/favicon.ico",
    logo: "/logo.png",
    primaryColor: "#d4af37", // Gold
    secondaryColor: "#1a1a1a", // Black
  },

  // Background Music
  backgroundMusic: {
    enabled: true,
    url: "/music/wedding-bg.mp3",
    title: "Beautiful Background Music",
  },
};

export type WeddingConfig = typeof weddingConfig;

/**
 * TypeScript Type Definitions for Wedding Website
 */

export interface Couple {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  whatsapp: string;
}

export interface WeddingDateTime {
  date: string;
  displayDate: string;
  day: string;
  time: string;
  timezone: string;
}

export interface Venue {
  name: string;
  location: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  address: string;
  mapLink: string;
  directions: string;
}

export interface WeddingEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  color: string;
}

export interface FamilyMember {
  id: number;
  name: string;
  relation: string;
  image: string;
}

export interface GalleryCategory {
  id: number;
  name: string;
  label: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
}

export interface Gallery {
  categories: GalleryCategory[];
  images: GalleryImage[];
}

export interface TimelineItem {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface Video {
  id: number;
  title: string;
  youtubeId: string;
  thumbnail: string;
}

export interface Hotel {
  id: number;
  name: string;
  distance: string;
  type: string;
  phone: string;
  website: string;
  image: string;
}

export interface Travel {
  airport: string;
  distance: string;
  taxi: string;
  carRental: string;
}

export interface BankDetails {
  accountHolder: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
}

export interface Gifts {
  upiId: string;
  upiQrCode: string;
  bankDetails: BankDetails;
}

export interface RSVP {
  enabled: boolean;
  deadline: string;
  email: string;
}

export interface WelcomeMessage {
  familyBrideSurname: string;
  familyGroomSurname: string;
  mainMessage: string;
  customMessage: string;
}

export interface Social {
  whatsappGroup: string;
  instagram: string;
  facebook: string;
}

export interface WebsiteSettings {
  title: string;
  description: string;
  favicon: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface BackgroundMusic {
  enabled: boolean;
  url: string;
  title: string;
}

export interface RSVPFormData {
  name: string;
  phone: string;
  guests: number;
  attending: boolean;
  message: string;
  dietaryRestrictions?: string;
  email?: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface AnimationVariants {
  initial: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  animate: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  exit: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  transition?: {
    duration: number;
    delay?: number;
    type?: string;
  };
}

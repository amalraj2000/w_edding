/**
 * Utility Functions for Wedding Website
 */

import { CountdownTime, RSVPFormData } from "@/types";

/**
 * Calculate countdown to a specific date
 */
export const calculateCountdown = (targetDate: string): CountdownTime => {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const distance = target - now;

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

/**
 * Format date to readable format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

/**
 * Format time to 12-hour format
 */
export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

/**
 * Get guest name from URL parameters
 */
export const getGuestName = (): string | null => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    return params.get("guest");
  }
  return null;
};

/**
 * Scroll to element smoothly
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Validate email
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic)
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ""));
};

/**
 * Validate RSVP form data
 */
export const validateRSVPForm = (formData: RSVPFormData): boolean => {
  return (
    formData.name.trim().length > 0 &&
    validatePhoneNumber(formData.phone) &&
    formData.guests > 0 &&
    formData.guests <= 10
  );
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{5})(\d{5})/, "$1 $2");
  }
  if (cleaned.length === 12) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{5})/, "+$1 $2 $3");
  }
  return phone;
};

/**
 * Get contrasting color for text
 */
export const getContrastColor = (hexColor: string): string => {
  const rgb = parseInt(hexColor.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};

/**
 * Get scroll progress percentage
 */
export const getScrollProgress = (): number => {
  if (typeof window !== "undefined") {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const totalScroll = documentHeight - windowHeight;
    return totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
  }
  return 0;
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

/**
 * Generate random ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy:", error);
    return false;
  }
};

/**
 * Get days between two dates
 */
export const getDaysBetween = (date1: string, date2: string): number => {
  const d1 = new Date(date1).getTime();
  const d2 = new Date(date2).getTime();
  return Math.floor(Math.abs((d2 - d1) / (1000 * 60 * 60 * 24)));
};

/**
 * Format countdown time with leading zeros
 */
export const formatCountdownUnit = (value: number): string => {
  return value.toString().padStart(2, "0");
};

/**
 * Play sound effect
 */
export const playSound = (soundUrl: string, volume: number = 0.5): void => {
  if (typeof window !== "undefined") {
    const audio = new Audio(soundUrl);
    audio.volume = volume;
    audio.play().catch((error) => console.error("Error playing sound:", error));
  }
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: unknown[]) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: unknown[]) => void) => {
  let inThrottle: boolean;
  return (...args: unknown[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

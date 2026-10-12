import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, VehicleTier, CityId, BookingState } from '../types';
import { translations, Dictionary } from '../lib/translations';

interface AppContextType {
  language: Language;
  localeTag: string;
  setLanguage: (lang: Language | string) => void;
  t: Dictionary;
  dir: 'ltr' | 'rtl';
  activePage: string;
  setActivePage: (page: string) => void;
  selectedFleetCar: VehicleTier | null;
  setSelectedFleetCar: (car: VehicleTier | null) => void;
  isConciergeOpen: boolean;
  setIsConciergeOpen: (open: boolean) => void;
  bookingState: BookingState;
  setBookingState: React.Dispatch<React.SetStateAction<BookingState>>;
  openBookingWithCar: (car: VehicleTier) => void;
  openBookingWithCity: (city: CityId) => void;
  resetBooking: () => void;
}

const defaultBookingState: BookingState = {
  step: 1,
  city: 'london',
  serviceType: 'airport',
  vehicleTier: 'first',
  pickupLocation: 'London Heathrow (LHR) Terminal 5',
  destination: 'The Connaught, Carlos Place, Mayfair, London',
  date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
  time: '14:30',
  hours: 4,
  passengers: 2,
  luggage: 2,
  flightNumber: 'BA 458',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  specialRequests: '',
};

const languageToLocale: Record<Language, string> = {
  en: 'en-us',
  fr: 'fr-fr',
  bg: 'bg-bg',
  ar: 'ar-ae',
};

// Normalize any input string (e.g. "en-us", "EN", "fr-FR", "bg", "ar-AE", "lang?=en-us") to valid Language
function normalizeLang(input: string | null | undefined): Language | null {
  if (!input) return null;
  const clean = input.trim().toLowerCase().replace(/^lang\?=/, '');
  if (clean.startsWith('fr')) return 'fr';
  if (clean.startsWith('bg')) return 'bg';
  if (clean.startsWith('ar')) return 'ar';
  if (clean.startsWith('en')) return 'en';
  return null;
}

// Extract language parameter from URL query string
function getLangFromUrl(): Language | null {
  if (typeof window === 'undefined') return null;
  try {
    const search = window.location.search;
    const urlParams = new URLSearchParams(search);
    
    // Check standard ?lang=...
    const langParam = urlParams.get('lang');
    if (langParam) {
      const match = normalizeLang(langParam);
      if (match) return match;
    }

    // Check potential user variations like ?lang?=en-us or ?lang-code=...
    for (const [key, val] of urlParams.entries()) {
      if (key.toLowerCase().includes('lang')) {
        const fromKey = normalizeLang(key);
        if (fromKey) return fromKey;
        const fromVal = normalizeLang(val);
        if (fromVal) return fromVal;
      }
    }
  } catch {
    // ignore
  }
  return null;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Prioritize URL query param (e.g. ?lang=en-us)
    const fromUrl = getLangFromUrl();
    if (fromUrl) return fromUrl;

    // 2. Local storage fallback
    try {
      const saved = localStorage.getItem('driveo_language');
      const normalized = normalizeLang(saved);
      if (normalized) return normalized;
    } catch {
      // fallback
    }

    return 'en';
  });

  const [activePage, setActivePage] = useState<string>('home');
  const [selectedFleetCar, setSelectedFleetCar] = useState<VehicleTier | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState<boolean>(false);
  const [bookingState, setBookingState] = useState<BookingState>(() => {
    try {
      const saved = localStorage.getItem('driveo_saved_booking');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return defaultBookingState;
  });

  const localeTag = languageToLocale[language] || 'en-us';

  // Synchronize language and update URL query parameter to ?lang=en-us
  const setLanguage = useCallback((langInput: Language | string) => {
    const target = normalizeLang(langInput) || 'en';
    setLanguageState(target);

    try {
      localStorage.setItem('driveo_language', target);
      
      // Update URL query parameter without full reload
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        const targetLocale = languageToLocale[target] || 'en-us';
        url.searchParams.set('lang', targetLocale);
        window.history.pushState({ lang: targetLocale }, '', url.toString());
      }
    } catch {
      // ignore
    }
  }, []);

  // Listen to browser back/forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const fromUrl = getLangFromUrl();
      if (fromUrl && fromUrl !== language) {
        setLanguageState(fromUrl);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  // Sync initial URL on mount if not present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const url = new URL(window.location.href);
        const existingLang = url.searchParams.get('lang');
        if (!existingLang) {
          const targetLocale = languageToLocale[language] || 'en-us';
          url.searchParams.set('lang', targetLocale);
          window.history.replaceState({ lang: targetLocale }, '', url.toString());
        }
      } catch {
        // ignore
      }
    }
  }, [language]);

  const t = translations[language] || translations.en;
  const dir = t.dir;

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = localeTag;
  }, [dir, localeTag]);

  useEffect(() => {
    try {
      localStorage.setItem('driveo_saved_booking', JSON.stringify(bookingState));
    } catch {
      // ignore
    }
  }, [bookingState]);

  const openBookingWithCar = (car: VehicleTier) => {
    setBookingState((prev) => ({
      ...prev,
      vehicleTier: car,
      step: 1,
    }));
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBookingWithCity = (city: CityId) => {
    setBookingState((prev) => ({
      ...prev,
      city,
      step: 1,
    }));
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetBooking = () => {
    setBookingState({
      ...defaultBookingState,
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        localeTag,
        setLanguage,
        t,
        dir,
        activePage,
        setActivePage,
        selectedFleetCar,
        setSelectedFleetCar,
        isConciergeOpen,
        setIsConciergeOpen,
        bookingState,
        setBookingState,
        openBookingWithCar,
        openBookingWithCity,
        resetBooking,
      }}
    >
      <div dir={dir} className="min-h-screen bg-[#12100e] text-[#f4efe6]">
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { Language } from '../types';
import { Globe, ArrowDownRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, localeTag, setLanguage, t, activePage, setActivePage, setIsConciergeOpen } = useApp();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'bg', label: 'Български', flag: '🇧🇬' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪' },
  ];

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#12100e]/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 w-full max-w-[96rem] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center text-left text-xl lg:text-2xl font-serif tracking-tight text-[#f4efe6] transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
        >
          <span className="font-medium tracking-normal text-white">Driveo</span>
          <span className="ml-1.5 font-light text-[#c4a47c]">Exclusive</span>
        </button>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#b8b1a5]">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activePage === 'home' ? 'text-white font-semibold' : ''
            }`}
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => handleNavClick('fleet')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activePage === 'fleet' ? 'text-white font-semibold' : ''
            }`}
          >
            {t.nav.fleet}
          </button>
          <button
            onClick={() => handleNavClick('cities')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activePage === 'cities' ? 'text-white font-semibold' : ''
            }`}
          >
            {t.nav.cities}
          </button>
          <button
            onClick={() => handleNavClick('flight-tracker')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activePage === 'flight-tracker' ? 'text-white font-semibold' : ''
            }`}
          >
            {t.nav.flightTracker}
          </button>
          <button
            onClick={() => handleNavClick('booking')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activePage === 'booking' ? 'text-white font-semibold' : ''
            }`}
          >
            {t.nav.process}
          </button>
        </nav>

        {/* Zone 3: 1 primary action + Language Selector */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-mono text-[#b8b1a5] hover:border-white/20 hover:text-white transition-colors"
              aria-label="Change language"
              title={`Active language parameter: ?lang=${localeTag}`}
            >
              <Globe className="h-3.5 w-3.5 text-[#c4a47c]" />
              <span className="uppercase">{language}</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-white/15 bg-[#1a1715] p-1.5 shadow-2xl z-50">
                {languages.map((l) => {
                  const targetTag = l.code === 'en' ? 'en-us' : l.code === 'fr' ? 'fr-fr' : l.code === 'bg' ? 'bg-bg' : 'ar-ae';
                  const isCurrent = language === l.code;
                  return (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(targetTag);
                        setIsLangOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                        isCurrent
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-[#b8b1a5] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="text-sm">{l.flag}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => handleNavClick('booking')}
            className="flex items-center gap-2 rounded-lg bg-[#c4a47c] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#12100e] hover:bg-[#dfcaa8] transition-all duration-200 active:scale-98 whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(196,164,124,0.2)]"
          >
            <span>{t.nav.requestQuote}</span>
            <ArrowDownRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#b8b1a5] hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#12100e] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left text-[#b8b1a5] hover:text-white py-1"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('fleet')}
              className="text-left text-[#b8b1a5] hover:text-white py-1"
            >
              {t.nav.fleet}
            </button>
            <button
              onClick={() => handleNavClick('cities')}
              className="text-left text-[#b8b1a5] hover:text-white py-1"
            >
              {t.nav.cities}
            </button>
            <button
              onClick={() => handleNavClick('flight-tracker')}
              className="text-left text-[#b8b1a5] hover:text-white py-1"
            >
              {t.nav.flightTracker}
            </button>
            <button
              onClick={() => handleNavClick('booking')}
              className="text-left text-[#b8b1a5] hover:text-white py-1"
            >
              {t.nav.process}
            </button>
          </nav>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-[#b8b1a5]">VIP Concierge</span>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsConciergeOpen(true);
              }}
              className="text-xs text-[#c4a47c] font-mono"
            >
              +44 330 043 0976
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

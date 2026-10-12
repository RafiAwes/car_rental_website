import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { ArrowUpRight, Phone, Mail, Download, Check, MessageCircle } from 'lucide-react';
import { CityId } from '../types';

export const Footer: React.FC = () => {
  const { t, setActivePage, openBookingWithCity, setIsConciergeOpen } = useApp();
  const [appInstalled, setAppInstalled] = useState(false);

  const handleInstallApp = () => {
    setAppInstalled(true);
    setTimeout(() => setAppInstalled(false), 3000);
  };

  const cities: { id: CityId; label: string }[] = [
    { id: 'london', label: 'London' },
    { id: 'paris', label: 'Paris' },
    { id: 'bulgaria', label: 'Bulgaria' },
    { id: 'dubai', label: 'Dubai' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0c0a09] py-20 text-[#f4efe6]">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-medium tracking-tight text-white">
              Driveo Exclusive Limited
            </h3>
            <p className="text-sm font-light text-[#b8b1a5] italic max-w-sm">
              {t.footer.brandTagline}
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#c4a47c] hover:text-[#dfcaa8] transition-colors"
              >
                <span>{t.footer.requestQuote}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* PWA Install Button */}
            <div className="pt-4">
              <button
                onClick={handleInstallApp}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#161311] px-3.5 py-2 text-xs font-mono text-[#b8b1a5] hover:border-[#c4a47c]/40 hover:text-white transition-all"
              >
                {appInstalled ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#c4a47c]" />
                    <span className="text-[#c4a47c]">Shortcut Ready on Device</span>
                  </>
                ) : (
                  <>
                    <Download className="h-3.5 w-3.5 text-[#c4a47c]" />
                    <span>{t.footer.installApp}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c] block">
              {t.footer.contactTitle}
            </span>
            <div className="space-y-2 text-xs text-[#b8b1a5]">
              <a
                href="tel:+443300430976"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#c4a47c]" />
                <span className="font-mono">+44 330 043 0976</span>
              </a>
              <a
                href="https://wa.me/443300430976?text=Hello%20Driveo%20Exclusive%20Concierge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#20ba59] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 fill-[#25D366] stroke-none" />
                <span className="font-mono">WhatsApp (+44 330 043 0976)</span>
              </a>
              <p className="text-[11px] text-[#b8b1a5]/70 pt-2 font-light">
                Private VIP bookings and international itineraries.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/driveo-exclusive/' },
                { name: 'Instagram', url: 'https://www.instagram.com/driveoexclusive2023' },
                { name: 'TikTok', url: 'https://www.tiktok.com/@driveo5' },
                { name: 'Snapchat', url: 'https://www.snapchat.com/add/driveoexclusive' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/10 px-2 py-1 text-[10px] font-mono text-[#b8b1a5] hover:border-[#c4a47c]/40 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Operating Cities */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c] block">
              {t.footer.citiesTitle}
            </span>
            <ul className="space-y-2 text-xs text-[#b8b1a5]">
              {cities.map((city) => (
                <li key={city.id}>
                  <button
                    onClick={() => openBookingWithCity(city.id)}
                    className="hover:text-white transition-colors"
                  >
                    {city.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#b8b1a5]">
          <span>{t.footer.allRightsReserved}</span>
          <span>{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
};

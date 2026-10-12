import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { language, dir } = useApp();
  const [showTooltip, setShowTooltip] = useState(false);

  const getGreeting = () => {
    switch (language) {
      case 'fr':
        return 'Bonjour Concierge Driveo Exclusive, je souhaite me renseigner pour un trajet avec chauffeur privé.';
      case 'bg':
        return 'Здравейте Driveo Concierge, бих искал информация за резервация на личен шофьор.';
      case 'ar':
        return 'مرحباً كونسيرج درايفو إكسكلوسيف، أود الاستفسار عن حجز سائق خاص فاخر.';
      case 'en':
      default:
        return 'Hello Driveo Exclusive Concierge, I would like to enquire about private chauffeur travel.';
    }
  };

  const getLabel = () => {
    switch (language) {
      case 'fr':
        return 'WhatsApp VIP Concierge';
      case 'bg':
        return 'WhatsApp Консиерж';
      case 'ar':
        return 'واتساب الكونسيرج الفاخر';
      case 'en':
      default:
        return 'VIP WhatsApp Desk';
    }
  };

  const whatsappUrl = `https://wa.me/443300430976?text=${encodeURIComponent(getGreeting())}`;

  return (
    <div
      className={`fixed bottom-6 z-40 flex items-center gap-3 ${
        dir === 'rtl' ? 'left-6 flex-row-reverse' : 'right-6'
      }`}
    >
      {/* Expandable info card on hover or click */}
      {showTooltip && (
        <div
          className={`animate-fade-in rounded-2xl border border-white/15 bg-[#161311] p-4 text-xs shadow-2xl backdrop-blur-md max-w-xs ${
            dir === 'rtl' ? 'text-right' : 'text-left'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#c4a47c]">
              Direct Chauffeur Dispatch
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#b8b1a5] hover:text-white"
              aria-label="Dismiss tooltip"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-white font-medium mb-1">Driveo Exclusive Concierge</p>
          <p className="text-[#b8b1a5] font-light leading-relaxed mb-3">
            Instant booking confirmation, itinerary updates, and discreet driver dispatch on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-2 font-semibold text-black hover:bg-[#20ba59] transition-colors"
          >
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2.5 rounded-full border border-[#25D366]/40 bg-[#161311]/95 px-4 py-3 text-xs font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-[#25D366] hover:bg-[#1f1b18] hover:scale-105 transition-all duration-200"
        aria-label="Contact Driveo Exclusive on WhatsApp"
      >
        {/* WhatsApp Icon with Brand Color */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] text-black">
          <MessageCircle className="h-5 w-5 fill-black stroke-none" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#161311] animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#161311]" />
        </div>

        {/* Text Label */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-mono text-[#c4a47c] uppercase tracking-wider">
            24/7 Available
          </span>
          <span className="text-xs font-semibold text-white group-hover:text-[#25D366] transition-colors whitespace-nowrap">
            {getLabel()}
          </span>
        </div>
      </a>
    </div>
  );
};

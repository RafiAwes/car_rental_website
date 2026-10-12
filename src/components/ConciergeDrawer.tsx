import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { X, Phone, Mail, MessageSquare, Shield, Clock, Send, Check } from 'lucide-react';

export const ConciergeDrawer: React.FC = () => {
  const { isConciergeOpen, setIsConciergeOpen, bookingState } = useApp();
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isConciergeOpen) return null;

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setCallbackName('');
      setCallbackPhone('');
      setIsConciergeOpen(false);
    }, 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Driveo Concierge, I am contacting you regarding executive chauffeur travel in ${
      bookingState.city || 'London'
    }.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md h-full bg-[#141210] border-l border-white/15 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">
                Driveo Desk
              </span>
              <h3 className="font-serif text-2xl font-medium text-white mt-1">
                Private VIP Concierge
              </h3>
            </div>
            <button
              onClick={() => setIsConciergeOpen(false)}
              className="p-2 rounded-full border border-white/10 text-[#b8b1a5] hover:text-white"
              aria-label="Close concierge drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Availability note */}
          <div className="mt-6 flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/5 text-xs text-[#b8b1a5]">
            <Clock className="h-4 w-4 text-[#c4a47c] shrink-0" />
            <span>24/7 Operations Desk · Mayfair & International Dispatch</span>
          </div>

          {/* Direct channels */}
          <div className="mt-8 space-y-4">
            <a
              href="tel:+443300430976"
              className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#1c1916] hover:border-[#c4a47c]/50 hover:bg-[#201d19] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#c4a47c]/10 text-[#c4a47c]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#b8b1a5] uppercase block">
                    Direct Telephone
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-[#c4a47c] transition-colors">
                    +44 330 043 0976
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#c4a47c] font-mono">Call ↗</span>
            </a>

            <a
              href={`https://wa.me/443300430976?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-[#25D366]/30 bg-[#1c1916] hover:bg-[#201d19] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#25D366]/15 text-[#25D366]">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#b8b1a5] uppercase block">
                    Direct VIP WhatsApp
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-[#25D366] transition-colors">
                    Driveo Concierge Line
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#25D366] font-mono">Chat ↗</span>
            </a>

            <a
              href="mailto:info@driveoexclusive.com?subject=Executive%20Chauffeur%20Enquiry"
              className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#1c1916] hover:border-[#c4a47c]/50 hover:bg-[#201d19] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#c4a47c]/10 text-[#c4a47c]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#b8b1a5] uppercase block">
                    Official Email
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-[#c4a47c] transition-colors">
                    info@driveoexclusive.com
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#c4a47c] font-mono">Email ↗</span>
            </a>
          </div>

          {/* Priority Callback Request Form */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="font-serif text-lg text-white mb-2">Request Priority Callback</h4>
            <p className="text-xs text-[#b8b1a5] font-light mb-4">
              Leave your number and our lead dispatcher will contact you within 5 minutes.
            </p>

            {isSent ? (
              <div className="p-4 rounded-xl border border-[#c4a47c]/40 bg-[#c4a47c]/10 text-center space-y-1">
                <Check className="h-5 w-5 text-[#c4a47c] mx-auto" />
                <span className="text-xs text-white font-medium block">
                  Callback Request Logged
                </span>
                <span className="text-[11px] text-[#b8b1a5]">
                  Our concierge is reviewing your request now.
                </span>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={callbackName}
                  onChange={(e) => setCallbackName(e.target.value)}
                  placeholder="Your Name / Executive Office"
                  className="w-full rounded-lg border border-white/10 bg-[#1c1916] px-3.5 py-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:border-[#c4a47c] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  placeholder="Phone Number (e.g. +44 7911 123456)"
                  className="w-full rounded-lg border border-white/10 bg-[#1c1916] px-3.5 py-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:border-[#c4a47c] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#c4a47c] text-[#12100e] font-semibold text-xs uppercase tracking-wider hover:bg-[#dfcaa8] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Request 5-Min Callback</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer discretion notice */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#b8b1a5]">
          <Shield className="h-3.5 w-3.5 text-[#c4a47c] shrink-0" />
          <span>Non-disclosure agreements guaranteed upon request.</span>
        </div>
      </div>
    </div>
  );
};

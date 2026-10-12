import React from 'react';
import { VehicleTier } from '../types';

interface VehicleGraphicProps {
  tier: VehicleTier;
  className?: string;
  variant?: 'exterior' | 'interior';
}

export const VehicleGraphic: React.FC<VehicleGraphicProps> = ({
  tier,
  className = '',
  variant = 'exterior',
}) => {
  if (variant === 'interior') {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1715] to-[#0c0a09] p-6 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,164,124,0.15),_transparent_70%)]" />
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#c4a47c]">
              Cabin Architecture
            </span>
            <span className="text-xs text-[#b8b1a5]">
              {tier === 'first'
                ? 'S-Class Extended Limousine'
                : tier === 'business'
                ? 'E-Class Executive Saloon'
                : 'V-Class Executive Lounge'}
            </span>
          </div>

          <div className="my-8 flex items-center justify-center">
            {tier === 'first' && (
              <div className="text-center space-y-3 max-w-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c4a47c]/10 border border-[#c4a47c]/30 text-[#c4a47c] font-serif text-2xl">
                  S
                </div>
                <h4 className="font-serif text-lg text-white">First Class Cabin Suite</h4>
                <p className="text-xs text-[#b8b1a5] leading-relaxed">
                  Individual reclining executive rear seating, active road-noise cancellation,
                  quad-zone climate filtration, and ambient gold-tone fiber lighting.
                </p>
              </div>
            )}
            {tier === 'business' && (
              <div className="text-center space-y-3 max-w-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c4a47c]/10 border border-[#c4a47c]/30 text-[#c4a47c] font-serif text-2xl">
                  E
                </div>
                <h4 className="font-serif text-lg text-white">Executive Saloon Environment</h4>
                <p className="text-xs text-[#b8b1a5] leading-relaxed">
                  Dual-glazed quiet acoustic glazing, encrypted mobile Wi-Fi gateway, black
                  Nappa leather ergonomics, and rear charging console.
                </p>
              </div>
            )}
            {tier === 'van' && (
              <div className="text-center space-y-3 max-w-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c4a47c]/10 border border-[#c4a47c]/30 text-[#c4a47c] font-serif text-2xl">
                  V
                </div>
                <h4 className="font-serif text-lg text-white">Conference Lounge Layout</h4>
                <p className="text-xs text-[#b8b1a5] leading-relaxed">
                  Face-to-face boardroom seating for 6-7 VIP delegates, fold-out executive work
                  table, independent digital climate, and massive luggage hold.
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center font-mono text-[11px] text-[#b8b1a5]">
            <div>
              <span className="block text-white">35 dB</span>
              <span>Acoustic Isolation</span>
            </div>
            <div>
              <span className="block text-white">5G Encrypted</span>
              <span>Hotspot</span>
            </div>
            <div>
              <span className="block text-white">Chilled</span>
              <span>Still Water</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#1c1916] via-[#12100e] to-[#0a0908] p-4 flex flex-col justify-between ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-48 bg-[#c4a47c]/10 blur-3xl pointer-events-none rounded-full" />
      
      {/* Top subtle badge */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#b8b1a5] mb-2 z-10">
        <span className="text-[#c4a47c]">
          {tier === 'first' ? 'First Class · Flagship' : tier === 'business' ? 'Business Class' : 'Business Van · MPV'}
        </span>
        <span className="text-white/60">Mercedes-Benz</span>
      </div>

      {/* SVG Stylized Luxury Automobile Silhouette */}
      <div className="relative py-4 my-auto flex items-center justify-center">
        {tier === 'first' && (
          <svg
            viewBox="0 0 600 220"
            className="w-full h-auto max-h-52 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground shadow */}
            <ellipse cx="300" cy="195" rx="270" ry="14" fill="#000000" fillOpacity="0.8" />
            <ellipse cx="300" cy="195" rx="220" ry="7" fill="#000000" />
            
            {/* S-Class Long-Wheelbase Body */}
            <path
              d="M50 160 C65 158 90 156 120 156 C140 145 155 130 185 105 C240 68 360 66 430 85 C460 98 480 120 520 135 C555 142 570 152 565 165 C550 172 525 174 490 174 C470 174 460 174 450 174 C440 150 405 140 380 160 C370 174 360 174 240 174 C230 150 195 140 170 160 C160 174 120 174 80 174 C60 174 45 168 50 160 Z"
              fill="url(#sclass_body_grad)"
              stroke="#2e2a25"
              strokeWidth="2"
            />
            {/* Cabin Glass / Privacy Tint */}
            <path
              d="M195 105 C240 73 355 72 420 90 C445 102 460 122 475 132 L360 132 L260 132 C230 132 205 125 195 105 Z"
              fill="#060606"
              stroke="#c4a47c"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            {/* B-Pillar divider */}
            <line x1="330" y1="76" x2="330" y2="132" stroke="#1c1916" strokeWidth="4" />
            <line x1="332" y1="76" x2="332" y2="132" stroke="#c4a47c" strokeWidth="1" strokeOpacity="0.4" />
            
            {/* Front Headlight Accent */}
            <path d="M525 136 C545 142 558 148 562 153" stroke="#e0e7ff" strokeWidth="3" strokeLinecap="round" />
            <circle cx="550" cy="147" r="4" fill="#a5b4fc" />
            
            {/* Rear Tail Light Accent */}
            <path d="M54 160 C58 155 68 152 80 152" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            
            {/* Wheels: Front */}
            <circle cx="430" cy="170" r="32" fill="#0f0e0c" stroke="#332d26" strokeWidth="4" />
            <circle cx="430" cy="170" r="22" fill="#1c1916" stroke="#c4a47c" strokeWidth="2" strokeOpacity="0.6" />
            <circle cx="430" cy="170" r="6" fill="#c4a47c" />
            
            {/* Wheels: Rear */}
            <circle cx="150" cy="170" r="32" fill="#0f0e0c" stroke="#332d26" strokeWidth="4" />
            <circle cx="150" cy="170" r="22" fill="#1c1916" stroke="#c4a47c" strokeWidth="2" strokeOpacity="0.6" />
            <circle cx="150" cy="170" r="6" fill="#c4a47c" />

            {/* Subtle Mercedes Bonnet Star Accent */}
            <path d="M558 138 L558 130 L560 134 L562 130 L560 138 Z" fill="#c4a47c" opacity="0.8" />

            <defs>
              <linearGradient id="sclass_body_grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2c2722" />
                <stop offset="35%" stopColor="#141210" />
                <stop offset="70%" stopColor="#0b0a09" />
                <stop offset="100%" stopColor="#181512" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {tier === 'business' && (
          <svg
            viewBox="0 0 600 220"
            className="w-full h-auto max-h-52 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground shadow */}
            <ellipse cx="300" cy="195" rx="260" ry="14" fill="#000000" fillOpacity="0.8" />
            <ellipse cx="300" cy="195" rx="210" ry="7" fill="#000000" />
            
            {/* E-Class Executive Saloon Body */}
            <path
              d="M60 162 C75 160 100 158 130 158 C150 144 170 125 200 100 C250 68 350 68 415 88 C445 100 465 120 505 135 C540 142 555 152 550 165 C535 172 510 174 475 174 C455 174 445 174 435 174 C425 150 395 140 370 160 C360 174 350 174 240 174 C230 150 195 140 170 160 C160 174 125 174 85 174 C70 174 55 170 60 162 Z"
              fill="url(#eclass_body_grad)"
              stroke="#2e2a25"
              strokeWidth="2"
            />
            {/* Cabin Glass */}
            <path
              d="M208 100 C250 73 345 73 405 90 C430 102 445 122 460 132 L350 132 L260 132 C235 132 215 120 208 100 Z"
              fill="#060606"
              stroke="#c4a47c"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            {/* Pillar */}
            <line x1="320" y1="76" x2="320" y2="132" stroke="#1c1916" strokeWidth="4" />
            
            {/* Headlights */}
            <path d="M515 136 C530 142 542 148 546 153" stroke="#e0e7ff" strokeWidth="3" strokeLinecap="round" />
            
            {/* Tail Light */}
            <path d="M64 162 C68 156 78 154 90 154" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            
            {/* Wheels: Front */}
            <circle cx="415" cy="170" r="30" fill="#0f0e0c" stroke="#332d26" strokeWidth="4" />
            <circle cx="415" cy="170" r="20" fill="#1c1916" stroke="#c4a47c" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="415" cy="170" r="5" fill="#c4a47c" />
            
            {/* Wheels: Rear */}
            <circle cx="155" cy="170" r="30" fill="#0f0e0c" stroke="#332d26" strokeWidth="4" />
            <circle cx="155" cy="170" r="20" fill="#1c1916" stroke="#c4a47c" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="155" cy="170" r="5" fill="#c4a47c" />

            <defs>
              <linearGradient id="eclass_body_grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#25211d" />
                <stop offset="35%" stopColor="#12100e" />
                <stop offset="70%" stopColor="#0a0908" />
                <stop offset="100%" stopColor="#161311" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {tier === 'van' && (
          <svg
            viewBox="0 0 600 220"
            className="w-full h-auto max-h-52 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground shadow */}
            <ellipse cx="300" cy="195" rx="275" ry="14" fill="#000000" fillOpacity="0.8" />
            <ellipse cx="300" cy="195" rx="230" ry="7" fill="#000000" />
            
            {/* V-Class Extra-Long Body */}
            <path
              d="M55 165 C60 150 65 105 70 80 C75 65 95 62 135 62 L430 62 C465 62 485 85 520 125 C545 138 560 150 555 165 C540 172 520 174 485 174 C470 174 460 174 450 174 C440 150 405 140 380 160 C370 174 360 174 240 174 C230 150 195 140 170 160 C160 174 125 174 85 174 C65 174 50 170 55 165 Z"
              fill="url(#vclass_body_grad)"
              stroke="#2e2a25"
              strokeWidth="2"
            />
            {/* Panoramic Side Windows */}
            <path
              d="M100 75 L430 75 C450 75 470 95 490 125 L100 125 Z"
              fill="#060606"
              stroke="#c4a47c"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            {/* Window dividers */}
            <line x1="210" y1="75" x2="210" y2="125" stroke="#1c1916" strokeWidth="4" />
            <line x1="330" y1="75" x2="330" y2="125" stroke="#1c1916" strokeWidth="4" />
            <line x1="420" y1="75" x2="420" y2="125" stroke="#1c1916" strokeWidth="4" />
            
            {/* Headlights */}
            <path d="M528 132 C542 140 552 148 554 154" stroke="#e0e7ff" strokeWidth="3" strokeLinecap="round" />
            
            {/* Rear Light */}
            <path d="M58 85 L58 135" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            
            {/* Wheels: Front */}
            <circle cx="430" cy="170" r="30" fill="#0f0e0c" stroke="#332d26" strokeWidth="4" />
            <circle cx="430" cy="170" r="20" fill="#1c1916" stroke="#c4a47c" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="430" cy="170" r="5" fill="#c4a47c" />
            
            {/* Wheels: Rear */}
            <circle cx="150" cy="170" r="30" fill="#0f0e0c" stroke="#332d26" strokeWidth="4" />
            <circle cx="150" cy="170" r="20" fill="#1c1916" stroke="#c4a47c" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="150" cy="170" r="5" fill="#c4a47c" />

            <defs>
              <linearGradient id="vclass_body_grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#29241f" />
                <stop offset="35%" stopColor="#13110f" />
                <stop offset="70%" stopColor="#0b0a09" />
                <stop offset="100%" stopColor="#181512" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {/* Bottom capacity pill */}
      <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-[#b8b1a5]">
        <span>
          {tier === 'first'
            ? 'Up to 3 Passengers'
            : tier === 'business'
            ? 'Up to 3 Passengers'
            : 'Up to 7 Passengers'}
        </span>
        <span className="font-mono text-[#c4a47c]">
          {tier === 'first' ? '3 Bags' : tier === 'business' ? '2 Bags' : '7 Bags'}
        </span>
      </div>
    </div>
  );
};

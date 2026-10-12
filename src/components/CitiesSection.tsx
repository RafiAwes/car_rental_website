import React, { useRef, useEffect } from 'react';
import { useApp } from '../app/providers';
import { citiesData } from '../lib/citiesData';
import { Plane, Building, ArrowDownRight, MapPin } from 'lucide-react';
import { CityId } from '../types';
import { observeAndReveal } from '../lib/animations';

export const CitiesSection: React.FC = () => {
  const { t, openBookingWithCity } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeAndReveal(sectionRef.current, '.city-card', 0.12);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cities"
      className="relative py-24 border-t border-white/10 bg-[#0e0c0b]"
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
            {t.cities.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white [text-wrap:balance]">
            {t.cities.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#b8b1a5] font-light leading-relaxed">
            {t.cities.subheading}
          </p>
        </div>

        {/* 4 Cities Grid with Scroll Reveal */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {citiesData.map((city, index) => (
            <div
              key={city.id}
              className="city-card group relative rounded-2xl border border-white/10 bg-[#161311] p-6 transition-all duration-300 hover:border-[#c4a47c]/40 hover:bg-[#1a1714] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                {/* Number & Code */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">
                    0{index + 1}
                  </span>
                  <span className="font-mono text-xs text-[#b8b1a5] bg-white/5 px-2 py-0.5 rounded">
                    {city.code}
                  </span>
                </div>

                {/* City Name & Country */}
                <div className="mt-5">
                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#dfcaa8] transition-colors flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#c4a47c]" />
                    <span>{city.name}</span>
                  </h3>
                  <p className="text-xs text-[#b8b1a5] font-light mt-1">{city.country}</p>
                </div>

                <p className="mt-4 text-xs text-[#b8b1a5]/90 leading-relaxed font-light">
                  {city.tagline}
                </p>

                {/* Airports Covered */}
                <div className="mt-6 space-y-2 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#c4a47c]">
                    <Plane className="h-3.5 w-3.5" />
                    <span>Airports & VIP Terminals</span>
                  </div>
                  <ul className="text-xs text-[#b8b1a5] space-y-1">
                    {city.airports.slice(0, 3).map((apt, i) => (
                      <li key={i} className="truncate">
                        · {apt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Hubs */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#c4a47c]">
                    <Building className="h-3.5 w-3.5" />
                    <span>Key Districts</span>
                  </div>
                  <ul className="text-xs text-[#b8b1a5] space-y-1">
                    {city.keyHubs.slice(0, 2).map((hub, i) => (
                      <li key={i} className="truncate">
                        · {hub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => openBookingWithCity(city.id as CityId)}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#c4a47c] hover:text-[#12100e] text-xs font-medium uppercase tracking-wider text-white transition-all flex items-center justify-center gap-1.5 group-hover:shadow-[0_0_20px_rgba(196,164,124,0.2)]"
                >
                  <span>Book in {city.name}</span>
                  <ArrowDownRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

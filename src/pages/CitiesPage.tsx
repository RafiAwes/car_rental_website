import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { citiesData } from '../lib/citiesData';
import { Plane, Building, MapPin, ArrowDownRight, Compass } from 'lucide-react';
import { CityId } from '../types';

export const CitiesPage: React.FC = () => {
  const { openBookingWithCity } = useApp();
  const [activeCityId, setActiveCityId] = useState<CityId>('london');

  const currentCity = citiesData.find((c) => c.id === activeCityId) || citiesData[0];

  return (
    <div className="py-16 lg:py-24 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
          Global Presence
        </span>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal [text-wrap:balance]">
          Four Locations. One House Standard.
        </h1>
        <p className="mt-4 text-base text-[#b8b1a5] font-light leading-relaxed">
          Wherever you land—from Heathrow to Charles de Gaulle, Sofia to Dubai
          International—Driveo Exclusive delivers identical vetted drivers, pristine cars, and
          fixed-price discipline.
        </p>

        {/* City selector pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {citiesData.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCityId(c.id)}
              className={`rounded-lg border px-5 py-2.5 text-xs font-mono transition-all ${
                activeCityId === c.id
                  ? 'border-[#c4a47c] bg-[#c4a47c] text-[#12100e] font-semibold'
                  : 'border-white/10 bg-[#161311] text-[#b8b1a5] hover:text-white hover:border-white/20'
              }`}
            >
              {c.name} ({c.code})
            </button>
          ))}
        </div>
      </div>

      {/* City Detail Showcase */}
      <div className="rounded-2xl border border-white/15 bg-[#161311] p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#c4a47c] uppercase">
              <Compass className="h-4 w-4" />
              <span>Chauffeur Station · {currentCity.country}</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-white font-medium">
              {currentCity.name} Hub
            </h2>
            <p className="text-xs text-[#b8b1a5] font-light mt-1">{currentCity.tagline}</p>
          </div>

          <div className="text-right md:text-right">
            <span className="text-[11px] font-mono text-[#b8b1a5] block uppercase">
              Standard Fare Guide
            </span>
            <span className="font-mono text-sm text-[#c4a47c] font-medium">
              {currentCity.ratesSample}
            </span>
          </div>
        </div>

        {/* Airport terminals & hubs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-[#191512] p-6 space-y-4">
            <h3 className="font-serif text-lg text-white flex items-center gap-2">
              <Plane className="h-4 w-4 text-[#c4a47c]" />
              <span>Airports & Private FBO Terminals</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#b8b1a5]">
              {currentCity.airports.map((airport, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c4a47c]" />
                  <span>{airport}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#191512] p-6 space-y-4">
            <h3 className="font-serif text-lg text-white flex items-center gap-2">
              <Building className="h-4 w-4 text-[#c4a47c]" />
              <span>Key Business Districts & Luxury Enclaves</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#b8b1a5]">
              {currentCity.keyHubs.map((hub, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c4a47c]" />
                  <span>{hub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#b8b1a5]">
            <MapPin className="h-4 w-4 text-[#c4a47c]" />
            <span>Vehicles stationed locally for immediate 30-minute dispatch.</span>
          </div>
          <button
            onClick={() => openBookingWithCity(currentCity.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#c4a47c] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#12100e] hover:bg-[#dfcaa8] transition-all"
          >
            <span>Book Chauffeur in {currentCity.name}</span>
            <ArrowDownRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

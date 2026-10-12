import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { fleetVehicles } from '../lib/fleetData';
import { VehicleGraphic } from '../components/VehicleGraphic';
import { Users, Briefcase, Check, ArrowDownRight, ShieldCheck, Sparkles } from 'lucide-react';
import { VehicleTier } from '../types';

export const FleetPage: React.FC = () => {
  const { setSelectedFleetCar, openBookingWithCar } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'sedan' | 'van'>('all');

  const filteredVehicles = fleetVehicles.filter((v) => {
    if (selectedFilter === 'sedan') return v.id === 'business' || v.id === 'first';
    if (selectedFilter === 'van') return v.id === 'van';
    return true;
  });

  return (
    <div className="py-16 lg:py-24 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
          Automotive Standard
        </span>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal [text-wrap:balance]">
          The Obsidian Black Fleet
        </h1>
        <p className="mt-4 text-base text-[#b8b1a5] font-light leading-relaxed">
          Every vehicle in the Driveo Exclusive stable is an immaculate, late-model Mercedes-Benz in
          gloss black finish, equipped with privacy glass, onboard Wi-Fi, and executive amenities.
        </p>

        {/* Filter controls */}
        <div className="mt-8 flex items-center gap-2 p-1 bg-[#1a1714] rounded-lg border border-white/10 max-w-xs">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
              selectedFilter === 'all'
                ? 'bg-[#c4a47c] text-[#12100e]'
                : 'text-[#b8b1a5] hover:text-white'
            }`}
          >
            All Classes
          </button>
          <button
            onClick={() => setSelectedFilter('sedan')}
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
              selectedFilter === 'sedan'
                ? 'bg-[#c4a47c] text-[#12100e]'
                : 'text-[#b8b1a5] hover:text-white'
            }`}
          >
            Saloon Limousines
          </button>
          <button
            onClick={() => setSelectedFilter('van')}
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
              selectedFilter === 'van'
                ? 'bg-[#c4a47c] text-[#12100e]'
                : 'text-[#b8b1a5] hover:text-white'
            }`}
          >
            Executive Van
          </button>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="rounded-2xl border border-white/15 bg-[#161311] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="font-serif text-2xl text-white">{vehicle.name}</h3>
                  <p className="font-mono text-xs text-[#c4a47c]">{vehicle.model}</p>
                </div>
                {vehicle.id === 'first' && (
                  <span className="p-1 rounded-full bg-[#c4a47c]/10 text-[#c4a47c]">
                    <Sparkles className="h-4 w-4" />
                  </span>
                )}
              </div>

              {/* Graphic */}
              <VehicleGraphic tier={vehicle.id} className="min-h-[200px]" />

              <p className="mt-6 text-xs text-[#b8b1a5] font-light leading-relaxed">
                {vehicle.description}
              </p>

              {/* Specs */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/10 py-4 text-xs font-mono text-[#b8b1a5]">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#c4a47c]" />
                  <span>Max {vehicle.passengers} Guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-[#c4a47c]" />
                  <span>{vehicle.luggage} Luggage Bags</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-6 space-y-2">
                <span className="font-mono text-[11px] text-[#c4a47c] uppercase block">
                  Included Amenities
                </span>
                <ul className="text-xs text-[#b8b1a5] space-y-1.5">
                  {vehicle.amenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#c4a47c] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
              <button
                onClick={() => openBookingWithCar(vehicle.id)}
                className="w-full py-3 rounded-lg bg-[#c4a47c] text-[#12100e] text-xs font-semibold uppercase tracking-wider hover:bg-[#dfcaa8] flex items-center justify-center gap-2 transition-all"
              >
                <span>Reserve {vehicle.name}</span>
                <ArrowDownRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setSelectedFleetCar(vehicle.id as VehicleTier)}
                className="w-full py-2 text-center text-xs text-[#b8b1a5] hover:text-[#c4a47c]"
              >
                View Cabin Blueprint
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Discretion & Vetting Guarantee Box */}
      <div className="mt-16 rounded-2xl border border-white/15 bg-[#141210] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <ShieldCheck className="h-8 w-8 text-[#c4a47c] shrink-0 mt-1" />
          <div>
            <h3 className="font-serif text-xl text-white font-medium">
              Zero Surge · Vetted Background-Checked Drivers
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#b8b1a5] font-light max-w-xl">
              All Driveo chauffeurs undergo enhanced security screening, sign non-disclosure
              agreements, and maintain an immaculate presentation in dark business attire.
            </p>
          </div>
        </div>
        <button
          onClick={() => openBookingWithCar('first')}
          className="rounded-lg border border-[#c4a47c] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#c4a47c] hover:bg-[#c4a47c] hover:text-[#12100e] transition-all whitespace-nowrap"
        >
          Request Chauffeur
        </button>
      </div>
    </div>
  );
};

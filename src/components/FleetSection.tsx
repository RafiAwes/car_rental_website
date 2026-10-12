import React, { useRef, useEffect } from 'react';
import { useApp } from '../app/providers';
import { fleetVehicles } from '../lib/fleetData';
import { VehicleGraphic } from './VehicleGraphic';
import { Users, Briefcase, Sparkles, ArrowDownRight, Info } from 'lucide-react';
import { VehicleTier, VehicleSpec } from '../types';
import { Dictionary } from '../lib/translations';
import { attach3DCardTilt, observeAndReveal } from '../lib/animations';

const FleetCardItem: React.FC<{
  vehicle: VehicleSpec;
  openBookingWithCar: (car: VehicleTier) => void;
  setSelectedFleetCar: (car: VehicleTier) => void;
  t: Dictionary;
}> = ({ vehicle, openBookingWithCar, setSelectedFleetCar, t }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const cleanup = attach3DCardTilt(cardRef.current);
    return cleanup;
  }, []);

  return (
    <div
      ref={cardRef}
      className={`fleet-card relative rounded-2xl border transition-colors duration-300 flex flex-col justify-between overflow-hidden will-change-transform ${
        vehicle.id === 'first'
          ? 'border-[#c4a47c]/40 bg-[#191512] shadow-[0_0_35px_rgba(196,164,124,0.08)]'
          : 'border-white/10 bg-[#151311] hover:border-white/20'
      }`}
    >
      {/* Subtle specular gold gradient highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {/* Card Header & Visual Graphic */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div>
            <h3 className="font-serif text-2xl font-medium text-white">{vehicle.name}</h3>
            <p className="text-xs text-[#c4a47c] font-mono mt-0.5">{vehicle.model}</p>
          </div>
          {vehicle.id === 'first' && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#c4a47c]/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#c4a47c] border border-[#c4a47c]/30">
              <Sparkles className="h-3 w-3" /> Flagship
            </span>
          )}
        </div>

        {/* Automobile Silhouette Illustration */}
        <div className="py-2">
          <VehicleGraphic tier={vehicle.id} className="min-h-[190px]" />
        </div>

        <p className="mt-5 text-xs text-[#b8b1a5] leading-relaxed font-light min-h-[48px]">
          {vehicle.description}
        </p>

        {/* Capacity Badges */}
        <div className="mt-6 flex items-center gap-6 border-y border-white/10 py-3 text-xs text-[#b8b1a5]">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#c4a47c]" />
            <span>
              {vehicle.passengers} {t.fleet.passengers}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-[#c4a47c]" />
            <span>
              {vehicle.luggage} {t.fleet.luggage}
            </span>
          </div>
        </div>

        {/* Amenity Highlights */}
        <ul className="mt-5 space-y-2 text-xs text-[#b8b1a5]">
          {vehicle.amenities.slice(0, 3).map((amenity: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#c4a47c]" />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Actions */}
      <div className="p-6 border-t border-white/10 bg-black/20 flex flex-col gap-2 relative z-10">
        <button
          onClick={() => openBookingWithCar(vehicle.id)}
          className={`w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
            vehicle.id === 'first'
              ? 'bg-[#c4a47c] text-[#12100e] hover:bg-[#dfcaa8]'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <span>{t.fleet.quoteCar}</span>
          <ArrowDownRight className="h-3.5 w-3.5" />
        </button>

        <button
          onClick={() => setSelectedFleetCar(vehicle.id as VehicleTier)}
          className="w-full py-2 text-center text-xs text-[#b8b1a5] hover:text-[#c4a47c] transition-colors flex items-center justify-center gap-1.5"
        >
          <Info className="h-3.5 w-3.5" />
          <span>{t.fleet.inspectSpecs}</span>
        </button>
      </div>
    </div>
  );
};

export const FleetSection: React.FC = () => {
  const { t, setSelectedFleetCar, openBookingWithCar } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeAndReveal(sectionRef.current, '.fleet-card', 0.15);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fleet"
      className="relative py-24 border-t border-white/10 bg-[#12100e]"
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
              {t.fleet.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white [text-wrap:balance]">
              {t.fleet.heading}
            </h2>
          </div>
          <div className="font-mono text-xs text-[#b8b1a5]">
            Mercedes-Benz Fleet · Obsidian Black Finish · Suited Chauffeurs
          </div>
        </div>

        {/* 3 Fleet Cards Grid with 3D Tilt & Scroll Reveal */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fleetVehicles.map((vehicle) => (
            <FleetCardItem
              key={vehicle.id}
              vehicle={vehicle}
              openBookingWithCar={openBookingWithCar}
              setSelectedFleetCar={setSelectedFleetCar}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

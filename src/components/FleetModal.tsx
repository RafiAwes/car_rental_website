import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { fleetVehicles } from '../lib/fleetData';
import { VehicleGraphic } from './VehicleGraphic';
import { X, Check, Users, Briefcase, Shield, ArrowDownRight } from 'lucide-react';

export const FleetModal: React.FC = () => {
  const { selectedFleetCar, setSelectedFleetCar, openBookingWithCar } = useApp();
  const [viewMode, setViewMode] = useState<'exterior' | 'interior'>('exterior');

  if (!selectedFleetCar) return null;

  const vehicle = fleetVehicles.find((v) => v.id === selectedFleetCar) || fleetVehicles[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#141210] p-6 sm:p-8 text-[#f4efe6] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setSelectedFleetCar(null)}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 text-[#b8b1a5] hover:text-white hover:border-white/30 transition-colors"
          aria-label="Close inspector"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="border-b border-white/10 pb-6 pr-12">
          <div className="flex items-center gap-3 font-mono text-xs text-[#c4a47c] uppercase tracking-wider">
            <span>Fleet Inspection</span>
            <span>·</span>
            <span>{vehicle.category}</span>
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-white font-medium">
            {vehicle.name}
          </h2>
          <p className="text-sm text-[#b8b1a5] font-light mt-1">{vehicle.model}</p>
        </div>

        {/* View Toggle Tabs */}
        <div className="mt-6 flex items-center gap-2 p-1 bg-[#1e1a17] rounded-lg max-w-xs border border-white/5">
          <button
            onClick={() => setViewMode('exterior')}
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
              viewMode === 'exterior'
                ? 'bg-[#c4a47c] text-[#12100e]'
                : 'text-[#b8b1a5] hover:text-white'
            }`}
          >
            Vehicle Exterior
          </button>
          <button
            onClick={() => setViewMode('interior')}
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
              viewMode === 'interior'
                ? 'bg-[#c4a47c] text-[#12100e]'
                : 'text-[#b8b1a5] hover:text-white'
            }`}
          >
            Cabin Interior
          </button>
        </div>

        {/* Visual Graphic Representation */}
        <div className="mt-6">
          <VehicleGraphic tier={vehicle.id} variant={viewMode} className="w-full min-h-[220px]" />
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-white/10 py-5 font-mono text-xs">
          <div>
            <span className="text-[#b8b1a5] block mb-1">Passenger Limit</span>
            <span className="text-white font-medium flex items-center gap-1.5 text-sm">
              <Users className="h-4 w-4 text-[#c4a47c]" />
              {vehicle.passengers} Guests
            </span>
          </div>
          <div>
            <span className="text-[#b8b1a5] block mb-1">Luggage Capacity</span>
            <span className="text-white font-medium flex items-center gap-1.5 text-sm">
              <Briefcase className="h-4 w-4 text-[#c4a47c]" />
              {vehicle.luggage} Full Bags
            </span>
          </div>
          <div>
            <span className="text-[#b8b1a5] block mb-1">Acoustic Shield</span>
            <span className="text-white font-medium flex items-center gap-1.5 text-sm">
              <Shield className="h-4 w-4 text-[#c4a47c]" />
              Acoustic Glass
            </span>
          </div>
          <div>
            <span className="text-[#b8b1a5] block mb-1">Typical Rate</span>
            <span className="text-[#c4a47c] font-medium text-sm">
              From {vehicle.currency}{vehicle.baseRateTransfer} fixed
            </span>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="mt-8 space-y-4">
          <h3 className="font-serif text-lg text-white">Chauffeured Engineering Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="rounded-xl border border-white/10 bg-[#1a1714] p-4 space-y-1">
              <span className="text-[#b8b1a5] block font-mono">Interior Upholstery & Finish</span>
              <span className="text-white font-medium">{vehicle.specs.interior}</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1a1714] p-4 space-y-1">
              <span className="text-[#b8b1a5] block font-mono">VIP Connectivity</span>
              <span className="text-white font-medium">{vehicle.specs.connectivity}</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1a1714] p-4 space-y-1">
              <span className="text-[#b8b1a5] block font-mono">Climate & Air Quality</span>
              <span className="text-white font-medium">{vehicle.specs.climate}</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1a1714] p-4 space-y-1">
              <span className="text-[#b8b1a5] block font-mono">Executive Privacy Blinds</span>
              <span className="text-white font-medium">{vehicle.specs.privacy}</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1a1714] p-4 space-y-1">
              <span className="text-[#b8b1a5] block font-mono">Executive Rear Legroom</span>
              <span className="text-white font-medium">{vehicle.specs.rearLegroom}</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1a1714] p-4 space-y-1">
              <span className="text-[#b8b1a5] block font-mono">Powertrain & Acoustic Profile</span>
              <span className="text-white font-medium">{vehicle.specs.powertrain}</span>
            </div>
          </div>
        </div>

        {/* All Amenities List */}
        <div className="mt-8">
          <h3 className="font-serif text-lg text-white mb-3">Onboard Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {vehicle.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#b8b1a5]">
                <Check className="h-4 w-4 text-[#c4a47c] shrink-0" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#b8b1a5]">
            Every vehicle is immaculately detailed and chauffeured by a suited driver.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setSelectedFleetCar(null)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-white/10 text-xs text-[#b8b1a5] hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                const car = vehicle.id;
                setSelectedFleetCar(null);
                openBookingWithCar(car);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-[#c4a47c] text-[#12100e] font-semibold text-xs uppercase tracking-wider hover:bg-[#dfcaa8] flex items-center justify-center gap-2"
            >
              <span>Book This Car</span>
              <ArrowDownRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useApp } from '../app/providers';
import { mockFlightsDatabase, searchFlight } from '../lib/flightsData';
import { FlightStatus } from '../types';
import {
  Plane,
  Clock,
  Compass,
  CheckCircle2,
  AlertCircle,
  Search,
  MapPin,
  Car,
  RotateCcw,
} from 'lucide-react';

export const FlightTrackerDemo: React.FC = () => {
  const { setActivePage, setBookingState } = useApp();
  const [selectedFlight, setSelectedFlight] = useState<FlightStatus>(mockFlightsDatabase[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDelaySimulated, setIsDelaySimulated] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const result = searchFlight(searchQuery);
    if (result) {
      setSelectedFlight(result);
      setIsDelaySimulated(false);
    }
  };

  const activeArrival = isDelaySimulated
    ? `${selectedFlight.scheduledArrival} (+35m Weather Delay · Adjusted to 15:00)`
    : selectedFlight.estimatedArrival;

  const activeChauffeurNote = isDelaySimulated
    ? 'Chauffeur arrival time automatically shifted by 35 minutes. Zero waiting charge applied.'
    : 'Chauffeur monitored and staged in terminal arrivals zone with personalized digital board.';

  return (
    <section id="flight-tracker" className="relative py-24 border-t border-white/10 bg-[#0e0c0b]">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
              Interactive Demonstration
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white [text-wrap:balance]">
              Live Flight Tracking & Precision Pickup
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#b8b1a5] font-light leading-relaxed">
              We monitor commercial flights and private tail numbers from wheels-up. If your flight is
              delayed or lands early, your chauffeur automatically adjusts.
            </p>
          </div>

          {/* Search box */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#b8b1a5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search flight (e.g. BA 458, EK 001)..."
                className="w-full rounded-lg border border-white/15 bg-[#191512] pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#c4a47c] focus:outline-none uppercase font-mono"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#c4a47c] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#12100e] hover:bg-[#dfcaa8] transition-colors justify-center flex items-center"
            >
              Track
            </button>
          </form>
        </div>

        {/* Quick flight selection pills */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#b8b1a5] mr-2">Monitored Sample Flights:</span>
          {mockFlightsDatabase.map((flight) => (
            <button
              key={flight.flightNumber}
              onClick={() => {
                setSelectedFlight(flight);
                setIsDelaySimulated(false);
              }}
              className={`rounded-lg border px-3 py-1.5 text-xs font-mono transition-colors ${
                selectedFlight.flightNumber === flight.flightNumber
                  ? 'border-[#c4a47c] bg-[#c4a47c]/10 text-white font-medium'
                  : 'border-white/10 bg-[#161311] text-[#b8b1a5] hover:text-white'
              }`}
            >
              {flight.flightNumber} ({flight.destination.split(' ')[0]})
            </button>
          ))}
        </div>

        {/* Live Radar Flight Monitor Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl border border-white/15 bg-[#161311] p-6 sm:p-10 shadow-2xl">
          {/* Left: Flight Details & Radar Status */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#c4a47c]/10 border border-[#c4a47c]/30 flex items-center justify-center text-[#c4a47c]">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {selectedFlight.flightNumber}
                  </h3>
                  <p className="text-xs font-mono text-[#c4a47c]">{selectedFlight.airline}</p>
                </div>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider ${
                    isDelaySimulated || selectedFlight.status === 'Delayed'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                  {isDelaySimulated ? 'Delay Adjusted' : selectedFlight.status}
                </span>
              </div>
            </div>

            {/* Flight Path Display */}
            <div className="grid grid-cols-3 gap-4 text-center items-center py-4 bg-[#1a1714] rounded-xl border border-white/5 p-4">
              <div className="text-left">
                <span className="text-[10px] font-mono text-[#b8b1a5] block uppercase">Origin</span>
                <span className="text-sm font-semibold text-white block truncate">
                  {selectedFlight.origin}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-full flex items-center justify-center">
                  <div className="w-full border-t border-dashed border-[#c4a47c]/40" />
                  <Plane className="absolute text-[#c4a47c] h-4 w-4 bg-[#1a1714] px-0.5" />
                </div>
                <span className="text-[10px] font-mono text-[#b8b1a5] mt-1">Airborne Radar</span>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-[#b8b1a5] block uppercase">
                  Arrival Hub
                </span>
                <span className="text-sm font-semibold text-white block truncate">
                  {selectedFlight.destination}
                </span>
              </div>
            </div>

            {/* Flight Timing Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="rounded-xl border border-white/10 bg-[#1c1916] p-4 space-y-1">
                <span className="text-[#b8b1a5] flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#c4a47c]" />
                  Scheduled Landing
                </span>
                <span className="text-white text-sm font-medium">
                  {selectedFlight.scheduledArrival}
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1c1916] p-4 space-y-1">
                <span className="text-[#b8b1a5] flex items-center gap-1.5">
                  <Compass className="h-3.5 w-3.5 text-[#c4a47c]" />
                  Live Estimated Touchdown
                </span>
                <span className="text-[#c4a47c] text-sm font-medium">{activeArrival}</span>
              </div>
            </div>

            {/* Terminal Gate Information */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 text-xs text-[#b8b1a5]">
              <MapPin className="h-4 w-4 text-[#c4a47c] shrink-0" />
              <span>{selectedFlight.terminal}</span>
            </div>

            {/* Simulation Controller */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsDelaySimulated(!isDelaySimulated)}
                className="inline-flex items-center gap-2 rounded-lg border border-[#c4a47c]/40 bg-[#c4a47c]/10 px-4 py-2 text-xs font-mono text-[#c4a47c] hover:bg-[#c4a47c]/20 transition-colors"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                <span>
                  {isDelaySimulated
                    ? 'Reset Flight Delay Simulation'
                    : 'Test: Simulate 35 min En-Route Delay'}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Automated Chauffeur Dispatch Staging Protocol */}
          <div className="lg:col-span-5 rounded-xl border border-[#c4a47c]/30 bg-[#1f1b18] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-[#c4a47c] uppercase tracking-wider flex items-center gap-1.5">
                  <Car className="h-4 w-4" />
                  Chauffeur Protocol
                </span>
                <span className="font-mono text-xs text-white bg-white/10 px-2 py-0.5 rounded">
                  Status: {selectedFlight.chauffeurStatus}
                </span>
              </div>

              {/* Protocol timeline */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#c4a47c] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-medium text-white block">
                      Flight Departure & Wheels-Up Confirmation
                    </span>
                    <span className="text-[11px] text-[#b8b1a5]">
                      Radar lock initialized. Speed and tailwind telemetry verified.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#c4a47c] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-medium text-white block">
                      Chauffeur Vehicle Staging
                    </span>
                    <span className="text-[11px] text-[#b8b1a5]">
                      Mercedes-Benz detailed, chilled waters stocked, staged in VIP holding 20m
                      prior.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#c4a47c] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-medium text-white block">
                      Complimentary 60-Minute Terminal Wait
                    </span>
                    <span className="text-[11px] text-[#b8b1a5]">
                      Full baggage clearance allowance without overtime fees.
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic adjustment note */}
              <div className="mt-6 p-3.5 rounded-lg border border-[#c4a47c]/20 bg-[#141210] text-xs text-[#c4a47c] font-light leading-relaxed">
                {activeChauffeurNote}
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setBookingState((prev) => ({
                    ...prev,
                    serviceType: 'airport',
                    flightNumber: selectedFlight.flightNumber,
                    step: 1,
                  }));
                  setActivePage('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-lg bg-[#c4a47c] text-[#12100e] font-semibold text-xs uppercase tracking-wider hover:bg-[#dfcaa8] transition-colors text-center"
              >
                Book Airport Transfer for {selectedFlight.flightNumber}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

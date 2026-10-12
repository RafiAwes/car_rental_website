import React, { useState, useMemo } from 'react';
import { useApp } from '../app/providers';
import { CityId, ServiceType, VehicleTier } from '../types';
import { calculateFare, generateReferenceNumber } from '../lib/fareEstimator';
import { searchFlight } from '../lib/flightsData';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  Plane,
  Car,
  User,
  Phone,
  Mail,
  Shield,
  MessageSquare,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

export const QuoteCalculator: React.FC = () => {
  const { t, bookingState, setBookingState, setIsConciergeOpen } = useApp();
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [flightDetectStatus, setFlightDetectStatus] = useState<string | null>(null);

  // Live fare calculation
  const fareResult = useMemo(() => {
    return calculateFare({
      city: bookingState.city,
      serviceType: bookingState.serviceType,
      vehicleTier: bookingState.vehicleTier,
      hours: bookingState.hours,
      pickup: bookingState.pickupLocation,
      destination: bookingState.destination,
    });
  }, [
    bookingState.city,
    bookingState.serviceType,
    bookingState.vehicleTier,
    bookingState.hours,
    bookingState.pickupLocation,
    bookingState.destination,
  ]);

  const handleFlightNumberChange = (val: string) => {
    setBookingState((prev) => ({ ...prev, flightNumber: val }));
    if (val.trim().length >= 4) {
      const match = searchFlight(val);
      if (match) {
        setFlightDetectStatus(`${match.airline} (${match.origin} → ${match.destination})`);
      } else {
        setFlightDetectStatus(null);
      }
    } else {
      setFlightDetectStatus(null);
    }
  };

  const handleNextStep = () => {
    setBookingState((prev) => ({ ...prev, step: Math.min(4, prev.step + 1) }));
  };

  const handlePrevStep = () => {
    setBookingState((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) }));
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateReferenceNumber();
    setSubmittedRef(ref);
    setBookingState((prev) => ({
      ...prev,
      step: 4,
      referenceNumber: ref,
      estimatedPrice: fareResult.amount,
    }));
  };

  const resetForm = () => {
    setSubmittedRef(null);
    setBookingState((prev) => ({
      ...prev,
      step: 1,
      referenceNumber: undefined,
    }));
  };

  const currentStep = bookingState.step;

  return (
    <section id="booking" className="relative py-24 border-t border-white/10 bg-[#12100e]">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
            {t.booking.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white [text-wrap:balance]">
            {t.booking.heading}
          </h2>
          <p className="mt-4 text-sm text-[#b8b1a5] font-light leading-relaxed">
            {t.booking.subheading}
          </p>
        </div>

        {/* Multi-step progress bar */}
        <div className="mb-12">
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono uppercase tracking-wider">
            {[
              { num: 1, label: t.booking.step1 },
              { num: 2, label: t.booking.step2 },
              { num: 3, label: t.booking.step3 },
              { num: 4, label: t.booking.step4 },
            ].map((s) => (
              <div
                key={s.num}
                className={`border-b-2 pb-3 transition-colors ${
                  currentStep >= s.num
                    ? 'border-[#c4a47c] text-white font-medium'
                    : 'border-white/10 text-[#b8b1a5]/50'
                }`}
              >
                <span className="hidden sm:inline">0{s.num}. </span>
                {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* Card Container */}
        <div className="rounded-2xl border border-white/15 bg-[#161311] p-6 sm:p-10 shadow-2xl">
          {/* STEP 1: ROUTE & SERVICE */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* City Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2">
                    {t.booking.selectCity}
                  </label>
                  <select
                    value={bookingState.city}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, city: e.target.value as CityId }))
                    }
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  >
                    <option value="london">London (UK)</option>
                    <option value="paris">Paris (France)</option>
                    <option value="bulgaria">Bulgaria (Sofia & Coast)</option>
                    <option value="dubai">Dubai (UAE)</option>
                  </select>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2">
                    {t.booking.selectService}
                  </label>
                  <select
                    value={bookingState.serviceType}
                    onChange={(e) =>
                      setBookingState((prev) => ({
                        ...prev,
                        serviceType: e.target.value as ServiceType,
                      }))
                    }
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  >
                    <option value="airport">Airport Transfer (Tracked)</option>
                    <option value="point_to_point">Point-to-Point Transit</option>
                    <option value="hourly">Hourly Chauffeur Retainer</option>
                    <option value="event">Private Event & Delegation</option>
                  </select>
                </div>
              </div>

              {/* Pickup & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.pickup}
                  </label>
                  <input
                    type="text"
                    value={bookingState.pickupLocation}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, pickupLocation: e.target.value }))
                    }
                    placeholder="e.g. Heathrow Terminal 5, Mayfair Residence..."
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.destination}
                  </label>
                  <input
                    type="text"
                    value={bookingState.destination}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, destination: e.target.value }))
                    }
                    placeholder="e.g. The Dorchester, Canary Wharf, Hotel Ritz..."
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.date}
                  </label>
                  <input
                    type="date"
                    value={bookingState.date}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, date: e.target.value }))
                    }
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.time}
                  </label>
                  <input
                    type="time"
                    value={bookingState.time}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, time: e.target.value }))
                    }
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>

                {bookingState.serviceType === 'hourly' ? (
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2">
                      {t.booking.hours} (Min. 3h)
                    </label>
                    <input
                      type="number"
                      min={3}
                      max={24}
                      value={bookingState.hours}
                      onChange={(e) =>
                        setBookingState((prev) => ({
                          ...prev,
                          hours: parseInt(e.target.value) || 3,
                        }))
                      }
                      className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                      <Plane className="h-3.5 w-3.5 text-[#c4a47c]" />
                      {t.booking.flightNo}
                    </label>
                    <input
                      type="text"
                      value={bookingState.flightNumber}
                      onChange={(e) => handleFlightNumberChange(e.target.value)}
                      placeholder={t.booking.flightPlaceholder}
                      className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#c4a47c] focus:outline-none uppercase font-mono"
                    />
                    {flightDetectStatus && (
                      <span className="text-[11px] text-[#c4a47c] mt-1 block">
                        ✓ {flightDetectStatus}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Next Button */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#c4a47c] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#12100e] hover:bg-[#dfcaa8] transition-all"
                >
                  <span>Select Vehicle & View Estimate</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: VEHICLE SELECTION & LIVE ESTIMATE */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-xs font-mono text-[#c4a47c] uppercase tracking-wider">
                Select your preferred class:
              </div>

              {/* Vehicle Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    id: 'business' as VehicleTier,
                    name: 'Business Class',
                    model: 'Mercedes-Benz E-Class',
                    tagline: 'Quiet executive comfort',
                    capacity: '3 Pax · 2 Bags',
                  },
                  {
                    id: 'first' as VehicleTier,
                    name: 'First Class',
                    model: 'Mercedes-Benz S-Class LWB',
                    tagline: 'Flagship luxury reclining',
                    capacity: '3 Pax · 3 Bags',
                  },
                  {
                    id: 'van' as VehicleTier,
                    name: 'Business Van',
                    model: 'Mercedes-Benz V-Class XL',
                    tagline: 'Conference & team space',
                    capacity: '7 Pax · 7 Bags',
                  },
                ].map((tier) => {
                  const isSelected = bookingState.vehicleTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() =>
                        setBookingState((prev) => ({ ...prev, vehicleTier: tier.id }))
                      }
                      className={`cursor-pointer rounded-xl border p-5 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#c4a47c] bg-[#221c17] shadow-[0_0_25px_rgba(196,164,124,0.15)]'
                          : 'border-white/10 bg-[#191512] hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-serif text-lg text-white font-medium">
                            {tier.name}
                          </span>
                          <span
                            className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-[#c4a47c] bg-[#c4a47c] text-[#12100e]'
                                : 'border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#c4a47c]">{tier.model}</p>
                        <p className="text-xs text-[#b8b1a5] font-light mt-2">{tier.tagline}</p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-white/10 text-xs font-mono text-[#b8b1a5]">
                        {tier.capacity}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Instant Fare Breakdown Box */}
              <div className="rounded-xl border border-[#c4a47c]/30 bg-[#1c1815] p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono text-xs text-[#c4a47c] uppercase tracking-wider block">
                      Estimated All-Inclusive Quote
                    </span>
                    <span className="text-xs text-[#b8b1a5]">
                      {fareResult.durationText}
                    </span>
                  </div>
                  <div className="font-mono text-3xl font-medium text-white flex items-baseline gap-1">
                    <span className="text-[#c4a47c]">{fareResult.currencySymbol}</span>
                    <span>{fareResult.amount}</span>
                    <span className="text-xs text-[#b8b1a5] font-normal">
                      {fareResult.currencyCode}
                    </span>
                  </div>
                </div>

                {/* Sub-item breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-[#b8b1a5]">
                  <div>
                    <span>Base Tier: </span>
                    <span className="text-white">
                      {fareResult.currencySymbol}
                      {fareResult.breakdown.baseFare}
                    </span>
                  </div>
                  <div>
                    <span>Vehicle Class: </span>
                    <span className="text-white">
                      +{fareResult.currencySymbol}
                      {fareResult.breakdown.vehicleUpgrade}
                    </span>
                  </div>
                  <div>
                    <span>VIP Meet & Greet: </span>
                    <span className="text-white">
                      +{fareResult.currencySymbol}
                      {fareResult.breakdown.meetAndGreetFee}
                    </span>
                  </div>
                  <div>
                    <span>Tolls & VAT: </span>
                    <span className="text-[#c4a47c]">Included</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#b8b1a5]/80 font-light pt-2">
                  ✓ {t.booking.fixedPriceNote}
                </div>
              </div>

              {/* Back / Next Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-xs text-[#b8b1a5] hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Back to Route</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#c4a47c] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#12100e] hover:bg-[#dfcaa8] transition-all"
                >
                  <span>Continue to Passenger Details</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PASSENGER & CONFIRMATION */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmitBooking} className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.firstName}
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingState.firstName}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, firstName: e.target.value }))
                    }
                    placeholder="e.g. Lord Alexander"
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.lastName}
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingState.lastName}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                    placeholder="e.g. Harrington"
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingState.email}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="alexander@familyoffice.co.uk"
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#c4a47c]" />
                    {t.booking.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingState.phone}
                    onChange={(e) =>
                      setBookingState((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="+44 7911 123456"
                    className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#b8b1a5] mb-2">
                  {t.booking.notes}
                </label>
                <textarea
                  rows={3}
                  value={bookingState.specialRequests}
                  onChange={(e) =>
                    setBookingState((prev) => ({ ...prev, specialRequests: e.target.value }))
                  }
                  placeholder="e.g. Discreet silent journey, non-disclosure compliance, child executive booster seat, extra luggage assistance..."
                  className="w-full rounded-lg border border-white/10 bg-[#1f1b18] px-4 py-3 text-sm text-white focus:border-[#c4a47c] focus:outline-none resize-none"
                />
              </div>

              {/* Discretion statement */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 text-xs text-[#b8b1a5]">
                <Shield className="h-5 w-5 text-[#c4a47c] shrink-0" />
                <span>
                  Your journey itinerary and contact data are strictly confidential, handled in
                  accordance with UK GDPR and Driveo Discretion Standards.
                </span>
              </div>

              {/* Navigation Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-xs text-[#b8b1a5] hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#c4a47c] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#12100e] hover:bg-[#dfcaa8] transition-all shadow-[0_0_20px_rgba(196,164,124,0.25)]"
                >
                  <span>{t.booking.submitQuote}</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: SUBMITTED CONFIRMATION & DIRECT VIP CONCIERGE */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-fade-in text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c4a47c]/15 text-[#c4a47c] border border-[#c4a47c]/30 mx-auto">
                <Check className="h-8 w-8 stroke-[2.5]" />
              </div>

              <div className="max-w-md mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">
                  {t.booking.successTitle}
                </span>
                <h3 className="mt-2 font-serif text-3xl font-medium text-white">
                  Reservation Dispatched
                </h3>
                <p className="mt-3 text-sm text-[#b8b1a5] font-light leading-relaxed">
                  {t.booking.successMessage}
                </p>
              </div>

              {/* Reference Dossier */}
              <div className="max-w-lg mx-auto rounded-xl border border-white/15 bg-[#1f1b18] p-6 text-left space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[#b8b1a5]">{t.booking.refNumber}:</span>
                  <span className="text-white font-bold text-sm text-[#c4a47c]">
                    {submittedRef || bookingState.referenceNumber || 'DRV-78210'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8b1a5]">City & Class:</span>
                  <span className="text-white capitalize">
                    {bookingState.city} · {bookingState.vehicleTier}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8b1a5]">Pickup Location:</span>
                  <span className="text-white truncate max-w-[220px]">
                    {bookingState.pickupLocation}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8b1a5]">Destination:</span>
                  <span className="text-white truncate max-w-[220px]">
                    {bookingState.destination}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b8b1a5]">Date & Time:</span>
                  <span className="text-white">
                    {bookingState.date} @ {bookingState.time}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-[#b8b1a5]">Agreed Fixed Estimate:</span>
                  <span className="text-white font-bold text-base text-[#c4a47c]">
                    {fareResult.currencySymbol}
                    {bookingState.estimatedPrice || fareResult.amount}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/443300430976?text=${encodeURIComponent(
                    `Hello Driveo Concierge, I would like to confirm my booking dossier ${
                      submittedRef || bookingState.referenceNumber || 'DRV-78210'
                    } in ${bookingState.city} for ${bookingState.date}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#20ba59] transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{t.booking.sendWhatsapp}</span>
                </a>

                <button
                  onClick={() => setIsConciergeOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
                >
                  <Sparkles className="h-4 w-4 text-[#c4a47c]" />
                  <span>Call VIP Desk (+44 330 043 0976)</span>
                </button>

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs text-[#b8b1a5] hover:text-white py-2"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>{t.booking.newBooking}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

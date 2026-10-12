import { CityId, ServiceType, VehicleTier } from '../types';

export interface EstimateOptions {
  city: CityId;
  serviceType: ServiceType;
  vehicleTier: VehicleTier;
  hours?: number;
  pickup?: string;
  destination?: string;
}

export interface FareCalculationResult {
  amount: number;
  currencySymbol: string;
  currencyCode: string;
  breakdown: {
    baseFare: number;
    vehicleUpgrade: number;
    meetAndGreetFee: number;
    estimatedTollsAndFuel: number;
  };
  durationText: string;
  distanceText?: string;
}

export function calculateFare(options: EstimateOptions): FareCalculationResult {
  const { city, serviceType, vehicleTier, hours = 3 } = options;

  let currencySymbol = '£';
  let currencyCode = 'GBP';
  let exchangeMultiplier = 1;

  if (city === 'paris') {
    currencySymbol = '€';
    currencyCode = 'EUR';
    exchangeMultiplier = 1.15;
  } else if (city === 'bulgaria') {
    currencySymbol = 'лв';
    currencyCode = 'BGN';
    exchangeMultiplier = 2.25;
  } else if (city === 'dubai') {
    currencySymbol = 'AED';
    currencyCode = 'AED';
    exchangeMultiplier = 4.8;
  }

  // Base tier multipliers
  const tierMultiplier = {
    business: 1.0,
    first: 1.55,
    van: 1.35,
  }[vehicleTier];

  let baseFare = 0;
  let vehicleUpgrade = 0;
  let meetAndGreetFee = 0;
  let estimatedTollsAndFuel = 0;
  let durationText = '';

  if (serviceType === 'airport') {
    const rawAirportBase = 110;
    baseFare = Math.round(rawAirportBase * exchangeMultiplier);
    vehicleUpgrade = Math.round(baseFare * (tierMultiplier - 1));
    meetAndGreetFee = Math.round(25 * exchangeMultiplier);
    estimatedTollsAndFuel = Math.round(15 * exchangeMultiplier);
    durationText = 'Direct transfer · Includes 60 min terminal waiting';
  } else if (serviceType === 'hourly') {
    const minHours = Math.max(3, hours);
    const hourlyBaseRate = 75;
    baseFare = Math.round(hourlyBaseRate * minHours * exchangeMultiplier);
    vehicleUpgrade = Math.round(baseFare * (tierMultiplier - 1));
    meetAndGreetFee = 0;
    estimatedTollsAndFuel = Math.round(20 * exchangeMultiplier);
    durationText = `${minHours} Hours Dedicated Chauffeur Retainer`;
  } else if (serviceType === 'point_to_point') {
    const rawBase = 90;
    baseFare = Math.round(rawBase * exchangeMultiplier);
    vehicleUpgrade = Math.round(baseFare * (tierMultiplier - 1));
    meetAndGreetFee = 0;
    estimatedTollsAndFuel = Math.round(10 * exchangeMultiplier);
    durationText = 'Point-to-point agreed flat fare';
  } else {
    // private event
    const rawEventBase = 320;
    baseFare = Math.round(rawEventBase * exchangeMultiplier);
    vehicleUpgrade = Math.round(baseFare * (tierMultiplier - 1));
    meetAndGreetFee = Math.round(30 * exchangeMultiplier);
    estimatedTollsAndFuel = Math.round(35 * exchangeMultiplier);
    durationText = 'Full event concierge coordination';
  }

  const amount = baseFare + vehicleUpgrade + meetAndGreetFee + estimatedTollsAndFuel;

  return {
    amount,
    currencySymbol,
    currencyCode,
    breakdown: {
      baseFare,
      vehicleUpgrade,
      meetAndGreetFee,
      estimatedTollsAndFuel,
    },
    durationText,
  };
}

export function generateReferenceNumber(): string {
  const letters = 'DRV';
  const num = Math.floor(10000 + Math.random() * 90000);
  return `${letters}-${num}`;
}

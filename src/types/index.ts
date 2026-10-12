export type Language = 'en' | 'fr' | 'bg' | 'ar';

export type ServiceType = 'airport' | 'point_to_point' | 'hourly' | 'event';

export type VehicleTier = 'business' | 'first' | 'van';

export type CityId = 'london' | 'paris' | 'bulgaria' | 'dubai';

export interface VehicleSpec {
  id: VehicleTier;
  name: string;
  category: string;
  model: string;
  tagline: string;
  description: string;
  passengers: number;
  luggage: number;
  handLuggage: number;
  baseRateHourly: number;
  baseRateTransfer: number;
  currency: string;
  amenities: string[];
  specs: {
    interior: string;
    connectivity: string;
    climate: string;
    privacy: string;
    powertrain: string;
    rearLegroom: string;
  };
  image: string;
}

export interface BookingState {
  step: number;
  city: CityId;
  serviceType: ServiceType;
  vehicleTier: VehicleTier;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  hours: number;
  passengers: number;
  luggage: number;
  flightNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
  referenceNumber?: string;
  estimatedPrice?: number;
}

export interface CityData {
  id: CityId;
  name: string;
  country: string;
  code: string;
  tagline: string;
  airports: string[];
  keyHubs: string[];
  currencySymbol: string;
  currencyCode: string;
  ratesSample: string;
  availableVehicles: VehicleTier[];
}

export interface FlightStatus {
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  scheduledArrival: string;
  estimatedArrival: string;
  terminal: string;
  status: 'On Time' | 'Delayed' | 'Landed' | 'En Route';
  chauffeurStatus: 'Staging' | 'Assigned' | 'Terminal Arrival' | 'Standby';
}

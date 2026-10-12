import { FlightStatus } from '../types';

export const mockFlightsDatabase: FlightStatus[] = [
  {
    flightNumber: 'BA 458',
    airline: 'British Airways',
    origin: 'Madrid-Barajas (MAD)',
    destination: 'London Heathrow (LHR)',
    scheduledArrival: '14:25',
    estimatedArrival: '14:18 (7m Early)',
    terminal: 'Terminal 5 · Gate A14',
    status: 'Landed',
    chauffeurStatus: 'Terminal Arrival',
  },
  {
    flightNumber: 'EK 001',
    airline: 'Emirates',
    origin: 'Dubai Intl (DXB)',
    destination: 'London Heathrow (LHR)',
    scheduledArrival: '12:00',
    estimatedArrival: '12:05 (On Time)',
    terminal: 'Terminal 3 · VIP Gate',
    status: 'En Route',
    chauffeurStatus: 'Staging',
  },
  {
    flightNumber: 'AF 1680',
    airline: 'Air France',
    origin: 'London Heathrow (LHR)',
    destination: 'Paris Charles de Gaulle (CDG)',
    scheduledArrival: '16:40',
    estimatedArrival: '16:55 (15m Delay)',
    terminal: 'Terminal 2E · Flight Track Active',
    status: 'Delayed',
    chauffeurStatus: 'Assigned',
  },
  {
    flightNumber: 'FB 437',
    airline: 'Bulgaria Air',
    origin: 'Paris Charles de Gaulle (CDG)',
    destination: 'Sofia Airport (SOF)',
    scheduledArrival: '18:10',
    estimatedArrival: '18:10 (On Time)',
    terminal: 'Terminal 2 · VIP Lounge',
    status: 'En Route',
    chauffeurStatus: 'Standby',
  },
  {
    flightNumber: 'EK 202',
    airline: 'Emirates',
    origin: 'New York (JFK)',
    destination: 'Dubai International (DXB)',
    scheduledArrival: '19:45',
    estimatedArrival: '19:30 (15m Early)',
    terminal: 'Concourse A · Majlis Lounge',
    status: 'En Route',
    chauffeurStatus: 'Staging',
  },
  {
    flightNumber: 'W6 4301',
    airline: 'Wizz Air UK',
    origin: 'London Luton (LTN)',
    destination: 'Sofia Airport (SOF)',
    scheduledArrival: '21:30',
    estimatedArrival: '21:30 (On Time)',
    terminal: 'Terminal 1',
    status: 'On Time',
    chauffeurStatus: 'Assigned',
  },
];

export function searchFlight(query: string): FlightStatus | null {
  const clean = query.trim().toUpperCase().replace(/\s+/g, '');
  if (!clean) return null;
  return (
    mockFlightsDatabase.find(
      (f) =>
        f.flightNumber.toUpperCase().replace(/\s+/g, '') === clean ||
        f.flightNumber.toUpperCase().includes(clean)
    ) || {
      flightNumber: query.toUpperCase(),
      airline: 'International Scheduled Carrier',
      origin: 'European Hub',
      destination: 'London Heathrow (LHR)',
      scheduledArrival: '15:40',
      estimatedArrival: '15:40 (Monitored)',
      terminal: 'Terminal 2 / VIP Suite',
      status: 'On Time',
      chauffeurStatus: 'Staging',
    }
  );
}

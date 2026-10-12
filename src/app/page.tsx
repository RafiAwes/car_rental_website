import React from 'react';
import { useApp } from './providers';
import { HomePage } from '../pages/HomePage';
import { FleetPage } from '../pages/FleetPage';
import { CitiesPage } from '../pages/CitiesPage';
import { BookingPage } from '../pages/BookingPage';
import { FlightTrackerPage } from '../pages/FlightTrackerPage';

export const Page: React.FC = () => {
  const { activePage } = useApp();

  switch (activePage) {
    case 'fleet':
      return <FleetPage />;
    case 'cities':
      return <CitiesPage />;
    case 'booking':
      return <BookingPage />;
    case 'flight-tracker':
      return <FlightTrackerPage />;
    case 'home':
    default:
      return <HomePage />;
  }
};

export default Page;

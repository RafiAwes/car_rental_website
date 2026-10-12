import React from 'react';
import { FlightTrackerDemo } from '../components/FlightTrackerDemo';

export const FlightTrackerPage: React.FC = () => {
  return (
    <div className="py-12 animate-fade-in">
      <FlightTrackerDemo />
    </div>
  );
};

import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { FleetSection } from '../components/FleetSection';
import { CitiesSection } from '../components/CitiesSection';
import { ProcessSection } from '../components/ProcessSection';
import { FlightTrackerDemo } from '../components/FlightTrackerDemo';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { Testimonials } from '../components/Testimonials';

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <Hero />
      <ServicesSection />
      <FleetSection />
      <CitiesSection />
      <ProcessSection />
      <FlightTrackerDemo />
      <QuoteCalculator />
      <Testimonials />
    </div>
  );
};

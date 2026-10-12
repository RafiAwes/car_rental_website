import React from 'react';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { Shield, Clock, Award } from 'lucide-react';

export const BookingPage: React.FC = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-6 text-xs font-mono text-[#b8b1a5] border border-white/10 rounded-full px-6 py-2 bg-[#161311]">
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-[#c4a47c]" />
            Discreet & Confidential
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#c4a47c]" />
            Guaranteed On-Time
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5 text-[#c4a47c]" />
            Fixed-Price Quoted
          </span>
        </div>
      </div>
      <QuoteCalculator />
    </div>
  );
};

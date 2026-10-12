import React, { useRef, useEffect } from 'react';
import { useApp } from '../app/providers';
import { ArrowUpRight, Plane, Navigation, Clock, Sparkles } from 'lucide-react';
import { ServiceType } from '../types';
import { observeAndReveal } from '../lib/animations';

export const ServicesSection: React.FC = () => {
  const { t, setBookingState, setActivePage } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeAndReveal(sectionRef.current, '.service-card', 0.15);
  }, []);

  const handleServiceSelect = (service: ServiceType) => {
    setBookingState((prev) => ({
      ...prev,
      serviceType: service,
      step: 1,
    }));
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'airport' as ServiceType,
      tag: t.services.s1Tag,
      title: t.services.s1Title,
      description: t.services.s1Desc,
      icon: Plane,
      highlight: '60 min complimentary wait & flight tracking',
    },
    {
      id: 'point_to_point' as ServiceType,
      tag: t.services.s2Tag,
      title: t.services.s2Title,
      description: t.services.s2Desc,
      icon: Navigation,
      highlight: 'Agreed fixed fare, no peak surge meters',
    },
    {
      id: 'hourly' as ServiceType,
      tag: t.services.s3Tag,
      title: t.services.s3Title,
      description: t.services.s3Desc,
      icon: Clock,
      highlight: 'Continuous on-demand driver availability',
    },
    {
      id: 'event' as ServiceType,
      tag: t.services.s4Tag,
      title: t.services.s4Title,
      description: t.services.s4Desc,
      icon: Sparkles,
      highlight: 'Bespoke event and inter-city coordination',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 border-t border-white/10 bg-[#0e0c0b]"
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white [text-wrap:balance]">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#b8b1a5] font-light leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* 4 Service Cards Grid with Scroll Stagger */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                onClick={() => handleServiceSelect(s.id)}
                className="service-card group relative cursor-pointer rounded-2xl border border-white/10 bg-[#161311] p-8 transition-all duration-300 hover:border-[#c4a47c]/40 hover:bg-[#1a1714] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">
                      {s.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#b8b1a5] group-hover:text-[#c4a47c] transition-colors" />
                      <ArrowUpRight className="h-4 w-4 text-[#b8b1a5] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-medium text-white group-hover:text-[#dfcaa8] transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#b8b1a5] leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-[#c4a47c]/80 font-mono">{s.highlight}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#c4a47c] transition-colors">
                    Quote ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

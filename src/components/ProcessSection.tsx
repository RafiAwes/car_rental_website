import React, { useRef, useEffect } from 'react';
import { useApp } from '../app/providers';
import { Send, FileCheck, Car, ArrowDownRight } from 'lucide-react';
import { observeAndReveal } from '../lib/animations';

export const ProcessSection: React.FC = () => {
  const { t, setActivePage } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeAndReveal(sectionRef.current, '.process-step-card', 0.15);
  }, []);

  const steps = [
    {
      number: '01',
      title: t.process.step1Title,
      description: t.process.step1Desc,
      icon: Send,
    },
    {
      number: '02',
      title: t.process.step2Title,
      description: t.process.step2Desc,
      icon: FileCheck,
    },
    {
      number: '03',
      title: t.process.step3Title,
      description: t.process.step3Desc,
      icon: Car,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 border-t border-white/10 bg-[#12100e]">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c4a47c]">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white [text-wrap:balance]">
            {t.process.heading}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="process-step-card relative rounded-2xl border border-white/10 bg-[#161311] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#c4a47c]/30 hover:bg-[#1a1714] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="font-mono text-xl font-light text-[#c4a47c]">
                      {step.number}
                    </span>
                    <Icon className="h-5 w-5 text-[#b8b1a5]" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-medium text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-[#b8b1a5] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className="font-mono text-xs text-[#c4a47c]/70">Driveo Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-16 rounded-2xl border border-[#c4a47c]/30 bg-gradient-to-r from-[#191512] to-[#12100e] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-white">
              Ready to secure your chauffeur?
            </h4>
            <p className="mt-1 text-sm text-[#b8b1a5] font-light">
              Receive a bespoke, all-inclusive quote in writing within minutes.
            </p>
          </div>
          <button
            onClick={() => {
              setActivePage('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#c4a47c] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#12100e] hover:bg-[#dfcaa8] transition-all whitespace-nowrap shadow-[0_0_20px_rgba(196,164,124,0.25)] hover:shadow-[0_0_30px_rgba(196,164,124,0.4)]"
          >
            <span>Start Reservation</span>
            <ArrowDownRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

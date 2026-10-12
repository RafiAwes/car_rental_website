import React, { useRef, useState, useEffect } from 'react';
import { useApp } from '../app/providers';
import {
  ArrowDownRight,
  ShieldCheck,
  Plane,
  CheckCircle2,
  Lock,
  Pause,
  Play,
} from 'lucide-react';
import { CityId } from '../types';
import { gsap, prefersReducedMotion } from '../lib/animations';

export const Hero: React.FC = () => {
  const { t, dir, setActivePage, openBookingWithCity } = useApp();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const hubGroupRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        kickerRef.current,
        { opacity: 0.1, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.05, clearProps: 'all' }
      )
        .fromTo(
          [headingLine1Ref.current, headingLine2Ref.current],
          { opacity: 0.1, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, clearProps: 'all' },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0.1, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, clearProps: 'all' },
          '-=0.5'
        )
        .fromTo(
          ctaGroupRef.current,
          { opacity: 0.1, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: 'all' },
          '-=0.4'
        )
        .fromTo(
          hubGroupRef.current,
          { opacity: 0.1, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: 'all' },
          '-=0.4'
        )
        .fromTo(
          '.hero-pillar',
          { opacity: 0.1, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, clearProps: 'all' },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const cities: { id: CityId; label: string }[] = [
    { id: 'london', label: 'London' },
    { id: 'paris', label: 'Paris' },
    { id: 'bulgaria', label: 'Bulgaria' },
    { id: 'dubai', label: 'Dubai' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Cinematic Luxury Car Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/media/driveo-journey-poster.jpg"
          aria-label="A black Mercedes-Benz S-Class travelling through London, Paris, Bulgaria and Dubai"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-95 transition-opacity duration-1000"
        >
          <source src="/media/driveo-city-journey.mp4" type="video/mp4" />
          <source
            src="https://driveo-creative-lab.lovable.app/media/driveo-city-journey.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dense on Left, Progressively Lighter Towards Right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              dir === 'rtl'
                ? 'linear-gradient(270deg, rgba(18,16,14,0.98) 0%, rgba(18,16,14,0.92) 22%, rgba(18,16,14,0.72) 45%, rgba(18,16,14,0.35) 68%, rgba(18,16,14,0.08) 85%, transparent 100%)'
                : 'linear-gradient(90deg, rgba(18,16,14,0.98) 0%, rgba(18,16,14,0.92) 22%, rgba(18,16,14,0.72) 45%, rgba(18,16,14,0.35) 68%, rgba(18,16,14,0.08) 85%, transparent 100%)',
          }}
        />

        {/* Subtle bottom fade to blend smoothly into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-[#12100e]/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-5xl">
          {/* Subtle unboxed metadata kicker */}
          <div
            ref={kickerRef}
            className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#c4a47c]"
          >
            <span>{t.hero.badge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#b8b1a5]">{t.hero.discretionPledge}</span>
          </div>

          {/* Headline with balance */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1] [text-wrap:balance]">
            <span ref={headingLine1Ref} className="block text-[#b8b1a5] font-light">
              {t.hero.titleLine1}
            </span>
            <span ref={headingLine2Ref} className="block text-white italic font-normal">
              {t.hero.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base md:text-lg text-[#b8b1a5] leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </p>

          {/* Action CTAs - Responsive Stacking */}
          <div ref={ctaGroupRef} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <button
              onClick={() => {
                setActivePage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-3 rounded-lg bg-[#c4a47c] px-6 sm:px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#12100e] hover:bg-[#dfcaa8] transition-all duration-200 active:scale-98 shadow-[0_0_30px_rgba(196,164,124,0.25)] hover:shadow-[0_0_40px_rgba(196,164,124,0.4)] hover:-translate-y-0.5"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowDownRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => {
                setActivePage('fleet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-[#f4efe6] hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Quick Hub Selector */}
          <div ref={hubGroupRef} className="mt-14 border-t border-white/10 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#b8b1a5] mb-4">
              Operating Chauffeur Hubs:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => openBookingWithCity(city.id)}
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-[#1c1916]/75 backdrop-blur-sm px-4 py-2 text-xs font-medium text-[#f4efe6] hover:border-[#c4a47c]/50 hover:bg-[#1c1916] transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c4a47c]/80 group-hover:scale-125 transition-transform" />
                  <span>{city.label}</span>
                  <span className="font-mono text-[10px] text-[#c4a47c] opacity-0 group-hover:opacity-100 transition-opacity">
                    Dispatch ↘
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Strip and Ambient Video Controls */}
      <div className="relative z-10 mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between border-t border-white/10 pt-12 pb-4">
          <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 01 */}
            <div className="hero-pillar space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">01</span>
                <ShieldCheck className="h-4 w-4 text-[#c4a47c]/60" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">{t.pillars.p1Title}</h3>
              <p className="text-xs text-[#b8b1a5] leading-relaxed font-light">
                {t.pillars.p1Desc}
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="hero-pillar space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">02</span>
                <Plane className="h-4 w-4 text-[#c4a47c]/60" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">{t.pillars.p2Title}</h3>
              <p className="text-xs text-[#b8b1a5] leading-relaxed font-light">
                {t.pillars.p2Desc}
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="hero-pillar space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">03</span>
                <CheckCircle2 className="h-4 w-4 text-[#c4a47c]/60" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">{t.pillars.p3Title}</h3>
              <p className="text-xs text-[#b8b1a5] leading-relaxed font-light">
                {t.pillars.p3Desc}
              </p>
            </div>

            {/* Pillar 04 */}
            <div className="hero-pillar space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c4a47c]">04</span>
                <Lock className="h-4 w-4 text-[#c4a47c]/60" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">{t.pillars.p4Title}</h3>
              <p className="text-xs text-[#b8b1a5] leading-relaxed font-light">
                {t.pillars.p4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Video Playback Discreet Controller */}
        <div className="flex justify-end pt-2">
          <button
            onClick={toggleVideoPlayback}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-[#b8b1a5] hover:text-white hover:border-white/20 transition-colors"
            title={isPlaying ? 'Pause ambient video' : 'Play ambient video'}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3 w-3 text-[#c4a47c]" />
                <span>Pause Motion</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3 text-[#c4a47c]" />
                <span>Play Motion</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

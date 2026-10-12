import React from 'react';
import { useApp } from '../app/providers';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="relative py-24 border-t border-white/10 bg-[#12100e]">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <Quote className="h-10 w-10 text-[#c4a47c]/40 mx-auto mb-8" />
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light italic leading-relaxed [text-wrap:balance]">
            {t.testimonial.quote}
          </blockquote>
          <div className="mt-8 font-mono text-xs uppercase tracking-widest text-[#c4a47c]">
            {t.testimonial.author}
          </div>
        </div>
      </div>
    </section>
  );
};

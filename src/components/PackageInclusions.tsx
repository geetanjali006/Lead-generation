import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Translation } from '../data/translations';

interface PackageInclusionsProps {
  t: Translation;
  onBookClick: () => void;
}

export const PackageInclusions: React.FC<PackageInclusionsProps> = ({ t, onBookClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF6FA] via-[#FAF3FB] to-[#FAF6FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Transparent Pricing Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#652D6C]/10 border border-[#652D6C]/20 text-[#652D6C] text-xs font-extrabold tracking-wider uppercase">
            <span>{t.nav.freeCampBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {t.inclusions.pricingTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#56335B] font-medium leading-relaxed">
            {t.inclusions.pricingSubtitle}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-10">
          {t.inclusions.packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.featured
                  ? 'bg-gradient-to-b from-[#652D6C] to-[#4D1F53] text-white shadow-2xl scale-105 border-2 border-[#9A389F]'
                  : 'glass-card text-[#2A102D]'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#4D1F53] font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className={`text-xl font-extrabold mb-1 ${pkg.featured ? 'text-white' : 'text-[#2A102D]'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs mb-4 ${pkg.featured ? 'text-purple-200' : 'text-[#56335B]'}`}>
                  {pkg.subnote}
                </p>

                <div className="mb-6 pb-4 border-b border-current/15">
                  <span className={`text-3xl sm:text-4xl font-black ${pkg.featured ? 'text-white' : 'text-[#652D6C]'}`}>
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.featured ? 'text-yellow-300' : 'text-[#9A389F]'}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onBookClick}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  pkg.featured
                    ? 'bg-white text-[#652D6C] hover:bg-yellow-300 hover:text-[#4D1F53] shadow-lg'
                    : 'btn-primary-purple'
                }`}
              >
                <span>{t.nav.bookAppointment}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <p className="text-center text-xs text-[#56335B] font-medium max-w-2xl mx-auto">
          {t.inclusions.disclaimer}
        </p>

      </div>
    </section>
  );
};

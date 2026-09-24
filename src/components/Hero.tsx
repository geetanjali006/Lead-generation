import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, CheckCircle2, User, Phone, ChevronRight, Award, Heart, Star, ShieldCheck, Tag } from 'lucide-react';
import { Translation } from '../data/translations';

interface HeroProps {
  t: Translation;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onFormSubmit }) => {
  const isTe = t.nav.brandName.includes('మెడ్సీ');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: new Date().toISOString().split('T')[0],
    slot: t.hero.slotOptions[0] || '10:00 AM - 07:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'Consultation Registration (Hero Form)'
      });
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6FA] min-h-[calc(100vh-8.5rem)] flex flex-col justify-center items-center py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#9A389F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#652D6C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Headlines & Discount Offer */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-7 order-2 lg:order-1">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-[#2A102D] leading-[1.12]">
              {t.hero.headlinePart1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#652D6C] via-[#9A389F] to-[#7E3282]">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-[#56335B] leading-relaxed max-w-2xl font-medium">
              {t.hero.subtext}
            </p>

            {/* Srikakulam Branch Complete IVF at ₹1.5 Lakhs Only Callout Banner */}
            <div className="w-full bg-gradient-to-r from-[#FDE8E8] via-[#FFF3D6] to-[#FDE8E8] border border-amber-400/80 text-[#45144A] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl shadow-sm flex items-center gap-2 overflow-hidden">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#652D6C] shrink-0" />
              <p className="text-xs min-[420px]:text-sm sm:text-base lg:text-lg font-extrabold text-[#3D1443] tracking-tight whitespace-nowrap">
                {t.hero.srikakulamOffer}
              </p>
            </div>

            {/* Special Discount Offer Card comparing 1.9L vs 1.8L */}
            <div className="text-white shadow-xl relative overflow-hidden border border-yellow-300/40 bg-gradient-to-r from-[#4A164E] via-[#652D6C] to-[#8F2D95] p-5 sm:p-6 pb-8 sm:pb-10 lg:pb-12 rounded-2xl">
              {/* Decorative Background Glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-yellow-300/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-2 right-4 opacity-20 pointer-events-none">
                <Sparkles className="w-16 h-16 text-yellow-300" />
              </div>

              <div className="relative z-10 space-y-2.5">
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-yellow-400 text-[#4D1F53] px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-current text-[#4D1F53]" />
                    <span>{t.hero.offerBadge}</span>
                  </span>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500 text-white px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1 animate-pulse">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{t.hero.offerSaveTag}</span>
                  </span>
                </div>

                {/* Price Comparison */}
                <div className="pt-0.5">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <span className="text-xs sm:text-sm text-purple-200/80 line-through font-bold">
                      {t.hero.offerOriginalPrice}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-yellow-300 tracking-tight">
                      {t.hero.offerText}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-purple-100 font-medium mt-1">
                    {t.hero.offerNote}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-white relative shadow-xl border border-[#652D6C]/20 pt-5 px-5 sm:pt-6 sm:px-6 lg:pt-6 lg:px-7 pb-8 sm:pb-10 lg:pb-12 rounded-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-4 sm:mb-5">
                <h2 className="text-2xl sm:text-[1.75rem] font-extrabold text-[#2A102D] tracking-tight">
                  {t.hero.formTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#56335B] mt-1 font-medium">
                  {t.hero.formSubtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1">
                    {t.hero.fullNameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-3 sm:top-3.5 text-[#652D6C]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.hero.fullNamePlaceholder}
                      className="w-full pl-9 sm:pl-10 pr-3.5 py-2.5 sm:py-3 text-sm sm:text-base bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Mobile & Age Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1">
                      {t.hero.mobileLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-3 sm:top-3.5 text-[#652D6C]" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.hero.mobilePlaceholder}
                        className="w-full pl-9 sm:pl-10 pr-3.5 py-2.5 sm:py-3 text-sm sm:text-base bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1">
                      {t.hero.ageLabel}
                    </label>
                    <input
                      type="number"
                      min="18"
                      max="60"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={t.hero.agePlaceholder}
                      className="w-full px-2.5 py-2.5 sm:py-3 text-sm sm:text-base bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1">
                      {t.hero.dateLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-3 sm:top-3.5 text-[#652D6C] pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-9 sm:pl-10 pr-2.5 py-2.5 sm:py-3 text-sm sm:text-base bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1">
                      {t.hero.slotLabel}
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-2.5 py-2.5 sm:py-3 text-sm sm:text-base bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all cursor-pointer"
                    >
                      {t.hero.slotOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent rounded-xl font-extrabold text-base sm:text-lg py-3.5 sm:py-4 px-5 flex items-center justify-center gap-2 shadow-lg mt-3 group hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs sm:text-sm text-center text-[#56335B] font-medium pt-2 sm:pt-3 flex items-center justify-center gap-1.5">
                  <span>🔒</span>
                  <span>{t.hero.privacyNote}</span>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

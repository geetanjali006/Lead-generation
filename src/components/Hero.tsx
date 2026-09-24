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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6FA] via-[#FAF3FB] to-[#FAF6FA] py-6 sm:py-10 lg:py-12 min-h-[calc(100vh-130px)] flex items-center">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#9A389F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#652D6C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          
          {/* Left Column: Headlines & Discount Offer */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-7">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2A102D] leading-[1.15]">
              {t.hero.headlinePart1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#652D6C] via-[#9A389F] to-[#7E3282]">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-xl text-[#56335B] leading-relaxed max-w-2xl font-medium">
              {t.hero.subtext}
            </p>

            {/* Rephrased Srikakulam Branch IVF Starting Price Callout Banner */}
            <div className="w-full bg-gradient-to-r from-[#FDE8E8] via-[#FFF3D6] to-[#FDE8E8] border border-amber-400/60 text-[#45144A] px-5 py-3.5 rounded-2xl shadow-md flex items-center">
              <p className="text-sm sm:text-base lg:text-lg font-extrabold text-[#3D1443] leading-snug">
                {t.hero.srikakulamOffer}
              </p>
            </div>

            {/* Special Discount Offer Card comparing 1.9L vs 1.8L */}
            <div className="text-white shadow-2xl relative overflow-hidden border-2 border-yellow-300/40 bg-gradient-to-r from-[#4A164E] via-[#652D6C] to-[#8F2D95] p-6 sm:p-7 rounded-3xl">
              {/* Decorative Background Glow */}
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-yellow-300/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-2 right-4 opacity-20 pointer-events-none">
                <Sparkles className="w-20 h-20 text-yellow-300" />
              </div>

              <div className="relative z-10 space-y-2.5">
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider bg-yellow-400 text-[#4D1F53] px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 fill-current text-[#4D1F53]" />
                    <span>{t.hero.offerBadge}</span>
                  </span>

                  <span className="text-xs font-black uppercase tracking-wider bg-emerald-500 text-white px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1 animate-pulse">
                    <Tag className="w-4 h-4" />
                    <span>{t.hero.offerSaveTag}</span>
                  </span>
                </div>

                {/* Price Comparison */}
                <div className="pt-0.5">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-sm sm:text-base text-purple-200/80 line-through font-bold">
                      {t.hero.offerOriginalPrice}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-yellow-300 tracking-tight">
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

          {/* Right Column: Prominent Larger Registration Form */}
          <div className="lg:col-span-5">
            <div className="glass-card relative shadow-2xl border-2 border-[#652D6C]/20 p-6 sm:p-8 lg:p-9 rounded-3xl">
              
              {/* Form Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A102D]">
                  {t.hero.formTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#56335B] mt-1 font-semibold">
                  {t.hero.formSubtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Full Name Field */}
                <div>
                  <label className="block text-sm font-extrabold text-[#2A102D] mb-1.5">
                    {t.hero.fullNameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-3.5 sm:top-4 text-[#652D6C]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.hero.fullNamePlaceholder}
                      className="w-full pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base bg-white border-2 border-[#652D6C]/20 rounded-2xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Mobile & Age Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-extrabold text-[#2A102D] mb-1.5">
                      {t.hero.mobileLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-3.5 top-3.5 sm:top-4 text-[#652D6C]" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.hero.mobilePlaceholder}
                        className="w-full pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base bg-white border-2 border-[#652D6C]/20 rounded-2xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-[#2A102D] mb-1.5">
                      {t.hero.ageLabel}
                    </label>
                    <input
                      type="number"
                      min="18"
                      max="60"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={t.hero.agePlaceholder}
                      className="w-full px-3 py-3 sm:py-3.5 text-sm sm:text-base bg-white border-2 border-[#652D6C]/20 rounded-2xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-center text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-sm font-extrabold text-[#2A102D] mb-1.5">
                      {t.hero.dateLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3.5 top-3.5 sm:top-4 text-[#652D6C] pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-11 pr-3 py-3 sm:py-3.5 text-xs sm:text-sm bg-white border-2 border-[#652D6C]/20 rounded-2xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-bold text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-[#2A102D] mb-1.5">
                      {t.hero.slotLabel}
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-3 py-3 sm:py-3.5 text-xs sm:text-sm bg-white border-2 border-[#652D6C]/20 rounded-2xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-bold text-[#2A102D] shadow-sm transition-all cursor-pointer"
                    >
                      {t.hero.slotOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Prominent Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent rounded-2xl font-black text-base sm:text-lg py-4 px-6 flex items-center justify-center gap-2 shadow-xl mt-3 group hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <p className="text-xs text-center text-[#56335B] font-bold pt-1 flex items-center justify-center gap-1">
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

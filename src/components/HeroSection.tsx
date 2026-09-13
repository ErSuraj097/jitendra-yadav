"use client";

import React from 'react';
import Link from 'next/link';
import BicycleMotif from '@/components/BicycleMotif';
import { useLanguage } from '@/components/LanguageContext';
import { PROFILE_DATA } from '@/lib/data';
import { ShieldCheck, ArrowRight, Briefcase, PhoneCall, CheckCircle2, Award, Users, HeartHandshake } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden py-12 lg:py-20 border-b border-slate-100">
      
      {/* Background Decorative Gradient Orbs (70% White, 15% Red, 10% Green) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -ml-40 -mb-20" />

      {/* Subtle Animated Bicycle Motif Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-between opacity-[0.04] pointer-events-none select-none overflow-hidden">
        <div className="transform -translate-x-12 animate-[float_8s_ease-in-out_infinite]">
          <BicycleMotif className="w-[450px] h-[280px] text-slate-900" />
        </div>
        <div className="transform translate-x-12 animate-[float_10s_ease-in-out_infinite_2s]">
          <BicycleMotif className="w-[450px] h-[280px] text-samajwadiRed" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text, Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="bg-samajwadiRed text-white text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-sm tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                {t(PROFILE_DATA.party)}
              </span>
              <span className="bg-emerald-50 text-deepGreen border border-emerald-200 text-xs font-extrabold px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-deepGreen" />
                {t(PROFILE_DATA.designation)}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {t(PROFILE_DATA.name)}
            </h1>

            {/* Subheading / Designation & Constituency */}
            <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-samajwadiRed via-slate-800 to-deepGreen">
              {t({
                en: "District Panchayat Member • Ward No. 14, Jaunpur, Uttar Pradesh",
                hi: "जिला पंचायत सदस्य • वार्ड क्र. 14, जौनपुर, उत्तर प्रदेश"
              })}
            </p>

            {/* Hindi/Hinglish Tagline */}
            <blockquote className="bg-slate-50 border-l-4 border-samajwadiRed p-4 rounded-r-2xl text-slate-700 italic font-semibold text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 shadow-sm">
              "{t({
                en: "Public Service, Promise of Development, Together for Progress!",
                hi: "जनता की सेवा, विकास का वादा, हम सब का साथ!"
              })}"
            </blockquote>

            {/* Short Bio */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {t(PROFILE_DATA.bioShort)}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-samajwadiRed hover:bg-red-700 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base group"
              >
                <span>{t({ en: "Connect With Us", hi: "जनता से जुड़ें" })}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-deepGreen hover:bg-emerald-800 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base group"
              >
                <Briefcase className="w-4 h-4 text-emerald-200" />
                <span>{t({ en: "View My Work", hi: "मेरे कार्य देखें" })}</span>
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-samajwadiRed">150+</p>
                <p className="text-xs text-slate-600 font-bold">{t({ en: "Projects Done", hi: "विकास कार्य" })}</p>
              </div>
              <div className="text-center lg:text-left space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-deepGreen">50K+</p>
                <p className="text-xs text-slate-600 font-bold">{t({ en: "Citizens Served", hi: "नागरिक लाभान्वित" })}</p>
              </div>
              <div className="text-center lg:text-left space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-slate-800">100%</p>
                <p className="text-xs text-slate-600 font-bold">{t({ en: "Grievance Response", hi: "शिकायत समाधान" })}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Leader Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              
              {/* Outer Glowing Border Rings (Red & Green) */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-samajwadiRed via-amber-400 to-deepGreen rounded-full blur-md opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                <img
                  src="/jitendra_hero.png"
                  alt={t(PROFILE_DATA.name)}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/profile.png";
                  }}
                />
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute -bottom-2 -left-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-samajwadiRed font-black">
                  <BicycleMotif className="w-6 h-6 text-samajwadiRed" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">{t(PROFILE_DATA.party)}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{t({ en: "Grassroots Leader", hi: "जनप्रिय नेतृत्व" })}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

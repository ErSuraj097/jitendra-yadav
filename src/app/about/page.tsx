"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { PROFILE_DATA } from "@/lib/data";
import { User, ShieldCheck, Award, Target, Calendar, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-4">
            <span className="bg-samajwadi-green text-white text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              {t({ en: "Biography & Vision", hi: "जीवन परिचय एवं विज़न" })}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t(PROFILE_DATA.name)}
            </h1>
            <p className="text-emerald-400 font-semibold text-base sm:text-lg">
              {t(PROFILE_DATA.designation)} • {t(PROFILE_DATA.party)}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              {t(PROFILE_DATA.bioShort)}
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl bg-gray-700">
              <img
                src="/profile.png"
                alt={t(PROFILE_DATA.name)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Bio Paragraphs */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center space-x-2 border-b border-gray-100 pb-4">
            <User className="w-6 h-6 text-samajwadi-green" />
            <h2 className="text-2xl font-extrabold text-gray-900">
              {t({ en: "Public Journey & Leadership", hi: "सार्वजनिक जीवन एवं नेतृत्व" })}
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            {PROFILE_DATA.bioFull.map((para, idx) => (
              <p key={idx} className="bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                {t(para)}
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{t({ en: "Public Responsibility Principles", hi: "सार्वजनिक उत्तरदायित्व के सिद्धांत" })}</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-700">
              <li className="bg-emerald-50 p-3 rounded-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Tolerance for Negligence in Public Works</span>
              </li>
              <li className="bg-emerald-50 p-3 rounded-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Trackable Citizen Grievances</span>
              </li>
              <li className="bg-emerald-50 p-3 rounded-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Equal Focus on Health, Education & Roads</span>
              </li>
              <li className="bg-emerald-50 p-3 rounded-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bilingual Information Transparency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Vision & Objectives */}
        <div className="lg:col-span-5 bg-emerald-900 text-white p-8 rounded-3xl shadow-lg space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-emerald-800 pb-4">
              <Target className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-extrabold text-white">
                {t({ en: "Core Vision & Commitments", hi: "प्रमुख विज़न एवं संकल्प" })}
              </h2>
            </div>

            <div className="space-y-3">
              {PROFILE_DATA.vision.map((item, idx) => (
                <div key={idx} className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800 text-xs sm:text-sm leading-relaxed text-emerald-100">
                  {t(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-950 p-4 rounded-2xl border border-emerald-700 text-xs text-emerald-300">
            <span className="font-bold text-amber-400 block mb-1">Official Seva Helpline</span>
            <span>Call/WhatsApp: {PROFILE_DATA.phone}</span>
          </div>
        </div>

      </div>

      {/* Interactive Year-by-Year Timeline */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
        <div className="flex items-center space-x-2 border-b border-gray-100 pb-4">
          <Calendar className="w-6 h-6 text-samajwadi-green" />
          <h2 className="text-2xl font-extrabold text-gray-900">
            {t({ en: "Year-by-Year Public Milestones Timeline", hi: "वर्षवार जनसेवा टाइमलाइन" })}
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-8 space-y-8 py-2">
          {PROFILE_DATA.timeline.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-samajwadi-green border-4 border-white shadow"></div>
              
              <div className="bg-gray-50 hover:bg-emerald-50/50 p-5 rounded-2xl border border-gray-200 transition-colors">
                <span className="bg-samajwadi-green text-white text-xs font-black px-2.5 py-1 rounded inline-block mb-2">
                  {item.year}
                </span>
                <h3 className="font-bold text-gray-900 text-lg">
                  {t(item.title)}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

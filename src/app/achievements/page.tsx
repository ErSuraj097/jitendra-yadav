"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { ACHIEVEMENTS_DATA } from "@/lib/data";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export default function AchievementsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>{t({ en: "Verified Accomplishments", hi: "सत्यापित उपलब्धियां" })}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t({ en: "Public Achievements & Recognitions", hi: "प्रमुख उपलब्धियां एवं सार्वजनिक सम्मान" })}
        </h1>
        <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
          {t({
            en: "A structured, objective record of major milestones, development milestones, and community recognitions.",
            hi: "विकास मील का पत्थर, सार्वजनिक पहलों और सामुदायिक सम्मान का वस्तुनिष्ठ रिकॉर्ड।"
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS_DATA.map((ach) => (
          <div key={ach.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 space-y-4 hover:border-emerald-300 transition-colors">
            <div className="flex justify-between items-start">
              <span className="bg-samajwadi-green text-white text-xs font-black px-3 py-1 rounded-lg">
                {ach.year}
              </span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                {t(ach.category)}
              </span>
            </div>

            <h3 className="font-extrabold text-gray-900 text-xl leading-snug">
              {t(ach.title)}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {t(ach.description)}
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold">{t({ en: "Official Reference:", hi: "सत्यापन संदर्भ:" })}</span>
              <span className="font-bold text-gray-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {t(ach.reference)}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

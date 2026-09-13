"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { PORTFOLIO_PROJECTS, PROFILE_DATA } from "@/lib/data";
import SectionCard from "@/components/SectionCard";
import BicycleMotif from "@/components/BicycleMotif";
import { MapPin, Building2, CheckCircle2, ShieldCheck, Wrench, Droplets, Lightbulb, Users } from "lucide-react";

export default function ConstituencyPage() {
  const { t } = useLanguage();

  const villages = [
    { name: { en: "Barhalganj Central Sector", hi: "बड़हलगंज सेंट्रल सेक्टर" }, projects: "45+", population: "15,000+" },
    { name: { en: "National College Area", hi: "नेशनल पी.जी. कॉलेज क्षेत्र" }, projects: "30+", population: "11,500+" },
    { name: { en: "Sarayu River Front Sector", hi: "सरयू तट क्षेत्र" }, projects: "28+", population: "9,800+" },
    { name: { en: "Gorakhpur Link Sector", hi: "गोरखपुर लिंक क्षेत्र" }, projects: "25+", population: "10,200+" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none p-6">
            <BicycleMotif className="w-80 h-48 text-emerald-400" />
          </div>
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="bg-deepGreen text-white text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
              {t({ en: "Constituency Development", hi: "क्षेत्रीय विकास एवं पंचायत कार्य" })}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              {t({ en: "Barhalganj, Gorakhpur (PIN: 273402) Infrastructure", hi: "बड़हलगंज, गोरखपुर (पिन: 273402) का समग्र विकास" })}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t({ 
                en: "Comprehensive infrastructure upgrades, clean drinking water, paved roads, solar lighting, and public community spaces across all Gram Panchayats.",
                hi: "सभी ग्राम पंचायतों में पक्की सड़कें, स्वच्छ पेयजल, सोलर लाइट, नालियों का निर्माण और सामुदायिक परिसंपत्तियों का सुदृढ़ीकरण।" 
              })}
            </p>
          </div>
        </div>

        {/* Sectors & Villages Grid */}
        <SectionCard
          title={t({ en: "Gram Panchayat Sectors", hi: "ग्राम पंचायत सेक्टर एवं क्षेत्र विस्तार" })}
          subtitle={t({ en: "Direct outreach and balanced fund allocation across all villages", hi: "प्रत्येक गाँव तक पारदर्शी बजट और समान विकास पहुँचाना" })}
          accent="green"
          showBicycle
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
            {villages.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-deepGreen flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{t(v.name)}</h3>
                <div className="text-xs text-slate-600 space-y-1 font-semibold">
                  <p className="flex justify-between">
                    <span>{t({ en: "Completed Projects", hi: "विकास कार्य" })}:</span>
                    <span className="text-deepGreen font-extrabold">{v.projects}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{t({ en: "Beneficiaries", hi: "नागरिक आबादी" })}:</span>
                    <span className="text-slate-900 font-extrabold">{v.population}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Infrastructure Highlights */}
        <SectionCard
          title={t({ en: "Key Works Implemented", hi: "प्रमुख विकास कार्य सूची" })}
          accent="tricolor"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
            {PORTFOLIO_PROJECTS.slice(0, 6).map((proj) => (
              <div key={proj.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:bg-white transition-all space-y-3">
                <span className="bg-emerald-100 text-deepGreen text-[11px] font-black uppercase px-2.5 py-0.5 rounded-md">
                  {t(proj.categoryLabel)}
                </span>
                <h4 className="text-base font-extrabold text-slate-900">{t(proj.title)}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{t(proj.workDone)}</p>
                <div className="pt-2 flex justify-between items-center text-xs font-bold text-slate-500 border-t border-slate-200/60">
                  <span className="flex items-center gap-1 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-samajwadiRed" />
                    {t(proj.location)}
                  </span>
                  <span className="text-deepGreen font-extrabold">{proj.status}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

      </div>
    </div>
  );
}

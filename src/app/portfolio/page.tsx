"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { Briefcase, MapPin, Calendar, CheckCircle2, Clock, Filter, DollarSign } from "lucide-react";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const categories = [
    { id: "all", label: { en: "All Projects", hi: "सभी परियोजनाएं" } },
    { id: "infrastructure", label: { en: "Infrastructure & Roads", hi: "सड़क एवं निर्माण" } },
    { id: "public_works", label: { en: "Solar Lighting", hi: "सोलर लाइट" } },
    { id: "sanitation", label: { en: "Drinking Water", hi: "पेजल एवं स्वच्छता" } },
    { id: "community", label: { en: "Youth & Sports", hi: "खेल एवं युवा" } },
  ];

  const filteredProjects = selectedCat === "all"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          <span>{t({ en: "Development Portfolio", hi: "विकास एवं निर्माण पोर्टफोलियो" })}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t({ en: "Constituency Work & Infrastructure Portfolio", hi: "क्षेत्रीय विकास एवं निर्माण कार्य" })}
        </h1>
        <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
          {t({
            en: "Transparent progress reporting on roads, solar street lighting, water purification units, and public facilities.",
            hi: "सड़कों, सोलर स्ट्रीट लाइटिंग, जल शोधन इकाइयों और सार्वजनिक सुविधाओं की पारदर्शी प्रगति रिपोर्ट।"
          })}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4">
        <span className="text-xs font-bold text-gray-500 uppercase mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCat === cat.id
                ? "bg-samajwadi-green text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {t(cat.label)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="relative h-64 bg-gray-100">
              <img src={item.image} alt={t(item.title)} className="w-full h-full object-cover" />
              
              <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg">
                {t(item.categoryLabel)}
              </div>

              <span className={`absolute top-4 right-4 text-xs font-black uppercase px-3 py-1 rounded-lg shadow ${
                item.status === "Completed" ? "bg-emerald-600 text-white" : "bg-amber-500 text-white"
              }`}>
                {item.status}
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-extrabold text-gray-900 text-xl leading-snug">
                  {t(item.title)}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div>
                    <span className="text-gray-400 font-bold uppercase block">{t({ en: "Location", hi: "स्थान" })}</span>
                    <span className="font-semibold text-gray-800 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      {t(item.location)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-bold uppercase block">{t({ en: "Period", hi: "अवधि" })}</span>
                    <span className="font-semibold text-gray-800 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-samajwadi-green shrink-0" />
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-700">
                  <div>
                    <strong className="text-gray-900 font-bold block">{t({ en: "Objective:", hi: "उद्देश्य:" })}</strong>
                    <p className="text-gray-600 leading-relaxed mt-0.5">{t(item.objective)}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 font-bold block">{t({ en: "Work Executed:", hi: "संपन्न कार्य:" })}</strong>
                    <p className="text-gray-600 leading-relaxed mt-0.5">{t(item.workDone)}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                <span className="text-gray-500 font-medium">{t({ en: "Allocated Budget:", hi: "स्वीकृत बजट:" })}</span>
                <span className="font-extrabold text-base text-samajwadi-green">{item.budget || "Sanctioned"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

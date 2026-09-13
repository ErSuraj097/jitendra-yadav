"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { SEVA_ACTIVITIES, SevaItem } from "@/lib/data";
import { HeartHandshake, Filter, MapPin, Calendar, Users, CheckCircle } from "lucide-react";

export default function PublicServicePage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: { en: "All Seva Activities", hi: "सभी सेवा कार्य" } },
    { id: "health", label: { en: "Health & Medical", hi: "स्वास्थ्य सेवा" } },
    { id: "education", label: { en: "Education Support", hi: "शिक्षा सहायता" } },
    { id: "economic", label: { en: "Welfare & Economic", hi: "कल्याण एवं सहायता" } },
    { id: "community", label: { en: "Community Work", hi: "सामुदायिक कार्य" } },
  ];

  const filteredItems = selectedCategory === "all"
    ? SEVA_ACTIVITIES
    : SEVA_ACTIVITIES.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-samajwadi-dark via-gray-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4" />
          <span>{t({ en: "Seva & Social Initiatives", hi: "जन सेवा एवं सामाजिक पहल" })}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t({ en: "Public Service & Seva Activities", hi: "सार्वजनिक सेवा एवं जन कल्याणकारी कार्य" })}
        </h1>
        <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
          {t({
            en: "A transparent record of health camps, educational assistance, emergency relief, and community welfare programs conducted for citizens.",
            hi: "नागरिकों के लिए आयोजित स्वास्थ्य शिविरों, शैक्षिक सहायता, आपातकालीन राहत एवं सामाजिक सहायता का पारदर्शी विवरण।"
          })}
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4">
        <span className="text-xs font-bold text-gray-500 uppercase mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat.id
                ? "bg-samajwadi-green text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {t(cat.label)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="relative h-52 bg-gray-100">
              <img src={item.image} alt={t(item.title)} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                {t(item.categoryLabel)}
              </span>
              <span className="absolute bottom-3 right-3 bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                {item.status}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-samajwadi-green" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug">
                  {t(item.title)}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t(item.description)}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate max-w-[160px]">{t(item.location)}</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  <Users className="w-3.5 h-3.5" />
                  <span>{item.beneficiariesCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

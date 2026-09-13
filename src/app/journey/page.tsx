"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { PROFILE_DATA } from "@/lib/data";
import SectionCard from "@/components/SectionCard";
import BicycleMotif from "@/components/BicycleMotif";
import { Flag, Award, Calendar, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function JourneyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none p-6">
            <BicycleMotif className="w-80 h-48 text-white" />
          </div>
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="bg-samajwadiRed text-white text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
              {t({ en: "Political Journey", hi: "राजनीतिक यात्रा एवं संघर्ष" })}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              {t({ en: "Timeline of Public Leadership", hi: "जनसेवा और नेतृत्व का मार्ग" })}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t({ 
                en: "From student leadership to District Panchayat Member — a dedicated journey driven by Samajwadi ideology, youth empowerment, and rural development.",
                hi: "छात्र राजनीति से लेकर जिला पंचायत सदस्य तक — समाजवादी विचारधारा, युवा सशक्तिकरण और ग्राम विकास को समर्पित एक अटूट यात्रा।" 
              })}
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <SectionCard 
          title={t({ en: "Key Milestones & Experience", hi: "प्रमुख पड़ाव एवं जनसेवा इतिहास" })}
          subtitle={t({ en: "Milestones in public governance and community empowerment", hi: "जनता के हित में लिए गए महत्वपूर्ण निर्णय और संघर्ष" })}
          accent="red"
          showBicycle
        >
          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 my-6 space-y-8">
            {PROFILE_DATA.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-samajwadiRed text-samajwadiRed font-black text-xs flex items-center justify-center shadow-md group-hover:bg-samajwadiRed group-hover:text-white transition-all">
                  <Flag className="w-3.5 h-3.5" />
                </div>

                <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-red-50 text-samajwadiRed font-black text-xs px-3 py-1 rounded-full border border-red-100">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-deepGreen" />
                      {t({ en: "Verified Track Record", hi: "प्रमाणित कार्य" })}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {t(item.title)}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(item.description)}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </SectionCard>

      </div>
    </div>
  );
}

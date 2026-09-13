"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import SectionCard from "@/components/SectionCard";
import { GrievanceTracker } from "@/components/GrievanceTracker";
import BicycleMotif from "@/components/BicycleMotif";
import { MessageSquare, ShieldCheck, HeartHandshake, FileText, CheckCircle2 } from "lucide-react";

export default function IssuesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none p-6">
            <BicycleMotif className="w-80 h-48 text-white" />
          </div>
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="bg-samajwadiRed text-white text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
              {t({ en: "Public Voice & Grievance Redressal", hi: "जनता की आवाज़ एवं जनसमस्या पोर्टल" })}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              {t({ en: "Direct Citizen Redressal System", hi: "पारदर्शी जनसमस्या निवारण केंद्र" })}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t({ 
                en: "Submit your local grievances directly to Shri Jitendra Kumar Yadav's office. Receive a trackable Ticket Number with real-time status updates.",
                hi: "अपनी ग्राम पंचायत या वार्ड की समस्या सीधे कार्यालय को प्रेषित करें और अपने यूनिक टिकट नंबर से प्रगति ट्रैक करें।" 
              })}
            </p>
          </div>
        </div>

        {/* Embedded Grievance Tracker */}
        <GrievanceTracker />

      </div>
    </div>
  );
}

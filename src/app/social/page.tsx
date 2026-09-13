"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { PROFILE_DATA } from "@/lib/data";
import SectionCard from "@/components/SectionCard";
import BicycleMotif from "@/components/BicycleMotif";
import { Share2, ExternalLink, ThumbsUp, MessageCircle, Video, Smartphone } from "lucide-react";

export default function SocialPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-red-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none p-6">
            <BicycleMotif className="w-80 h-48 text-white" />
          </div>
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="bg-amber-500 text-slate-950 text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
              {t({ en: "Social Media Connect", hi: "सोशल मीडिया एवं डिजिटल मंच" })}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              {t({ en: "Connect Across Digital Platforms", hi: "डिजिटल माध्यमों से जुड़ें" })}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t({ 
                en: "Stay updated with real-time field visits, Samajwadi Party public rallies, and community announcements across Facebook, Instagram, and WhatsApp.",
                hi: "फेसबुक, इंस्टाग्राम, व्हाट्सएप और डिजिटल माध्यमों पर श्री जितेन्द्र कुमार यादव की प्रतिदिन की गतिविधियों से जुड़ें।" 
              })}
            </p>
          </div>
        </div>

        {/* Social Platforms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Facebook */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Share2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Facebook Page</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {t({ 
                  en: "Official Facebook page for press releases, ground photos, and citizen updates.",
                  hi: "आधिकारिक फेसबुक पेज - प्रेस विज्ञप्ति, जनसभा तस्वीरें और ग्राउंड रिपोर्ट्स।" 
                })}
              </p>
            </div>
            <a
              href={PROFILE_DATA.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <span>{t({ en: "Follow on Facebook", hi: "फेसबुक पर जुड़ें" })}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Instagram Handle</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {t({ 
                  en: "Follow @socialist_jitendrayadav for short reels, event highlights, and youth interactions.",
                  hi: "फॉलो करें @socialist_jitendrayadav — रील, यूथ इंटरैक्शन और लाइव हाइलाइट्स।" 
                })}
              </p>
            </div>
            <a
              href={PROFILE_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <span>{t({ en: "Follow on Instagram", hi: "इंस्टाग्राम पर जुड़ें" })}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* WhatsApp / Helpline */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-deepGreen flex items-center justify-center font-bold">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">WhatsApp Helpline</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {t({ 
                  en: "Direct WhatsApp communication line for urgent constituency issues.",
                  hi: "सीधा व्हाट्सएप हेल्पलाइन - आपातकालीन जनसमस्या व सुझाव प्रेषित करने हेतु।" 
                })}
              </p>
            </div>
            <a
              href={PROFILE_DATA.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-deepGreen hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <span>{t({ en: "Chat on WhatsApp", hi: "व्हाट्सएप पर संपर्क करें" })}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

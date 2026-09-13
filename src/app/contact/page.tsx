"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { PROFILE_DATA } from "@/lib/data";
import { GrievanceTracker } from "@/components/GrievanceTracker";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Phone className="w-4 h-4" />
          <span>{t({ en: "Public Seva Help Desk", hi: "आधिकारिक जन संपर्क एवं सेवा केंद्र" })}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t({ en: "Contact Office & Submit Public Grievance", hi: "कार्यालय संपर्क एवं जन समस्या निवारण" })}
        </h1>
        <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
          {t({
            en: "Reach out directly to the official office of Shri Jitendra Kumar Yadav or track citizen grievance status transparently.",
            hi: "श्री जितेन्द्र कुमार यादव के कार्यालय से सीधे संपर्क करें अथवा अपनी नागरिक समस्या की प्रगति की जांच करें।"
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
              {t({ en: "Official Contact Details", hi: "आधिकारिक संपर्क विवरण" })}
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-4 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                <div className="w-10 h-10 rounded-xl bg-samajwadi-green text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase block">{t({ en: "Helpline & WhatsApp", hi: "हेल्पलाइन एवं व्हाट्सएप" })}</span>
                  <a href={`tel:${PROFILE_DATA.phone}`} className="text-lg font-black text-gray-900 hover:text-samajwadi-green">
                    {PROFILE_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gray-800 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase block">{t({ en: "Official Email", hi: "आधिकारिक ईमेल" })}</span>
                  <a href={`mailto:${PROFILE_DATA.email}`} className="font-bold text-gray-900 hover:text-samajwadi-green">
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase block">{t({ en: "Office Location", hi: "कार्यालय पता" })}</span>
                  <p className="text-xs font-semibold text-gray-800 leading-relaxed mt-0.5">
                    {t(PROFILE_DATA.officeAddress)}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase block">{t({ en: "Public Service Hours", hi: "जन सुनवाई समय" })}</span>
                  <p className="text-xs font-semibold text-gray-800">Monday - Saturday: 09:30 AM - 05:30 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-3">{t({ en: "Verified Social Channels", hi: "सत्यापित सोशल मीडिया चैनल" })}</span>
              <div className="flex space-x-3">
                <a
                  href={PROFILE_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
                <a
                  href={PROFILE_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Location Map Placeholder Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-3">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-samajwadi-green" />
              <span>Office Map Location</span>
            </h3>
            <div className="h-48 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 text-xs text-gray-500">
              📍 District Panchayat Office Map Location (UP)
            </div>
          </div>

        </div>

        {/* Right Column: Grievance & Request Form */}
        <div className="lg:col-span-7">
          <GrievanceTracker />
        </div>

      </div>

    </div>
  );
}

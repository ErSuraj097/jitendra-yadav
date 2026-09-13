"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { PROFILE_DATA } from "@/lib/data";
import { Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck, HeartHandshake, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-samajwadi-green">
      {/* Upper Footer: Contact & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Profile Brief */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-samajwadi-green text-white flex items-center justify-center font-bold text-lg">
                JY
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {t(PROFILE_DATA.name)}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {t(PROFILE_DATA.designation)}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t(PROFILE_DATA.bioShort)}
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href={PROFILE_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp Seva"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t({ en: "Quick Navigation", hi: "त्वरित नेविगेशन" })}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "Profile & Biography", hi: "जीवन परिचय एवं दृष्टि" })}</span>
                </Link>
              </li>
              <li>
                <Link href="/public-service" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "Public Seva Activities", hi: "जनसेवा एवं कल्याणकारी कार्य" })}</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "Development Projects", hi: "विकास एवं निर्माण कार्य" })}</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "News & Announcements", hi: "समाचार एवं घोषणाएं" })}</span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "Events & Meetings", hi: "आगामी कार्यक्रम" })}</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "Photo & Video Gallery", hi: "चित्र एवं वीडियो गैलरी" })}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Public Grievance & Connect */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t({ en: "Public Seva & Support", hi: "जन सहायता एवं शिकायत" })}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/contact" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "Submit Citizen Grievance", hi: "नागरिक समस्या दर्ज करें" })}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact#track" className="hover:text-samajwadi-green transition-colors flex items-center">
                  <span>› {t({ en: "Track Grievance Status", hi: "समस्या निवारण स्थिति देखें" })}</span>
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-samajwadi-green transition-colors flex items-center text-amber-400">
                  <span>› {t({ en: "Admin & CMS Dashboard", hi: "व्यवस्थापक प्रवेश" })}</span>
                </Link>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-gray-800/80 rounded-lg border border-gray-700 text-xs space-y-1">
              <div className="text-emerald-400 font-semibold flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{t({ en: "Verified Official Portal", hi: "आधिकारिक सत्यापित पोर्टल" })}</span>
              </div>
              <p className="text-[11px] text-gray-400">
                {t({
                  en: "Dedicated to factual transparency and public-service information.",
                  hi: "तथ्यात्मक पारदर्शिता एवं जनसेवा जानकारी के लिए समर्पित।"
                })}
              </p>
            </div>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t({ en: "Official Contact", hi: "आधिकारिक संपर्क" })}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-samajwadi-green shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase font-bold">Helpline / WhatsApp</span>
                  <a href={`tel:${PROFILE_DATA.phone}`} className="text-white font-semibold hover:text-samajwadi-green">
                    {PROFILE_DATA.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-samajwadi-green shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase font-bold">Official Email</span>
                  <a href={`mailto:${PROFILE_DATA.email}`} className="text-white font-semibold hover:text-samajwadi-green">
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-samajwadi-green shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase font-bold">Office Address</span>
                  <span className="text-gray-300 leading-tight">
                    {t(PROFILE_DATA.officeAddress)}
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar & Disclaimer */}
      <div className="bg-gray-950 py-4 px-4 text-xs text-gray-500 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div>
            <p>
              © {new Date().getFullYear()} {t(PROFILE_DATA.name)}. All rights reserved.
            </p>
            <p className="text-[10px] text-gray-600 mt-0.5">
              {t({
                en: "Designed & Developed adhering to RFP standards for Digital Public Service & Transparency.",
                hi: "डिजिटल जनसेवा और पारदर्शिता हेतु RFP मानकों के अनुरूप निर्मित।"
              })}
            </p>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer">
              {t({ en: "Privacy Policy", hi: "गोपनीयता नीति" })}
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">
              {t({ en: "Terms of Public Service", hi: "सेवा शर्तें" })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

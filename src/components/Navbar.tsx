"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import { 
  Phone, 
  Globe, 
  Menu, 
  X, 
  Home, 
  User, 
  HeartHandshake, 
  Briefcase, 
  Newspaper, 
  Calendar, 
  Image as ImageIcon, 
  UserCheck 
} from "lucide-react";
import { PROFILE_DATA } from "@/lib/data";

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: { en: "Home", hi: "मुख्य पृष्ठ" }, icon: Home },
    { href: "/about", label: { en: "Profile", hi: "परिचय" }, icon: User },
    { href: "/journey", label: { en: "Journey", hi: "यात्रा" }, icon: UserCheck },
    { href: "/public-service", label: { en: "Public Seva", hi: "जनसेवा" }, icon: HeartHandshake },
    { href: "/portfolio", label: { en: "Development", hi: "विकास" }, icon: Briefcase },
    { href: "/constituency", label: { en: "Constituency", hi: "क्षेत्रीय विकास" }, icon: Home },
    { href: "/issues", label: { en: "Public Issues", hi: "जनसमस्या" }, icon: Newspaper },
    { href: "/gallery", label: { en: "Gallery", hi: "गैलरी" }, icon: ImageIcon },
    { href: "/contact", label: { en: "Contact & Track", hi: "संपर्क & शिकायत" }, icon: Phone },
  ];

  const toggleLanguage = () => {
    setLang(lang === "hi" ? "en" : "hi");
  };

  return (
    <header className="sticky top-0 z-50 glass-card shadow-2xl border-b border-slate-800">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-emerald-950 to-red-950 text-slate-200 py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="bg-samajwadi-red text-white px-2.5 py-0.5 rounded text-[10px] uppercase font-black tracking-wider animate-pulse">
              Official Portal
            </span>
            <span className="font-semibold text-emerald-400">{t(PROFILE_DATA.designation)}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${PROFILE_DATA.phone}`} 
              className="flex items-center hover:text-emerald-400 transition-colors bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-700"
            >
              <Phone className="w-3 h-3 mr-1 text-emerald-400" />
              <span className="font-bold text-slate-200">{PROFILE_DATA.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-0.5 rounded-full text-xs font-bold transition-all shadow-sm btn-shine"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "hi" ? "English" : "हिंदी"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shadow-lg group-hover:scale-105 transition-transform bg-slate-800 flex items-center justify-center relative">
              <img 
                src="/jitendra_profile.png" 
                alt={t(PROFILE_DATA.name)} 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/jitendra_hero.png";
                }}
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                {t(PROFILE_DATA.name)}
              </h1>
              <p className="text-xs text-slate-400 font-semibold">
                <span className="text-samajwadi-red font-bold">{t(PROFILE_DATA.party)}</span> • {t(PROFILE_DATA.designation)}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-emerald-400"
                  }`}
                >
                  {t(link.label)}
                </Link>
              );
            })}
            <Link
              href="/admin"
              className="ml-2 bg-gradient-to-r from-samajwadi-red to-amber-600 hover:from-red-600 hover:to-amber-500 text-white px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md btn-shine"
            >
              CMS
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={toggleLanguage}
              className="bg-slate-800 text-emerald-400 border border-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "hi" ? "EN" : "HI"}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-fadeInScale">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-slate-300 hover:bg-slate-900 hover:text-emerald-400"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{t(link.label)}</span>
              </Link>
            );
          })}
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold bg-samajwadi-red text-white"
          >
            <UserCheck className="w-4 h-4" />
            <span>Admin CMS Dashboard</span>
          </Link>
        </div>
      )}
    </header>
  );
};

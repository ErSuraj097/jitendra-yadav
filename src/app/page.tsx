"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { 
  PROFILE_DATA, 
  SEVA_ACTIVITIES, 
  PORTFOLIO_PROJECTS, 
  NEWS_ITEMS, 
  EVENTS_DATA, 
  GALLERY_ALBUMS 
} from "@/lib/data";
import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import BicycleMotif from "@/components/BicycleMotif";
import { GrievanceTracker } from "@/components/GrievanceTracker";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  HeartHandshake, 
  Briefcase, 
  Newspaper, 
  Calendar, 
  Image as ImageIcon, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Activity, 
  Building2, 
  ChevronRight,
  Share2,
  Award,
  MessageSquare,
  Flag,
  Wrench
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(0);

  const openAlbumLightbox = (index: number) => {
    setActiveAlbumIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen space-y-16 pb-20">

      {/* 1. HERO SECTION */}
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* BICYCLE MOTIF DECORATIVE SEPARATOR */}
        <div className="flex items-center justify-center space-x-4 py-4 opacity-70">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-samajwadiRed" />
          <BicycleMotif className="w-10 h-6 text-samajwadiRed" />
          <div className="h-0.5 w-12 bg-amber-400" />
          <BicycleMotif className="w-10 h-6 text-deepGreen" />
          <div className="h-0.5 w-24 bg-gradient-to-l from-transparent to-deepGreen" />
        </div>

        {/* 2. ABOUT THE LEADER */}
        <SectionCard
          title={t({ en: "About Shri Jitendra Kumar Yadav", hi: "श्री जितेन्द्र कुमार यादव - जीवन परिचय एवं विज़न" })}
          subtitle={t({ en: "Dedicated leader of Samajwadi Party in Uttar Pradesh", hi: "समाजवादी विचारधारा और जनसेवा को समर्पित युवा नेतृत्व" })}
          badge={t({ en: "Public Leader", hi: "लोकप्रिय जननेता" })}
          accent="red"
          showBicycle
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(PROFILE_DATA.bioShort)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {PROFILE_DATA.vision.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-deepGreen shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{t(item)}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                >
                  <span>{t({ en: "Read Full Biography", hi: "पूरा जीवन परिचय पढ़ें" })}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 h-56 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                <img
                  src="/jitendra_profile.png"
                  alt={t(PROFILE_DATA.name)}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/jitendra_hero.png";
                  }}
                />
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 3. POLITICAL JOURNEY */}
        <SectionCard
          title={t({ en: "Political Journey & Public Service History", hi: "राजनीतिक यात्रा एवं संघर्ष" })}
          subtitle={t({ en: "Key milestones of leadership in Uttar Pradesh", hi: "छात्र नेतृत्व से लेकर जिला पंचायत सदस्य तक का सफर" })}
          accent="tricolor"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            {PROFILE_DATA.timeline.map((milestone, index) => (
              <div key={index} className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 relative">
                <span className="bg-red-50 text-samajwadiRed border border-red-100 text-xs font-black px-3 py-1 rounded-full inline-block">
                  {milestone.year}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">{t(milestone.title)}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t(milestone.description)}</p>
              </div>
            ))}
          </div>
          <div className="text-center pt-2">
            <Link
              href="/journey"
              className="inline-flex items-center space-x-2 text-samajwadiRed hover:text-red-700 font-extrabold text-sm"
            >
              <span>{t({ en: "View Complete Timeline", hi: "संपूर्ण राजनीतिक यात्रा देखें" })}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionCard>

        {/* 4. PUBLIC SERVICE & DEVELOPMENT WORK */}
        <SectionCard
          title={t({ en: "Development Projects & Public Initiatives", hi: "विकास कार्य एवं जनसेवा पहल" })}
          subtitle={t({ en: "Transparent infrastructure and community welfare works", hi: "ग्राम पंचायतों में निर्मित पक्की सड़कें, सोलर लाइट एवं सार्वजनिक कार्य" })}
          badge={t({ en: "Development Portfolio", hi: "प्रगति रिपोर्ट" })}
          accent="green"
          showBicycle
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((proj) => (
              <div key={proj.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="h-44 overflow-hidden relative">
                  <img src={proj.image} alt={t(proj.title)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 bg-deepGreen text-white text-[10px] uppercase font-black px-2.5 py-1 rounded-md shadow">
                    {proj.status}
                  </span>
                </div>
                <div className="p-5 space-y-2 flex-grow">
                  <span className="text-[11px] font-black text-samajwadiRed uppercase tracking-wider">{t(proj.categoryLabel)}</span>
                  <h3 className="text-base font-extrabold text-slate-900">{t(proj.title)}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{t(proj.objective)}</p>
                </div>
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-samajwadiRed" />
                    {t(proj.location)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-4">
            <Link
              href="/portfolio"
              className="bg-deepGreen hover:bg-emerald-800 text-white font-extrabold px-6 py-3 rounded-xl text-sm transition-all inline-flex items-center gap-2"
            >
              <span>{t({ en: "Explore All Projects", hi: "सभी विकास कार्य देखें" })}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionCard>

        {/* 5. KEY ACHIEVEMENTS */}
        <SectionCard
          title={t({ en: "Key Achievements & Impact", hi: "प्रमुख उपलब्धियाँ एवं जनसेवा परिणाम" })}
          subtitle={t({ en: "Measurable outcomes across rural governance and citizen assistance", hi: "पारदर्शी जनसुनवाई, किसान सहायता एवं ग्राम उत्थान" })}
          accent="red"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-100 space-y-2">
              <p className="text-3xl font-black text-samajwadiRed">150+</p>
              <h4 className="text-sm font-extrabold text-slate-900">{t({ en: "Roads & Canals", hi: "पक्की सड़कें व नाले" })}</h4>
              <p className="text-xs text-slate-600">{t({ en: "Connecting 20+ Gram Panchayats seamlessly.", hi: "20+ ग्राम पंचायतों में आवागमन सुगम बनाया।" })}</p>
            </div>
            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 space-y-2">
              <p className="text-3xl font-black text-deepGreen">50,000+</p>
              <h4 className="text-sm font-extrabold text-slate-900">{t({ en: "Citizens Assisted", hi: "नागरिक सहायता" })}</h4>
              <p className="text-xs text-slate-600">{t({ en: "Pension, ration & health assistance provided.", hi: "पेंशन, राशन व स्वास्थ्य योजनाओं का सीधा लाभ।" })}</p>
            </div>
            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-100 space-y-2">
              <p className="text-3xl font-black text-amber-600">100%</p>
              <h4 className="text-sm font-extrabold text-slate-900">{t({ en: "Grievance Redressal", hi: "शिकायत समाधान" })}</h4>
              <p className="text-xs text-slate-600">{t({ en: "Trackable ticket-based grievance portal.", hi: "डिजिटल माध्यम से शत-प्रतिशत समस्याओं का समाधान।" })}</p>
            </div>
            <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100 space-y-2">
              <p className="text-3xl font-black text-blue-600">24/7</p>
              <h4 className="text-sm font-extrabold text-slate-900">{t({ en: "Public Availability", hi: "जनसुनवाई उपलब्धता" })}</h4>
              <p className="text-xs text-slate-600">{t({ en: "Always connected with constituency residents.", hi: "क्षेत्रवासियों के लिए 24 घंटे समर्पित कार्यालय।" })}</p>
            </div>
          </div>
        </SectionCard>

        {/* 6. CONSTITUENCY DEVELOPMENT */}
        <SectionCard
          title={t({ en: "Constituency Ward No. 14 Overview", hi: "वार्ड क्र. 14 जौनपुर - क्षेत्रीय अवलोकन" })}
          subtitle={t({ en: "Balanced development across every sector and village", hi: "प्रत्येक गाँव तक बुनियादी सुविधाओं का विस्तार" })}
          accent="tricolor"
          showBicycle
        >
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-xs uppercase font-extrabold text-amber-400">{t({ en: "District", hi: "जनपद" })}</p>
                <h4 className="text-2xl font-black">{t({ en: "Jaunpur, Uttar Pradesh", hi: "जौनपुर, उत्तर प्रदेश" })}</h4>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase font-extrabold text-emerald-400">{t({ en: "Ward", hi: "जिला पंचायत क्षेत्र" })}</p>
                <h4 className="text-2xl font-black">{t({ en: "Ward No. 14", hi: "वार्ड क्र. 14" })}</h4>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase font-extrabold text-samajwadiRed">{t({ en: "Key Sectors", hi: "मुख्य विकास क्षेत्र" })}</p>
                <h4 className="text-2xl font-black">{t({ en: "Roads, Water, Education, Health", hi: "मार्ग, जल, शिक्षा, स्वास्थ्य" })}</h4>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <Link href="/constituency" className="text-amber-400 hover:text-amber-300 font-extrabold text-sm flex items-center gap-1">
                <span>{t({ en: "View Constituency Infrastructure Map", hi: "क्षेत्रीय विकास मानचित्र देखें" })}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </SectionCard>

        {/* 7. JANATA KI AWAAZ / PUBLIC ISSUES & GRIEVANCE REDRESSAL */}
        <div id="grievance-section" className="scroll-mt-24">
          <SectionCard
            title={t({ en: "Janata Ki Awaaz — Citizen Grievance Portal", hi: "जनता की आवाज़ — डिजिटल शिकायत एवं समस्या निवारण" })}
            subtitle={t({ en: "Submit local issues directly to Shri Jitendra Kumar Yadav", hi: "अपनी शिकायत या सुझाव ऑनलाइन दर्ज करें और प्रगति ट्रैक करें" })}
            badge={t({ en: "Direct Citizen Portal", hi: "जनसुनवाई पोर्टल" })}
            accent="red"
          >
            <GrievanceTracker />
          </SectionCard>
        </div>

        {/* 8. PHOTO & VIDEO GALLERY */}
        <SectionCard
          title={t({ en: "Photo & Video Gallery", hi: "फोटो एवं वीडियो गैलरी" })}
          subtitle={t({ en: "Visual moments of public rallies, field inspections, and festivals", hi: "जनसंपर्क यात्रा, निरीक्षण एवं जनसभाओं की झलकियां" })}
          accent="tricolor"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
            {GALLERY_ALBUMS.slice(0, 3).map((album, idx) => (
              <div 
                key={album.id} 
                onClick={() => openAlbumLightbox(idx)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md cursor-pointer group transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={album.coverImage} alt={t(album.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 font-extrabold text-xs px-3 py-1.5 rounded-full shadow backdrop-blur">
                      {t({ en: "View Album", hi: "एल्बम देखें" })} ({album.images.length})
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[11px] font-bold text-deepGreen">{t(album.category)}</span>
                  <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-samajwadiRed transition-colors">{t(album.title)}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-2">
            <Link href="/gallery" className="text-deepGreen hover:text-emerald-800 font-extrabold text-sm inline-flex items-center gap-1">
              <span>{t({ en: "Browse Full Photo Gallery", hi: "संपूर्ण फोटो गैलरी देखें" })}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionCard>

        {/* 9. LATEST NEWS & UPDATES */}
        <SectionCard
          title={t({ en: "Latest News & Press Releases", hi: "नवीनतम समाचार एवं प्रेस विज्ञप्ति" })}
          subtitle={t({ en: "Official press coverage and community statements", hi: "समाचार पत्रों एवं मीडिया में प्रकाशित प्रमुख ख़बरें" })}
          accent="green"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            {NEWS_ITEMS.slice(0, 2).map((item) => (
              <div key={item.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:bg-white transition-all space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-red-50 text-samajwadiRed font-black px-2.5 py-0.5 rounded">{t({ en: item.category, hi: item.category })}</span>
                    <span className="text-slate-500 font-semibold">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">{t(item.title)}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{t(item.summary)}</p>
                </div>
                <Link href="/news" className="text-xs font-bold text-deepGreen hover:underline inline-flex items-center gap-1">
                  <span>{t({ en: "Read Full Article", hi: "पूरा समाचार पढ़ें" })}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* 10. UPCOMING EVENTS */}
        <SectionCard
          title={t({ en: "Upcoming Events & Programs", hi: "आगामी कार्यक्रम एवं जनसभाएं" })}
          subtitle={t({ en: "Join Shri Jitendra Kumar Yadav in constituency public meetings", hi: "जनचौपाल, कार्यकर्ता बैठक एवं विकास समीक्षा सभाएं" })}
          accent="red"
        >
          <div className="space-y-4 my-4">
            {EVENTS_DATA.map((evt) => (
              <div key={evt.id} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="bg-emerald-100 text-deepGreen text-[11px] font-extrabold px-2.5 py-0.5 rounded">{evt.date} • {evt.time}</span>
                  <h4 className="text-base font-extrabold text-slate-900">{t(evt.title)}</h4>
                  <p className="text-xs text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-samajwadiRed" />
                    {t(evt.venue)}
                  </p>
                </div>
                <Link href="/events" className="bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-all shrink-0 text-center">
                  {t({ en: "Event Details", hi: "कार्यक्रम विवरण" })}
                </Link>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* 11. SOCIAL MEDIA CONNECT */}
        <SectionCard
          title={t({ en: "Social Media Connect", hi: "सोशल मीडिया पर जुड़ें" })}
          subtitle={t({ en: "Follow official Samajwadi Party updates on social channels", hi: "फेसबुक, इंस्टाग्राम और व्हाट्सएप पर प्रतिदिन की गतिविधियों से जुड़ें" })}
          accent="tricolor"
          showBicycle
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-4">
            <a href={PROFILE_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-center space-x-4 hover:shadow-md transition-all">
              <Share2 className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-extrabold text-slate-900">Facebook</h4>
                <p className="text-xs text-slate-500 font-semibold">{t({ en: "Official Page", hi: "आधिकारिक पेज" })}</p>
              </div>
            </a>
            <a href={PROFILE_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-50 border border-pink-100 p-6 rounded-2xl flex items-center space-x-4 hover:shadow-md transition-all">
              <Share2 className="w-8 h-8 text-pink-600" />
              <div>
                <h4 className="font-extrabold text-slate-900">Instagram</h4>
                <p className="text-xs text-slate-500 font-semibold">@socialist_jitendrayadav</p>
              </div>
            </a>
            <a href={PROFILE_DATA.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-center space-x-4 hover:shadow-md transition-all">
              <Phone className="w-8 h-8 text-deepGreen" />
              <div>
                <h4 className="font-extrabold text-slate-900">WhatsApp</h4>
                <p className="text-xs text-slate-500 font-semibold">{PROFILE_DATA.phone}</p>
              </div>
            </a>
          </div>
        </SectionCard>

        {/* 12. CONTACT / जनसंपर्क */}
        <SectionCard
          title={t({ en: "Contact Office & Jan Sampark", hi: "जनसंपर्क कार्यालय एवं संपर्क सूत्र" })}
          subtitle={t({ en: "Reach out to Shri Jitendra Kumar Yadav's office in Jaunpur", hi: "कार्यालय का पता, हेल्पलाइन नंबर एवं जनसंपर्क समय" })}
          accent="green"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <Phone className="w-6 h-6 text-deepGreen" />
              <h4 className="font-extrabold text-slate-900">{t({ en: "Phone / Helpline", hi: "हेल्पलाइन नंबर" })}</h4>
              <p className="text-xs font-bold text-slate-700">{PROFILE_DATA.phone}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <MapPin className="w-6 h-6 text-samajwadiRed" />
              <h4 className="font-extrabold text-slate-900">{t({ en: "Office Address", hi: "कार्यालय पता" })}</h4>
              <p className="text-xs text-slate-600">{t(PROFILE_DATA.officeAddress)}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
              <h4 className="font-extrabold text-slate-900">{t({ en: "Public Hearing Hours", hi: "जनसुनवाई समय" })}</h4>
              <p className="text-xs text-slate-600">{t({ en: "Mon - Sat: 9:00 AM - 1:00 PM", hi: "सोमवार - शनिवार: प्रातः 9 से दोपहर 1 बजे" })}</p>
            </div>
          </div>
        </SectionCard>

      </div>

      {/* PHOTO LIGHTBOX MODAL */}
      {lightboxOpen && (
        <PhotoLightbox
          album={GALLERY_ALBUMS[activeAlbumIndex]}
          onClose={() => setLightboxOpen(false)}
        />
      )}

    </div>
  );
}

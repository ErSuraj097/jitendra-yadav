"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { EVENTS_DATA } from "@/lib/data";
import { Calendar, MapPin, Clock, CheckCircle2, ChevronRight } from "lucide-react";

export default function EventsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "Upcoming" | "Completed">("all");

  const filteredEvents = filter === "all"
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Calendar className="w-4 h-4" />
          <span>{t({ en: "Schedule & Calendar", hi: "कार्यक्रम एवं जन संवाद समय सारिणी" })}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t({ en: "Events, Meetings & Programmes", hi: "आगामी एवं संपन्न जन कार्यक्रम" })}
        </h1>
        <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
          {t({
            en: "Official calendar of public hearings, youth seminars, village inspection tours, and official meetings.",
            hi: "जन सुनवाई, युवा सेमिनार, ग्राम निरीक्षण दौरों और आधिकारिक बैठकों का आधिकारिक कैलेंडर।"
          })}
        </p>
      </div>

      {/* Status Filter */}
      <div className="flex gap-2 border-b border-gray-200 pb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === "all" ? "bg-samajwadi-green text-white shadow" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          {t({ en: "All Events", hi: "सभी कार्यक्रम" })}
        </button>
        <button
          onClick={() => setFilter("Upcoming")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === "Upcoming" ? "bg-amber-500 text-white shadow" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          {t({ en: "Upcoming Events", hi: "आगामी कार्यक्रम" })}
        </button>
        <button
          onClick={() => setFilter("Completed")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === "Completed" ? "bg-emerald-600 text-white shadow" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          {t({ en: "Completed Events", hi: "संपन्न कार्यक्रम" })}
        </button>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((evt) => (
          <div key={evt.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="relative h-44 bg-gray-100">
              <img src={evt.image} alt={t(evt.title)} className="w-full h-full object-cover" />
              <span className={`absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded shadow ${
                evt.status === "Upcoming" ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
              }`}>
                {evt.status}
              </span>
              <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded">
                {t(evt.category)}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-black text-samajwadi-green bg-emerald-50 px-2.5 py-1 rounded inline-block">
                  {evt.date}
                </span>
                <h3 className="font-bold text-gray-900 text-lg leading-snug">
                  {t(evt.title)}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t(evt.description)}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-semibold text-gray-800">{t(evt.venue)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

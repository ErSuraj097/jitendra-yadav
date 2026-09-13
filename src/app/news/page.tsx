"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { NEWS_ITEMS, NewsItem } from "@/lib/data";
import { Newspaper, Calendar, Tag, Share2, Search, ArrowRight, User } from "lucide-react";

export default function NewsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const filteredNews = NEWS_ITEMS.filter((item) => {
    const titleText = (t(item.title) || "").toLowerCase();
    const summaryText = (t(item.summary) || "").toLowerCase();
    const query = searchTerm.toLowerCase();
    return titleText.includes(query) || summaryText.includes(query);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Newspaper className="w-4 h-4" />
          <span>{t({ en: "Press Releases & Updates", hi: "समाचार एवं प्रेस विज्ञप्ति" })}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t({ en: "Official News & Media Releases", hi: "आधिकारिक समाचार एवं प्रेस अपडेट" })}
        </h1>
        <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
          {t({
            en: "Verified news coverage, public announcements, and official decision records from the office of Shri Jitendra Kumar Yadav.",
            hi: "श्री जितेन्द्र कुमार यादव के कार्यालय से सत्यापित समाचार कवरेज, सार्वजनिक घोषणाएं और आधिकारिक निर्णय रिकॉर्ड।"
          })}
        </p>
      </div>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t({ en: "Search news updates...", hi: "समाचार खोजें..." })}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-samajwadi-green focus:outline-none bg-white"
          />
        </div>
        <span className="text-xs font-semibold text-gray-500">
          Showing {filteredNews.length} articles
        </span>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-gray-100 pb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-md">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-400 hover:text-gray-800 font-bold text-lg px-2"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-xs text-gray-500 font-medium">{selectedArticle.date}</span>
              <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
                {t(selectedArticle.title)}
              </h2>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden bg-gray-100">
              <img src={selectedArticle.featuredImage} alt={t(selectedArticle.title)} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{t(p)}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
              <span className="text-gray-500">Author: {selectedArticle.author}</span>
              <button 
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Article link copied!");
                }}
                className="flex items-center gap-1 text-samajwadi-green font-bold hover:underline"
              >
                <Share2 className="w-4 h-4" /> Share Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <div 
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:border-emerald-300 transition-all cursor-pointer group"
          >
            <div className="relative h-48 bg-gray-100">
              <img src={article.featuredImage} alt={t(article.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded">
                {article.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-medium text-gray-400 block">{article.date}</span>
                <h3 className="font-bold text-gray-900 text-base line-clamp-2 leading-snug group-hover:text-samajwadi-green transition-colors">
                  {t(article.title)}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {t(article.summary)}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                <span className="text-emerald-700 font-bold flex items-center gap-1 group-hover:underline">
                  Read Full Release <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-400">{article.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

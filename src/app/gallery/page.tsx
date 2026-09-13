"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { GALLERY_ALBUMS, VIDEOS_DATA } from "@/lib/data";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import { Image as ImageIcon, Video, Play, ExternalLink } from "lucide-react";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedAlbumIdx, setSelectedAlbumIdx] = useState(0);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  const openLightbox = (albumIndex: number, photoIndex: number = 0) => {
    setSelectedAlbumIdx(albumIndex);
    setCurrentPhotoIdx(photoIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <ImageIcon className="w-4 h-4" />
          <span>{t({ en: "Visual Archives", hi: "चित्रात्मक एवं वीडियो रिकॉर्ड" })}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {t({ en: "Photo Albums & Video Streams", hi: "फोटो एलबम एवं वीडियो संग्रह" })}
        </h1>
        <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
          {t({
            en: "High-resolution photographic documentation of public events, development inaugurations, and community programs.",
            hi: "सार्वजनिक कार्यक्रमों, विकास कार्यों के उद्घाटन एवं सामुदायिक पहलों का उच्च गुणवत्ता छायाचित्र।"
          })}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("photos")}
          className={`pb-3 px-6 font-bold text-sm border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "photos"
              ? "border-samajwadi-green text-samajwadi-green"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>{t({ en: "Photo Albums", hi: "फोटो एल्बम" })}</span>
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`pb-3 px-6 font-bold text-sm border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "videos"
              ? "border-samajwadi-green text-samajwadi-green"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          <Video className="w-4 h-4" />
          <span>{t({ en: "Video Coverage", hi: "वीडियो कवरेज" })}</span>
        </button>
      </div>

      {/* Photos Content */}
      {activeTab === "photos" && (
        <div className="space-y-10">
          {GALLERY_ALBUMS.map((album, albumIdx) => (
            <div key={album.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded inline-block mb-1">
                    {t(album.category)} • {album.date}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    {t(album.title)}
                  </h2>
                </div>
                <button
                  onClick={() => openLightbox(albumIdx, 0)}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shrink-0"
                >
                  View Album ({album.images.length} Photos)
                </button>
              </div>

              {/* Photo Thumbnails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {album.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    onClick={() => openLightbox(albumIdx, imgIdx)}
                    className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer bg-gray-100 border border-gray-200"
                  >
                    <img
                      src={img.url}
                      alt={t(img.caption)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                      <p className="text-white text-xs font-medium">{t(img.caption)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Videos Content */}
      {activeTab === "videos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS_DATA.map((vid) => (
            <div key={vid.id} className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
              <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}`}
                  title={t(vid.title)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-gray-400">{vid.date}</span>
                <h3 className="font-extrabold text-gray-900 text-lg leading-snug">
                  {t(vid.title)}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t(vid.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <PhotoLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={GALLERY_ALBUMS[selectedAlbumIdx]?.images || []}
          currentIndex={currentPhotoIdx}
          onIndexChange={setCurrentPhotoIdx}
        />
      )}

    </div>
  );
}

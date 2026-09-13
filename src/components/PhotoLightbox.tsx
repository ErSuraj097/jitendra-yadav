"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { GalleryAlbum } from "@/lib/data";

interface PhotoLightboxProps {
  isOpen?: boolean;
  onClose: () => void;
  images?: Array<{ url: string; caption: { en: string; hi: string } }>;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  album?: GalleryAlbum;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen = true,
  onClose,
  images: propImages,
  currentIndex: propCurrentIndex,
  onIndexChange,
  album,
}) => {
  const { t } = useLanguage();
  const [localIndex, setLocalIndex] = useState(0);

  const images = album ? album.images : (propImages || []);
  const currentIndex = propCurrentIndex !== undefined ? propCurrentIndex : localIndex;

  const handleIndexChange = (newIndex: number) => {
    if (onIndexChange) {
      onIndexChange(newIndex);
    } else {
      setLocalIndex(newIndex);
    }
  };

  if (!isOpen || !images || images.length === 0) return null;

  const currentPhoto = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 bg-gray-800/60 rounded-full z-50 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 bg-gray-800/60 rounded-full z-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 bg-gray-800/60 rounded-full z-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div 
        className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {album && (
          <div className="mb-2 text-white font-extrabold text-lg">
            {t(album.title)}
          </div>
        )}
        <img
          src={currentPhoto.url}
          alt={t(currentPhoto.caption)}
          className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl border border-gray-800"
        />
        <div className="mt-4 bg-gray-900/80 px-4 py-2 rounded-lg text-white max-w-2xl">
          <p className="text-sm font-medium">{t(currentPhoto.caption)}</p>
          <p className="text-xs text-gray-400 mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoLightbox;

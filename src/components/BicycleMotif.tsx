import React from 'react';

interface BicycleMotifProps {
  className?: string;
  strokeWidth?: number;
}

export const BicycleMotif: React.FC<BicycleMotifProps> = ({ 
  className = "w-12 h-12 text-samajwadiRed opacity-80",
  strokeWidth = 2
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 60"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Rear Wheel & Spokes */}
    <circle cx="20" cy="42" r="14" />
    <circle cx="20" cy="42" r="2" fill="currentColor" />
    <line x1="20" y1="28" x2="20" y2="56" opacity="0.4" />
    <line x1="6" y1="42" x2="34" y2="42" opacity="0.4" />
    <line x1="10" y1="32" x2="30" y2="52" opacity="0.4" />
    <line x1="10" y1="52" x2="30" y2="32" opacity="0.4" />

    {/* Front Wheel & Spokes */}
    <circle cx="80" cy="42" r="14" />
    <circle cx="80" cy="42" r="2" fill="currentColor" />
    <line x1="80" y1="28" x2="80" y2="56" opacity="0.4" />
    <line x1="66" y1="42" x2="94" y2="42" opacity="0.4" />
    <line x1="70" y1="32" x2="90" y2="52" opacity="0.4" />
    <line x1="70" y1="52" x2="90" y2="32" opacity="0.4" />

    {/* Bicycle Frame Geometry */}
    {/* Rear Stay */}
    <line x1="20" y1="42" x2="38" y2="24" />
    <line x1="20" y1="42" x2="44" y2="42" />
    
    {/* Main Triangle */}
    <line x1="44" y1="42" x2="38" y2="24" />
    <line x1="38" y1="24" x2="72" y2="24" />
    <line x1="44" y1="42" x2="72" y2="24" />

    {/* Front Fork */}
    <line x1="72" y1="24" x2="80" y2="42" />

    {/* Handlebars Stem & Bars */}
    <line x1="72" y1="24" x2="70" y2="12" />
    <path d="M64 12 H 74" />

    {/* Seat Post & Saddle */}
    <line x1="38" y1="24" x2="36" y2="16" />
    <path d="M30 16 H 42 C 43 16 44 15 42 14 C 40 13 32 13 30 16 Z" fill="currentColor" />

    {/* Chain Ring & Crankset */}
    <circle cx="44" cy="42" r="5" strokeWidth={strokeWidth - 0.5} />
    <line x1="44" y1="42" x2="48" y2="48" strokeWidth={strokeWidth} />
    <line x1="46" y1="48" x2="50" y2="48" strokeWidth={strokeWidth + 1} />
  </svg>
);

export default BicycleMotif;

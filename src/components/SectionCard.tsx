import React from 'react';
import BicycleMotif from './BicycleMotif';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  accent?: 'red' | 'green' | 'tricolor';
  showBicycle?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  title, 
  subtitle,
  badge,
  children, 
  className = "",
  accent = 'tricolor',
  showBicycle = false
}) => {
  const accentBorder = {
    red: 'border-t-4 border-t-samajwadiRed',
    green: 'border-t-4 border-t-deepGreen',
    tricolor: 'border-t-4 border-t-transparent bg-gradient-to-r from-samajwadiRed via-amber-400 to-deepGreen bg-[length:100%_4px] bg-no-repeat'
  }[accent];

  return (
    <section className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all relative overflow-hidden ${accentBorder} ${className}`}>
      {showBicycle && (
        <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
          <BicycleMotif className="w-32 h-20 text-slate-900" />
        </div>
      )}
      {(title || badge) && (
        <div className="mb-6 space-y-1">
          {badge && (
            <span className="inline-block bg-red-50 text-samajwadiRed border border-red-100 text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-2">
              {badge}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SectionCard;

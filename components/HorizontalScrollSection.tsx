
import React, { useRef } from 'react';

interface HorizontalScrollSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  desktopLayoutClass?: string; // e.g. "lg:grid lg:grid-cols-2"
}

export const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  desktopLayoutClass = "lg:grid lg:grid-cols-3" 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8; 
      container.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="w-full mb-8">
      {/* Header with Title and Arrows */}
      <div className="flex items-end justify-between mb-4 px-1">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && <p className="opacity-60 text-sm mt-1">{subtitle}</p>}
        </div>
        
        {/* Navigation Arrows - hidden on desktop if grid is active */}
        <div className={`flex gap-2 ${desktopLayoutClass ? 'lg:hidden' : ''}`}>
           <button 
             onClick={() => scroll('left')} 
             className="w-10 h-10 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors active:scale-95 shadow-sm"
             aria-label="Przewiń w lewo"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
             </svg>
           </button>
           <button 
             onClick={() => scroll('right')} 
             className="w-10 h-10 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors active:scale-95 shadow-sm"
             aria-label="Przewiń w prawo"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
             </svg>
           </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className={`
          flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide
          ${desktopLayoutClass ? `${desktopLayoutClass} lg:overflow-visible lg:snap-none lg:pb-0 lg:px-0 lg:mx-0 lg:block` : ''}
        `}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {React.Children.map(children, (child) => (
          <div className={`shrink-0 w-[85vw] sm:w-[350px] snap-start h-full ${desktopLayoutClass ? 'lg:w-auto' : ''}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

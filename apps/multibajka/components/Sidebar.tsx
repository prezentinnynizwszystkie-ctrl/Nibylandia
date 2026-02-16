
import React from 'react';
import { STORIES } from '../constants';

interface SidebarProps {
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentIndex, onSelect }) => {
  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-8 h-64">
      <div className="w-px h-full bg-white/20 absolute left-1/2 -translate-x-1/2 top-0" />

      {STORIES.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`relative z-10 w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex 
              ? 'bg-white scale-125 ring-4 ring-white/30' 
              : 'bg-white/50 hover:bg-white/80'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

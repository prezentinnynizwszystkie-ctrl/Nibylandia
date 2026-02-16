
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Story } from '../types';
import { STORIES } from '../constants';

interface StorySelectorProps {
  currentStoryId: string;
  onSelect: (story: Story) => void;
}

export const StorySelector: React.FC<StorySelectorProps> = ({ currentStoryId, onSelect }) => {
  return (
    <div className="absolute bottom-6 right-0 md:bottom-8 md:right-0 lg:bottom-10 lg:right-12 z-40 flex flex-col items-end w-full pl-4 pointer-events-none">
      <div className="pointer-events-auto w-full flex flex-col items-end pr-4 md:pr-8 lg:pr-0">
        <div className="w-full flex items-center justify-between mb-4 border-b border-white/20 pb-2 text-white max-w-[200px] md:max-w-md lg:max-w-2xl ml-auto">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold truncate mr-4">
             Dostępne Historie (0{STORIES.length})
          </div>
          <div className="flex gap-2">
            <button className="p-1.5 border border-white/20 rounded-full hover:bg-white/10 transition text-white">
                <ChevronLeft size={14} />
            </button>
            <button className="p-1.5 border border-white/20 rounded-full hover:bg-white/10 transition text-white">
                <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 w-full justify-end scrollbar-hide snap-x snap-mandatory px-4 md:px-0">
          {STORIES.map((story) => {
            const isActive = currentStoryId === story.id;
            return (
              <button
                key={story.id}
                onClick={() => onSelect(story)}
                className={`
                  relative flex-shrink-0 
                  w-28 h-40 md:w-36 md:h-52 lg:w-48 lg:h-64 rounded-xl overflow-hidden group transition-all duration-500 snap-align-start
                  ${isActive ? 'ring-2 ring-yellow-400/80 shadow-[0_0_20px_rgba(250,204,21,0.3)] scale-100' : 'opacity-60 hover:opacity-90 hover:scale-[1.02]'}
                `}
              >
                <img src={story.imageUrl} alt={story.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-black/10' : 'bg-black/40 group-hover:bg-black/20'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 text-left">
                  <p className="text-yellow-400 text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-0.5 md:mb-1">{story.locationName}</p>
                  <p className="text-white text-xs md:text-sm lg:text-base font-bold leading-tight line-clamp-2">{story.title}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

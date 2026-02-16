
import React, { useState } from 'react';
import { STORIES } from './constants';
import { Sidebar } from './components/Sidebar';
import { StorySelector } from './components/StorySelector';
import { PlayCircle, Users, Sparkles, Wand2 } from 'lucide-react';

export const StorySelectionPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = STORIES[activeIndex];

  const handleSelectStory = (storyId: string) => {
    const index = STORIES.findIndex(s => s.id === storyId);
    if (index !== -1) setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-inter">
      <div className="fixed inset-0 z-0">
        {STORIES.map((story, index) => (
          <div
            key={story.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
             <div className={`w-full h-full transition-transform duration-[8000ms] ease-out ${index === activeIndex ? 'scale-110' : 'scale-100'}`}>
               <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
          </div>
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col w-full h-full">
        <div className="relative min-h-screen w-full flex flex-col justify-center">
            <Sidebar currentIndex={activeIndex} onSelect={setActiveIndex} />

            <main className="pl-16 md:pl-24 lg:pl-32 max-w-xl md:max-w-2xl lg:max-w-3xl text-white pr-4 relative z-20">
                <div key={activeStory.id} className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="h-[1px] w-8 bg-yellow-400"></div>
                      <p className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-xs">Pamiątka z Urodzin</p>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight mb-4 leading-none">{activeStory.title}</h1>
                  <p className="text-base md:text-lg text-gray-200 mb-8 max-w-lg leading-relaxed font-light border-l-2 border-white/20 pl-4">{activeStory.description}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-10">
                    <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl">
                      <Sparkles size={18} className="text-yellow-400" />
                      <div className="flex flex-col">
                          <span className="text-[10px] text-gray-300 uppercase font-semibold">Wiek</span>
                          <span className="text-sm font-bold text-white">{activeStory.ageCategory}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl">
                      <Users size={18} className="text-yellow-400" />
                      <div className="flex flex-col">
                          <span className="text-[10px] text-gray-300 uppercase font-semibold">Dla kogo</span>
                          <span className="text-sm font-bold text-white">{activeStory.gender}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                    <button className="px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                        <Wand2 size={20} className="text-yellow-600" /> PERSONALIZUJ BAJKĘ
                    </button>
                    <button className="flex items-center gap-3 px-8 py-4 border border-white/40 rounded-full text-white hover:bg-white/20 transition-all">
                      <PlayCircle size={20} /> <span>Zobacz Zwiastun</span>
                    </button>
                  </div>
                </div>
            </main>

            <StorySelector currentStoryId={activeStory.id} onSelect={(story) => handleSelectStory(story.id)} />
        </div>
      </div>
    </div>
  );
};

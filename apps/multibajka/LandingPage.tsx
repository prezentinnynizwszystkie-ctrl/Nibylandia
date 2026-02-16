
import React, { useState, useEffect } from 'react';
import { STORIES } from './constants';
import { ArrowRight, PlayCircle, Mic2, Music, Image as ImageIcon, Brain, Heart, ShieldCheck, Star } from 'lucide-react';

interface LandingPageProps {
  onNavigate: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % STORIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden font-inter">
      <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Testing/Zrzut%20ekranu%202026-02-10%20o%2000.51.36.png')` }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full h-full overflow-y-auto scroll-smooth scrollbar-hide">
          <div className="pt-24 md:pt-32 pb-24">
              <section className="py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 min-h-[70vh]">
                  <div className="flex-1 space-y-6 md:space-y-8 animate-fade-in text-white">
                      <div className="flex items-center gap-4 mb-2">
                          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-yellow-400 border border-yellow-400/40 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg">System v2.5 (Live)</span>
                          <span className="text-gray-300 text-xs md:text-sm font-medium tracking-wide">Nowość w ofercie HipHop</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                          Twoje dziecko bohaterem <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">niezwykłej przygody</span>
                      </h2>
                      <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed">
                          Zamień wizytę w HipHop w personalizowaną Multibajkę. To emocjonalna podróż, która rozwija wyobraźnię i wzmacnia pewność siebie.
                      </p>
                      <div className="pt-4">
                        <button onClick={onNavigate} className="px-8 md:px-10 py-3 md:py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition-all shadow-lg hover:scale-105 text-xs md:text-sm uppercase tracking-widest flex items-center gap-3">
                            ZOBACZ NASZE BAJKI <ArrowRight size={18} />
                        </button>
                      </div>
                  </div>
                  <div className="flex-1 flex justify-center relative w-full lg:w-auto">
                      <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] rounded-full"></div>
                      <img src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/PartnersApp/Partners/Tychy/HipHop/LogoHipHop.svg" alt="HipHop Logo" className="w-48 md:w-80 lg:w-96 drop-shadow-2xl relative z-10" />
                  </div>
              </section>

              {/* FEATURES SECTION */}
              <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 text-white">
                          <Mic2 className="text-yellow-400 mb-6" size={32} />
                          <h4 className="text-xl font-bold mb-4">Profesjonalny Lektor</h4>
                          <p className="text-gray-200 text-sm leading-relaxed">Ożywiamy postacie dzięki głosom profesjonalnych lektorów. Usłyszenie swojej historii buduje u dziecka ogromne poczucie ważności.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 text-white">
                          <Music className="text-blue-300 mb-6" size={32} />
                          <h4 className="text-xl font-bold mb-4">Emocjonalna Muzyka</h4>
                          <p className="text-gray-200 text-sm leading-relaxed">Autorskie utwory komponowane pod historie. Muzyka stymuluje zmysły i pomaga dziecku lepiej zrozumieć emocje.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 text-white">
                          <ImageIcon className="text-purple-300 mb-6" size={32} />
                          <h4 className="text-xl font-bold mb-4">Edukacja Estetyczna</h4>
                          <p className="text-gray-200 text-sm leading-relaxed">Piękne obrazy pomagają skupić uwagę i wyciszyć się. Trening uważności zamiast przebodźcowania.</p>
                      </div>
                  </div>
              </section>
          </div>
      </div>
    </div>
  );
};

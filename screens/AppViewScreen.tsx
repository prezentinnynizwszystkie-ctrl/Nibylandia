
import React, { useState, useEffect, useRef } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Partner, User } from '../types';
import { HeroSection } from '../components/sections/HeroSection';
import { PartnerOfferSection } from '../components/sections/PartnerOfferSection';
import { MultibajkaSection } from '../components/sections/MultibajkaSection';
import { OrderFormSection } from '../components/sections/OrderFormSection';
import { MultibajkaInfoPage } from '../components/MultibajkaInfoPage';

interface AppViewScreenProps {
  user: User;
  partner?: Partner;
  onBack: () => void;
}

type ThemeMode = 'light' | 'fairy' | 'dark';

const AudioVisualizer = ({ isActive }: { isActive: boolean }) => (
  <div className="flex items-end gap-1 h-5 group-hover:scale-110 transition-transform">
    {[0, 1, 2, 3, 4].map((i) => (
      <div 
        key={i} 
        className={`w-1 bg-white/80 rounded-full ${isActive ? 'animate-visualizer-bar' : 'h-1'}`}
        style={{ animationDelay: `${i * 0.15}s` }}
      ></div>
    ))}
  </div>
);

export const AppViewScreen: React.FC<AppViewScreenProps> = ({ 
  partner 
}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isInfoPageOpen, setIsInfoPageOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const primaryColor = partner?.Theme?.primaryColor || '#4f46e5';
  const accentColor = partner?.Theme?.accentColor || '#fb7185';
  const backgroundColor = partner?.Theme?.backgroundColor || '#f8fafc';
  const textColor = partner?.Theme?.textColor || '#1e293b';
  
  const audioUrl = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Others/Articles/artykul_dla_rodzica.mp3";

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsAudioPlaying(false);
    }

    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback failed", e));
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const themeStyles = {
    '--primary': primaryColor,
    '--accent': accentColor,
    '--bg-color': backgroundColor,
    '--text-main': textColor
  } as React.CSSProperties;

  return (
    <div className="min-h-screen w-full bg-slate-100 flex justify-center overflow-x-hidden selection:bg-primary selection:text-white font-sans" style={themeStyles}>
      
      <div 
        ref={scrollRef}
        className={`
          w-full max-w-[1600px] 
          min-h-screen
          bg-[var(--bg-color)]
          text-[var(--text-main)] 
          relative 
          z-10
          transition-all duration-1000 
          shadow-[0_0_80px_rgba(0,0,0,0.15)]
          lg:rounded-b-[4rem] lg:mb-8 overflow-hidden
          ${(isBookingOpen || isInfoPageOpen) ? 'h-screen overflow-hidden' : ''}
        `} 
      >
        
        <OrderFormSection partner={partner} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        {isInfoPageOpen && <MultibajkaInfoPage onClose={() => setIsInfoPageOpen(false)} />}

        <main className="relative">
          
          <HeroSection partner={partner} themeMode="light" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-0">
            <PartnerOfferSection partner={partner} onLearnMore={() => setIsInfoPageOpen(true)} />
          </div>

          <div>
             <MultibajkaSection partner={partner} />
          </div>

          <section className="bg-[#0b0f1a] py-24 md:py-32 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse-slow"></div>
             </div>
             
             <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center space-y-8 mb-16 md:mb-20">
                   <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                      <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/90">Świadomy Rozwój Dziecka</span>
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mx-auto max-w-4xl">
                      Aspekt <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white italic">psychologiczny</span> Multibajki
                   </h2>
                   <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                      Każda klatka i każde słowo są zaprojektowane, by budować <span className="text-white">fundament pewności siebie</span> Twojego dziecka.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                   {[
                     { 
                       title: "Efekt odniesienia do Ja", 
                       desc: "Mózg dziecka przetwarza informacje o sobie priorytetowo, co buduje potężny fundament poczucia własnej wartości.",
                       icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                     },
                     { 
                       title: "Psychologia Empowermentu", 
                       desc: "Widząc siebie w roli bohatera, dziecko zmienia swój wewnętrzny model z 'zależnej istoty' na sprawczego twórcę.",
                       icon: "M13 10V3L4 14h7v7l9-11h-7z"
                     },
                     { 
                       title: "Redukcja lęków", 
                       desc: "Dzięki metodzie bezpiecznej wyobraźni, dziecko oswaja trudne sytuacje i uczy się radzić z emocjami.",
                       icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                     }
                   ].map((item, i) => (
                     <div key={item.title} className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon}/></svg>
                        </div>
                        <h3 className="text-xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                           {item.desc}
                        </p>
                     </div>
                   ))}
                </div>

                <div className="mt-16 flex flex-col items-center justify-center gap-6">
                   <button 
                     onClick={toggleAudio}
                     className={`group inline-flex items-center gap-6 px-12 py-6 ${isAudioPlaying ? 'bg-accent' : 'bg-primary'} text-white font-black rounded-xl hover:brightness-110 transition-all shadow-xl hover:scale-105 active:scale-95 text-xs uppercase tracking-[0.3em]`}
                   >
                      {isAudioPlaying ? 'PAUZA ARTYKUŁU' : 'POSŁUCHAJ ARTYKUŁU'}
                      <AudioVisualizer isActive={isAudioPlaying} />
                   </button>
                </div>
             </div>
          </section>

          <section className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
             <div className="absolute inset-0">
               <img 
                 src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/bottomphoto.webp" 
                 className="w-full h-full object-cover opacity-60 scale-105" 
                 alt="Final CTA Background"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60"></div>
             </div>
             
             <div className="relative z-10 w-full max-w-4xl px-6 text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 tracking-tighter leading-none drop-shadow-2xl uppercase italic">
                   Gotowi na <br/><span className="text-accent">najlepsze urodziny</span> w historii?
                </h2>
                <div className="relative inline-block group">
                   <div className="absolute inset-0 bg-primary blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 rounded-3xl"></div>
                   <button 
                     onClick={() => setIsBookingOpen(true)}
                     className="relative px-12 py-6 md:px-16 md:py-8 bg-white text-slate-950 font-black text-lg md:text-xl rounded-[2rem] hover:scale-105 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.3)] active:scale-95 uppercase tracking-[0.2em] flex items-center gap-4 md:gap-6 mx-auto"
                   >
                      WYPEŁNIJ FORMULARZ!
                      <svg className="w-6 h-6 md:w-8 md:h-8 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                   </button>
                </div>
             </div>
          </section>

          <footer className="py-20 bg-white text-center border-t border-slate-100 relative z-20">
             <img src={partner?.LogoUrl || ''} className="h-12 w-auto mx-auto mb-8 grayscale opacity-50 hover:grayscale-0 transition-all duration-500" alt="" />
             <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
                &copy; {new Date().getFullYear()} {partner?.PartnerName || 'Sala Zabaw'} & Multibajka. All Rights Reserved.
             </p>
          </footer>

        </main>
      </div>

      <style>{`
        .animate-pulse-slow {
          animation: pulse 8s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }

        .animate-bounce-x {
          animation: bounceX 1.5s infinite;
        }

        @keyframes visualizer {
          0%, 100% { height: 15%; }
          50% { height: 100%; }
        }

        .animate-visualizer-bar {
          animation: visualizer 0.8s infinite ease-in-out;
        }

        ::selection {
          background: var(--primary);
          color: white;
        }
        
        .min-h-screen {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

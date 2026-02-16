
import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { Button } from '../Button';
import { Partner } from '../../types';
import { HorizontalScrollSection } from '../HorizontalScrollSection';

// Memoized Sparkles
const Sparkles = React.memo(() => {
  const [sparkles] = useState(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 5,
    animationDuration: 4 + Math.random() * 5,
    size: 2 + Math.random() * 6,
    opacity: 0.3 + Math.random() * 0.7
  })));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: 0,
            boxShadow: `0 0 ${s.size * 2}px ${s.size}px rgba(253, 224, 71, 0.3)`,
            animation: `sparkleFloat ${s.animationDuration}s ease-in-out infinite`,
            animationDelay: `${s.animationDelay}s`
          }}
        />
      ))}
      <style>{`
        @keyframes sparkleFloat {
          0% { opacity: 0; transform: translateY(0) scale(0) rotate(0deg); }
          50% { opacity: 0.8; transform: translateY(-40px) scale(1.2); }
          100% { opacity: 0; transform: translateY(-80px) scale(0) rotate(360deg); }
        }
      `}</style>
    </div>
  );
});

interface MultibajkaSectionProps {
  partner?: Partner;
}

export const MultibajkaSection: React.FC<MultibajkaSectionProps> = ({ partner }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoPoster = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Testing/NibylandiaPosterVideo.webp";
  const heroStoryImgFallback = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/HeroStorySectionWebp.webp";
  const backgroundHeroVideo = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalVideos/HeroVideos/HeroVideoV2.webm";
  const promoVideoUrl = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Partners/Katowice/Nibylandia/Videos/NibylandiaMultibajka.webm";
  const bottomStripUrl = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Testing/paczajawdol2.webp";

  return (
    <section id="multibajka-section" className="scroll-mt-32 relative w-full overflow-visible py-24 md:py-32">
       
       <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-indigo-200/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-rose-100/20 rounded-full blur-[100px] animate-pulse-slow"></div>
       </div>

       <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-6">

             {/* BANNER WITH IMAGE AND FLOATING HEADER */}
             <div className="w-full mb-20 relative z-40">
                  <div className="w-screen max-w-none relative left-1/2 -translate-x-1/2 pointer-events-none z-10">
                      <img
                        src={bottomStripUrl}
                        alt=""
                        className="w-full h-auto object-contain mx-auto max-w-[1600px] block opacity-90"
                        loading="lazy"
                        width="1600"
                        height="400"
                      />
                      <div className="absolute inset-0 mx-auto max-w-[1600px]">
                        <Sparkles />
                      </div>
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-50 w-full flex justify-center pointer-events-auto px-4 md:px-6">
                      <GlassCard className="w-auto inline-block py-5 px-8 md:py-6 md:px-14 lg:px-16 bg-white/90 border-white shadow-[0_30px_70px_-10px_rgba(0,0,0,0.15)] rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-3xl group overflow-visible">
                        <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-800 leading-tight tracking-tighter text-center uppercase italic overflow-visible">
                          Dodaj do urodzin <span className="inline-block pr-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 group-hover:bg-gradient-to-l transition-all duration-1000">niezapomnianą pamiątkę</span>!
                        </h3>
                      </GlassCard>
                  </div>
             </div>

             {/* NOWY KAFELEK KREATORA DLA NIBYLANDII */}
             {partner?.Id === 7 && (
               <div className="w-full mb-16 mt-8">
                  <GlassCard className="bg-white/95 border-primary/20 p-6 md:p-8 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 overflow-hidden relative group">
                     <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                     
                     <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 flex-1 text-center md:text-left relative z-10">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shrink-0 transform group-hover:rotate-6 transition-transform">
                          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                        </div>
                        <div className="space-y-1.5 max-w-2xl">
                           <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Instrukcja Kreatora</p>
                           <p className="text-slate-700 text-sm md:text-base font-bold leading-relaxed">
                              Kod potrzebny do stworzenia bajki otrzymasz u naszej obsługi. 
                              <span className="block text-slate-500 font-medium text-xs md:text-sm mt-1">Jeśli masz już kod, kliknij poniżej i przejdź do kreatora!</span>
                           </p>
                        </div>
                     </div>

                     <a 
                       href="https://kreator-nibylandia-380221505176.us-west1.run.app" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-full md:w-auto px-10 py-4 bg-primary text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/30 active:scale-95 text-center"
                     >
                       Stwórz bajkę
                     </a>
                  </GlassCard>
               </div>
             )}
             
             {/* MAIN CARD: "Czym jest Multibajka?" */}
             <GlassCard className="p-8 md:p-12 lg:p-16 mb-24 relative overflow-hidden bg-slate-900 border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[3rem]">
                <div className="absolute inset-0 z-0">
                  <video 
                    src={backgroundHeroVideo}
                    poster={heroStoryImgFallback}
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-slate-950/20"></div>
                </div>

                <div className="relative z-10 flex flex-col gap-10 lg:gap-14">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                      {/* Left: Video and Button */}
                      <div className="flex flex-col items-center gap-8">
                        <div className="w-full relative group rounded-[2.5rem] overflow-hidden bg-slate-800 shadow-[0_40px_80px_rgba(0,0,0,0.6)] border-[1px] border-white/20 aspect-video">
                           {!isPlaying ? (
                             <div className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
                               <img src={videoPoster} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                               <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-3xl border border-white/30 flex items-center justify-center text-white shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900">
                                  <svg className="w-8 h-8 ml-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                               </div>
                             </div>
                           ) : (
                             <div className="absolute inset-0 bg-black z-20 flex items-center justify-center">
                               <video src={promoVideoUrl} controls autoPlay className="w-full h-full" />
                               <button onClick={() => setIsPlaying(false)} className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-rose-500/50 backdrop-blur-md z-30 transition-colors">✕</button>
                             </div>
                           )}
                        </div>

                        <button 
                          onClick={() => setIsPlaying(true)}
                          className="group relative flex items-center gap-6 px-10 py-5 bg-white rounded-2xl text-slate-950 font-black text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:-translate-y-2 transition-all duration-500 active:scale-95 uppercase tracking-widest italic w-full sm:w-auto"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                          Zobacz jak to działa
                        </button>
                      </div>

                      {/* Right: Intro Text WITH BADGES */}
                      <div className="space-y-6 md:space-y-8">
                         <div className="inline-flex px-6 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-white text-[10px] font-black tracking-[0.4em] uppercase">Czym jest Multibajka?</div>
                         <div className="space-y-6 text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                            <p className="tracking-tight italic">Multibajka to unikalna pamiątka, która zamienia <span className="text-yellow-400 font-black">Twoje dziecko</span> w prawdziwego bohatera ratującego świat w spersonalizowanej opowieści.</p>
                            <p className="text-base opacity-60">Dzięki połączeniu narracji audio i filmowych obrazów, ta magiczna historia nie tylko daje ogromną radość, ale realnie buduje pewność siebie dziecka oraz jego poczucie sprawstwa.</p>
                            
                            <div className="flex flex-wrap gap-3 pt-4">
                               <span className="px-3 py-1 bg-amber-400 text-slate-900 text-[10px] font-black rounded-full shadow-lg tracking-[0.1em] uppercase animate-pulse">BESTSELLER</span>
                               <span className="px-3 py-1 bg-slate-800 text-white text-[10px] font-black rounded-full shadow-lg tracking-[0.1em] uppercase border border-white/10">HIT URODZIN 2026!</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Bottom: Quote Box and Steps Module */}
                   <div className="w-full space-y-8">
                      {/* Quote Container */}
                      <div className="p-6 md:p-8 bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-inner relative group hover:bg-white/[0.05] transition-all duration-500 text-center lg:text-left">
                         <div className="absolute -top-5 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-3xl font-black shadow-2xl group-hover:rotate-6 transition-transform">“</div>
                         <p className="italic text-white text-xl md:text-2xl font-bold leading-snug tracking-tighter uppercase">To idealny pomost między szaloną zabawą na sali a spokojnym, pełnym dumy powrotem do domu.</p>
                      </div>

                      {/* KROK PO KROKU - New Module */}
                      <div className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                           {/* Step 1 */}
                           <div className="relative group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center">
                              <div className="w-10 h-10 rounded-full bg-white/10 text-white text-xs font-black flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-slate-900 transition-all">01</div>
                              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Krok 1</h4>
                              <p className="text-white/60 text-[11px] font-medium leading-relaxed">
                                Wypełniasz kreator - wpisujesz dane solenizanta, wgrywasz zdjęcia (jeśli chcesz).
                              </p>
                           </div>

                           {/* Step 2 */}
                           <div className="relative group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center">
                              <div className="w-10 h-10 rounded-full bg-white/10 text-white text-xs font-black flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-slate-900 transition-all">02</div>
                              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Krok 2</h4>
                              <p className="text-white/60 text-[11px] font-medium leading-relaxed">
                                Gotową bajkę dostajesz w ciągu 24 godzin w postaci linku SMS lub e-mail.
                              </p>
                           </div>

                           {/* Step 3 */}
                           <div className="relative group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center">
                              <div className="w-10 h-10 rounded-full bg-white/10 text-white text-xs font-black flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-slate-900 transition-all">03</div>
                              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Krok 3</h4>
                              <p className="text-white/60 text-[11px] font-medium leading-relaxed">
                                Pobierasz, oglądasz i udostępniasz gościom! Wszyscy są wymienieni w bajce.
                              </p>
                           </div>

                           {/* Connecting Line (Desktop) */}
                           <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-white/5 -z-10 pointer-events-none"></div>
                        </div>
                      </div>
                   </div>
                </div>
             </GlassCard>

             {/* REFINED PILLAR HEADER (STYLE OF PRICING) */}
             <div className="flex flex-col items-center text-center space-y-3 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-1">
                  Fundamenty Projektu
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter uppercase italic">
                  Co składa się na <span className="text-indigo-600">MultiBajkę?</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
             </div>

             <HorizontalScrollSection 
               title="" 
               subtitle=""
               desktopLayoutClass="lg:grid lg:grid-cols-3 lg:gap-10"
             >
                {/* LEKTORZY */}
                <div className="h-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-start border border-slate-100">
                   <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                   </div>
                   <h3 className="text-2xl font-black text-slate-800 mb-4 leading-tight tracking-tighter uppercase">Magia głosu <br/><span className="text-indigo-600 italic">(Lektorzy)</span></h3>
                   <p className="text-slate-500 text-base font-medium leading-relaxed mb-6">Ożywiamy postacie dzięki głosom najlepszych lektorów, którzy nadają historii filmowy sznyt.</p>
                   <div className="mt-auto w-full pt-6 border-t border-slate-100 space-y-3">
                     <div className="flex gap-4">
                        <span className="text-indigo-600 font-black text-lg">›</span> 
                        <span className="text-slate-500 text-[11px] font-bold leading-snug"><span className="text-indigo-600 font-black uppercase">Efekt Wow:</span> Usłyszenie swojego imienia buduje u dziecka potężne poczucie ważności.</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-indigo-600 font-black text-lg">›</span> 
                        <span className="text-slate-500 text-[11px] font-bold leading-snug"><span className="text-indigo-600 font-black uppercase">Bliskość:</span> Rodzice mogą czytać bajkę sami, tworząc intymną atmosferę.</span>
                     </div>
                   </div>
                </div>

                {/* MUZYKA */}
                <div className="h-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-start border border-slate-100">
                   <div className="w-16 h-16 rounded-[1.5rem] bg-purple-50 flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                   </div>
                   <h3 className="text-2xl font-black text-slate-800 mb-4 leading-tight tracking-tighter uppercase">Emocje w nutach <br/><span className="text-purple-600 italic">(Muzyka)</span></h3>
                   <p className="text-slate-500 text-base font-medium leading-relaxed mb-6">Autorskie ścieżki dźwiękowe komponowane specjalnie, by poruszać najczulsze struny wyobraźni.</p>
                   <div className="mt-auto w-full pt-6 border-t border-slate-100 space-y-3">
                     <div className="flex gap-4">
                        <span className="text-purple-600 font-black text-lg">›</span> 
                        <span className="text-slate-500 text-[11px] font-bold leading-snug"><span className="text-purple-600 font-black uppercase">Zmysły:</span> Muzyka stymuluje mózg dziecka i pobudza jego naturalną wrażliwość.</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-purple-600 font-black text-lg">›</span> 
                        <span className="text-slate-500 text-[11px] font-bold leading-snug"><span className="text-purple-600 font-black uppercase">Przygoda:</span> Dźwięki budują epicki nastrój, ucząc rozpoznawania emocji.</span>
                     </div>
                   </div>
                </div>

                {/* ILUSTRACJE */}
                <div className="h-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-start border border-slate-100">
                   <div className="w-16 h-16 rounded-[1.5rem] bg-rose-50 flex items-center justify-center text-rose-600 mb-6 shadow-sm">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                   </div>
                   <h3 className="text-2xl font-black text-slate-800 mb-4 leading-tight tracking-tighter uppercase">Obrazy Duszy <br/><span className="text-rose-600 italic">(Ilustracje)</span></h3>
                   <p className="text-slate-500 text-base font-medium leading-relaxed mb-6">Statyczne, mistrzowskie ilustracje, które budują poczucie estetyki i spokoju.</p>
                   <div className="mt-auto w-full pt-6 border-t border-slate-100 space-y-3">
                     <div className="flex gap-4">
                        <span className="text-rose-600 font-black text-lg">›</span> 
                        <span className="text-slate-500 text-[11px] font-bold leading-snug"><span className="text-rose-600 font-black uppercase">Uważność:</span> Stałe obrazy pomagają skupić się i wyciszyć po intensywnej zabawie.</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-rose-600 font-black text-lg">›</span> 
                        <span className="text-slate-500 text-[11px] font-bold leading-snug"><span className="text-rose-600 font-black uppercase">Percepcja:</span> To fundament edukacji estetycznej od najmłodszych lat.</span>
                     </div>
                   </div>
                </div>

             </HorizontalScrollSection>
          </div>
       </div>
    </section>
  );
};

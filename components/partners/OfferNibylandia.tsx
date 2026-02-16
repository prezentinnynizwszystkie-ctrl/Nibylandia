
import React from 'react';
import { GlassCard } from '../GlassCard';
import { HorizontalScrollSection } from '../HorizontalScrollSection';
import { Partner } from '../../types';

interface OfferNibylandiaProps {
  partner?: Partner;
  onLearnMore?: () => void;
}

export const OfferNibylandia: React.FC<OfferNibylandiaProps> = ({ partner, onLearnMore }) => {
  return (
    <section id="offer-section" className="scroll-mt-32 space-y-10">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-primary mb-1">
           Planowanie Przyjęcia
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter uppercase italic">
          Cennik <span className="text-primary">Urodzinowy</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        <p className="text-slate-500 font-medium max-w-xl text-base md:text-xl mt-2">
          <span className="text-primary font-bold">2,5 h zabawy + zestaw</span>
        </p>
      </div>
      
      <div className="w-full pt-4">
        <GlassCard className="p-0 overflow-visible relative border-white/60 bg-white/40 shadow-2xl rounded-[2.5rem] backdrop-blur-xl">
          <div className="p-5 md:p-10 flex flex-col lg:flex-row gap-6 items-center">
             <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-4xl font-black text-slate-800 mb-0.5 tracking-tight">Bilet Urodzinowy</h3>
                <p className="text-slate-500 font-bold text-xs md:text-sm max-w-xs md:max-w-md italic leading-tight">W cenie: 2,5 h zabawy oraz wybrany zestaw (Mały Smakosza lub Zgodny z Naturą).</p>
             </div>
             
             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full lg:w-auto">
                <div className="relative group min-w-[160px] md:min-w-[200px]">
                   <img 
                     src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/boy2.webp" 
                     className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-24 object-contain pointer-events-none z-10 transition-transform duration-500 group-hover:scale-110" 
                     alt="" 
                     loading="lazy"
                   />
                   <div className="h-full w-full p-5 md:p-8 rounded-[1.5rem] bg-slate-50/80 border border-slate-100 text-center shadow-sm relative z-0 flex flex-col justify-center min-h-[140px]">
                      <span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-slate-400 font-black mb-1">Poniedziałek - Czwartek</span>
                      <span className="block text-3xl md:text-5xl font-black text-slate-800">65 zł</span>
                      <span className="block text-[8px] md:text-[10px] text-slate-400 mt-0.5 font-black uppercase tracking-widest">Za dziecko</span>
                   </div>
                </div>

                <div className="relative group min-w-[160px] md:min-w-[200px]">
                   <div className="h-full w-full p-5 md:p-8 rounded-[1.5rem] bg-primary text-white shadow-2xl text-center transform sm:scale-105 relative overflow-hidden z-0 flex flex-col justify-center min-h-[140px]">
                      <span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/70 font-black mb-1">Piątek - Niedziela i Święta</span>
                      <span className="block text-3xl md:text-5xl font-black">75 zł</span>
                      <span className="block text-[8px] md:text-[10px] text-white/50 mt-0.5 font-black uppercase tracking-widest">Za dziecko</span>
                   </div>
                   <img 
                     src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/girl2.webp" 
                     className="absolute -right-12 top-1/2 -translate-y-1/2 w-28 h-28 object-contain pointer-events-none z-10 transition-transform duration-500 group-hover:scale-110" 
                     alt="" 
                     loading="lazy"
                   />
                </div>
             </div>
          </div>
        </GlassCard>
      </div>

      <div className="pt-4">
        <HorizontalScrollSection 
           title="Wybór Menu (W cenie)" 
           subtitle="Wybierz jeden z dwóch dostępnych zestawów dla gości."
           desktopLayoutClass="lg:grid lg:grid-cols-2 lg:gap-8"
        >
           <GlassCard className="flex flex-col h-full border-white bg-white hover:bg-white transition-all shadow-xl rounded-[2rem] overflow-visible">
              <div className="relative aspect-[21/9] overflow-hidden rounded-t-[2rem]">
                 <img src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/herosmakosz.webp" alt="Menu 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="relative z-10 -mt-6 flex justify-center px-4">
                <div className="backdrop-blur-xl bg-white/60 border border-white px-6 py-2 md:py-3 rounded-xl shadow-xl">
                   <h3 className="text-[11px] md:text-[14px] font-black text-slate-800 tracking-tight text-center uppercase">Zestaw "Małego Smakosza"</h3>
                </div>
              </div>
              <div className="p-6 pt-8 md:p-10 md:pt-12 flex-1">
                 <ul className="space-y-2 md:space-y-3 text-slate-600 font-bold text-xs md:text-sm">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 100% sok owocowy</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> niegazowana woda mineralna</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> słone paluszki</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> chipsy</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> chrupki kukurydziane smakowe</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> żelki</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> gumy Mamba</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> czekoladki Kinder</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> kruche ciasteczka</li>
                 </ul>
              </div>
              <div className="p-3 md:p-4 bg-primary/10 text-center text-[8px] md:text-[11px] font-black text-primary uppercase tracking-[0.2em] rounded-b-[2rem]">+ Balon dla każdego Dziecka uczestniczącego w przyjęciu</div>
           </GlassCard>

           <GlassCard className="flex flex-col h-full border-white bg-white hover:bg-white transition-all shadow-xl rounded-[2rem] overflow-visible">
              <div className="relative aspect-[21/9] overflow-hidden rounded-t-[2rem]">
                 <img src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/heroeko.webp" alt="Menu 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="relative z-10 -mt-6 flex justify-center px-4">
                <div className="backdrop-blur-xl bg-white/60 border border-white px-6 py-2 md:py-3 rounded-xl shadow-xl">
                   <h3 className="text-[11px] md:text-[14px] font-black text-slate-800 tracking-tight text-center uppercase">Zestaw "Zgodny z Naturą"</h3>
                </div>
              </div>
              <div className="p-6 pt-8 md:p-10 md:pt-12 flex-1">
                 <ul className="space-y-2 md:space-y-3 text-slate-600 font-bold text-xs md:text-sm">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 100% sok owocowy</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> niegazowana woda mineralna</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> jabłka</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> banany</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> chrupki kukurydziane naturalne</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> popcorn</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> słone paluszki</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> czekoladki Kinder</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> kruche ciasteczka</li>
                 </ul>
              </div>
              <div className="p-3 md:p-4 bg-emerald-50 text-center text-[8px] md:text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em] rounded-b-[2rem]">+ Balon dla każdego Dziecka uczestniczącego w przyjęciu</div>
           </GlassCard>
        </HorizontalScrollSection>
      </div>

      <div className="pt-8 space-y-6">
        <div className="flex items-end justify-between px-1">
          <h3 className="text-xl md:text-3xl font-black text-slate-800 uppercase tracking-tight italic">Opcje Dodatkowe</h3>
        </div>

        {/* PRZEPROJEKTOWANY KAFELEK MULTIBAJKI - DOKŁADNIE WEDŁUG PROJEKTU */}
        <div className="w-full px-1">
          <div className="bg-[#0b0f1a] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden border border-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBF043]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="bg-[#FBF043] text-[#0b0f1a] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-[0_5px_15px_rgba(251,240,67,0.3)]">
                  BESTSELLER!
                </span>
                <span className="border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                  HIT URODZIN 2026!
                </span>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white text-3xl md:text-4xl lg:text-5xl font-black italic uppercase leading-none tracking-tighter">
                  PERSONALIZOWANA <span className="text-[#FBF043]">MULTIBAJKA</span> Z TWOIM DZIECKIEM!
                </h4>
                <p className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] leading-relaxed max-w-xl">
                  Stwórz unikalną filmową pamiątkę, w której Twoje dziecko zostaje prawdziwym bohaterem ratującym świat.
                </p>
              </div>
            </div>

            {/* Separator pionowy */}
            <div className="hidden md:block w-px h-28 bg-white/10 self-center"></div>

            <div className="flex flex-col items-center md:items-end justify-center min-w-[180px]">
              <span className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2">CENA DODATKU</span>
              <div className="text-[#FBF043] text-6xl md:text-7xl font-black drop-shadow-[0_0_20px_rgba(251,240,67,0.3)]">
                149 zł
              </div>
            </div>
          </div>
        </div>

        <HorizontalScrollSection 
          title="" 
          desktopLayoutClass="lg:grid lg:grid-cols-3 lg:gap-6"
        >
           <GlassCard className="p-6 md:p-8 h-full flex flex-col bg-white shadow-lg border-slate-50 rounded-[1.5rem]">
              <h4 className="font-black text-primary mb-4 flex items-center gap-3 uppercase tracking-[0.2em] text-[8px] md:text-[11px]">
                <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                Gastronomia
              </h4>
              <ul className="space-y-3 text-[10px] md:text-[13px] font-bold text-slate-700">
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Nuggetsy z frytkami</span> <span className="text-primary font-black">15 zł / porcja</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Tosty</span> <span className="text-primary font-black">9 zł / porcja</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Lody</span> <span className="text-primary font-black">6 zł / gałka</span></li>
                <li className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span>Poczęstunek dla rodziców</span>
                        <span className="text-[8px] text-slate-400 font-normal">(sernik, szarlotka)</span>
                    </div>
                    <span className="text-primary font-black text-right text-[10px]">wycena indyw.</span>
                </li>
              </ul>
           </GlassCard>

           <GlassCard className="p-6 md:p-8 h-full flex flex-col bg-white shadow-lg border-slate-50 rounded-[1.5rem]">
              <h4 className="font-black text-slate-500 mb-4 flex items-center gap-3 uppercase tracking-[0.2em] text-[8px] md:text-[11px]">
                 <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                   <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                 </div>
                 Organizacja
              </h4>
              <ul className="space-y-3 text-[10px] md:text-[13px] font-bold text-slate-700">
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Bajkowa zastawa</span> <span className="text-slate-400 font-black">15 zł / os</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Tort</span> <span className="text-slate-400 font-black">wycena indyw.</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Wniesienie wł. tortu</span> <span className="text-slate-400 font-black">50 zł</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Wniesienie wł. piniaty</span> <span className="text-slate-400 font-black">40 zł</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Piniata z wypełnieniem</span> <span className="text-slate-400 font-black">120 zł</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Przedłużenie (30 min)</span> <span className="text-slate-400 font-black">10 zł / os</span></li>
                <li className="flex justify-between items-center"><span>Zaproszenie</span> <span className="text-slate-400 font-black">2 zł / szt</span></li>
              </ul>
           </GlassCard>

           <GlassCard className="p-6 md:p-8 h-full flex flex-col bg-white shadow-lg border-slate-50 rounded-[1.5rem]">
              <h4 className="font-black text-accent mb-4 flex items-center gap-3 uppercase tracking-[0.2em] text-[8px] md:text-[11px]">
                 <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                   <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                 </div>
                 Animacje i Atrakcje
              </h4>
              <ul className="space-y-3 text-[10px] md:text-[13px] font-bold text-slate-700">
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Animacje (45 min)</span> <span className="text-accent font-black">120 zł</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                    <div className="flex flex-col">
                        <span>Maskotka (15 min)</span>
                        <span className="text-[8px] text-slate-400 font-normal">Myszka Miki/Minnie, Minionek</span>
                    </div>
                    <span className="text-accent font-black">30 zł</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Malowanie buziek</span> <span className="text-accent font-black">10 zł / os</span></li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-2"><span>Kolorowe warkoczyki</span> <span className="text-accent font-black">10 zł / szt</span></li>
                <li className="flex justify-between items-center"><span>Tatuaże brokatowe</span> <span className="text-accent font-black">8 zł / szt</span></li>
              </ul>
           </GlassCard>
        </HorizontalScrollSection>
      </div>

      <div className="mt-2">
        <GlassCard className="bg-white/50 border-white/60 shadow-xl rounded-[2rem] overflow-hidden">
          <div className="bg-accent/10 border-b border-accent/20 p-4 md:p-8 flex items-center gap-4 md:gap-8 text-left relative overflow-hidden">
             <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-accent text-slate-900 flex items-center justify-center shrink-0 shadow-lg relative z-10">
               <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
             </div>
             <div className="relative z-10 flex-1">
               <h3 className="text-base md:text-2xl font-black text-slate-800 tracking-tight mb-0.5 uppercase">Ważna informacja o posiłkach</h3>
               <p className="text-slate-600 font-medium text-[10px] md:text-[14px] leading-snug">Na terenie {partner?.PartnerName || 'bawialni'} można spożywać <strong>tylko posiłki i napoje w niej zakupione</strong>.</p>
             </div>
          </div>

          <div className="p-5 md:p-10 space-y-8 md:space-y-12">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  {icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', color: 'primary', title: 'Pomoc Eksperta', desc: 'Konsultant doradzi i przygotuje plan.'},
                  {icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'slate', title: 'Regulaminy', desc: 'Dostępne na miejscu i online.'},
                  {icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'primary', title: 'Odpowiedzialność', desc: 'Rodzice dbają o bezpieczeństwo.'},
                  {icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', color: 'emerald', title: 'W cenie', desc: 'Salka, poczęstunek i stół.'}
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-2.5 md:gap-4">
                     <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg bg-${item.color === 'primary' ? 'primary/10' : item.color + '-100'} text-${item.color === 'primary' ? 'primary' : item.color + '-600'} flex items-center justify-center shrink-0`}>
                       <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                     </div>
                     <div>
                       <h4 className="font-black text-slate-800 text-[9px] md:text-[13px] mb-0.5 uppercase tracking-tight">{item.title}</h4>
                       <p className="text-[8px] md:text-[10px] font-bold text-slate-400 leading-tight uppercase">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="pt-5 md:pt-10 border-t border-slate-100">
                <div className="text-[8px] md:text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5 md:mb-8">Gratisy za liczbę gości</div>
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-12 relative">
                   {[
                     {n: '10+', c: 'primary', l: 'Poziom 1', d: 'zabawa i poczęstunek dla SOLENIZANTA oraz dolewka wody dla uczestników GRATIS'},
                     {n: '15+', c: 'accent', l: 'Poziom 2', d: 'zabawa i poczęstunek dla SOLENIZANTA i dodatkowej osoby oraz dolewka wody dla uczestników GRATIS'},
                     {n: '20+', c: 'primary', l: 'Poziom 3', d: 'zabawa i poczęstunek dla SOLENIZANTA i dwóch dodatkowych osób oraz dolewka wody dla uczestników GRATIS.'}
                   ].map((m, i) => (
                     <div key={m.l} className="flex-1 flex flex-row md:flex-col items-center md:text-center group relative">
                        {i < 2 && <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-100 md:hidden"></div>}
                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl ${m.c === 'primary' ? 'bg-primary' : 'bg-accent'} text-white flex items-center justify-center text-base md:text-2xl font-black shadow-md shrink-0 z-10 transition-transform group-hover:scale-105`}>{m.n}</div>
                        <div className="ml-4 md:ml-0 md:mt-4 space-y-0.5 md:space-y-1">
                           <h5 className={`text-[8px] md:text-[11px] font-black uppercase tracking-widest ${m.c === 'primary' ? 'text-primary' : 'text-accent'}`}>{m.l}</h5>
                           <p className="text-[10px] md:text-[14px] font-bold text-slate-800 leading-snug">{m.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </GlassCard>
      </div>

      <div className="mt-2">
        <GlassCard className="bg-slate-800 text-white p-5 md:p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="relative z-10 max-w-sm md:max-w-md text-center md:text-left">
              <h4 className="text-base md:text-2xl font-bold mb-0.5 md:mb-2">Potwierdzenie rezerwacji</h4>
              <p className="text-slate-400 text-[10px] md:text-[15px] leading-relaxed">Nasz Konsultant skontaktuje się z Państwem telefonicznie w celu potwierdzenia szczegółów.</p>
           </div>

           <div className="relative z-10 w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 md:p-6 flex flex-col gap-1 md:gap-3 min-w-[240px] md:min-w-[400px]">
              <div className="text-[8px] md:text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">Numer konta do wpłat</div>
              <div className="font-mono text-[11px] sm:text-base md:text-2xl text-accent tracking-wider font-bold select-all whitespace-nowrap overflow-hidden text-ellipsis">
                50 1140 2004 0000 3102 8162 9990
              </div>
              <div className="flex justify-between items-end mt-0.5 md:mt-2">
                 <span className="text-[8px] md:text-[12px] text-slate-500">Bank Millenium</span>
                 <span className="text-[8px] md:text-[12px] bg-white/20 px-1.5 py-0.5 md:px-3 md:py-1 rounded text-white font-bold tracking-widest">ZADATEK</span>
              </div>
           </div>
        </GlassCard>
      </div>
    </section>
  );
};

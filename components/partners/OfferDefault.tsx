
import React from 'react';
import { GlassCard } from '../GlassCard';
import { Partner } from '../../types';

interface OfferDefaultProps {
  partner?: Partner;
  onLearnMore?: () => void;
}

export const OfferDefault: React.FC<OfferDefaultProps> = ({ partner }) => {
  return (
    <section id="offer-section" className="scroll-mt-32 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] md:text-[13px] font-black uppercase tracking-[0.4em] text-primary mb-1">
           Nasza Oferta
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter uppercase italic">
          Planety <span className="text-primary">Zabawy</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        <p className="text-slate-500 font-medium max-w-xl text-lg md:text-2xl mt-2">
          Zapraszamy do organizacji niezapomnianych urodzin w {partner?.PartnerNameGenitive || 'naszej sali'}. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
         <GlassCard className="p-10 md:p-16 flex flex-col items-center text-center bg-white shadow-2xl rounded-[3rem] border-primary/5 group hover:border-primary/20 transition-all">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
               <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase italic">Dni Powszednie</h3>
            <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest mb-6">Poniedziałek - Czwartek</p>
            <div className="text-5xl md:text-7xl font-black text-primary mb-2 tracking-tighter">60 zł</div>
            <p className="text-[10px] md:text-[14px] font-black text-slate-400 uppercase tracking-[0.2em]">Cena za dziecko</p>
         </GlassCard>

         <GlassCard className="p-10 md:p-16 flex flex-col items-center text-center bg-primary text-white shadow-2xl rounded-[3rem] border-none group hover:scale-[1.02] transition-all">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/20 flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
               <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase italic">Weekend i Święta</h3>
            <p className="text-white/60 font-bold text-xs md:text-sm uppercase tracking-widest mb-6">Piątek - Niedziela</p>
            <div className="text-5xl md:text-7xl font-black mb-2 tracking-tighter text-accent">70 zł</div>
            <p className="text-[10px] md:text-[14px] font-black text-white/50 uppercase tracking-[0.2em]">Cena za dziecko</p>
         </GlassCard>
      </div>

      <div className="max-w-4xl mx-auto p-8 md:p-12 bg-slate-100 rounded-[2rem] text-center border border-slate-200">
         <p className="text-slate-500 font-bold text-sm md:text-xl leading-relaxed uppercase tracking-widest italic">
            W każdym pakiecie zapewniamy dedykowanego animatora, magiczną salkę urodzinową, poczęstunek oraz nielimitowaną zabawę na wszystkich atrakcjach sali.
         </p>
      </div>
    </section>
  );
};

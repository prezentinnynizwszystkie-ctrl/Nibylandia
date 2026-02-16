import React, { useState } from 'react';

export const OrientationPrompt: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="orientation-overlay fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/98 backdrop-blur-3xl lg:hidden">
      <div className="max-w-xs w-full text-center space-y-12 animate-fade-in">
        
        {/* Animated Phone Icon */}
        <div className="relative w-28 h-48 mx-auto">
          <div className="absolute inset-0 border-4 border-slate-200 rounded-[3rem] shadow-inner bg-white/20"></div>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-200 rounded-full"></div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-slate-100 rounded-full"></div>
          
          {/* Rotating Screen Element */}
          <div className="absolute inset-2.5 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center animate-[phoneRotate_3.5s_infinite_ease-in-out] shadow-xl">
             <svg className="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
             </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">Obróć telefon</h2>
          <p className="text-slate-500 leading-relaxed font-medium">
            Nasza aplikacja najlepiej wygląda w <span className="text-indigo-600 font-bold">poziomie</span>. 
            Obróć urządzenie, aby wygodnie zarezerwować magiczne urodziny.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center pt-4">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] uppercase tracking-[0.3em] font-extrabold text-indigo-500 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
            Zalecany tryb poziomy
          </div>
          
          <button 
            onClick={() => setIsDismissed(true)}
            className="text-[10px] text-slate-400 hover:text-indigo-600 transition-colors underline underline-offset-8 font-extrabold uppercase tracking-widest py-3"
          >
            Otwórz mimo to
          </button>
        </div>
      </div>

      <style>{`
        @keyframes phoneRotate {
          0%, 15% { transform: rotate(0deg); }
          45%, 65% { transform: rotate(90deg); }
          95%, 100% { transform: rotate(0deg); }
        }
        
        @media (orientation: landscape) {
          .orientation-overlay {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .orientation-overlay {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
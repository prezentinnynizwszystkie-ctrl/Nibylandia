
import React from 'react';

interface MultibajkaInfoPageProps {
  onClose: () => void;
}

export const MultibajkaInfoPage: React.FC<MultibajkaInfoPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-50 overflow-y-auto animate-fade-in flex flex-col font-sans">
      <nav className="sticky top-0 z-[110] px-6 py-4 bg-white/80 backdrop-blur-2xl border-b border-slate-200 flex items-center justify-between">
        <button 
          onClick={onClose}
          className="flex items-center gap-3 text-slate-500 hover:text-indigo-600 transition-all font-bold text-sm"
        >
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
           Zamknij
        </button>
        <div className="text-center">
           <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold mb-1">Informacje</p>
           <p className="text-sm font-extrabold text-indigo-600">Świat Multibajki</p>
        </div>
        <div className="w-32 hidden sm:block"></div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center p-10 text-center">
        <div className="w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center mb-10 animate-pulse">
          <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h1 className="text-5xl font-black text-slate-800 mb-6">Strona w budowie</h1>
        <p className="text-xl text-slate-500 max-w-xl font-medium leading-relaxed">
          Przygotowujemy dla Ciebie magiczną prezentację wszystkich możliwości Multibajki. <br/>Wróć tutaj wkrótce!
        </p>
      </main>
    </div>
  );
};

import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { User, ViewState } from '../types';

interface RoleSelectionScreenProps {
  user: User;
  onSelect: (view: ViewState) => void;
  onLogout: () => void;
}

export const RoleSelectionScreen: React.FC<RoleSelectionScreenProps> = ({ user, onSelect, onLogout }) => {
  return (
    <div className="w-full max-w-4xl px-6 flex flex-col items-center animate-fade-in-up">
      <div className="w-full flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Cześć, {user.username}!</h2>
          <p className="text-slate-500 font-medium">Wybierz tryb pracy na dziś.</p>
        </div>
        <button 
          onClick={onLogout}
          className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
        >
          Wyloguj
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Option 1: Control Panel */}
        <button 
          onClick={() => onSelect(ViewState.DASHBOARD)}
          className="group text-left"
        >
          <GlassCard className="h-64 p-8 relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-2xl group-hover:border-indigo-200 border-white/80">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-all"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">Panel Sterowania</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Zarządzaj kontem, sprawdzaj statystyki, edytuj ustawienia i przeglądaj zamówienia.
                </p>
              </div>
            </div>
          </GlassCard>
        </button>

        {/* Option 2: App View */}
        <button 
          onClick={() => onSelect(ViewState.APP_VIEW)}
          className="group text-left"
        >
          <GlassCard className="h-64 p-8 relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-2xl group-hover:border-blue-200 border-white/80">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-all"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Wyświetl Aplikację</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Uruchom tryb prezentacji dla klienta końcowego. Interfejs do zamawiania filmów.
                </p>
              </div>
            </div>
          </GlassCard>
        </button>
      </div>
    </div>
  );
};
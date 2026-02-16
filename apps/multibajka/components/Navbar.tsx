
import React from 'react';
import { Search, User, Home } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'landing' | 'selection') => void;
  currentPage: 'landing' | 'selection';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 text-white bg-gradient-to-b from-black/90 via-black/50 to-transparent">
      {/* Logo Area */}
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => onNavigate('landing')}>
        <div className="text-2xl font-bold tracking-tighter">
          Bajkowa<span className="text-yellow-400">.</span>
        </div>
      </div>
      
      {/* Right Side Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        {currentPage === 'landing' ? (
          <button 
            onClick={() => onNavigate('selection')}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105 text-xs uppercase tracking-widest"
          >
            Zobacz nasze bajki
          </button>
        ) : (
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 text-xs uppercase tracking-widest"
          >
            <Home size={14} /> Strona Główna
          </button>
        )}

        <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Search size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <User size={20} />
            </button>
        </div>
      </div>
    </nav>
  );
};


import React, { useState, useEffect } from 'react';
import { LoginScreen } from '../../screens/LoginScreen';
import { RoleSelectionScreen } from '../../screens/RoleSelectionScreen';
import { AppViewScreen } from '../../screens/AppViewScreen';
import { OrientationPrompt } from '../../components/OrientationPrompt';
import { User, ViewState, Partner, AppRole } from '../../types';
import { supabase } from '../../lib/supabase';

function PartnerApp() {
  const [user, setUser] = useState<User | null>(null);
  const [partner, setPartner] = useState<Partner | undefined>(undefined);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LOGIN);
  const [loading, setLoading] = useState(true);

  // Initial routing check for public partner links: /p/[slug]
  useEffect(() => {
    const checkPublicRoute = async () => {
      const path = window.location.pathname;
      if (path.startsWith('/p/')) {
        const slug = path.split('/p/')[1];
        if (slug) {
          try {
            const { data, error } = await supabase
              .from('Partners')
              .select('*')
              .eq('Slug', slug)
              .single();

            if (data && !error) {
              setPartner(data as Partner);
              // Set a dummy guest user for public view if not logged in
              if (!user) {
                setUser({ username: 'Gość', role: AppRole.EMPLOYEE });
              }
              setCurrentView(ViewState.APP_VIEW);
            }
          } catch (err) {
            console.error("Error fetching partner by slug:", err);
          }
        }
      }
      setLoading(false);
    };

    checkPublicRoute();
  }, []);

  const handleLogin = (loggedInUser: User, partnerData?: Partner) => {
    setUser(loggedInUser);
    if (partnerData) {
      setPartner(partnerData);
    }
    setCurrentView(ViewState.SELECTION);
  };

  const handleLogout = () => {
    setUser(null);
    setPartner(undefined);
    setCurrentView(ViewState.LOGIN);
    // Reset path if we were on a public route
    if (window.location.pathname.startsWith('/p/')) {
      window.history.pushState({}, '', '/');
    }
  };

  const handleViewSelection = (view: ViewState) => {
    setCurrentView(view);
  };

  const handleBackToSelection = () => {
    // If we came from a public link and have no real session, go back to login instead of selection
    if (window.location.pathname.startsWith('/p/')) {
      handleLogout();
    } else {
      setCurrentView(ViewState.SELECTION);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-slate-50 text-[#1e293b]">
      
      {/* --- UTILITY OVERLAYS --- */}
      <OrientationPrompt />
      
      {/* --- GLOBAL BACKGROUNDS --- */}

      {/* 1. Login Backgrounds */}
      {currentView === ViewState.LOGIN && (
        <div className="fixed inset-0 z-0">
           <img 
             src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Testing/hf_20260208_132343_92553bee-7588-45c7-ac9c-f194f0a73a05.webp"
             alt="Background"
             className="w-full h-full object-cover md:hidden opacity-60"
           />
           <img 
             src="https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Testing/hf_20260208_132504_8f568417-6ec9-4a22-a1be-375313fc8bb3.webp"
             alt="Background"
             className="w-full h-full object-cover hidden md:block opacity-60"
           />
           <div className="absolute inset-0 bg-white/30"></div>
        </div>
      )}

      {/* 2. Soft Mesh Background */}
      {(currentView === ViewState.SELECTION || currentView === ViewState.DASHBOARD) && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-200/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      {/* --- MAIN CONTENT AREA --- */}
      <div className={`${currentView !== ViewState.APP_VIEW ? 'relative z-10 min-h-screen flex flex-col items-center justify-center p-4' : ''}`}>
        
        {currentView === ViewState.LOGIN && (
          <LoginScreen onLogin={handleLogin} />
        )}

        {currentView === ViewState.SELECTION && user && (
          <RoleSelectionScreen 
            user={user} 
            onSelect={handleViewSelection} 
            onLogout={handleLogout}
          />
        )}

        {currentView === ViewState.APP_VIEW && user && (
          <AppViewScreen 
            user={user}
            partner={partner}
            onBack={handleBackToSelection}
          />
        )}

        {currentView === ViewState.DASHBOARD && (
           <div className="text-center p-8 bg-white/60 rounded-2xl backdrop-blur-md border border-white/80 max-w-lg relative z-20 shadow-xl">
             <h2 className="text-2xl font-bold mb-4 text-[#1e293b]">Panel Sterowania</h2>
             <p className="mb-6 text-slate-600">Tutaj będzie znajdować się panel administracyjny partnera.</p>
             <button 
               onClick={handleBackToSelection}
               className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition-colors font-semibold"
             >
               Wróć
             </button>
           </div>
        )}

      </div>
    </div>
  );
}

export default PartnerApp;

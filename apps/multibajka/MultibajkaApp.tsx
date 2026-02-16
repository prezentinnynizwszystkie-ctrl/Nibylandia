
import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import { StorySelectionPage } from './StorySelectionPage';
import { Navbar } from './components/Navbar';

function MultibajkaApp() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'selection'>('landing');

  const handleNavigate = (page: 'landing' | 'selection') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'landing' ? (
        <LandingPage onNavigate={() => handleNavigate('selection')} />
      ) : (
        <StorySelectionPage />
      )}
    </div>
  );
}

export default MultibajkaApp;

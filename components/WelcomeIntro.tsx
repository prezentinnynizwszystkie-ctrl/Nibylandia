import React, { useEffect, useRef, useState } from 'react';
import { Button } from './Button';

interface WelcomeIntroProps {
  onComplete: () => void;
}

export const WelcomeIntro: React.FC<WelcomeIntroProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoUrl = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/Testing/heroNew.webm";

  useEffect(() => {
    // Safety timeout: if video doesn't end or load in 10 seconds, move on
    const safetyTimer = setTimeout(() => {
      onComplete();
    }, 12000);

    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  const handleVideoError = () => {
    console.warn("Video failed to load or play.");
    setHasError(true);
    // If error, show fallback animation for 2 seconds then proceed
    setTimeout(onComplete, 2500);
  };

  const handleTimeUpdate = () => {
    // Optional: Check if we are near the end manually if onEnded fails
    if (videoRef.current) {
        if (videoRef.current.currentTime > 0) {
            setIsVideoLoaded(true);
        }
        if (videoRef.current.duration - videoRef.current.currentTime < 0.2) {
            onComplete();
        }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {!hasError ? (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Loading spinner while video buffers */}
            {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-0">
                     <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin opacity-50"></div>
                </div>
            )}
            
            <video
                ref={videoRef}
                src={videoUrl}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover relative z-10"
                onEnded={onComplete}
                onError={handleVideoError}
                onTimeUpdate={handleTimeUpdate}
            />
            
            {/* Skip button just in case */}
            <button 
                onClick={onComplete}
                className="absolute bottom-8 right-8 z-20 text-white/30 hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
                Pomiń
            </button>
        </div>
      ) : (
        // Fallback Animation
        <div className="flex flex-col items-center animate-fade-in-up">
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Wczytywanie panelu...</h2>
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 animate-[shimmer_1s_infinite_linear]"></div>
          </div>
        </div>
      )}
    </div>
  );
};
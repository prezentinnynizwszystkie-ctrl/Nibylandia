
import React, { useState, useEffect, useMemo } from 'react';
import { Partner } from '../../types';

interface HeroSectionProps {
  partner?: Partner;
  themeMode: 'light' | 'fairy' | 'dark';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ partner }) => {
  const partnerName = partner?.PartnerNameGenitive || (partner?.PartnerName ? partner.PartnerName.replace(/a$/, 'ii') : "Nibylandii");
  const logoUrl = partner?.LogoUrl;
  const heroHeader = partner?.HeroHeader || "Stwórz niezapomniane urodziny dla Twojego dziecka";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Memoize images to prevent re-parsing on every render
  const images = useMemo(() => {
    const rawPhoto = partner?.PhotoUrl;
    let parsedImages: string[] = [];

    if (rawPhoto) {
      try {
        const json = JSON.parse(rawPhoto);
        if (Array.isArray(json)) {
          parsedImages = json.slice(0, 3);
        } else {
          parsedImages = [rawPhoto];
        }
      } catch (e) {
        parsedImages = [rawPhoto];
      }
    }

    if (parsedImages.length === 0) {
      return ["https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/hf_20260209_135740_55590853-937a-40cf-b162-e6a16ce7568b.webp"];
    }
    return parsedImages;
  }, [partner?.PhotoUrl]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000); 
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative w-full h-auto min-h-[600px] md:min-h-[85vh] flex flex-col z-20">
      
      {/* Fixed aspect ratio container to prevent layout shift */}
      <div className="absolute inset-0 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] bg-[#0b0f1a] shadow-2xl z-0">
        <div className="absolute inset-0 bg-slate-900">
           {/* Placeholder while loading */}
        </div>

        {images.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img 
              src={img}
              alt=""
              className={`w-full h-full object-cover backface-hidden ${index === currentImageIndex ? 'animate-ken-burns' : ''}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
        
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/60 to-transparent z-20 pointer-events-none"></div>
      </div>
      
      <div className="relative z-30 flex-1 flex items-center justify-center p-6 md:p-12 pt-40 md:pt-48 pb-24">
        <div className="w-full max-w-6xl mx-auto text-center relative group animate-fade-in-up">
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <div className="space-y-3 md:space-y-6">
              <h1 className="text-white uppercase italic leading-tight tracking-tighter drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
                <span className="block text-3xl md:text-5xl lg:text-7xl font-black mb-1 md:mb-3">
                  {heroHeader.split(' ').slice(0, 2).join(' ')} <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent filter brightness-125 px-2 py-1">{heroHeader.split(' ')[2]}</span>
                </span>
                <span className="block text-xl md:text-4xl lg:text-5xl font-bold text-white px-4">
                  {heroHeader.split(' ').slice(3).join(' ')}
                </span>
              </h1>
              
              <div className="inline-block relative mt-4 md:mt-8">
                 <div className="absolute inset-0 bg-black/40 blur-md rounded-full"></div>
                 <span className="relative z-10 text-lg md:text-3xl font-black text-white uppercase tracking-[0.2em] md:tracking-[0.3em] px-8 py-2 border-y-2 border-white/20 block">
                    w {partnerName}
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {logoUrl && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-50">
           <div className="relative">
              <div className="absolute inset-0 bg-white/60 blur-[50px] rounded-full scale-150 animate-pulse"></div>
              <div className="w-32 h-32 md:w-52 md:h-52 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden border-4 border-white transition-transform duration-700 hover:scale-105 hover:rotate-3 relative z-10">
                <img src={logoUrl} alt={partnerName} className="w-full h-full object-contain p-4" loading="eager" />
              </div>
           </div>
        </div>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-10 right-10 z-40 flex gap-2">
           {images.map((_, i) => (
             <div 
               key={i} 
               className={`h-1.5 transition-all duration-700 rounded-full ${i === currentImageIndex ? 'w-10 bg-accent shadow-[0_0_15px_rgba(245,158,11,0.6)]' : 'w-2 bg-white/20'}`}
             ></div>
           ))}
        </div>
      )}

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .animate-fade-in-up {
           animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

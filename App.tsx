
import React from 'react';
import { AppViewScreen } from './screens/AppViewScreen';
import { AppRole, Partner } from './types';

/**
 * Konfiguracja Nibylandii - dane zahardkodowane (bez Supabase)
 */
const NIBYLANDIA: Partner = {
  Id: 7,
  PartnerName: "Nibylandia",
  PartnerNameGenitive: "Nibylandii",
  Slug: "nibylandia",
  LogoUrl: "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/PartnersApp/Partners/Katowice/Nibylandia/LogoNibylandia.png", 
  PhotoUrl: JSON.stringify([
    "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/hf_20260209_135740_55590853-937a-40cf-b162-e6a16ce7568b.webp"
  ]),
  Theme: {
    textColor: "#0f172a",
    fontFamily: "Outfit",
    accentColor: "#FBF043",
    primaryColor: "#E65A7D",
    backgroundColor: "#e2e8f0" // Jasnoszary, nieco ciemniejszy niż slate-100
  },
  HeroHeader: "Stwórz niezapomniane urodziny dla Twojego dziecka"
};

function App() {
  // Symulacja użytkownika gościa dla zachowania kompatybilności komponentów
  const guestUser = { username: 'Gość', role: AppRole.EMPLOYEE };

  return (
    <div className="min-h-screen bg-slate-100">
      <AppViewScreen 
        user={guestUser} 
        partner={NIBYLANDIA} 
        onBack={() => {}} // Funkcja powrotu nie jest już potrzebna
      />
    </div>
  );
}

export default App;

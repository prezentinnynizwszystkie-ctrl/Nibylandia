
import React, { useState, useEffect, useMemo } from 'react';
import { GlassCard } from '../GlassCard';
import { Partner, OrderData } from '../../types';

// Definicja godzin poza komponentem
const TIME_OPTIONS: string[] = [];
for (let h = 10; h <= 20; h++) {
  TIME_OPTIONS.push(`${h}:00`);
  if (h !== 20) TIME_OPTIONS.push(`${h}:30`);
}

interface OrderFormSectionProps {
  partner?: Partner;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({ partner, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderData>({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    birthdayDate: '',
    birthdayTime: '',
    guestsCount: '10',
    catering: '',
    extras: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const creatorBg = "https://idbvgxjvitowbysvpjlk.supabase.co/storage/v1/object/public/NewPartnerApp/UniversalPhotos/HeroFormularz.webp";

  const estimatedPrice = useMemo(() => {
    if (!formData.birthdayDate || !formData.guestsCount) return 0;
    
    const date = new Date(formData.birthdayDate);
    const day = date.getDay(); 
    const isWeekend = day === 0 || day === 5 || day === 6;
    const basePrice = isWeekend ? 75 : 65;
    const guests = parseInt(formData.guestsCount) || 0;
    
    let total = guests * basePrice;

    formData.extras.forEach(extra => {
      switch(extra) {
        case 'Multibajka': total += 149; break;
        case 'Nuggetsy + frytki': total += (15 * guests); break;
        case 'Tosty ser/szynka': total += (9 * guests); break;
        case 'Lody (gałka)': total += (6 * guests); break;
        case 'Dzbanek soku': total += 15; break;
        case 'Własny tort (opłata)': total += 50; break;
        case 'Piniata własna': total += 40; break;
        case 'Piniata z wypełnieniem': total += 120; break;
        case 'Przedłużenie (30m)': total += 100; break;
        case 'Tatuaże brokatowe': total += (10 * guests); break;
        case 'Zamykanie w bańce': total += 150; break;
        case 'Skręcanie balonów': total += 80; break;
        case 'Myszka Miki / Minnie': total += 200; break;
      }
    });

    return total;
  }, [formData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExtraToggle = (label: string) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(label) 
        ? prev.extras.filter(item => item !== label)
        : [...prev.extras, label]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const SectionTitle = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-white/10 rounded-lg text-indigo-400">
        {icon}
      </div>
      <h4 className="text-base font-black text-white uppercase tracking-widest">{title}</h4>
    </div>
  );

  const ExtraGroupTitle = ({ title }: { title: string }) => (
    <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-3 mt-6 flex items-center gap-3">
      <span>{title}</span>
      <div className="h-px bg-white/5 flex-1"></div>
    </div>
  );

  const hasMultibajka = formData.extras.includes('Multibajka');
  const otherExtras = formData.extras.filter(e => e !== 'Multibajka');
  const visibleExtrasLimit = 5;
  const visibleOtherExtras = otherExtras.slice(0, visibleExtrasLimit);
  const hiddenCount = otherExtras.length > visibleExtrasLimit ? otherExtras.length - visibleExtrasLimit : 0;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center bg-slate-950 font-sans select-none overflow-y-auto overflow-x-hidden scroll-smooth">
      
      {/* TŁO KINOWE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={creatorBg} alt="" className="w-full h-full object-cover opacity-80 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80"></div>
      </div>

      {/* NAGŁÓWEK */}
      <div className="relative z-50 w-full max-w-7xl mx-auto p-4 md:p-6 flex items-center justify-between pointer-events-auto">
        <button 
          onClick={onClose}
          className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-all backdrop-blur-xl shadow-2xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          <span className="text-[9px] font-black uppercase tracking-widest">Zamknij</span>
        </button>
        {partner?.LogoUrl && (
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/5 shadow-xl">
            <img src={partner.LogoUrl} className="h-7 md:h-9 w-auto" alt="" />
          </div>
        )}
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 pb-20 items-start">
        
        {/* LEWA STRONA: FORMULARZ */}
        <div className="flex-1 w-full lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto lg:pr-6 scrollbar-thin">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  Zarezerwuj <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-rose-300">Magiczne Urodziny</span>
                </h2>
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
                   <p className="text-white/80 font-bold text-[11px] uppercase tracking-wider">Krok 1: Dane Solenizanta</p>
                </div>
              </div>

              <GlassCard className="p-6 md:p-8 bg-black/40 border-white/10 backdrop-blur-3xl shadow-2xl rounded-3xl">
                <SectionTitle title="Solenizant" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Imię Dziecka</label>
                    <input 
                      required
                      className="w-full bg-white/5 border-b-2 border-white/10 py-2 text-2xl text-white font-black uppercase tracking-tighter focus:outline-none focus:border-indigo-400 transition-all placeholder:text-white/5"
                      placeholder="WPISZ IMIĘ"
                      value={formData.childName}
                      onChange={e => setFormData({...formData, childName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Wiek (które urodziny?)</label>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(age => (
                        <button 
                          key={age}
                          type="button"
                          onClick={() => setFormData({...formData, childAge: age.toString()})}
                          className={`w-9 h-9 rounded-xl text-xs font-black transition-all border ${formData.childAge === age.toString() ? 'bg-indigo-500 border-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-110' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'}`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 md:p-8 bg-black/40 border-white/10 backdrop-blur-3xl shadow-2xl rounded-3xl">
                <SectionTitle title="Termin i Goście" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Data Przyjęcia</label>
                    <input 
                      required
                      type="date"
                      className="w-full bg-white/5 border-b border-white/10 py-2 text-white font-bold focus:outline-none focus:border-rose-400 text-sm"
                      value={formData.birthdayDate}
                      onChange={e => setFormData({...formData, birthdayDate: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Godzina</label>
                    <select 
                      required
                      className="w-full bg-black/40 border-b border-white/10 py-2 text-white font-bold focus:outline-none focus:border-rose-400 appearance-none cursor-pointer text-sm"
                      value={formData.birthdayTime}
                      onChange={e => setFormData({...formData, birthdayTime: e.target.value})}
                    >
                      <option value="" className="bg-slate-900">Wybierz</option>
                      {TIME_OPTIONS.map(time => (
                        <option key={time} value={time} className="bg-slate-900">{time}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Ilość Gości</label>
                    <input 
                      required
                      type="number"
                      min="1"
                      className="w-full bg-white/5 border-b border-white/10 py-2 text-white font-bold focus:outline-none focus:border-rose-400 text-sm"
                      value={formData.guestsCount}
                      onChange={e => setFormData({...formData, guestsCount: e.target.value})}
                    />
                  </div>
                </div>
              </GlassCard>

              {/* SEKJA WYBORU MENU */}
              <GlassCard className="p-6 md:p-8 bg-black/40 border-white/10 backdrop-blur-3xl shadow-2xl rounded-3xl">
                <SectionTitle title="Wybór Menu" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, catering: 'Zestaw "małego smakosza"'})}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all gap-2 ${formData.catering === 'Zestaw "małego smakosza"' ? 'bg-indigo-600/20 border-indigo-400 text-white shadow-lg' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'}`}
                  >
                    <span className="text-xs font-black uppercase tracking-widest text-center">Zestaw "małego smakosza"</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.catering === 'Zestaw "małego smakosza"' ? 'border-indigo-400 bg-indigo-400' : 'border-white/20'}`}>
                       {formData.catering === 'Zestaw "małego smakosza"' && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, catering: 'Zestaw "zgodny z naturą"'})}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all gap-2 ${formData.catering === 'Zestaw "zgodny z naturą"' ? 'bg-emerald-600/20 border-emerald-400 text-white shadow-lg' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'}`}
                  >
                    <span className="text-xs font-black uppercase tracking-widest text-center">Zestaw "zgodny z naturą"</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.catering === 'Zestaw "zgodny z naturą"' ? 'border-emerald-400 bg-emerald-400' : 'border-white/20'}`}>
                       {formData.catering === 'Zestaw "zgodny z naturą"' && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </button>
                </div>
              </GlassCard>

              <GlassCard className="p-6 md:p-8 bg-black/40 border-white/10 backdrop-blur-3xl shadow-2xl rounded-3xl">
                <SectionTitle title="Kontakt" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Imię i Nazwisko Opiekuna</label>
                    <input 
                      required
                      className="w-full bg-white/5 border-b border-white/10 py-2 text-white font-bold focus:outline-none focus:border-indigo-400 transition-all placeholder:text-white/5 text-sm"
                      placeholder="JAN KOWALSKI"
                      value={formData.parentName}
                      onChange={e => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Telefon</label>
                    <input 
                      required
                      type="tel"
                      className="w-full bg-white/5 border-b border-white/10 py-2 text-white font-bold focus:outline-none focus:border-indigo-400 transition-all placeholder:text-white/5 text-sm"
                      placeholder="+48 000 000 000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </GlassCard>

              <div className="space-y-4">
                <SectionTitle title="Dodatki" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>} />

                <button 
                  type="button"
                  onClick={() => handleExtraToggle('Multibajka')}
                  className={`w-full p-5 rounded-3xl border-2 transition-all flex items-center justify-between text-left group backdrop-blur-md relative overflow-hidden ${formData.extras.includes('Multibajka') ? 'bg-yellow-400 border-yellow-400 text-slate-900 shadow-[0_0_30px_rgba(250,204,21,0.4)]' : 'bg-black/60 border-white/10 text-white hover:border-white/30 shadow-xl'}`}
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${formData.extras.includes('Multibajka') ? 'bg-slate-900 text-yellow-400 scale-110' : 'bg-white/5 text-white'}`}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                    </div>
                    <div>
                      <h5 className="text-lg md:text-xl font-black uppercase tracking-tighter leading-none mb-1">Dodaj Multibajkę</h5>
                      <p className={`text-[9px] font-black uppercase tracking-widest ${formData.extras.includes('Multibajka') ? 'text-slate-900/60' : 'text-yellow-400'}`}>Najlepsza pamiątka (149 zł)</p>
                    </div>
                  </div>
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.extras.includes('Multibajka') ? 'border-slate-900 bg-slate-900' : 'border-white/20'}`}>
                    {formData.extras.includes('Multibajka') && <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                </button>

                <div>
                  <ExtraGroupTitle title="Menu i Atrakcje" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    {[
                      {l: 'Nuggetsy + frytki', c: '15 zł'}, {l: 'Tosty ser/szynka', c: '9 zł'}, {l: 'Lody (gałka)', c: '6 zł'}, {l: 'Dzbanek soku', c: '15 zł'},
                      {l: 'Własny tort (opłata)', c: '50 zł'}, {l: 'Piniata własna', c: '40 zł'}, {l: 'Piniata z wypełnieniem', c: '120 zł'}, {l: 'Przedłużenie (30m)', c: '100 zł'},
                      {l: 'Tatuaże brokatowe', c: '10 zł/os'}, {l: 'Zamykanie w bańce', c: '150 zł'}, {l: 'Skręcanie balonów', c: '80 zł'}, {l: 'Myszka Miki / Minnie', c: '200 zł'}
                    ].map(item => (
                      <button 
                        key={item.l}
                        type="button"
                        onClick={() => handleExtraToggle(item.l)}
                        className={`p-3 rounded-2xl border transition-all backdrop-blur-md ${formData.extras.includes(item.l) ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-black/60 border-white/5 text-white/50 hover:border-white/20'}`}
                      >
                        <div className="text-[7px] font-black uppercase opacity-60 mb-1 leading-none">{item.c}</div>
                        <div className="text-[9px] font-black uppercase tracking-widest leading-tight">{item.l}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-slate-950 rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-2xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij Rezerwację'}
                </button>
              </div>
            </form>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up">
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shadow-2xl border border-emerald-500/30">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="bg-black/80 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl w-full">
                    <h2 className="text-5xl font-black text-white tracking-tighter mb-4 uppercase italic">Sukces!</h2>
                    <p className="text-white/80 text-lg font-medium max-w-sm mx-auto mb-8">
                      Zgłoszenie dla <span className="text-indigo-300 font-black">{formData.childName}</span> zostało przekazane do obsługi.
                    </p>
                    
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-[10px] text-rose-400 font-black uppercase tracking-[0.3em] mb-2">Powiadomienie Deweloperskie</p>
                      <p className="text-xs text-white/50 font-medium uppercase tracking-widest leading-relaxed">
                        To jest symulacja systemu rezerwacji. Aby spiąć ten formularz z Państwa systemem (np. e-mail, CRM), prosimy o kontakt z opiekunem.
                      </p>
                    </div>
                </div>
                <button onClick={onClose} className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                   Wróć do strony głównej
                </button>
            </div>
          )}
        </div>

        {/* PRAWA STRONA: PODGLĄD REZERWACJI */}
        <div className="hidden lg:flex w-[460px] flex-col items-center justify-start sticky top-6 self-start max-h-[calc(100vh-60px)]">
          <div className="w-full h-full preview-scaling-wrapper">
            <div className="relative group perspective-1000 w-full">
               <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full opacity-40"></div>
               <GlassCard className="w-full p-8 md:p-10 bg-black/85 border-white/20 backdrop-blur-3xl rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col items-center justify-start text-white relative overflow-hidden transition-all duration-700">
                  
                  <div className="text-center space-y-1 mb-6 w-full">
                     <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">Podgląd Rezerwacji</div>
                     <div className="w-16 h-1 bg-indigo-500/40 mx-auto rounded-full"></div>
                  </div>

                  <div className="flex flex-col items-center justify-start gap-4 text-center w-full">
                     <div className="w-32 h-32 rounded-full border-4 border-white/10 p-2 flex items-center justify-center relative bg-black/40 shadow-inner">
                        <div className={`absolute inset-0 rounded-full border-t-4 border-indigo-400 ${formData.childAge ? 'animate-spin-slow' : ''}`}></div>
                        <div className="text-6xl font-black text-white drop-shadow-2xl">
                           {formData.childAge || '?'}
                        </div>
                     </div>
                     
                     <div className="space-y-1 w-full px-4 overflow-hidden">
                        <h4 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase truncate text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-none">
                           {formData.childName || 'Solenizant'}
                        </h4>
                        <p className="text-white/40 font-black uppercase tracking-[0.4em] text-[10px]">Główny Bohater Przyjęcia</p>
                     </div>

                     <div className="grid grid-cols-2 gap-6 w-full px-4 py-4 border-t border-white/5 mt-2">
                        <div className="text-left space-y-0.5">
                           <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Data i Czas</p>
                           <p className="text-sm font-black text-indigo-200 leading-tight">
                             {formData.birthdayDate || 'BRAK DATY'} <br/>
                             <span className="text-indigo-400 font-bold text-base">{formData.birthdayTime || '--:--'}</span>
                           </p>
                        </div>
                        <div className="text-right space-y-0.5">
                           <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Goście</p>
                           <p className="text-base font-black text-indigo-200 uppercase">{formData.guestsCount || '0'} OSÓB</p>
                        </div>
                     </div>

                     {/* PODGLĄD WYBRANEGO MENU */}
                     <div className="w-full px-4 py-2 border-t border-white/5 text-left animate-fade-in">
                       <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Wybrane Menu:</p>
                       <p className="text-xs font-bold text-indigo-300 uppercase tracking-wide">
                         {formData.catering || 'Nie wybrano'}
                       </p>
                     </div>

                     {(hasMultibajka || otherExtras.length > 0) && (
                       <div className="w-full px-4 py-4 border-t border-white/5 text-left animate-fade-in max-h-[160px] overflow-y-auto scrollbar-hide">
                         <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-3">Wybrane Dodatki:</p>
                         <div className="flex flex-wrap gap-2">
                           {hasMultibajka && (
                             <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-400/40 rounded-xl text-[10px] font-black text-indigo-300 uppercase tracking-wider shadow-lg">
                               ✨ Multibajka
                             </span>
                           )}
                           
                           {visibleOtherExtras.map(extra => (
                             <span key={extra} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-white/70 uppercase tracking-wider">
                               {extra}
                             </span>
                           ))}

                           {hiddenCount > 0 && (
                             <div className="relative group/more inline-block">
                                <span className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-xl text-[10px] font-black text-white/50 uppercase tracking-wider cursor-help">
                                  + {hiddenCount} więcej
                                </span>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-5 bg-slate-900/95 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl opacity-0 invisible group-hover/more:opacity-100 group-hover/more:visible transition-all duration-300 z-50">
                                   <div className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-2 pb-2 border-b border-white/10">Pozostałe dodatki:</div>
                                   <div className="space-y-1.5">
                                      {otherExtras.slice(visibleExtrasLimit).map(e => (
                                        <div key={e} className="text-[10px] font-bold text-white/80 uppercase truncate">• {e}</div>
                                      ))}
                                   </div>
                                   <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-white/20 rotate-45 -mt-1.5"></div>
                                </div>
                             </div>
                           )}
                         </div>
                       </div>
                     )}

                     <div className="w-full px-4 py-6 border-t-2 border-dashed border-white/10 text-center animate-fade-in">
                        <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.5em] mb-1">Szacunkowy Koszt</p>
                        <div className="text-7xl font-black text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                           {estimatedPrice} zł
                        </div>
                        <p className="text-[9px] text-white/20 uppercase font-black mt-4 leading-tight tracking-[0.3em]">
                          Cena ostateczna zostanie <br/>potwierdzona przez managera.
                        </p>
                     </div>
                  </div>
               </GlassCard>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 3px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .perspective-1000 { perspective: 1000px; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        
        @media (min-height: 1000px) {
          .preview-scaling-wrapper { transform: scale(1); }
        }
        @media (max-height: 1000px) and (min-height: 850px) {
          .preview-scaling-wrapper { transform: scale(0.92); transform-origin: top center; }
        }
        @media (max-height: 850px) and (min-height: 750px) {
          .preview-scaling-wrapper { transform: scale(0.85); transform-origin: top center; }
        }
        @media (max-height: 750px) {
          .preview-scaling-wrapper { transform: scale(0.78); transform-origin: top center; }
        }
        
        .preview-scaling-wrapper {
          width: 100%;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

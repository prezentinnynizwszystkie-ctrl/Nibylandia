
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { User, AppRole, Partner } from '../types';
import { supabase } from '../lib/supabase';

interface LoginScreenProps {
  onLogin: (user: User, partnerData?: Partner) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Authenticate with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      if (authData?.user) {
        // 2. Fetch User Profile from PartnersApp.Profiles
        // Note: Profiles is in PartnersApp schema which is set as default in lib/supabase.ts
        const { data: profileData, error: profileError } = await supabase
          .from('Profiles')
          .select('role, partner_id, partner_role')
          .eq('id', authData.user.id)
          .single();

        if (profileError) throw profileError;

        let partner: Partner | undefined = undefined;

        // 3. If user is associated with a partner, fetch Partner details
        if (profileData?.partner_id) {
          const { data: partnerData, error: partnerError } = await supabase
            .from('Partners')
            .select('*')
            .eq('Id', profileData.partner_id)
            .single();

          if (!partnerError) {
            partner = partnerData as Partner;
          }
        }

        // 4. Map DB role to AppRole
        let mappedRole = AppRole.EMPLOYEE;
        if (profileData.role === 'ADMIN') mappedRole = AppRole.ADMIN;
        else if (profileData.partner_role === 'OWNER') mappedRole = AppRole.OWNER;

        onLogin({
          username: authData.user.email || 'Użytkownik',
          role: mappedRole
        }, partner);
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Nieprawidłowy login lub hasło');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md px-4 animate-fade-in-up">
      <GlassCard className="p-8 sm:p-10 relative overflow-hidden shadow-2xl">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg rotate-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center tracking-tight">Witaj w Panelu</h1>
          <p className="text-slate-500 mb-8 text-center text-sm">
            Zaloguj się e-mailem do swojego konta
          </p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <Input 
              label="Adres E-mail" 
              type="email"
              placeholder="np. szef@nibylandia.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Input 
              label="Hasło" 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <div className="text-center p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium animate-pulse">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-3 mt-2">
              <Button 
                type="submit" 
                fullWidth 
                size="lg"
                disabled={loading}
              >
                {loading ? 'Logowanie...' : 'Zaloguj się'}
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Dedykowany Portal dla Partnerów MultiBajka
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

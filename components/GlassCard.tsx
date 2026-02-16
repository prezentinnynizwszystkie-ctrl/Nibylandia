import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        backdrop-blur-xl 
        shadow-[0_8px_32px_0_rgba(15,23,42,0.05)] 
        rounded-2xl 
        bg-[var(--glass-bg,rgba(255,255,255,0.7))]
        border
        border-[var(--glass-border,rgba(255,255,255,0.8))]
        ${className}
      `}
    >
      {children}
    </div>
  );
};
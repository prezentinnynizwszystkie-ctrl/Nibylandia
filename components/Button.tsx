
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "rounded-xl font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-10 py-4 text-lg"
  };

  const variants = {
    primary: "bg-primary hover:brightness-110 text-white shadow-md hover:shadow-primary/30",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white shadow-md",
    glass: "bg-white/40 hover:bg-white/60 border border-white text-slate-800 backdrop-blur-md"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

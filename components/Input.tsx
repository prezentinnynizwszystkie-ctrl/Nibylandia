import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 mb-1">
        {label}
      </label>
      <input
        className={`
          w-full
          bg-white
          border border-slate-200
          rounded-xl
          px-4 py-3
          text-slate-800
          placeholder-slate-300
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500/20
          focus:border-indigo-500
          transition-all duration-300
          shadow-sm
        `}
        {...props}
      />
      {error && (
        <span className="text-red-500 text-xs ml-1 mt-1 font-medium px-2 py-0.5 rounded w-fit">
          {error}
        </span>
      )}
    </div>
  );
};
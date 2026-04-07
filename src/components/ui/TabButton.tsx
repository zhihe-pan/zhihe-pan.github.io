import React from 'react';
import { cn } from '../../utils/cn';

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const TabButton: React.FC<TabButtonProps> = ({ active, className, children, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
        active 
          ? "border-transparent bg-gradient-to-br from-accent to-[#5a8fca] text-white shadow-[0_16px_34px_rgba(47,111,179,0.24)]" 
          : "border-border bg-white/70 text-inherit hover:-translate-y-0.5 hover:border-black/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

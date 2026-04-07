import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GlassCard: React.FC<GlassCardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/50 bg-white/60 shadow-[0_24px_80px_rgba(40,68,102,0.12)] backdrop-blur-md",
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

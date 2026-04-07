import React from 'react';
import { profile } from '../../data/profile';
import { FadeIn } from '../ui/FadeIn';

export const AboutSection: React.FC = () => {
  return (
    <FadeIn>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold font-sans tracking-tight">关于我</h3>
      </div>
      
      <div className="rounded-[18px] border border-border bg-white/60 p-6 md:p-8 space-y-4 text-foreground/90 leading-relaxed text-[1.08rem]">
        <h2 className="from-[#12385f] via-[#2f6fb3] to-[#84a8d8] bg-gradient-to-br bg-clip-text text-transparent font-sans text-4xl md:text-5xl font-extrabold pb-2 mb-2 inline-block drop-shadow-sm">
          {profile.greeting}
        </h2>
        <p className="font-medium text-foreground">{profile.status}</p>
        {profile.aboutBody.split('\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-[14px] border border-border bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/15 hover:bg-white/90"
            >
              <span className="block font-sans font-medium text-foreground text-[1.02rem]">
                {link.label}
              </span>
              <span className="mt-1.5 block text-muted text-[0.96rem] break-words">
                {link.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

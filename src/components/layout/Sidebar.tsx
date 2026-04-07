import React from 'react';
import { profile } from '../../data/profile';
import { Mail } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const Sidebar: React.FC = () => {
  return (
    <GlassCard className="sticky top-6 flex h-full flex-col gap-4 border-white/60 bg-gradient-to-br from-white/95 to-[#eaf2fb]/80 p-5 shadow-none">
      <div className="relative min-h-[360px] flex-shrink-0 overflow-hidden rounded-[26px] border border-white/55 bg-[#dbe6f2]">
        <img
          src="/image/侧.jpeg"
          alt="潘之禾个人照片"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 8%' }}
        />
      </div>
      <div className="px-0.5 text-center text-muted">
        <strong className="mb-1.5 block font-sans text-2xl font-bold text-foreground">
          {profile.name}
        </strong>
        <div className="mt-1 text-[0.98rem]">{profile.title_1}</div>
        <div className="mt-1 text-[0.98rem]">{profile.title_2}</div>
        <a
          href={`mailto:${profile.email}`}
          className="mt-2.5 inline-flex items-center justify-center gap-2 text-[0.98rem] text-accent-deep no-underline transition-colors hover:text-accent"
        >
          <Mail className="h-4 w-4" />
          <span>{profile.email}</span>
        </a>
      </div>
    </GlassCard>
  );
};

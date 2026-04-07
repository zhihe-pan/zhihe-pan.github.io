import React from 'react';
import { presentWork } from '../../data/research';
import { FadeIn } from '../ui/FadeIn';

export const PresentSection: React.FC = () => {
  return (
    <FadeIn>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold font-sans tracking-tight">进行中的研究</h3>
      </div>

      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4">
        {presentWork.map((work, idx) => (
          <div
            key={idx}
            className="flex flex-col h-full rounded-[24px] border border-border bg-white/60 p-6 transition-all duration-300 hover:border-black/10"
          >
            <strong className="block font-sans text-[1.05rem] text-foreground mb-3">
              {work.title}
            </strong>
            <div className="space-y-3 flex-1 text-[0.96rem] text-muted leading-relaxed">
              {work.desc.map((p, i) => (
                <p key={i} className="whitespace-pre-line">{p}</p>
              ))}
            </div>
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 self-end inline-flex rounded-full bg-[#dce8f7]/70 px-4 py-2 text-[0.92rem] text-accent-deep transition-colors hover:bg-[#dce8f7]"
              >
                实验链接
              </a>
            )}
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

import React from 'react';
import { educationList } from '../../data/education';
import { FadeIn } from '../ui/FadeIn';

export const EducationSection: React.FC = () => {
  return (
    <FadeIn>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold font-sans tracking-tight">教育经历</h3>
      </div>

      <div className="grid gap-4">
        {educationList.map((edu, idx) => (
          <article
            key={idx}
            className="flex flex-col md:flex-row items-start gap-5 p-5 md:p-6 rounded-[24px] border border-border bg-white/60"
          >
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-inner">
              <img src={edu.logo} alt={`${edu.school} logo`} className="h-16 w-16 object-contain" />
            </div>
            <div>
              <div className="mb-2 text-[0.95rem] text-muted">{edu.period}</div>
              <div className="mb-1 font-sans text-[1.08rem] font-medium text-foreground">
                {edu.school}
              </div>
              <div className="text-[1rem] text-foreground/90">{edu.degree}</div>
              <ul className="mt-3 list-disc pl-5 text-[0.96rem] text-muted space-y-1">
                {edu.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </FadeIn>
  );
};

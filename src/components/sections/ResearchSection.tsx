import React from 'react';
import { researchProjects } from '../../data/research';
import { FadeIn } from '../ui/FadeIn';
import { ExternalLink } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <FadeIn>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold font-sans tracking-tight">研究项目（部分）</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {researchProjects.map((project, idx) => (
          <article
            key={idx}
            className="flex flex-col h-full rounded-[24px] border border-border bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_16px_40px_rgba(40,68,102,0.06)]"
          >
            <div className="mb-4 w-fit rounded-full bg-accent-soft px-3 py-1.5 font-sans text-[0.84rem] text-accent-deep">
              {project.role}
            </div>
            <h3 className="mb-3 font-sans text-[1.05rem] font-medium leading-[1.45] text-foreground">
              {project.title}
            </h3>
            <p className="text-[0.96rem] text-muted mb-4">{project.summary}</p>
            <ul className="mb-6 list-disc pl-4 text-[0.9rem] text-muted space-y-1.5">
              {project.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto self-end inline-flex items-center gap-1.5 rounded-full bg-[#dce8f7]/70 px-4 py-2 text-[0.92rem] text-accent-deep border border-transparent transition-colors hover:border-accent/20 hover:bg-[#dce8f7]"
              >
                <span>了解更多</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </article>
        ))}
      </div>
    </FadeIn>
  );
};

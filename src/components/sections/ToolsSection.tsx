import React from 'react';
import { toolsList } from '../../data/tools';
import { FadeIn } from '../ui/FadeIn';

export const ToolsSection: React.FC = () => {
  return (
    <FadeIn>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold font-sans tracking-tight">方法与工具</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {toolsList.map((tool, idx) => (
          <article
            key={idx}
            className="flex flex-col rounded-[24px] border border-border bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/10"
          >
            <h3 className="mb-3 font-sans text-[1.05rem] font-medium text-foreground">
              {tool.category}
            </h3>
            <ul className="list-disc pl-4 text-[0.92rem] text-muted space-y-1.5">
              {tool.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </FadeIn>
  );
};

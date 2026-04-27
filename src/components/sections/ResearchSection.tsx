import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { researchData } from '../../data/research';

const h = (text: string, keyword: string): React.ReactNode => {
  const idx = text.indexOf(keyword);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-accent-purple font-semibold">{keyword}</span>
      {text.slice(idx + keyword.length)}
    </>
  );
};

export const ResearchSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const rd = t(researchData);

  const keyword = lang === 'cn' ? '如何' : 'How';
  const labels = {
    legend: {
      direction: lang === 'cn' ? '研究方向' : 'Direction',
      question: lang === 'cn' ? '核心问题' : 'Question',
      project: lang === 'cn' ? '研究项目' : 'Project',
    },
    published: lang === 'cn' ? '已发表研究' : 'Published Research',
    present: lang === 'cn' ? '进行中工作' : 'Work in Progress',
    doi: lang === 'cn' ? '论文链接' : 'DOI',
    tryTraining: lang === 'cn' ? '体验训练' : 'Try Training',
    firstAuthor: { cn: '第一作者', en: 'First Author' },
  };

  return (
    <section id="research" className="py-24 px-6 md:px-12 bg-violet-50 text-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24 relative z-10">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-accent-purple font-semibold uppercase tracking-widest text-sm">{rd.tag}</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 leading-tight text-foreground">
            {rd.title}
          </h2>
          <p className="text-xl text-muted mt-5 leading-relaxed">
            {rd.subtitle}
          </p>
        </motion.div>

        {/* ===== Research Framework ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="rounded-2xl bg-white/60 p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            {researchData.framework.map((column, colIdx) => {
              const qStart = colIdx * 3 + 1;
              return (
                <div key={colIdx}>
                  {/* Direction heading */}
                  <h3 className="text-sm font-semibold text-accent-purple/60 uppercase tracking-[0.2em] mb-3">
                    {lang === 'cn' ? '研究方向' : 'Direction'} 0{colIdx + 1}
                  </h3>
                  <p className="text-xl md:text-2xl font-serif font-bold leading-snug text-foreground/90 pb-5 mb-5 border-b border-accent-purple/15">
                    {h(column.direction[lang], keyword)}
                  </p>

                  {/* Items */}
                  <div className="space-y-6">
                    {column.items.map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex items-start gap-3.5">
                          <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border border-blue-400/40 bg-blue-50 flex items-center justify-center text-[11px] font-semibold text-blue-600">
                            {qStart + i}
                          </span>
                          <div className="flex-1 min-w-0 pt-0.5">
                            <p className="text-sm leading-relaxed text-foreground/85">
                              {item.q[lang]}
                            </p>
                            <p className="text-sm leading-relaxed text-muted/50 italic mt-1.5">
                              {item.p[lang]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </motion.div>

        {/* ===== Published & Present Work ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Published */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent-purple/10">
                  <BookOpen className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  {labels.published}
                </h3>
              </div>

              {researchData.projects.map((proj, idx) => {
                const content = proj[lang];
                return (
                  <div key={idx} className="rounded-2xl bg-white/60 p-6 md:p-8 flex flex-col gap-5">
                    <div>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple">
                        {content.role}
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-serif font-bold leading-snug text-foreground">
                      {content.title}
                    </h4>

                    <ul className="space-y-2.5 flex-1">
                      {content.points.map((point: string, pi: number) => (
                        <li key={pi} className="flex items-start gap-2.5 text-sm text-muted/85 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-purple/40 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-end inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:text-accent-purple/80 transition-colors mt-auto pt-2"
                      >
                        {labels.doi}
                        <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Present Work */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10">
                  <FlaskConical className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  {labels.present}
                </h3>
              </div>

              {researchData.presentWork.map((work, idx) => {
                const content = work[lang];
                return (
                  <div key={idx} className="rounded-2xl bg-white/60 p-6 md:p-8 flex flex-col gap-4">
                    <h4 className="text-lg md:text-xl font-serif font-bold leading-snug text-foreground">
                      {content.title}
                    </h4>
                    <div className="text-sm text-muted/80 leading-relaxed flex-1 space-y-2">
                      {content.desc.split('\n').map((line: string, li: number) => (
                        <p key={li}>{line}</p>
                      ))}
                    </div>
                    {work.link ? (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-end inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors mt-auto pt-2"
                      >
                        {labels.tryTraining}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs text-muted/40 italic">
                        {lang === 'cn' ? '即将上线' : 'Coming soon'}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

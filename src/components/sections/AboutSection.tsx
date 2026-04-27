import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { educationList } from '../../data/education';

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const p = t(profile);

  const uiText = {
    tag: { cn: '关于我', en: 'About Me' },
    eduTitle: { cn: '教育经历', en: 'Education' },
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <span className="text-accent-purple font-semibold uppercase tracking-widest text-sm">
            {uiText.tag[lang]}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="text-lg leading-relaxed text-foreground/85 space-y-4">
              {p.aboutBody.split('\n').map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {p.links.map((link: any, idx: number) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-card border border-border hover:border-accent-purple/30 hover:bg-accent-purple/5 transition-all group"
                >
                  <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-blue-500' : 'bg-accent-purple'} group-hover:scale-125 transition-transform`} />
                  <span className="font-medium text-sm">{link.label}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-40 group-hover:opacity-80 transition-opacity">
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 lg:-mt-20"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-6">
              {uiText.eduTitle[lang]}
            </h3>
            <div className="space-y-0 relative">
              {/* Timeline line */}
              <div className="absolute left-[27px] top-2 bottom-2 w-px bg-border" />

              {educationList.map((edu, index) => (
                <div key={index} className="relative flex gap-5 pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <img
                      src={edu.logo}
                      alt={edu[lang].school}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-sm text-muted/60">{edu[lang].period}</span>
                    <h4 className="text-lg font-serif font-bold text-foreground">{edu[lang].school}</h4>
                    <p className="text-base text-foreground/80">{edu[lang].degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

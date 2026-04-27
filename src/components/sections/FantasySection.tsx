import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { fantasyData } from '../../data/fantasy';

export const FantasySection: React.FC = () => {
  const { t } = useLanguage();
  const fd = t(fantasyData);

  return (
    <section id="fantasy" className="min-h-screen py-24 px-6 md:px-12 bg-[#E8F4F8] text-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-blue-200/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-teal-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 md:mb-16"
        >
          <span className="text-teal-600/60 font-semibold uppercase tracking-widest text-sm">{fd.tag}</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 text-foreground">{fd.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute -inset-4 bg-blue-300/10 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-white/40 bg-white/30">
                <img
                  src="/image/蓝树.png"
                  alt="蓝树"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-3xl font-serif font-medium leading-relaxed text-foreground/85">
              {fd.subtitle}
            </p>
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-foreground/60">
              {fd.story}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

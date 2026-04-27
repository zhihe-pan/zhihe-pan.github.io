import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const p = t(profile);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const uiText = {
    scroll: { cn: '向下滚动探索', en: 'Scroll to explore' },
    identity: { cn: '心理学博士生 · 氛围编程者 · 音乐人', en: 'PhD Student · Vibe Coder · Musician' },
  };

  const slogan = p.slogan;

  useEffect(() => {
    let i = 0;
    setDisplayText('');
    const timer = setInterval(() => {
      setDisplayText(slogan.slice(0, i));
      i++;
      if (i > slogan.length) clearInterval(timer);
    }, 45);
    return () => clearInterval(timer);
  }, [lang, slogan]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-x-hidden bg-academic scroll-mt-0">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-purple/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-400/5 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-5 lg:gap-6 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple text-[10px] md:text-xs font-semibold tracking-wide"
          >
            {uiText.identity[lang]}
          </motion.div>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1]">
              {p.name}
            </h1>
          </div>

          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-muted min-h-[3rem] md:min-h-[4rem]">
            {displayText}
            <span className={`inline-block w-0.5 h-4 md:h-5 bg-accent-purple ml-0.5 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm lg:max-w-xs order-1 lg:order-2 mx-auto lg:mx-0"
        >
          <div className="absolute inset-4 bg-accent-purple/10 rounded-[2.5rem] -rotate-2" />
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40">
            <img
              src="/image/hero-side.jpg"
              alt={p.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs"
      >
        <span>{uiText.scroll[lang]}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

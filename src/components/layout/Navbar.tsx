import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = {
    about: { cn: '关于', en: 'About' },
    research: { cn: '学术', en: 'Research' },
    coding: { cn: '编程', en: 'Coding' },
    life: { cn: '生活', en: 'Life' },
    fantasy: { cn: '幻想', en: 'Fantasy' },
  };

  const contactText = { cn: '联系我', en: 'Contact' };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-6 py-3 md:py-4 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-white/70 border-b border-black/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2" onClick={closeMobile}>
          <span className="font-sans text-lg md:text-xl font-bold tracking-[0.15em]">ZHIHE PAN</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {Object.entries(navItems).map(([key, item]) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm font-medium hover:text-accent-purple transition-colors relative group"
            >
              {lang === 'cn' ? item.cn : item.en}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center p-0.5 rounded-full bg-black/5 backdrop-blur-sm border border-black/5">
            <button
              onClick={() => setLang('cn')}
              className={`px-2.5 md:px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'cn' ? 'bg-white text-accent-purple shadow-sm' : 'text-muted hover:text-foreground'}`}
            >
              CN
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 md:px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'en' ? 'bg-white text-accent-purple shadow-sm' : 'text-muted hover:text-foreground'}`}
            >
              EN
            </button>
          </div>
          <a
            href="mailto:zhpan@zju.edu.cn"
            className="hidden sm:block px-4 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:scale-105 transition-transform"
          >
            {lang === 'cn' ? contactText.cn : contactText.en}
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[90] transition-all duration-400 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMobile}
        />
        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 w-64 h-full bg-white shadow-2xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col pt-20 px-6 gap-1">
            {Object.entries(navItems).map(([key, item]) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={closeMobile}
                className="px-4 py-3.5 text-base font-medium text-foreground/80 hover:text-accent-purple hover:bg-accent-purple/5 rounded-xl transition-all"
              >
                {lang === 'cn' ? item.cn : item.en}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="mailto:zhpan@zju.edu.cn"
                onClick={closeMobile}
                className="block px-4 py-3.5 text-base font-medium text-accent-purple/80 hover:text-accent-purple hover:bg-accent-purple/5 rounded-xl transition-all"
              >
                {lang === 'cn' ? '📧 联系我' : '📧 Contact'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

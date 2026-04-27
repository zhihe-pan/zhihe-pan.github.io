import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();

  const copyright = {
    cn: '© 2026 潘之禾',
    en: '© 2026 Zhihe Pan',
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="text-sm text-muted text-center">
          {copyright[lang]}
        </div>
      </div>
    </footer>
  );
};

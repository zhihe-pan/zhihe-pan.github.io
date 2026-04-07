import React, { useState } from 'react';
import { Header, type TabId } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: (activeTab: TabId) => React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  return (
    <div className="relative z-10 mx-auto w-[min(1240px,100%-28px)] max-w-full px-0 py-6 pb-12">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Sidebar />
        
        <div className="rounded-[34px] border border-white/56 bg-surface shadow-[0_24px_80px_rgba(40,68,102,0.12)] backdrop-blur-md min-h-full overflow-hidden p-6 md:p-8">
          {children(activeTab)}
        </div>
      </div>

      <footer className="mt-5 flex flex-col items-start justify-between gap-3 px-1.5 pt-4 text-[0.92rem] text-muted md:flex-row">
        <span>© 2026 Zhihe Pan</span>
        <span>Tabbed personal homepage</span>
      </footer>
    </div>
  );
};

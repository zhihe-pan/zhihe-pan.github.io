import React from 'react';
import { TabButton } from '../ui/TabButton';

export const TABS = [
  { id: 'about', label: '关于我' },
  { id: 'focus', label: '教育经历' },
  { id: 'research', label: '研究与项目' },
  { id: 'present', label: '现在进行时' },
  { id: 'tools', label: '方法与工具' },
  { id: 'life', label: '生活切片' },
] as const;

export type TabId = typeof TABS[number]['id'];

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="mb-5 flex flex-col items-start gap-5 px-0.5 md:flex-row md:items-center md:justify-between">
      <div className="font-sans text-[0.92rem] uppercase tracking-[0.18em] text-muted">
        Personal Website
      </div>
      <nav className="flex flex-wrap gap-2.5" role="tablist">
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </TabButton>
        ))}
      </nav>
    </header>
  );
};

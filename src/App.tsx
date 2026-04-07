import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import type { TabId } from './components/layout/Header';

import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { PresentSection } from './components/sections/PresentSection';
import { ToolsSection } from './components/sections/ToolsSection';
import { LifeSection } from './components/sections/LifeSection';

const App: React.FC = () => {
  return (
    <MainLayout>
      {(activeTab: TabId) => {
        switch (activeTab) {
          case 'about': return <AboutSection key="about" />;
          case 'focus': return <EducationSection key="focus" />;
          case 'research': return <ResearchSection key="research" />;
          case 'present': return <PresentSection key="present" />;
          case 'tools': return <ToolsSection key="tools" />;
          case 'life': return <LifeSection key="life" />;
          default: return null;
        }
      }}
    </MainLayout>
  );
};

export default App;

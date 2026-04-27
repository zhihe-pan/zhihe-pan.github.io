import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { VibeCodingLab } from './components/sections/VibeCodingLab';
import { LifeSection } from './components/sections/LifeSection';
import { FantasySection } from './components/sections/FantasySection';
import { Footer } from './components/layout/Footer';
import { LanguageProvider } from './context/LanguageContext';

const AppContent: React.FC = () => {
  return (
    <div className="noise-overlay min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <VibeCodingLab />
        <LifeSection />
        <FantasySection />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;

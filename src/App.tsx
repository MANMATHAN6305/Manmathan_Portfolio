import { useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage.tsx';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/education': 'Education',
  '/skills': 'Skills',
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/achievements': 'Achievements',
  '/gallery': 'Gallery',
  '/contact': 'Contact',
};

function AppLayout({
  theme,
  toggleTheme,
}: {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}) {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    const label = PAGE_TITLES[location.pathname] ?? 'Portfolio';
    return `Manmathan S | ${label}`;
  }, [location.pathname]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <BrowserRouter>
      <AppLayout theme={theme} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}

export default App;
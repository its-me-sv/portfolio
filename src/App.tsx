import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppContainer } from './app.styles';

import Loader from './components/loader';
import Header from './components/header';
import Footer from './components/footer';

import { useCommonContext } from "./contexts/common.context";
import { useMenuContext } from "./contexts/menu.context";

// pages
const HomePage = lazy(() => import('./pages/home'));
const AboutMePage = lazy(() => import('./pages/about-me'));
const ProfilesPage = lazy(() => import('./pages/profiles'));
const TranscriptPage = lazy(() => import('./pages/transcript'));
const ProjectsPage = lazy(() => import('./pages/projects'));
const AchievementsPage = lazy(() => import('./pages/achievements'));
const BlogsPage = lazy(() => import('./pages/blog'));
const QuotesPage = lazy(() => import('./pages/quotes'));

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { loading, setLoading } = useCommonContext();
  const { setMenuOpen } = useMenuContext();
  
  useEffect(() => {
    setLoading!(true);
    const timer = setTimeout(() => setLoading!(false), 2100);
    const timer1 = setTimeout(() => setMenuOpen!(true), 2800);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    }
  }, []);

  return (
    <AppContainer>
      {loading && <Loader />}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/transcript" element={<TranscriptPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </AppContainer>
  );
};

export default App;


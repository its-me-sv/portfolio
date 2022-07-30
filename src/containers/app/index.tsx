import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AppContainer } from "./styles";
import { menuTranslations } from "../../utils/translations.util";

import Loader from "../../components/loader";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useCommonContext } from "../../contexts/common.context";
import { useMenuContext } from "../../contexts/menu.context";

// pages
const HomePage = lazy(() => import("../../pages/home"));
const AboutMePage = lazy(() => import("../../pages/about-me"));
const ProfilesPage = lazy(() => import("../../pages/profiles"));
const TranscriptPage = lazy(() => import("../../pages/transcript"));
const ProjectsPage = lazy(() => import("../../pages/projects"));
const AchievementsPage = lazy(() => import("../../pages/achievements"));
const BlogsPage = lazy(() => import("../../pages/blog"));
const QuotesPage = lazy(() => import("../../pages/quotes"));
const StatsPage = lazy(() => import("../../pages/stats"));

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { loading, setLoading, language, isDark, isMobile } = useCommonContext();
  const { setMenuOpen, menu } = useMenuContext();

  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen!(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    setLoading!(true);
    const timer = setTimeout(() => setLoading!(false), 2100);
    return () => {
      clearTimeout(timer);
      setMenuOpen!(false);
    };
  }, [menu]);

  useEffect(() => {
    const pageName: string = Object.values(menuTranslations)[menu][+language];
    window.document.title = `${
      pageName[0].toUpperCase() + pageName.slice(1)
    } | Suraj Vijay`;
  }, [menu, language]);

  return (
    <AppContainer dark={isDark}>
      {loading && <Loader />}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/transcript/*" element={<TranscriptPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </Suspense>
      {!isMobile && <Footer />}
    </AppContainer>
  );
};

export default App;

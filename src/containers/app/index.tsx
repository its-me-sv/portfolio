import { useEffect, lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "styled-components";

import { AppContainer } from "./styles";
import { menuTranslations, toastTranslations } from "../../utils/translations.util";
import { toastOptions } from "../../utils/config.util";
import { lightTheme, darkTheme } from "../../utils/themes.util";
import { GlobalStyle } from "../../utils/styles.util";

import Loader from "../../components/loader";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Comments from "../../components/comments";

import { useCommonContext } from "../../contexts/common.context";
import { useMenuContext } from "../../contexts/menu.context";
import { useCommentsContext } from '../../contexts/comments.context';
import axios from "axios";
import { API_URL } from "../../utils/constants.util";

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
const ErrorPage = lazy(() => import("../../pages/error404"));

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { loading, setLoading, language, isDark, isMobile } = useCommonContext();
  const { setMenuOpen, menu } = useMenuContext();
  const { section } = useCommentsContext();
  const [load1, setLoad1] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen!(true), 4000);
    const timer1 = setTimeout(() => {
      toast(toastTranslations.fstInf[+language], {duration: 3000});
    });
    axios.get(`${API_URL}/api/validation/server`)
    .then(() => setLoad1(false));
    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
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
    } | Suraj Vijayan`;
  }, [menu, language]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Toaster position="top-right" toastOptions={toastOptions(isDark)} />
        {loading && <Loader />}
        {load1 && <Loader />}
        {section && <Comments />}
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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
        {!isMobile && <Footer />}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

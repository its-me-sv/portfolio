import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { error404Translations, menuTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const { language } = useCommonContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.document.title = `${error404Translations.title[+language]} | Suraj Vijay`;
    const timer = setTimeout(() => {
      navigate(`/`);
    }, 4200);
    return () => {
      const pageName: string = menuTranslations.home[+language];
      window.document.title = `${
        pageName[0].toUpperCase() + pageName.slice(1)
      } | Suraj Vijayan`;
      clearTimeout(timer);
    };
  }, [language, navigate]);

  return (
    <Container>
      <span>{error404Translations.title[+language]}</span>
      <span>
        {error404Translations.caption1[+language]}<br />
        {error404Translations.caption2[+language]}
      </span>
    </Container>
  );
};

export default ErrorPage;

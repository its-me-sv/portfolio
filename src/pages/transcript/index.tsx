import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { transcriptMenuTranslations } from '../../utils/translations.util';
import { PageContainer } from '../../utils/styles.util';

import TranscriptMenu from '../../components/transcript-menu';
import Certificates from "../../components/certificates";
import CertificateOverview from '../../components/certificates/certificate-overview.component';
import Badges from "../../components/badges";
import Skills from "../../components/skills";

import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface TranscriptPageProps {}

const TranscriptPage: React.FC<TranscriptPageProps> = () => {
  const { language } = useCommonContext();
  const { setMenu, transMenu, setTransMenu } = useMenuContext();
  const { currCertificate } = useTranscriptContext();

  useEffect(() => {
    setMenu!(3);
    setTransMenu!(0);
  }, []);

  useEffect(() => {
    const category: string = Object.values(transcriptMenuTranslations)[
      transMenu
    ][+language];
    window.document.title = `${category} | Suraj Vijay`;
  }, [transMenu, language]);

  return (
    <PageContainer>
      {currCertificate && <CertificateOverview />}
      <TranscriptMenu />
      <Routes>
        <Route path="certificates" element={<Certificates />} />
        <Route path="badges" element={<Badges />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </PageContainer>
  );
};

export default TranscriptPage;

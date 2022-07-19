import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Certificates from "../../components/certificates";
import Badges from "../../components/badges";
import Skills from "../../components/skills";

import { useMenuContext } from '../../contexts/menu.context';

interface TranscriptPageProps {}

const TranscriptPage: React.FC<TranscriptPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(3), []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="certificates" />} />
      <Route path="certificates" element={<Certificates />} />
      <Route path="badges" element={<Badges />} />
      <Route path="skills" element={<Skills />} />
    </Routes>
  );
};

export default TranscriptPage;

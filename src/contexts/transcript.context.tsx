import { createContext, ReactNode, useContext, useState } from 'react';
import { Certificate, certificates } from '../data/certificates.data';
import { Badge, badges } from '../data/badges.data';
import { Skill, skills } from '../data/skills.data';

interface TranscriptContenxtInterface {
  certificates: Array<Certificate>;
  badges: Array<Badge>;
  skills: Array<Skill>;
  currCertificate: null|Certificate;
  setCurrCertificate?: (val: null|Certificate) => void;
}

const defaultState: TranscriptContenxtInterface = {
  certificates,
  badges,
  skills,
  currCertificate: null
};

export const TranscriptContext = createContext<TranscriptContenxtInterface>(defaultState);

export const useTranscriptContext = () => useContext(TranscriptContext);

export const TranscriptContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [currCertificate, setCurrCertificate] = useState<null|Certificate>(defaultState.currCertificate);
  
  return (
    <TranscriptContext.Provider value={{
      certificates: defaultState.certificates,
      badges: defaultState.badges,
      skills: defaultState.skills,
      currCertificate, setCurrCertificate
    }}>
      {children}
    </TranscriptContext.Provider>
  );
};

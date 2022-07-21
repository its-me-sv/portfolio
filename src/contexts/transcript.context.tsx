import { createContext, ReactNode, useContext, useState } from 'react';
import { Certificate, certificates } from '../utils/certificates-data.util';
import { Badge, badges } from '../utils/badges-data.util';

interface TranscriptContenxtInterface {
  certificates: Array<Certificate>;
  badges: Array<Badge>;
  currCertificate: null|Certificate;
  setCurrCertificate?: (val: null|Certificate) => void;
}

const defaultState: TranscriptContenxtInterface = {
  certificates,
  badges,
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
      currCertificate, setCurrCertificate
    }}>
      {children}
    </TranscriptContext.Provider>
  );
};

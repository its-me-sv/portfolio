import {useEffect} from 'react';

import {useMenuContext} from '../../contexts/menu.context';

interface TranscriptPageProps {}

const TranscriptPage: React.FC<TranscriptPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(3), []);

  return <h1>Transcript</h1>;
};

export default TranscriptPage;

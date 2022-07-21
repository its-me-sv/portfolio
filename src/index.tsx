import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './containers/app';

import { CommonContextProvider } from './contexts/common.context';
import { MenuContextProvider } from './contexts/menu.context';
import { TranscriptContextProvider } from './contexts/transcript.context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <CommonContextProvider>
        <MenuContextProvider>
          <TranscriptContextProvider>
            <App />
          </TranscriptContextProvider>
        </MenuContextProvider>
      </CommonContextProvider>
    </HashRouter>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './containers/app';

import RootContextProvider from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <RootContextProvider>
        <App />
      </RootContextProvider>
    </HashRouter>
  </React.StrictMode>
);

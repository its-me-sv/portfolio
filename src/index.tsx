import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './containers/app';

import { CommonContextProvider } from './contexts/common.context';
import { MenuContextProvider } from './contexts/menu.context';
import { TranscriptContextProvider } from './contexts/transcript.context';
import { ProjectContextProvider } from './contexts/project.context';
import { AchievementContextProvider } from './contexts/achievement.context';
import { StatContextProvider } from './contexts/stat.context';
import { CommentsContextProvider } from './contexts/comments.context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <CommonContextProvider>
        <MenuContextProvider>
          <TranscriptContextProvider>
            <ProjectContextProvider>
              <AchievementContextProvider>
                <StatContextProvider>
                  <CommentsContextProvider>
                    <App />
                  </CommentsContextProvider>
                </StatContextProvider>
              </AchievementContextProvider>
            </ProjectContextProvider>
          </TranscriptContextProvider>
        </MenuContextProvider>
      </CommonContextProvider>
    </HashRouter>
  </React.StrictMode>
);


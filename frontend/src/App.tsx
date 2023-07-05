import React from 'react';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyle from './styles/GlobalStyle';
import { AppRouter } from './components/router/AppRouter';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { usePWA } from './hooks/usePWA';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { themeObject } from './styles/themes/themeVariables';
import MainState from './context/mainState';
import { useAppDispatch } from './hooks/reduxHooks';
import { setTheme } from './store/slices/themeSlice';
import MapContainer from './components/myProfile/MapContainer';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setTheme('light'));

  const theme = 'light';
  usePWA();

  useAutoNightMode();

  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider>
          <MapContainer>
            {/* This MainSTate handle The Global STate Management */}
            <MainState>
              <AppRouter />
            </MainState>
          </MapContainer>
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
};

export default App;

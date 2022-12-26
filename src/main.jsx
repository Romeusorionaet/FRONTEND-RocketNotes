import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/global';
import ReactDOM from 'react-dom/client';
import React from 'react';

import theme from './styles/theme';

import {Routes} from './routes';

import {AuthProvider} from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
import React from 'react';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';

import ColorModeContextProvider from 'hook/context/ColorModeContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeContextProvider>
        <GlobalStyles />
        <Routes />
      </ColorModeContextProvider>
    </ThemeProvider>
  );
};

export default App;

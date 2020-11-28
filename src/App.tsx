import React from 'react';
import './styles.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#066ace',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EBEBEB',
    },
  },
});

const App = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log(registration);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <h1>React PWA App</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;

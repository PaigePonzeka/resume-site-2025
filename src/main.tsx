import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/resume-site-2025">
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Applies dark background + text colors */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import './index.css';

// Handle redirect from 404.html
const handleRedirect = () => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect');
  if (redirect && redirect !== '/') {
    window.history.replaceState(null, '', redirect);
  }
};

const Root = () => {
  React.useEffect(() => {
    handleRedirect();
  }, []);

  // Set basename to empty string for local development
  const basename = import.meta.env.PROD ? '/resume-site-2025' : '/';

  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

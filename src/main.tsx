import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter} from 'react-router-dom';
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies dark background + text colors */}
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/resume-site-2025">
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

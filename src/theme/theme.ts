import { createTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';


const pulseGlow = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4ea398',
    },
    secondary: {
      main: '#98b3aa',
    },
    background: {
      default: '#0d1a16',
      paper: '#1c2b26',
    },
    text: {
      primary: '#e1f1ec',
      secondary: '#a5bfb8',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
  },
  components: {
    MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '12px',
            transition: 'all 0.2s ease',
            fontWeight: 500,
            color: '#e1f1ec', // ensures readable text
            '&:hover': {
              backgroundColor: 'rgba(78, 163, 152, 0.2)', // soft teal tint
              boxShadow: '0 0 8px rgba(78, 163, 152, 0.6)', // subtle glow
              color: '#ffffff', // ensures readable on hover
            },
          },
        },
      },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1c2b26',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          padding: '1rem',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#98b3aa',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            color: '#c0ded5',
          },
        },
      },
    },
  },
});

export default theme;
export { pulseGlow };


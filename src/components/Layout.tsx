import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const Layout = () => {
  const [showAppBar, setShowAppBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10 || currentScrollY < lastScrollY) {
        setShowAppBar(true);
      } else {
        setShowAppBar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showAppBar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(28, 43, 38, 0.7)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Navigation isMobile={isMobile} />
          </Toolbar>
        </AppBar>
      </motion.div>

      <Toolbar />

      <Container maxWidth={false} disableGutters>
        <Box
      sx={{
        maxWidth: '1200px',
        mx: 'auto',
        width: '100%',
        px: { xs: 2, sm: 4, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 6, md: 10 },
      }}
    >
      <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;


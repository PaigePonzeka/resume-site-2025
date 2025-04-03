import { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface NavigationProps {
  isMobile: boolean;
}

const navLinks = [
  // { label: 'Home', to: '/' },
  //{ label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Map', to: '/map' },
];

const Navigation = ({ isMobile }: NavigationProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Logo + Title */}
      <Box
        component={NavLink}
        to="/"
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          transition: '0.2s ease',
          '&:hover': {
            opacity: 0.85,
            transform: 'scale(1.02)',
          },
        }}
      >
       {/*} <img
          src={logo}
          alt="Logo"
          width={36}
          height={36}
          style={{ borderRadius: '4px', objectFit: 'cover' }}
        />*/}
        <Typography variant="h6">Paige Ponzeka</Typography>
      </Box>

      {/* Desktop Navigation */}
      {!isMobile && (
        <Box>
          {navLinks.map(({ label, to }) => (
            <Button
              key={to}
              component={NavLink}
              to={to}
              sx={{
                color: 'inherit',
                textTransform: 'none',
                '&.active': {
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                  borderRadius: 0,
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      )}

      {/* Mobile Hamburger Button */}
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          edge="end"
          disableRipple
          disableFocusRipple
          disableTouchRipple
          sx={{
            color: 'inherit',
            padding: 0,
            '&:focus': { outline: 'none' },
          }}
        >
          <motion.div
            initial={false}
            animate={drawerOpen ? 'open' : 'closed'}
            variants={{
              closed: { rotate: 0, scale: 1 },
              open: { rotate: 90, scale: 1.2 },
            }}
            transition={{ duration: 0.2 }}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </motion.div>
        </IconButton>
      )}

      {/* Mobile Drawer Nav */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(28, 43, 38, 0.9)',
            color: 'white',
            backdropFilter: 'blur(12px)',
            p: 2,
          },
        }}
      >
        <List>
          {navLinks.map(({ label, to }) => (
            <ListItem key={to} disablePadding>
              <ListItemButton
                component={NavLink}
                to={to}
                onClick={handleDrawerToggle}
                disableRipple
                sx={{
                  color: 'inherit',
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  '&.active': {
                    fontWeight: 'bold',
                    borderLeft: '3px solid #4ea398',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  },
                }}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;

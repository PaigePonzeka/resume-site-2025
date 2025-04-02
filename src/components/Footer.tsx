import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHubLight, LinkedIn, Gmail } from 'developer-icons';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1c2b26',
        color: '#c0ded5',
        py: 2,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Paige Ponzeka
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://github.com/paigeponzeka"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#c0ded5',
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <GitHubLight style={{ width: 20, height: 20 }} />
            </IconButton>

            <IconButton
              component="a"
              href="https://linkedin.com/in/paigeponzeka"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#c0ded5',
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <LinkedIn style={{ width: 20, height: 20 }} />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:paigepon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#c0ded5',
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Gmail style={{ width: 20, height: 20 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

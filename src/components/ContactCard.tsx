import { Box, Typography, IconButton, Stack, Card, Grid } from '@mui/material';
import { LinkedIn, GitHubLight, Gmail } from 'developer-icons';
import Portrait from '../assets/portrait.jpg';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const ContactCard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        style={{ width: '100%', maxWidth: 720 }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          {/* Left Column */}
          <Box sx={{ flex: 2, p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Paige Ponzeka
            </Typography>
            <Typography variant="body1" gutterBottom>
              Passionate about building clean, user-focused digital experiences.
            </Typography>

            <Stack direction="row" spacing={2} mt={3}>
              <MotionIconButton
                component="a"
                href="https://linkedin.com/in/paigeponzeka"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                sx={{
                  color: '#4ea398',
                  filter: 'grayscale(100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <LinkedIn style={{ width: 28, height: 28 }} />
              </MotionIconButton>

              <MotionIconButton
                component="a"
                href="https://github.com/paigeponzeka"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
                sx={{
                  color: '#4ea398',
                  filter: 'grayscale(100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <GitHubLight style={{ width: 28, height: 28 }} />
              </MotionIconButton>

              <MotionIconButton
                component="a"
                href="mailto:paigepon@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
                sx={{
                  color: '#4ea398',
                  filter: 'grayscale(100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Gmail style={{ width: 28, height: 28 }} />
              </MotionIconButton>
            </Stack>
          </Box>

          {/* Right Column - Portrait */}
          <Box
            sx={{
              flex: 1,
              minHeight: 200,
              maxHeight: { sm: '100%' },
            }}
          >
            <Box
              component="img"
              src={Portrait}
              alt="Portrait"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ContactCard;

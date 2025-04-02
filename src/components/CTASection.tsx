import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedButton from './shared/AnimatedButton';
import Blob from '../assets/BlobBackground.svg?react';
const MotionBlob = motion(Blob);

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryAction: {
    label: string;
    to: string;
  };
  secondaryAction?: {
    label: string;
    to: string;
  };
}

const CTASection = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: CTASectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ marginTop: '40px', marginBottom: '40px' }}
    >
      <Box position="relative" overflow="hidden">
        {/* Animated Background Blob */}
        <MotionBlob
  initial={{ scale: 1, rotate: 0 }}
  animate={{ scale: 1.3, rotate: 2 }}
  transition={{
    duration: 8,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  }}
  style={{
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '160%',
    opacity: 0.2,
    zIndex: 0,
    pointerEvents: 'none',
    filter: 'blur(3px)',
  }}
/>


        {/* Frosted Glass Container */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '24px',
            py: { xs: 6, md: 10 },
            px: { xs: 3, sm: 6 },
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            backgroundImage: `
              url('/images/noise.png'),
              linear-gradient(145deg, rgba(255,255,255,0.02), rgba(255,255,255,0.03))
            `,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                {subtitle}
              </Typography>
            )}

            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <AnimatedButton
                to={primaryAction.to}
                variant="contained"
                color="primary"
                size="large"
              >
                {primaryAction.label}
              </AnimatedButton>

              {secondaryAction && (
                <AnimatedButton
                  to={secondaryAction.to}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  {secondaryAction.label}
                </AnimatedButton>
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CTASection;



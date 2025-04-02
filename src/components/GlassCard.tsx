import { Box, SxProps, Theme } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
  animate?: boolean;
}

const GlassCard = ({ children, sx = {}, animate = true }: GlassCardProps) => {
  const MotionBox = animate ? motion.div : Box;

  return (
    <MotionBox
      whileHover={
        animate
          ? {
              scale: 1.015,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      sx={{
        borderRadius: '20px',
        padding: { xs: 4, sm: 5 },
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))',
        ...sx,
      }}
    >
      {children}
    </MotionBox>
  );
};

export default GlassCard;



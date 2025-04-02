import { Box, Container, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import noise from '../assets/noise.png';
import { motion } from 'framer-motion';

interface FrostedSectionProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
  maxWidth?: string;
}

const FrostedSection = ({ children, sx = {}, maxWidth = 'md' }: FrostedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                py: { xs: 8, md: 12 },
                px: 2,
                borderRadius: '20px',
                backgroundImage: `url(${noise}),
                linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.02),
                    rgba(255, 255, 255, 0.03)
                )`
                ,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255,255,255,0.025)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                ...sx,
            }}
        >
        <Container maxWidth={maxWidth}>{children}</Container>
        </Box>
    </motion.div>
  );
};

export default FrostedSection;

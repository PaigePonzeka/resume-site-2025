import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';
import { ArrowForwardIosRounded } from '@mui/icons-material';


interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 4px 20px rgba(78, 163, 152, 0.3)',
      }}
      style={{
        borderRadius: 12,
        padding: '12px',
        transition: 'all 0.3s ease',
      }}
    >
      <Box display="flex" gap={2} alignItems="flex-start">
        <Box color="primary.main" fontSize="2rem">
          {icon}
        </Box>
        <Box flex={1}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {description}
          </Typography>
          {actionLabel && actionHref && (
            <AnimatedButton
            to="/about"
            variant="outlined"
            color="primary"
            size="small"
            endIcon={<ArrowForwardIosRounded />}
          >
            Learn More
          </AnimatedButton>
          
            )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default FeatureCard;


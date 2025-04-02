import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionTypography = motion(Typography);

const SectionTitle = ({ text }: { text: string }) => (
  <MotionTypography
    variant="h4"
    component="h2"
    gutterBottom
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {text}
  </MotionTypography>
);

export default SectionTitle;


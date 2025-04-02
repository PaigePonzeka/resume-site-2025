import { Typography, Card, CardContent } from '@mui/material';
import PageContainer from '../components/PageContainer';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <PageContainer title="About This Project">
        <GlassCard>
          <Typography variant="h6" gutterBottom>
            Project Philosophy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This UI embraces elegance through animation, layering, and accessible design. Built with dark theme principles and material design concepts.
          </Typography>
        </GlassCard>
        </PageContainer>
    </motion.div>
  );
};

export default About;

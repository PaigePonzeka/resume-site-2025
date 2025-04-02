import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

const FeatureGrid = ({ features, columns = { xs: 1, sm: 2, md: 3 } }: FeatureGridProps) => {
  return (
    <motion.div
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: `repeat(${columns.xs}, 1fr)`,
          sm: `repeat(${columns.sm}, 1fr)`,
          md: `repeat(${columns.md}, 1fr)`,
          lg: `repeat(${columns.lg || columns.md}, 1fr)`,
        }}
        gap={4}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </Box>
    </motion.div>
  );
};

export default FeatureGrid;



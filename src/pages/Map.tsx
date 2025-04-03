import MapsAndStatsSection from '../components/MapsAndStatsSection';
import PageContainer from '../components/PageContainer';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <PageContainer title='Map'>
            <MapsAndStatsSection />
        </PageContainer>
    </motion.div>
  );
};

export default Map;
import MapsAndStatsSection from '../components/MapsAndStatsSection';
import PageContainer from '../components/PageContainer';
import { motion } from 'framer-motion';
import SectionCard from '../components/shared/SectionCard';
import SectionTitle from '../components/shared/SectionTitle';
import { Typography } from '@mui/material';

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <PageContainer title='Map'>
            <SectionCard>
                <SectionTitle text={"My Travels"}/>
                <Typography>In 2021, I started an adventure of a lifetime, spending the next year and half traveling the country, hiking and exploring with my dog, Nova. This map tracks my route, the parks I travels to and the states I visited.</Typography>
            </SectionCard>
            <MapsAndStatsSection />
        </PageContainer>
    </motion.div>
  );
};

export default Map;
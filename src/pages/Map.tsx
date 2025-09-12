import MapsAndStatsSection from '../components/MapsAndStatsSection';
import PageContainer from '../components/PageContainer';
import { motion } from 'framer-motion';
import SectionCard from '../components/shared/SectionCard';
import SectionTitle from '../components/shared/SectionTitle';
import { Typography, Box, Link } from '@mui/material';

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <PageContainer title='Cross-Country Adventure'>
            <SectionCard>
                <SectionTitle text={"My Nomadic Journey"}/>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                    In 2021, I embarked on an extraordinary journey across America, embracing the nomadic lifestyle with my adventurous dog, Nova. For over a year, we called a new city home every 2-4 weeks, immersing ourselves in diverse communities and landscapes.
                </Typography>
                <Typography variant="body1">
                    Together, we conquered more than 100 hiking trails and explored numerous national parks, from the misty peaks of the Pacific Northwest to the sun-drenched canyons of the Southwest. This map chronicles our route, the breathtaking parks we discovered, and the 32 states we called home during our adventure.
                </Typography>
            </SectionCard>
            <MapsAndStatsSection />
            <Box component="footer" sx={{ 
                mt: 6, 
                py: 3, 
                textAlign: 'center',
                color: 'text.secondary',
                fontSize: '0.875rem'
            }}>
                <Typography variant="body2">
                    Map built with <Link href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer">Mapbox GL JS</Link> and <Link href="https://react-map-gl.dev/" target="_blank" rel="noopener noreferrer">react-map-gl</Link>.<br />
                    Route visualization powered by <Link href="https://docs.mapbox.com/help/glossary/line-layer/" target="_blank" rel="noopener noreferrer">Mapbox LineLayer</Link> and custom data processing.
                </Typography>
            </Box>
        </PageContainer>
    </motion.div>
  );
};

export default Map;
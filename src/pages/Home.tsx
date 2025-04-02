import { Box, Typography, Button } from '@mui/material';
import PageContainer from '../components/PageContainer';
import SectionCard from '../components/shared/SectionCard';
import SectionTitle from '../components/shared/SectionTitle';
import { motion } from 'framer-motion';
import { Code, ColorLens, Devices, Insights, RocketLaunch, SupervisorAccount } from '@mui/icons-material';
import FeatureGrid from '../components/shared/FeatureGrid';
import DividerWithText from '../components/shared/DividerWithText';
import CTASection from '../components/CTASection';
import Hero from '../components/Hero';
import Image1 from "../assets/hero/image_1.jpg";
import Image2 from "../assets/hero/image_2.jpg";
import Image3 from "../assets/hero/image_3.jpg";
import Portrait from '../assets/portrait.jpg';
import { Link } from 'react-router-dom';
import TechStackShowcase from '../components/TechStackShowcase';


const Home = () => {

  const features = [
    {
      icon: <Code />,
      title: 'Modern Web Engineering',
      description: 'Over a decade building performant, scalable web applications with React, TypeScript, and modern tooling.',
    },
    {
      icon: <Devices />,
      title: 'Responsive, Accessible UI',
      description: 'Creates elegant, inclusive user interfaces that perform across all devices and screen sizes.',
    },
    {
      icon: <ColorLens />,
      title: 'SEO & Content Optimization',
      description: 'Led dev efforts on content-rich, SEO-optimized websites that scale for marketing performance.',
    },
    {
      icon: <SupervisorAccount />,
      title: 'Engineering Leadership',
      description: 'Managed cross-functional dev teams, aligning strategy with scalable development practices.',
    },
    {
      icon: <Insights />,
      title: 'Data-Informed Development',
      description: 'Uses analytics, performance insights, and A/B testing to guide impactful development decisions.',
    },
    {
      icon: <RocketLaunch />,
      title: 'Start-Up Agility',
      description: 'Delivers high-quality code at startup speed, adapting quickly to shifting product and user needs.',
    },
  ];
  

  return (
    <div className="HERE">
    <Hero
          images={[
            `${Image1}`,
            `${Image2}`,
            `${Image3}`,
          ]}
        />
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      
      <PageContainer gap={2} sx={{ mt: { xs: 4, md: 6 } }}>
        
        <SectionCard>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} alignItems="stretch">
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              sx={{ py: 2 }}
            >
              <SectionTitle text="About Me" />

              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">
                  Paige Ponzeka is a seasoned software engineering professional with extensive experience in web development and team management.
                </Typography>
              </Box>

              <Button
                variant="outlined"
                size="large"
                sx={{ mt: 3, alignSelf: 'flex-start' }}
                component={Link}
                to="/about"
              >
                Learn more about Paige
              </Button>
            </Box>

            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="img"
                src={Portrait}
                alt="Portrait of Paige"
                sx={{
                  width: '100%',
                  maxWidth: 280,
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Box>
          </Box>
        </SectionCard>
        <DividerWithText text="Highlights" />
        <SectionCard>
          <FeatureGrid features={features} />
        </SectionCard>
        <TechStackShowcase />
        <CTASection
          title="Ready to launch your vision?"
          subtitle="Let's collaborate and turn your idea into a reality."
          primaryAction={{ label: 'Get in Touch', to: '/contact' }}
          secondaryAction={{ label: 'Explore Work', to: '/projects' }}
        />
      </PageContainer>
    </motion.div>
    </div>
  );
};

export default Home;



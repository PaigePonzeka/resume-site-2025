import { Typography } from '@mui/material';
import PageContainer from '../components/PageContainer';
import SectionCard from '../components/shared/SectionCard';
import SectionTitle from '../components/shared/SectionTitle';
import { motion } from 'framer-motion';
import { Code, ColorLens, Devices } from '@mui/icons-material';
import FeatureGrid from '../components/shared/FeatureGrid';
import DividerWithText from '../components/shared/DividerWithText';
import GlassCard from '../components/GlassCard';
import FrostedSection from '../components/FrostedSection';
import CTASection from '../components/CTASection';
import TimelineSection from '../components/TimelineSection';
import Hero from '../components/Hero';
import Image1 from "../assets/hero/image_1.jpg";
import Image2 from "../assets/hero/image_2.jpg";
import Image3 from "../assets/hero/image_3.jpg";

const Home = () => {

  const features = [
    {
      icon: <Code />,
      title: 'Built with Vite + React',
      description: 'Blazing-fast development powered by Vite and React with TypeScript.',
      actionLabel: 'Learn More',
      actionHref: '/about',
    },
    {
      icon: <Devices />,
      title: 'Responsive Design',
      description: 'Fully mobile-ready with clean breakpoints and interactions.',
    },
  ];

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Hero
        images={[
          `${Image1}`,
          `${Image2}`,
          `${Image3}`,
        ]}
        title="Welcome to My Portfolio"
        description="Building modern, animated, and responsive web experiences."
      />
      <PageContainer title="Welcome to My React Site">
      
        <SectionCard>
          <SectionTitle text="Project Overview" />
          <Typography variant="body1">
            This site is built using React, TypeScript, Vite, Material UI, and Framer Motion.
            Explore the pages to see animations, themed components, and a slick mobile nav.
          </Typography>
        </SectionCard>

        <SectionCard>
          <SectionTitle text="The Design System" />
          <Typography variant="body1">
            The design system is driven by a custom dark theme inspired by a misty pine forest —
            complete with animated transitions and responsive layouts.
          </Typography>
        </SectionCard>
        <DividerWithText text="Technologies" />
        <SectionCard>
          <SectionTitle text="Highlights" />
          <FeatureGrid features={features} />
        </SectionCard>

        <FrostedSection>
          <GlassCard>
            <Typography variant="h6" gutterBottom>
              Frosted Design
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This section floats on a blurred, layered background — perfect for feature blocks, testimonials, or rich callouts.
            </Typography>
          </GlassCard>
        </FrostedSection>
        <CTASection
          title="Ready to launch your vision?"
          subtitle="Let's collaborate and turn your idea into a reality."
          primaryAction={{ label: 'Get in Touch', to: '/contact' }}
          secondaryAction={{ label: 'Explore Work', to: '/projects' }}
        />


<TimelineSection
  title="My Journey"
  description="Here’s a look at how I’ve grown professionally over the years."
  events={[
    {
      date: '2022',
      title: 'Graduated with CS Degree',
      description: 'Focused on web development and UI engineering.',
    },
    {
      date: '2023',
      title: 'Started Freelancing',
      description: 'Built SEO-focused sites with React & animations.',
    },
    {
      date: '2024',
      title: 'Launched Personal Brand',
      description: 'Created a modern portfolio powered by Vite + Framer Motion.',
    },
  ]}
/>


      </PageContainer>
    </motion.div>
  );
};

export default Home;



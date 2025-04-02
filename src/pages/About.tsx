import PageContainer from '../components/PageContainer';
import { motion } from 'framer-motion';
import TimelineSection from '../components/TimelineSection';

const About = () => {

  const careerJourney = [
    {
      date: '2022',
      title: 'Software Engineering Lead at Yext',
      description: 'Managed a team maintaining multilingual marketing platforms, enhanced SEO and performance, and coordinated advanced analytics with GA/GTM.',
    },
    {
      date: '2019',
      title: 'Director of Web Development at Yext',
      description: 'Led the migration from WordPress to Yext Pages, implemented a design system, and improved SEO and analytics strategy.',
    },
    {
      date: '2017',
      title: 'Senior Web Developer at Yext',
      description: 'Created sprint planning workflows and tools enabling teams to build pages without dev support.',
    },
    {
      date: '2016',
      title: 'Web Developer at Yext',
      description: 'Managed Yext’s global web presence across markets and languages using WordPress and Smartling.',
    },
    {
      date: '2014–Present',
      title: 'Director, Marketing & Tech – Big Apple Softball League',
      description: 'Volunteer role building web assets, email templates, and marketing campaigns for a NYC non-profit league.',
    },
    {
      date: '2013',
      title: 'Front-End Engineer at Yext',
      description: 'Built reusable UI components, refactored legacy JavaScript, and created internal tools like a live styleguide and image cropping system.',
    },
    {
      date: '2012',
      title: 'Front-End Engineer at Group Commerce',
      description: 'Worked on user-friendly CMS systems using SCSS, HTML, C#, Razor, and JavaScript.',
    },
    {
      date: '2011',
      title: 'Developer at Disrupto',
      description: 'Built web apps using HAML, SASS, CoffeeScript & Ruby on Rails for clients like the NY Knicks, Rangers, and Samsung.',
    },
  ];
  
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <PageContainer gap={2} sx={{ mt: { xs: 4, md: 6 } }}>
        <TimelineSection
          title="My Journey"
          description="Here’s a look at how I’ve grown professionally over the years."
          events={careerJourney}
        />
                <CTASection
          title="Ready to launch your vision?"
          subtitle="Let's collaborate and turn your idea into a reality."
          primaryAction={{ label: 'Get in Touch', to: '/contact' }}
          secondaryAction={{ label: 'Explore Work', to: '/projects' }}
        />
        </PageContainer>
    </motion.div>
  );
};

export default About;

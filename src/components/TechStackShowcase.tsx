import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import {
  React,
  TypeScript,
  Jira,
  JQuery,
  HTML5,
  GitHubLight,
  Git,
  CSS3,
  ChatGPT,
  Bootstrap4,
  JavaScript,
  PHP,
  Storybook,
  WordPress,
  Java,
  Sass,
  Ruby,
} from 'developer-icons';
import { JSX } from 'react';

const techStack = [
  'React',
  'TypeScript',
  'Jira',
  'JQuery',
  'HTML5',
  'GitHub',
  'Git',
  'CSS3',
  'ChatGPT',
  'Bootstrap4',
  'JavaScript',
  'PHP',
  'Storybook',
  'WordPress',
  'Java',
  'Sass',
  'Ruby',
];
const logoStyle = { width: 40, height: 40 };
const iconMap: Record<string, JSX.Element> = {
  React: <React style={logoStyle} />,
  TypeScript: <TypeScript style={logoStyle} />,
  Jira: <Jira style={logoStyle} />,
  JQuery: <JQuery  style={logoStyle} />,
  HTML5: <HTML5  style={logoStyle} />,
  GitHub: <GitHubLight style={logoStyle} />,
  Git: <Git style={logoStyle} />,
  CSS3: <CSS3  style={logoStyle} />,
  ChatGPT: <ChatGPT  style={logoStyle} />,
  Bootstrap4: <Bootstrap4  style={logoStyle} />,
  JavaScript: <JavaScript  style={logoStyle} />,
  PHP: <PHP style={logoStyle} />,
  WordPress: <WordPress style={logoStyle} />,
  Storybook: <Storybook  style={logoStyle} />,
  Java: <Java style={logoStyle} />,
  Sass: <Sass style={logoStyle} />,
  Ruby: <Ruby  style={logoStyle} />

};

const TechStackShowcase = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Technologies I Work With
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {techStack.map((tech, i) => (
          <Grid item xs={6} sm={4} md={2} key={tech}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    transition: 'filter 0.3s ease',
                    filter: 'grayscale(100%)',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                >
                  {iconMap[tech]}
                </Box>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                  {tech}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechStackShowcase;

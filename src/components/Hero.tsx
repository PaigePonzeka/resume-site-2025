import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  images: string[];
  title: string;
  description: string;
  interval?: number; // milliseconds
}

const Hero = ({ images, title, description, interval = 6000 }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number;
    let start: number;

    const animateProgress = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percent = Math.min((elapsed / interval) * 100, 100);
      setProgress(percent);

      if (percent < 100) {
        frameId = requestAnimationFrame(animateProgress);
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setProgress(0);
        start = 0;
        frameId = requestAnimationFrame(animateProgress); // restart animation
      }
    };

    frameId = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(frameId);
  }, [images.length, interval]);

  const nextImages = images.slice(index + 1).concat(images.slice(0, index));

  return (
    <Box sx={{ position: 'relative', height: '80vh', overflow: 'hidden', borderRadius: '24px', mb: { xs: 6, md: 10 } }}>
      {/* Background image carousel */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            borderRadius: '24px',
          }}
        />
      </AnimatePresence>

      {/* Dark overlay over background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
          borderRadius: '24px',
        }}
      />

      {/* Static overlay content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '60%' },
            color: 'white',
            textShadow: '0 0 8px rgba(0,0,0,0.8)',
          }}
        >
          <Typography
            variant="h3"
            fontWeight={600}
            gutterBottom
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.125rem' } }}
          >
            {description}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Box>
      </Container>

      {/* Preview strip */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          display: 'flex',
          gap: 1,
          zIndex: 2,
        }}
      >
        {nextImages.slice(0, 3).map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt="preview"
            sx={{
              width: 64,
              height: 40,
              objectFit: 'cover',
              borderRadius: 1,
              opacity: 0.6,
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(4px)',
            }}
          />
        ))}
      </Box>

      {/* Timing indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '4px',
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          zIndex: 2,
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#4EA398',
            transition: 'width 0.1s linear',
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;

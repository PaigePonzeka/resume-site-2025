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
    const step = 100 / (interval / 100);
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          setIndex((prevIndex) => (prevIndex + 1) % images.length);
          return 0;
        }
        return prev + step;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  const nextImages = images.slice(index + 1).concat(images.slice(0, index));

  return (
    <Box sx={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
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
        }}
      />

      {/* Static overlay content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '100%',
          color: 'white',
          textShadow: '0 0 8px rgba(0,0,0,0.8)',
        }}
      >
        <Typography variant="h3" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 500 }}>
          {description}
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
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


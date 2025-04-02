import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  images: string[];
  interval?: number; // milliseconds
}

const Hero = ({ images, interval = 6000 }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const phrases = ['a software engineer', 'a solutions architect', 'an adventurer'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const type = () => {
      if (charIndex <= phrase.length) {
        setDisplayedText(phrase.slice(0, charIndex));
        charIndex++;
        typingTimeout = setTimeout(type, 80);
      } else {
        pauseTimeout = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 1500);
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [phraseIndex]);

  useEffect(() => {
    let progressValue = 0;
    const step = 100 / (interval / 100);
    const id = setInterval(() => {
      progressValue += step;
      setProgress(progressValue);

      if (progressValue >= 100) {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        progressValue = 0;
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(id);
  }, [images.length, interval]);

  const nextImages = images.slice(index + 1).concat(images.slice(0, index));

  return (
    <Box sx={{ position: 'relative', height: '60vh', overflow: 'hidden', borderRadius: '24px', mb: { xs: 6, md: 10 } }}>
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
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          flexDirection: "column",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            color: 'white',
            textShadow: '0 0 8px rgba(0,0,0,0.8)',
          }}
        >
          <Typography
            variant="h3"
            fontWeight={600}
            gutterBottom
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              minHeight: '3.5rem',
              display: 'inline-block',
            }}
          >
            Paige is{' '}
            <span style={{ fontWeight: 600 }}>
              {displayedText}
              <span
                style={{
                  display: 'inline-block',
                  width: '1ch',
                  animation: 'blink 1s step-end infinite',
                }}
              >
                |
              </span>
            </span>
          </Typography>
          
        </Box>
        <Box>
          <Typography variant="subtitle1" style={{
                  marginBottom: '1em',
                }}>Over a decade of turning ideas into impactful interfaces — with a human-first mindset.</Typography>
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

      {/* Keyframes for blinking cursor */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Box>
  );
};

export default Hero;



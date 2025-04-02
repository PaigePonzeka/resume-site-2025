import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { pulseGlow } from '../theme/theme'; // Update path if needed

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
  title: string;
  description?: string;
}

const TimelineSection = ({ title, description, events }: TimelineSectionProps) => {
  const lineX = 32;
  const dotSize = 12;

  return (
    <Box sx={{ position: 'relative', py: 8 }}>
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Box sx={{ textAlign: 'center', mb: 6, px: 2 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body1"
              color="text.secondary"
              maxWidth="600px"
              mx="auto"
            >
              {description}
            </Typography>
          )}
        </Box>
      </motion.div>

      {/* Glowing vertical line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${lineX}px`,
          width: '2px',
          background:
            'linear-gradient(to bottom, rgba(78, 163, 152, 0.3), rgba(78, 163, 152, 0.7), rgba(78, 163, 152, 0.3))',
          backgroundSize: '100% 300%',
          animation: `${pulseGlow} 3s linear infinite`,
          zIndex: 0,
        }}
      />

      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          style={{ position: 'relative', marginBottom: '40px' }}
        >
          {/* Dot aligned to the glowing line */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: `calc(${lineX}px - ${dotSize / 2}px)`,
              width: dotSize,
              height: dotSize,
              borderRadius: '50%',
              backgroundColor: '#4EA398',
              boxShadow: '0 0 10px rgba(78, 163, 152, 0.6)',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          />

          {/* Event Card */}
          <Box
            sx={{
              ml: `${lineX + 16}px`,
              backgroundColor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 2,
              px: 3,
              py: 2,
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ mb: 0.5, display: 'block' }}
            >
              {event.date}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {event.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.description}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default TimelineSection;

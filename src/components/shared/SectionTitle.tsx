import { Typography } from '@mui/material';

interface SectionTitleProps {
  text: string;
  level?: 'h2' | 'h3';
}

const SectionTitle = ({ text, level = 'h2' }: SectionTitleProps) => {
  return (
    <Typography
      variant={level === 'h2' ? 'h5' : 'h6'}
      component={level}
      gutterBottom
      sx={{ fontWeight: 600, mb: 2 }}
    >
      {text}
    </Typography>
  );
};

export default SectionTitle;

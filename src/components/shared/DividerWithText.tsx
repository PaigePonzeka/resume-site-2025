import { Box, Divider, Typography } from '@mui/material';

interface DividerWithTextProps {
  text?: string;
}

const DividerWithText = ({ text }: DividerWithTextProps) => {
  if (!text) return <Divider sx={{ my: 4 }} />;

  return (
    <Box display="flex" alignItems="center" my={4}>
      <Divider sx={{ flexGrow: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
      <Typography
        variant="body2"
        color="text.secondary"
        mx={2}
        sx={{ whiteSpace: 'nowrap' }}
      >
        {text}
      </Typography>
      <Divider sx={{ flexGrow: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
    </Box>
  );
};

export default DividerWithText;

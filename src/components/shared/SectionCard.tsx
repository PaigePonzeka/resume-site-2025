import { Card, CardContent, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const SectionCard = ({ children, sx = {} }: SectionCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        mb: 4,
        ...sx,
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default SectionCard;

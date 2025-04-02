import { Box, Container, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PageContainerProps {
  title?: string;
  children: ReactNode;
}

const PageContainer = ({ title, children }: PageContainerProps) => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {title && <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 600, mb: 4 }}
      >
        {title}
      </Typography>}
      <Box>{children}</Box>
    </Container>
  );
};

export default PageContainer;

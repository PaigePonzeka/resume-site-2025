import { Box, Container, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PageContainerProps {
  title?: string;
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  gap?: number | string;
  sx?: object;
}

const PageContainer = ({
  title,
  children,
  maxWidth = 'lg',
  gap = 6,
  sx = {},
}: PageContainerProps) => {
  return (
    <Container className="page-container"
      maxWidth={maxWidth}
      sx={{
        py: { xs: 0, md: 0 },
        px: { xs: 2, sm: 4 },
        ...sx,

      }}
    >
      <Box display="flex" flexDirection="column" gap={gap}>
        {title && (
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Container>
  );
};

export default PageContainer;

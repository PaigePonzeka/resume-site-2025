import { Typography, Card, CardContent } from '@mui/material';
import PageContainer from '../components/PageContainer';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <PageContainer title="Contact">
        <Card>
            <CardContent>
            <Typography variant="body1">
                Want to collaborate or have questions? Reach out via GitHub or email. This section can be expanded with a contact form or links.
            </Typography>
            </CardContent>
        </Card>
        </PageContainer>
    </motion.div>
  );
};

export default Contact;

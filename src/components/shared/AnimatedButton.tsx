import { Button, ButtonProps } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ReactElement } from 'react';

interface AnimatedButtonProps extends ButtonProps {
  to?: string;
  href?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const AnimatedButton = ({
  to,
  href,
  startIcon,
  endIcon,
  ...rest
}: AnimatedButtonProps) => {
  const Component = to ? RouterLink : href ? 'a' : 'button';
  const componentProps = to
    ? { to }
    : href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 8px rgba(78, 163, 152, 0.5)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ display: 'inline-block', borderRadius: '8px' }}
    >
      <Button
        component={Component}
        {...componentProps}
        {...rest}
        startIcon={
          startIcon && (
            <motion.span
              whileHover={{ x: -4, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {startIcon}
            </motion.span>
          )
        }
        endIcon={
          endIcon && (
            <motion.span
              whileHover={{ x: 4, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {endIcon}
            </motion.span>
          )
        }
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '8px',
          px: 2,
          ...rest.sx,
        }}
      />
    </motion.div>
  );
};

export default AnimatedButton;

import { Typography, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface StatProps {
  value: number;
  title: string;
}

const Stat = ({ value, title }: StatProps) => {
  const theme = useTheme();
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const increment = useRef(1);

  useEffect(() => {
    if (value > 999) {
      increment.current = 100;
    } else if (value > 99) {
      increment.current = 5;
    } else {
      increment.current = 1;
    }

    const updateCount = () => {
      setCount((prev) => {
        const next = Math.min(prev + increment.current, value);
        if (next >= value) clearInterval(interval);
        return next;
      });
    };

    controls.start({ opacity: 1, transition: { duration: 2, ease: 'easeInOut' } });

    const interval = setInterval(updateCount, 100);
    return () => clearInterval(interval);
  }, [value, controls]);

  const formatNumberWithCommas = (num: number): string =>
    num.toLocaleString('en-US');

  return (
    <div style={{ textAlign: "center" }}>
      <motion.span
        animate={controls}
        style={{
          fontSize: '3rem',
          fontWeight: "bold",
          color: theme.palette.primary.main,
        }}
      >
        {formatNumberWithCommas(count)}
      </motion.span>
      <Typography variant="subtitle1" color="textSecondary">
        {title}
      </Typography>
    </div>
  );
};

export default Stat;

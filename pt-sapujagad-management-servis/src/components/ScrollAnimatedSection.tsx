import { motion, HTMLMotionProps } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ScrollAnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export default function ScrollAnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  id,
  ...props
}: ScrollAnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

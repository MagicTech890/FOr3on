import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  className = "",
  formatter = (value) => value.toString(),
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!inView || hasAnimated) return;

    let startTime: number;
    let animationFrame: number;

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        const currentCount = Math.floor(from + (to - from) * progress);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(startAnimation);
      } else {
        setCount(to);
        setHasAnimated(true);
      }
    };

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(startAnimation);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [from, to, duration, delay, inView, hasAnimated]);

  return (
    <motion.div
      ref={nodeRef}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {formatter(count)}
    </motion.div>
  );
}

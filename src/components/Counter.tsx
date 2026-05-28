import { useState, useEffect } from 'react';
interface CounterProps {
  end?: number;
  to?: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}
const Counter = ({
  end,
  to,
  from = 0,
  duration = 2000,
  prefix = '',
  suffix = ''
}: CounterProps) => {
  const finalValue = end !== undefined ? end : to; // Use either end or to prop
  const [count, setCount] = useState(from);
  useEffect(() => {
    if (finalValue === undefined) return; // Guard against undefined

    let startTime: number;
    let animationFrame: number;

    // Using cubic-bezier easing function for more dramatic effect
    const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      const easedProgress = easeOutCubic(progressPercent);
      const currentCount = Math.floor(from + easedProgress * (finalValue - from));
      setCount(currentCount);
      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    animationFrame = requestAnimationFrame(updateCount);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [finalValue, from, duration]);
  return <span className="inline-block font-bold">
      {prefix}<span className="transition-all duration-200">{count}</span>{suffix}
    </span>;
};
export default Counter;

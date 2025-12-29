"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string; // e.g., "10K+", "50+", "12+", "98%"
  duration?: number; // Animation duration in milliseconds
  startValue?: number; // Starting value for animation
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  startValue = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(startValue);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    // Handle formats like "10K+", "50+", "12+", "98%"
    const match = val.match(/^(\d+)([KMB]?)([%+]?)$/);
    if (!match) return { number: 0, suffix: "" };

    const num = parseInt(match[1], 10);
    const suffix = (match[2] || "") + (match[3] || "");

    return { number: num, suffix };
  };

  const { number: targetNumber, suffix } = parseValue(value);

  useEffect(() => {
    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const start = startValue;
    const end = targetNumber;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(start + (end - start) * easeOut);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber, duration, startValue]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-white mb-2">
      {count}
      {suffix}
    </div>
  );
}


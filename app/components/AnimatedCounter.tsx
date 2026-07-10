"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  className,
  duration = 1.6,
}: AnimatedCounterProps) {
  const match = value.match(/-?\d+(\.\d+)?/);
  const numeric = match ? parseFloat(match[0]) : null;
  const prefix = numeric !== null ? value.slice(0, match!.index) : "";
  const suffix =
    numeric !== null ? value.slice((match!.index ?? 0) + match![0].length) : "";
  const decimals = numeric !== null && match![0].includes(".")
    ? match![0].split(".")[1].length
    : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration, bounce: 0 });

  useEffect(() => {
    if (inView && numeric !== null) {
      motionValue.set(numeric);
    }
  }, [inView, numeric, motionValue]);

  useEffect(() => {
    if (!ref.current || numeric === null) return;
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals, numeric]);

  if (numeric === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {`${prefix}0${suffix}`}
    </span>
  );
}

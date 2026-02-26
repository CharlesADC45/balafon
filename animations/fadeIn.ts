import type { Variants } from "framer-motion";

type FadeInDirection = "up" | "down" | "left" | "right" | "none";

export function fadeIn(
  direction: FadeInDirection = "up",
  delay = 0,
  duration = 0.6,
): Variants {
  const dist = 18;
  const offset =
    direction === "up"
      ? { y: dist }
      : direction === "down"
        ? { y: -dist }
        : direction === "left"
          ? { x: dist }
          : direction === "right"
            ? { x: -dist }
            : {};

  return {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

export const staggerChildren = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: Math.max(0, stagger),
      delayChildren: Math.max(0, delayChildren),
    },
  },
});


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

/** Fade in with blur clearing effect */
export function fadeInBlur(delay = 0, duration = 0.7): Variants {
  return {
    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

/** Scale in from smaller size */
export function scaleIn(delay = 0, duration = 0.6): Variants {
  return {
    hidden: { opacity: 0, scale: 0.88 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

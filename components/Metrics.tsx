"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

const metrics = [
  { value: 5, label: "Services intégrés", suffix: "", decimals: 0 },
  { value: 24, label: "Supervision continue", suffix: "/7", decimals: 0 },
  { value: 99.9, label: "Disponibilité cible", suffix: "%", decimals: 1 },
  { value: 1, label: "Plateforme unifiée", suffix: "", decimals: 0 },
];

function AnimatedCounter({
  target,
  decimals,
  duration = 1.6,
}: {
  target: number;
  decimals: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(current);
      if (progress < 1) {
        start = requestAnimationFrame(tick);
      }
    }

    start = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(start);
  }, [isInView, target, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="border-b border-zinc-200/70 bg-white py-12 dark:border-zinc-800/70 dark:bg-zinc-950 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-4"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              variants={fadeIn("up", idx * 0.04)}
              className="text-center"
            >
              <p className="text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
                <AnimatedCounter target={metric.value} decimals={metric.decimals} />
                <span className="text-accent">{metric.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:text-base">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

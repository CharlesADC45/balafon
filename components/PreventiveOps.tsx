"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

export default function PreventiveOps() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,_rgba(15,110,110,0.08),_transparent_28%),radial-gradient(circle_at_76%_56%,_rgba(192,122,100,0.06),_transparent_22%)]" />

      <motion.div
        variants={staggerChildren(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div>
          <motion.p
            variants={fadeIn("up", 0)}
            className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-brand"
          >
            Observabilité préventive
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.05)}
            className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl"
          >
            {"L'avenir de la gestion IT est préventif, intelligent et centré sur l'action."}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600"
          >
            BALAFON rapproche monitoring, alertes, sécurité et reporting pour aider vos équipes à détecter les signaux faibles, comprendre les causes et agir avant l&apos;incident majeur.
          </motion.p>
          <motion.div variants={fadeIn("up", 0.15)}>
            <Link
              href="/about"
              className="mt-8 inline-flex h-13 items-center justify-center rounded-xl bg-brand px-7 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,110,110,0.2)] transition hover:bg-brand-hover"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.12)}
          className="relative min-h-[360px]"
        >
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(192,122,100,0.25)_0%,_rgba(15,110,110,0.18)_42%,_transparent_72%)] blur-xl"
            animate={shouldReduceMotion ? { opacity: 0.72 } : { scale: [1, 1.08, 1], opacity: [0.72, 0.95, 0.72] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.svg
            viewBox="0 0 560 380"
            className="relative z-10 mx-auto h-[360px] w-full max-w-[560px]"
            animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <defs>
              <linearGradient id="cubeTop" x1="0" x2="1">
                <stop stopColor="#0f6e6e" />
                <stop offset="1" stopColor="#2d6e86" />
              </linearGradient>
              <linearGradient id="cubeSide" x1="0" x2="1">
                <stop stopColor="#0a3f4a" />
                <stop offset="1" stopColor="#c07a64" />
              </linearGradient>
            </defs>
            <path d="M250 78 365 130 250 184 135 130Z" fill="url(#cubeTop)" />
            <path d="M135 130 250 184v110L135 238Z" fill="#082f3a" />
            <path d="M365 130 250 184v110l115-56Z" fill="url(#cubeSide)" />
            <path d="M182 158v96M215 172v96M248 186v96M281 172v96M314 158v96" stroke="white" strokeOpacity="0.62" strokeWidth="5" strokeLinecap="round" />
            <rect x="220" y="106" width="92" height="42" rx="10" fill="#02081d" opacity="0.82" />
            <path d="M266 114 278 127 266 140 254 127Z" fill="white" />

            {[
              [84, 108],
              [95, 252],
              [142, 302],
              [426, 104],
              [456, 242],
              [386, 308],
              [478, 164],
            ].map(([cx, cy], index) => (
              <g key={`${cx}-${cy}`}>
                <line x1="280" y1="190" x2={cx} y2={cy} stroke="#0f6e6e" strokeOpacity="0.32" strokeWidth="2" />
                <motion.polygon
                  points={`${cx},${cy - 24} ${cx + 24},${cy - 10} ${cx + 22},${cy + 16} ${cx},${cy + 28} ${cx - 22},${cy + 16} ${cx - 24},${cy - 10}`}
                  fill={index % 2 === 0 ? "#6c63ff" : "#0fcecf"}
                  opacity="0.9"
                  animate={shouldReduceMotion ? { opacity: 0.9 } : { y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 3 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
                />
              </g>
            ))}
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#0a3f4a_0%,_#0b5a63_45%,_#08363f_100%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[-24rem] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[rgb(15,110,110)]/55 blur-[120px]"
          animate={
            shouldReduceMotion
              ? { opacity: 0.55 }
              : { scale: [1, 1.08, 1], opacity: [0.45, 0.72, 0.45] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute left-[-12rem] top-28 h-[22rem] w-[22rem] rounded-full bg-[rgb(192,122,100)]/24 blur-[90px]"
          animate={shouldReduceMotion ? { opacity: 0.35 } : { x: [-18, 16, -18], y: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-[-7rem] right-[-8rem] h-[20rem] w-[20rem] rounded-full bg-[rgb(28,207,196)]/24 blur-[90px]"
          animate={shouldReduceMotion ? { opacity: 0.3 } : { x: [12, -10, 12], y: [0, -12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24">
        <motion.div variants={staggerChildren(0.1)} initial="hidden" animate="show">
          <motion.p
            variants={fadeIn("up", 0)}
            className="mx-auto inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur"
          >
            Solution digitale professionnelle • Observabilité et gestion IT
          </motion.p>

          <motion.h1
            variants={fadeIn("up", 0.05)}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Simplifiez la cyber-résilience de vos infrastructures, du poste de travail au cloud.
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mx-auto mt-6 max-w-4xl text-pretty text-lg leading-8 text-white/85 sm:text-xl"
          >
            Rationalisez la gestion informatique, la sécurité et la restauration grâce à des
            solutions intelligentes et unifiées, afin de limiter les risques et d’assurer la
            continuité de votre activité.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.14)}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#produits"
              className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-lg bg-[rgb(192,122,100)] px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[rgb(169,101,81)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(10,63,74)]"
            >
              Tous les produits
            </a>
            <a
              href="#demo"
              className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-lg border border-white/70 bg-transparent px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(10,63,74)]"
            >
              Contactez-nous
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

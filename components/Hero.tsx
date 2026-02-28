"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#083c45_0%,_#0a525c_46%,_#072f36_100%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,_rgb(255,255,255,0.14),_transparent_44%)]" />

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

        <motion.svg
          aria-hidden
          viewBox="0 0 1400 820"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.g
            fill="none"
            stroke="rgb(255 255 255 / 0.2)"
            strokeWidth="1.5"
            animate={
              shouldReduceMotion
                ? { opacity: 0.25 }
                : { x: [0, -70, 0], y: [0, 28, 0], opacity: [0.2, 0.35, 0.2] }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M-130 140 230 -20 590 140 230 300Z" />
            <path d="M230 300 590 140 950 300 590 460Z" />
            <path d="M590 460 950 300 1310 460 950 620Z" />
            <path d="M-130 460 230 300 590 460 230 620Z" />
            <path d="M230 620 590 460 950 620 590 780Z" />
            <path d="M230 -20V300M590 140V460M950 300V620M590 460V780" />
          </motion.g>

          <motion.g
            fill="none"
            stroke="rgb(28 207 196 / 0.24)"
            strokeWidth="1.4"
            animate={
              shouldReduceMotion
                ? { opacity: 0.2 }
                : { x: [0, 60, 0], y: [0, -20, 0], opacity: [0.18, 0.3, 0.18] }
            }
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M290 190 650 30 1010 190 650 350Z" />
            <path d="M650 350 1010 190 1370 350 1010 510Z" />
            <path d="M290 510 650 350 1010 510 650 670Z" />
          </motion.g>
        </motion.svg>

        <motion.div
          aria-hidden
          className="absolute inset-y-0 left-[-35%] w-[42%] bg-[linear-gradient(90deg,_transparent,_rgb(255,255,255,0.16),_transparent)] blur-2xl"
          animate={shouldReduceMotion ? { opacity: 0 } : { x: [0, 2400] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-28">
        <motion.div variants={staggerChildren(0.1)} initial="hidden" animate="show">
          <motion.p
            variants={fadeIn("up", 0)}
            className="mx-auto inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur"
          >
            Solution digitale professionnelle - Observabilite et gestion IT
          </motion.p>

          <motion.h1
            variants={fadeIn("up", 0.05)}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {
              "BALAFON centralise la supervision de votre SI pour anticiper les incidents et s\u00e9curiser vos op\u00e9rations."
            }
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mx-auto mt-6 max-w-4xl text-pretty text-lg leading-8 text-white/85 sm:text-xl"
          >
            {
              "Avec BALAFON, vos \u00e9quipes IT suivent en temps r\u00e9el serveurs, r\u00e9seau, applications et services critiques, re\u00e7oivent des alertes intelligentes et agissent plus vite pour garantir la continuit\u00e9 de service."
            }
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

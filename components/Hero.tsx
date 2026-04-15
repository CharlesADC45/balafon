"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const wordReveal: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

function SplitWords({ text, className }: { text: string; className?: string }) {
  return (
    <motion.h1 variants={wordReveal} initial="hidden" animate="show" className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.28em]">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#083c45_0%,_#0a525c_46%,_#072f36_100%)]"
    >
      {/* Background effects */}
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
          className="absolute left-[-12rem] top-28 h-[22rem] w-[22rem] rounded-full bg-accent/24 blur-[90px]"
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

      {/* Content */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-28">

        {/* Title with word-by-word reveal */}
        {shouldReduceMotion ? (
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            BALAFON centralise la supervision de votre SI pour anticiper les incidents et sécuriser vos opérations.
          </h1>
        ) : (
          <SplitWords
            text="BALAFON centralise la supervision de votre SI pour anticiper les incidents et sécuriser vos opérations."
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          />
        )}

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(1.2)}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-4xl text-pretty text-lg leading-8 text-white/85 sm:text-xl"
        >
          Avec BALAFON, vos équipes IT suivent en temps réel serveurs, réseau, applications et services critiques, reçoivent des alertes intelligentes et agissent plus vite pour garantir la continuité de service.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp(1.5)}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group relative inline-flex h-12 min-w-[220px] items-center justify-center overflow-hidden rounded-xl bg-accent px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(10,63,74)]"
          >
            <motion.span
              className="absolute inset-0 bg-[linear-gradient(90deg,_transparent,_rgba(255,255,255,0.2),_transparent)]"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
            <span className="relative">Tous les services</span>
          </motion.a>
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-xl border border-white/70 bg-transparent px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(10,63,74)]"
          >
            Contactez-nous
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium tracking-wider text-white/50">SCROLL</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

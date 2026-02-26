"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

const bullets = [
  "Dashboard personnalisable & alertes proactives",
  "Indicateurs (disponibilité, SLA, performances)",
  "Intégration avec vos outils existants",
  "Réduire les interruptions et améliorer la disponibilité",
];

export default function CTA() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        variants={staggerChildren(0.10)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-10"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[rgb(15,110,110)]/12 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[rgb(192,122,100)]/12 blur-3xl" />
        </div>

        <motion.h2
          variants={fadeIn("up", 0)}
          className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
        >
          Prêt à voir BALAFON en action ?
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.05)}
          className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300"
        >
          Demandez une démo rapide. Nous vous montrons comment BALAFON automatise, surveille et
          optimise — pour vous laisser vous concentrer sur ce que vous faites de mieux.
        </motion.p>

        <motion.ul
          variants={fadeIn("up", 0.08)}
          className="mt-8 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2"
        >
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[rgb(15,110,110)]/12 text-[rgb(15,110,110)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M6 12.5 10 16.5 18 8.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{b}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeIn("up", 0.10)}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="https://balafon.io"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[rgb(15,110,110)] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[rgb(12,92,92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(15,110,110)] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
          >
            Demander une démo
          </a>
          <a
            href="#produits"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#a67b6b] hover:text-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-[#a67b6b] dark:hover:text-white"
          >
            Revoir les produits
          </a>
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.12)}
          className="mt-6 text-xs leading-6 text-zinc-500 dark:text-zinc-400"
        >
          En demandant une démo, vous acceptez d’être recontacté au sujet de BALAFON.
        </motion.p>
      </motion.div>
    </section>
  );
}


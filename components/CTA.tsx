"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";
import Link from 'next/link'

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="demo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        variants={staggerChildren(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative overflow-hidden rounded-[26px] bg-[rgb(15,110,110)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,_rgb(255,255,255,0.18),_transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_82%,_rgb(192,122,100,0.28),_transparent_40%)]" />
          <motion.svg
            aria-hidden
            viewBox="0 0 760 460"
            className="absolute -right-20 -top-6 hidden h-[130%] w-[68%] md:block"
            animate={shouldReduceMotion ? { opacity: 0.8 } : { x: [0, 8, 0], y: [0, -6, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <g fill="none" stroke="rgb(255 255 255 / 0.24)" strokeWidth="1.6">
              <path d="M110 30 290 112 110 194 -70 112Z" />
              <path d="M290 112 470 30 650 112 470 194Z" />
              <path d="M470 194 650 112 830 194 650 276Z" />
              <path d="M110 194 290 276 110 358 -70 276Z" />
              <path d="M290 276 470 194 650 276 470 358Z" />
              <path d="M470 358 650 276 830 358 650 440Z" />
              <path d="M110 30V194M290 112V276M470 30V194M650 112V276M470 194V358M650 276V440" />
            </g>
          </motion.svg>
        </div>

        <div className="relative z-10 max-w-2xl">
          <motion.h2
            variants={fadeIn("up", 0)}
            className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Prêt à simplifier votre travail avec une informatique unifiée ?
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.05)}
            className="mt-4 max-w-xl text-base leading-7 text-white/78 sm:text-lg"
          >
            BALAFON centralise la supervision, automatise les actions et donne une vision claire à
            votre équipe en quelques minutes.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.1)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-7 text-base font-semibold text-[rgb(15,110,110)] shadow-[0_10px_24px_rgba(4,33,46,0.28)] transition-transform hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(15,110,110)]"
            >
              Demander une démo
            </Link>
          </motion.div>

          <motion.p variants={fadeIn("up", 0.14)} className="mt-5 text-sm text-white/65">
            Réponse moyenne en moins de 24h.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
